<template>
    <div class="salt-item-check" :class="[enabled ? 'enabled' : 'unenabled', model ? 'checked' : 'unchecked']"
        @click="onClick">
        <salt-icon class="icon" :name="model ? 'check' : 'un-check'"></salt-icon>
        <span class="spacer"></span>
        <span class="text">
            <slot>{{ text }}</slot>
        </span>
    </div>
</template>
  
<script setup lang="ts">
import { ModelRef, ref } from 'vue';
import { SaltIcon } from '../../packages';

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

const enabled = ref(props.enabled)
const text = props.text

const emit = defineEmits(['change'])

const onClick = () => {
    if (!enabled.value) return
    model.value = !model.value
    emit('change', model.value)
}
</script>
  
<style scoped>
.salt-item-check {
    width: 100%;
    min-height: 50px;
    padding: var(--salt-dimen-inner-vertical-padding) var(--salt-dimen-inner-horizontal-padding);
    display: flex;
    align-items: center;

    border-radius: var(--salt-dimen-corner);
    transition: background-color 0.3s ease;
}

.salt-item-check.enabled:active {
    background-color: var(--salt-color-sub-text);
}

.salt-item-check .icon {
    font-size: 24px;
    fill: var(--salt-color-hightlight);
}

.salt-item-check .spacer {
    width: var(--salt-dimen-content-padding);
}

.salt-item-check .text {
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);
    color: var(--salt-color-text);
}

.salt-item-check.unenabled {
    opacity: 0.5;
}

.salt-item-check.unenabled .text {
    color: var(--salt-color-text-sub-text);
}
</style>