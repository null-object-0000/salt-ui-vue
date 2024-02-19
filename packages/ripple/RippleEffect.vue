<template>
    <div class="salt_ripple-effect" :class="[`mix-blend-${mixBlendMode}-mode`]" ref="element" @click="animateRipple">
        <slot></slot>
        <transition-group v-if="enabled">
            <template v-for="(val, i) in ripples">
                <span :class="rippleElementClass" v-bind:ref="'ripple-' + i" :key="'ripple' + i" v-if="val.show === true"
                    :style="{ top: val.y + 'px', left: val.x + 'px', mixBlendMode }" v-on:animationend="rippleEnd(i)">
                </span>
            </template>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type * as CSS from 'csstype';

const rippleElementClass = 'salt_ripple-effect__ripple_item';

declare global {
    interface Window {
        SaltUI: {
            clearAllRippleAnimate: () => void;
        }
    }
}

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
    if (ripples.value && ripples.value[i] && ripples.value[i].show) ripples.value[i].show = false;
}

window.SaltUI = window.SaltUI || {
    clearAllRippleAnimate: () => {
        ripples.value = [];

        let elements = document.getElementsByClassName(rippleElementClass) as HTMLCollectionOf<HTMLElement>;
        while (elements.length > 0) {
            elements[0].remove();
            elements = document.getElementsByClassName(rippleElementClass) as HTMLCollectionOf<HTMLElement>;
        }
    }
}
</script>

<style scoped>
.salt_ripple-effect {
    width: 100%;
    overflow: hidden;
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