<template>
    <div class="salt-title-bar">
        <salt-icon v-if="showBackBtn" name="arrow-back" class="icon" @click="onBack"></salt-icon>
        <div class="text">
            <slot>{{ text }}</slot>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { SaltIcon } from '../../packages'

defineProps({
    text: {
        type: String,
        required: false
    },
    showBackBtn: {
        type: Boolean,
        required: false,
        default: true
    },
})

const emit = defineEmits(['back'])

const onBack = () => {
    emit('back')
}
</script>
  
<style scoped>
.salt-title-bar {
    width: 100%;
    min-height: 56px;

    background: var(--salt-color-background)
}

.salt-title-bar .icon {
    font-size: 24px;
    padding: 16px;

    color: var(--salt-color-text);

    position: absolute;
}

.salt-title-bar .text {
    color: var(--salt-text-style-main-color);
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);

    margin: 0 auto;
    padding: 16px 56px;
    font-weight: 600;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>