
<template>
    <salt-basic-button class="salt-text-button" :content="text" :style="{ color: textColor }"
        :backgroundColor="backgroundColor" @click="event => emit('click', event)">
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
</script>
  
<style>
.salt-text-button {
    width: 100%;
}

.salt-basic-button.salt-text-button button {
    color: var(--salt-text-style-main-color);
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);

    color: #ffffff;
    text-align: center;
    text-overflow: ellipsis;
}
</style>