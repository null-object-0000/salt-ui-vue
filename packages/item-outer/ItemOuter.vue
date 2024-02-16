<template>
    <div class="salt-item-outer" :style="{ color }" @click="onClick">
        <slot>{{ text }}</slot>
    </div>
</template>
  
<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    }
})

const emit = defineEmits(['click'])
const onClick = () => { emit('click') }
</script>
  
<style scoped>
.salt-item-outer {
    width: 100%;
    padding: var(--salt-dimen-outer-vertical-padding) var(--salt-dimen-outer-horizontal-padding);
    color: var(--salt-color-highlight);
    font-weight: bold;
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);

    transition: opacity 0.1s ease;
}

.salt-item-outer:active {
    opacity: 0.3;
}
</style>