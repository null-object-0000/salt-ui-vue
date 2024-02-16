<template>
    <salt-basic-dialog v-model:open="open" class-name="salt-yes-dialog" :close-on-outside-click="closeOnOutsideClick"
        :teleport="teleport">
        <slat-dialog-title :text="title"></slat-dialog-title>

        <slot><salt-item-text :text="content"></salt-item-text></slot>

        <form class="actions" method="dialog">
            <salt-text-button class="confirm" @click="onConfirm" :text="text.toUpperCase()"></salt-text-button>
        </form>
    </salt-basic-dialog>
</template>
  
<script setup lang="ts">
import { ModelRef } from 'vue';
import { SlatDialogTitle, SaltBasicDialog, SaltItemText, SaltTextButton } from '../../packages'

const open = defineModel('open') as ModelRef<Boolean>;

defineProps({
    title: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false,
        default: 'Confirm'
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

const emit = defineEmits(['dismissRequest'])

const onConfirm = () => {
    emit('dismissRequest')
}
</script>
  
<style>
.salt-yes-dialog .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding: 0 var(--salt-dimen-outer-horizontal-padding);
}
</style>