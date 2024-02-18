<template>
    <dialog class="salt-basic-dialog" ref="dialog" @close="open = false; emit('close')" @click="onOutsideClick">
        <div class="content" ref="content">
            <slot></slot>
        </div>
    </dialog>
</template>
  
<script setup lang="ts">
import { ModelRef, ref, watch, onMounted } from 'vue';

const open = defineModel('open') as ModelRef<boolean>;

const props = defineProps({
    /**
     * 是否展示遮罩层
     */
    overlay: {
        type: Boolean,
        required: false,
        default: true
    },
    /**
     * 是否点击 dialog 以外的区域关闭 dialog
     */
    closeOnOutsideClick: {
        type: Boolean,
        required: false,
        default: true
    },
})

const overlay = props.overlay
const closeOnOutsideClick = props.closeOnOutsideClick

const dialog = ref<HTMLDialogElement | null>(null);
const content = ref<HTMLDivElement | null>(null);

const emit = defineEmits(['open', 'close', 'dismissRequest'])

// 点击 dialog 以外的区域关闭 dialog
const onOutsideClick = (event: MouseEvent) => {
    if (!closeOnOutsideClick) return;

    if (content.value && !content.value.contains(event.target as Node)) {
        open.value = false
    }
}

const show = () => {
    overlay ? dialog.value?.showModal() : dialog.value?.show()
    emit('open')
}

const close = () => {
    dialog.value?.close()
}

onMounted(() => {
    if (open.value) {
        show()
    }
})

watch(open, value => value ? show() : close())
</script>
  
<style scoped>
.salt-basic-dialog {
    border: 0;
    margin: 0;
    padding: 0;
    width: 0;
    height: 0;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateY(5%);
    transition: transform 0.3s ease;
}

.salt-basic-dialog[open] {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;

    transform: translateY(0);
}

.salt-basic-dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}

.salt-basic-dialog .content {
    display: none;
}

.salt-basic-dialog[open] .content {
    display: block;
    width: 80%;
    border-radius: var(--salt-dimen-dialog-corner);
    background: var(--salt-color-background);
}
</style>