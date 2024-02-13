<template>
    <div class="salt-item-text">
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
.salt-item-text {
    font-size: var(--salt-text-style-sub-font-size);
    line-height: var(--salt-text-style-sub-line-height);

    width: 100%;
    padding: var(--salt-dimen-inner-horizontal-padding);
}
</style>