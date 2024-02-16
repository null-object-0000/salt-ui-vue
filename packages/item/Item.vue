<template>
    <salt-ripple-effect :enabled="enabled" mix-blend-mode="exclusion"
        @click="(event: MouseEvent) => { if (enabled) emit('click', event) }">
        <div class="salt-item" :class="[enabled ? 'enabled' : 'unenabled']">
            <div v-if="iconPainter || $slots.icon" class="icon-container">
                <slot name="icon">
                    <salt-icon class="icon" :name="iconPainter" :style="{ color: iconColor }"></salt-icon>
                </slot>
                <span class="spacer-width"></span>
            </div>
            <div class="row">
                <span class="text">{{ text }} </span>
                <div class="sub" :style="{ color: subColor }">{{ sub }}</div>
            </div>
            <span class="spacer-width"></span>
            <salt-icon name="chevron-right"></salt-icon>
        </div>
    </salt-ripple-effect>
</template>
  
<script setup lang="ts">
import { SaltIcon, SaltRippleEffect } from '../../packages';

defineProps({
    enabled: {
        type: Boolean,
        required: false,
        default: true
    },
    iconPainter: {
        type: String,
        required: false,
    },
    // iconPaddingValues
    iconColor: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: false,
    },
    subColor: {
        type: String,
        required: false,
    }
})

const emit = defineEmits(['click'])
</script>
  
<style scoped>
.salt-item {
    width: 100%;
    min-height: 56px;
    padding: var(--salt-dimen-inner-vertical-padding) var(--salt-dimen-inner-horizontal-padding);
    display: flex;
    align-items: center;
}

.salt-item .icon-container {
    width: 48px;
    display: flex;
    align-items: center;
}

.salt-item .icon {
    font-size: 24px;
    color: var(--salt-color-highlight);
    align-self: center;
}

.salt-item .spacer-width {
    flex-grow: 1;
    width: var(--salt-dimen-content-padding);
}

.salt-item .text {
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);
    color: var(--salt-color-text);
}

.salt-item .sub {
    font-size: var(--salt-text-style-sub-font-size);
    line-height: var(--salt-text-style-sub-line-height);
    color: var(--salt-color-sub-text);
}

.salt-item .chevron-forward-icon {
    font-size: 20px;
    color: var(--salt-color-sub-text);
}

.salt-item.unenabled {
    opacity: 0.5;
}

.salt-item.unenabled .text {
    color: var(--salt-color-sub-text);
}
</style>