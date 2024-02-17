<template>
    <div class="salt_ripple-effect" :class="[`mix-blend-${mixBlendMode}-mode`]" ref="element" @click="animateRipple">
        <slot></slot>
        <transition-group v-if="enabled">
            <template v-for="(val, i) in ripples">
                <span class="salt_ripple-effect__ripple_item" v-bind:ref="'ripple-' + i" :key="'ripple' + i"
                    v-if="val.show === true" :style="{ top: val.y + 'px', left: val.x + 'px', mixBlendMode }"
                    v-on:animationend="rippleEnd(i)">
                </span>
            </template>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
// FIXME: 当外层有圆角时，效果会超出圆角范围，需要修复
import { ref } from 'vue';
import type * as CSS from 'csstype';

declare global {
    interface Window {
        SaltUI: {
            clearAllRippleAnimate: () => void;
        }
    }
}

window.SaltUI = window.SaltUI || {
    clearAllRippleAnimate: () => {
        ripples.value = [];

        const elements = document.getElementsByClassName('salt_ripple-effect__ripple_item')
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove()
        }
    }
};

defineProps({
    enabled: {
        type: Boolean,
        required: false,
        default: true
    },
    /**
     * screen | exclusion
     */
    mixBlendMode: {
        type: String as () => CSS.Property.MixBlendMode,
        required: true
    }
})

interface Ripple {
    x: number;
    y: number;
    show: boolean;
}

const element = ref<HTMLElement | null>(null)
const ripples = ref<Ripple[]>([]);

const animateRipple = (e: MouseEvent) => {
    let pos = element?.value?.getBoundingClientRect();
    if (!pos) return;

    ripples.value.push({
        x: e.clientX - pos.left,
        y: e.clientY - pos.top,
        show: true
    });
}

const rippleEnd = function (i: number) {
    ripples.value[i].show = false;
}
</script>

<style scoped>
.salt_ripple-effect {
    width: 100%;
    overflow: hidden;
    display: inline-block;
    position: relative;
    transition: box-shadow 150ms ease-out;
}

.salt_ripple-effect.mix-blend-exclusion-mode {
    z-index: 1;
}

.salt_ripple-effect .salt_ripple-effect__ripple_item {
    background-color: var(--salt-color-text);
    width: 1rem;
    height: 1rem;
    position: absolute;
    border-radius: 50%;
    transform: translateX(-100%) translateY(-100%);
}

.salt_ripple-effect.mix-blend-screen-mode .salt_ripple-effect__ripple_item {
    animation: ripple 1250ms ease-out forwards, screen-fade 1500ms ease-out forwards;
}

.salt_ripple-effect.mix-blend-exclusion-mode .salt_ripple-effect__ripple_item {
    animation: ripple 1250ms ease-out forwards, exclusion-fade 1500ms ease-out forwards;
}

@keyframes ripple {
    0% {
        transform: translate(-100%, -100%);
    }

    80% {
        transform: translate(-100%, -100%) scale(50);
    }

    100% {
        transform: translate(-100%, -100%) scale(50);
        opacity: 0;
    }
}

@keyframes screen-fade {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes exclusion-fade {
    0% {
        opacity: 0.1;
    }

    100% {
        opacity: 0;
    }
}
</style>