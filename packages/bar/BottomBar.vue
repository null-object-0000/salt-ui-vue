<template>
    <div class="salt-bottom-bar" :style="{ backgroundColor }">
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
defineProps({
    backgroundColor: {
        type: String,
        required: false
    },
})
</script>
  
<style scoped>
.salt-bottom-bar {
    width: 100%;
    min-height: 56px;

    background: var(--salt-color-sub-background);

    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>