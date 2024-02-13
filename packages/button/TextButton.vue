
<template>
    <salt-basic-button class="salt-text-button" :content="text" :style="{ color: textColor }"
        :backgroundColor="backgroundColor" @click="onClick">
        <slot></slot>
    </salt-basic-button>
</template>
  
<script setup lang="ts">
import { SaltBasicButton } from '../../packages'

defineProps({
    text: {
        type: String,
        required: false
    },
    textColor: {
        type: String,
        required: false
    },
    backgroundColor: {
        type: String,
        required: false
    },
})

const emit = defineEmits(['click'])

const onClick = () => {
    emit('click')
}
</script>
  
<style scoped>
.salt-basic-button.salt-text-button {
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);
    color: #ffffff;
    text-align: center;
    text-overflow: ellipsis;
}
</style>