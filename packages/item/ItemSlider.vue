<template>
    <div class="salt-item-slider" :class="[enabled ? 'enabled' : 'unenabled']">
        <div class="row">
            <div v-if="iconPainter || $slots.icon" class="icon-container">
                <slot name="icon">
                    <salt-icon class="icon" :name="iconPainter" :style="{ color: iconColor }"></salt-icon>
                </slot>
                <span class="spacer-width"></span>
            </div>
            <span class="text">{{ text }} </span>
            <span class="spacer-width"></span>
            <div class="sub">{{ sub }}</div>
        </div>
        <div class="spacer-height"></div>
        <salt-slider v-model="model" :enabled="enabled" :valueRange="valueRange" :steps="steps"
            @change="(value, event) => emit('change', value, event)" />
    </div>
</template>
  
<script setup lang="ts">
import { ModelRef, ref } from 'vue';
import { SaltIcon, SaltSlider } from '../../packages';

const model = defineModel() as ModelRef<Number>

const props = defineProps({
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
    enabled: {
        type: Boolean,
        required: false,
        default: true
    },
    valueRange: {
        required: false,
        default: () => [0, 100]
    },
    steps: {
        type: Number,
        required: false,
        default: 0
    }
})

const enabled = ref(props.enabled)

const emit = defineEmits(['change'])
</script>
  
<style scoped>
.salt-item-slider {
    width: 100%;
    min-height: 56px;
    padding: var(--salt-dimen-inner-vertical-padding) var(--salt-dimen-inner-horizontal-padding);

}

.salt-item-slider .row {
    display: flex;
    align-items: center;
}

.salt-item-slider .icon-container {
    width: 48px;
    display: flex;
    align-items: center;
}

.salt-item-slider .icon {
    font-size: 24px;
    align-self: center;
}

.salt-item-slider .spacer-width {
    flex-grow: 1;
    width: var(--salt-dimen-content-padding);
}

.salt-item-slider .text {
    color: var(--salt-text-style-main-color);
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);

    color: var(--salt-color-text);
}

.salt-item-slider .sub {
    color: var(--salt-text-style-main-color);
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);

    color: var(--salt-color-main-text);
}

.salt-item-slider .spacer-height {
    height: 12px;
}

.salt-item-slider.unenabled {
    opacity: 0.5;
}

.salt-item-slider.unenabled .salt-item-slider_text {
    color: var(--salt-color-sub-text);
}
</style>