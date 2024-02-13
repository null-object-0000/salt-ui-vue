<template>
    <div class="salt-item-outer-title">
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
.salt-item-outer-title {
    width: 100%;
    padding: var(--salt-dimen-outer-vertical-padding) var(--salt-dimen-outer-horizontal-padding);
    font-weight: bold;
    font-size: var(--salt-text-style-sub-font-size);
    line-height: var(--salt-text-style-sub-line-height);

    color: var(--salt-color-sub-text);
}
</style>