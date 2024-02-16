<template>
    <div class="salt-item-title">
        <slot>{{ text }}</slot>
    </div>
</template>
  
<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: false
    }
})
</script>
  
<style scoped>
.salt-item-title {
    font-size: var(--salt-text-style-sub-font-size);
    line-height: var(--salt-text-style-sub-line-height);

    width: 100%;
    padding: var(--salt-dimen-inner-vertical-padding) var(--salt-dimen-inner-horizontal-padding);
    color: var(--salt-color-highlight);
    font-weight: bold;
}
</style>