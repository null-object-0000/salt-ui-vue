<template>
    <salt-ripple-effect :enabled="enabled" mix-blend-mode="exclusion" @click="onClick">
        <div class="salt-item-switcher" :class="[enabled ? 'enabled' : 'unenabled', model ? 'checked' : 'unchecked']">
            <div v-if="iconPainter" class="icon-container">
                <salt-icon class="icon" :name="iconPainter" :style="{ color: iconColor }"></salt-icon>
                <span class="spacer"></span>
            </div>
            <div class="row">
                <span class="text">{{ text }} </span>
                <div class="sub" :style="{ color: subColor }">{{ sub }}</div>
            </div>
            <span class="spacer"></span>
            <div class="switch-container"><salt-switch-button class="switch" :model-value="model" :enabled="enabled" />
            </div>
        </div>
    </salt-ripple-effect>
</template>
  
<script setup lang="ts">
import { ModelRef, ref } from 'vue';
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

const enabled = ref(props.enabled)
const iconColor = props.iconColor
const text = props.text
const sub = props.sub
const subColor = props.subColor

const onClick = () => {
    if (!enabled.value) return
    model.value = !model.value
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
}

.salt-item-switcher .icon {
    font-size: 24px;
    color: var(--salt-color-hightlight);
}

.salt-item-switcher .spacer {
    flex-grow: 1;
    width: var(--salt-dimen-content-padding);
}

.salt-item-switcher .text {
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);
    color: var(--salt-color-text);
}

.salt-item-switcher .sub {
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