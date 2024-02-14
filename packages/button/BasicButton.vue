<template>
    <div class="salt-basic-button" @click="onClick">
        <salt-ripple-effect mix-blend-mode="screen">
            <button :style="{ backgroundColor }">
                <slot>{{ content }}</slot>
            </button>
        </salt-ripple-effect>
    </div>
</template>
  
<script setup lang="ts">
import { SaltRippleEffect } from '../../packages'

defineProps({
    backgroundColor: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    }
})

const emit = defineEmits(['click'])

const onClick = () => {
    emit('click')
}
</script>
  
<style scoped>
.salt-basic-button button {
    width: 100%;
    border-radius: var(--salt-dimen-corner);
    background-color: var(--salt-color-hightlight);
    padding: var(--salt-dimen-content-padding);
}
</style>