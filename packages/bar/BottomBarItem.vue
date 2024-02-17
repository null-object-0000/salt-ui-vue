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

    color: rgba(var(--salt-color-sub-text-rgb), 0.5);
}

.salt-bottom-bar-item .icon {
    font-size: 24px;
}

.salt-bottom-bar-item .text {
    color: var(--salt-text-style-sub-color);
    font-size: var(--salt-text-style-sub-font-size);
    line-height: var(--salt-text-style-sub-line-height);

    font-size: 10px;
}

.salt-bottom-bar-item.checked {
    color: var(--salt-color-highlight);
}
</style>