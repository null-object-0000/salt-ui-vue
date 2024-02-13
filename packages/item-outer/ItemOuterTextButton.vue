<template>
    <salt-text-button class="salt-item-outer-text-button" :text="text" :text-color="textColor" :background-color="backgroundColor">
        <slot></slot>
    </salt-text-button>
</template>
  
<script setup lang="ts">
import { SaltTextButton } from '../../packages';
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
</script>
  
<style scoped>
.salt-item-outer-text-button {
    padding: var(--salt-dimen-outer-vertical-padding) var(--salt-dimen-outer-horizontal-padding);
}
</style>