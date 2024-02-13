<template>
    <button class="salt-basic-button" :style="{ backgroundColor }" @click="onClick">
        <slot>{{ content }}</slot>
    </button>
</template>
  
<script setup lang="ts">
defineProps({
    backgroundColor: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    }
})

const emit = defineEmits(['click'])

const onClick = () => {
    emit('click')
}

</script>
  
<style scoped>
.salt-basic-button {
    width: 100%;
    border-radius: var(--salt-dimen-corner);
    background-color: var(--salt-color-hightlight);
    padding: var(--salt-dimen-content-padding);

    transition: background-color 0.3s ease;
}

.salt-basic-button:active {
    background-color: var(--salt-color-sub-text);
}
</style>