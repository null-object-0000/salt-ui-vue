<template>
    <salt-ripple-effect :enabled="enabled" mix-blend-mode="exclusion" @click="onClick">
        <div class="salt-item-check" :class="[enabled ? 'enabled' : 'unenabled', model ? 'checked' : 'unchecked']">
            <div class="icon-container">
                <salt-icon class="icon" :name="model ? 'check' : 'un-check'"></salt-icon>
                <span class="spacer-width"></span>
            </div>
            <span class="text">
                <slot>{{ text }}</slot>
            </span>
        </div>
    </salt-ripple-effect>
</template>
  
<script setup lang="ts">
import { ModelRef, toRefs } from 'vue';
import { SaltIcon, SaltRippleEffect } from '../../packages';

const model = defineModel() as ModelRef<boolean>
const props = defineProps({
    enabled: {
        Boolean,
        required: false,
        default: true
    },
    text: {
        type: String,
        required: false

    },
})

const { enabled } = toRefs(props)

const emit = defineEmits(['change'])

const onClick = (event: MouseEvent) => {
    if (!enabled.value) return
    const newValue = !model.value
    model.value = newValue
    emit('change', newValue, event)
}
</script>
  
<style scoped>
.salt-item-check {
    width: 100%;
    min-height: 50px;
    padding: var(--salt-dimen-inner-vertical-padding) var(--salt-dimen-inner-horizontal-padding);
    display: flex;
    align-items: center;
}

.salt-item-check.unenabled {
    opacity: 0.5;
}

.salt-item-check .icon-container {
    width: 48px;
    display: flex;
    align-items: center;
}

.salt-item-check .icon {
    font-size: 24px;
    color: var(--salt-color-highlight);
    align-self: center;
}

.salt-item-check .spacer-width {
    flex-grow: 1;
    width: var(--salt-dimen-content-padding);
}

.salt-item-check .text {
    color: var(--salt-text-style-main-color);
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);

    color: var(--salt-color-text);
}

.salt-item-check.unenabled .text {
    color: var(--salt-color-text-sub-text);
}
</style>