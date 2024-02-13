<template>
    <div class="salt-dialog-title">
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
.salt-dialog-title {
    padding: 0 var(--salt-dimen-outer-horizontal-padding);
    color: var(--salt-color-text);
    font-size: 18px;
    font-weight: bold;
}
</style>