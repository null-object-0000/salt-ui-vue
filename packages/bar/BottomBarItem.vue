<template>
    <div class="salt-bottom-bar-item" :class="[state ? 'checked' : 'unchecked']" @click="onClick">
        <slot>
            <salt-icon class="icon" :name="painter"></salt-icon>
            <div class="text">{{ text }}</div>
        </slot>
    </div>
</template>
  
<script setup lang="ts">
import { SaltIcon } from '../../packages'

defineProps({
    state: {
        type: Boolean,
        required: true
    },
    painter: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['click'])

const onClick = () => {
    emit('click')
}
</script>
  
<style scoped>
.salt-bottom-bar-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: rgba(140, 140, 140, 0.5);
}

.salt-bottom-bar-item .icon {
    font-size: 24px;
}

.salt-bottom-bar-item .text {
    font-size: var(--salt-text-style-sub-font-size);
    line-height: var(--salt-text-style-sub-line-height);
    font-size: 10px;
}

.salt-bottom-bar-item.checked {
    color: var(--salt-color-highlight);
}

@media (prefers-color-scheme: dark) {
    .salt-bottom-bar-item {
        color: rgba(225, 230, 235, 0.5)
    }
}
</style>