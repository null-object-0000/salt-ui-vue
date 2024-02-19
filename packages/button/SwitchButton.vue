<template>
    <div class="salt-switch-button" :class="[enabled ? 'enabled' : 'unenabled', model ? 'checked' : 'unchecked']"
        @click.stop="onClick">
        <div class="handle"></div>
    </div>
</template>
  
<script setup lang="ts">
import { ModelRef, ref } from 'vue';

const model = defineModel() as ModelRef<boolean>
const props = defineProps({
    enabled: {
        type: Boolean,
        required: false,
        default: true
    }
})

const enabled = ref(props.enabled)
const emit = defineEmits(['change'])

const onClick = (event: MouseEvent) => {
    if (!enabled.value) return
    const newValue = model.value ? false : true
    model.value = newValue
    emit('change', newValue, event)
}
</script>
  
<style scoped>
.salt-switch-button {
    width: 46px;
    height: 26px;
    border-radius: var(--salt-dimen-corner);
    padding: 5px;
    position: relative;
    background-color: rgba(var(--salt-color-sub-text-rgb), 0.1);

    transition: background-color 0.3s ease;
}

.salt-switch-button.checked {
    background-color: var(--salt-color-highlight);
}

.salt-switch-button .handle {
    width: 16px;
    height: 16px;
    border: 4px solid #FFFFFF;
    border-radius: 50%;
    position: absolute;
    transition: transform 0.3s ease;
}

.salt-switch-button.checked .handle {
    transform: translateX(20px);
}

.salt-switch-button.unenabled {
    opacity: 0.5;
}
</style>