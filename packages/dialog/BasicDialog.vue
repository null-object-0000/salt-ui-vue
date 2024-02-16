<template>
    <teleport :to="teleport" :disabled="!teleport">
        <div class="salt-basic-dialog" :class="[className, open ? 'open' : null]" @click="closeDialog">
            <transition>
                <dialog v-if="open" :open="true" ref="dialog">
                    <slot></slot>
                </dialog>
            </transition>
        </div>
    </teleport>
</template>
  
<script setup lang="ts">
import { ModelRef, ref } from 'vue';

const open = defineModel('open') as ModelRef<Boolean>;

const props = defineProps({
    className: {
        type: String,
        required: false
    },
    /**
     * 是否点击 dialog 以外的区域关闭 dialog
     */
    closeOnOutsideClick: {
        type: Boolean,
        required: false,
        default: true
    },
    /**
     * 指定挂载的节点，等同于 Teleport 组件的 to 属性
     */
    teleport: {
        type: String,
        required: false
    }
})

const closeOnOutsideClick = props.closeOnOutsideClick

const dialog = ref<HTMLElement | null>(null);
// 点击 dialog 以外的区域关闭 dialog
const closeDialog = (event: MouseEvent) => {
    if (!closeOnOutsideClick) return;
    if (dialog.value && !dialog.value.contains(event.target as Node)) {
        open.value = false;
    }
}
</script>
  
<style>
.salt-basic-dialog.open {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2001;
}

.salt-basic-dialog dialog {
    border: 0;

    width: 80%;
    border-radius: var(--salt-dimen-dialog-corner);
    background: var(--salt-color-background);
}

.v-enter-active,
.v-leave-active {
    transition: transform 0.3s ease
}

.v-enter-from,
.v-leave-to {
    transform: translateY(10%);
}
</style>