<template>
    <salt-ripple-effect :enabled="enabled" mix-blend-mode="exclusion" @click="onClick">
        <div class="salt-item-switcher" :class="[enabled ? 'enabled' : 'unenabled', model ? 'checked' : 'unchecked']">
            <div v-if="iconPainter || $slots.start" class="icon-container">
                <slot name="start">
                    <salt-icon class="icon" :name="iconPainter" :style="{ color: iconColor }"></salt-icon>
                </slot>
                <span class="spacer-width"></span>
            </div>
            <div class="row">
                <span class="text">
                    <slot name="text">{{ text }}</slot>
                </span>
                <div class="sub" :style="{ color: subColor }">
                    <slot name="sub">{{ sub }}</slot>
                </div>
            </div>
            <span class="spacer"></span>
            <div class="switch-container">
                <salt-switch-button class="switch" v-model="model" :enabled="enabled"
                    @change="(value, event) => emit('change', value, event)" />
            </div>
        </div>
    </salt-ripple-effect>
</template>
  
<script setup lang="ts">
import { ModelRef, toRefs } from 'vue';
import { SaltSwitchButton, SaltIcon, SaltRippleEffect } from '../../packages';

const model = defineModel() as ModelRef<boolean>
const props = defineProps({
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

const { enabled } = toRefs(props)

const emit = defineEmits(['change'])

const onClick = (event: MouseEvent) => {
    if (!enabled.value) return
    const newValue = model.value ? false : true
    model.value = newValue
    emit('change', newValue, event)
}
</script>
  
<style scoped>
.salt-item-switcher {
    width: 100%;
    min-height: 56px;
    padding: var(--salt-dimen-inner-vertical-padding) var(--salt-dimen-inner-horizontal-padding);
    display: flex;
    align-items: center;
}

.salt-item-switcher .icon-container {
    width: 48px;
    display: flex;
    align-items: center;
}

.salt-item-switcher .icon {
    font-size: 24px;
    color: var(--salt-color-highlight);
    align-self: center;
}

.salt-item-switcher .spacer {
    flex-grow: 1;
    width: var(--salt-dimen-content-padding);
}

.salt-item-switcher .text {
    color: var(--salt-text-style-main-color);
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);

    color: var(--salt-color-text);
}

.salt-item-switcher .sub {
    color: var(--salt-text-style-sub-color);
    font-size: var(--salt-text-style-sub-font-size);
    line-height: var(--salt-text-style-sub-line-height);

    color: var(--salt-color-sub-text);
}

.salt-item-switcher .switch-container {
    width: 100px;
}

.salt-item-switcher .switch {
    min-width: 46px;
    margin-left: auto;
}

.salt-item-switcher.unenabled {
    opacity: 0.5;
}

.salt-item-switcher.unenabled .text {
    color: var(--salt-color-sub-text);
}
</style>