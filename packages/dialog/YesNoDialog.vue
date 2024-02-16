<template>
    <salt-basic-dialog v-model:open="open" class-name="salt-yes-no-dialog" :close-on-outside-click="closeOnOutsideClick"
        :teleport="teleport">
        <slat-dialog-title :text="title"></slat-dialog-title>

        <slot><salt-item-text :text="content"></salt-item-text></slot>

        <form class="actions" method="dialog">
            <salt-text-button class="cancel" @click="onCancel" :text="cancelText.toUpperCase()"></salt-text-button>
            <div class="spacer-width"></div>
            <salt-text-button class="confirm" @click="onConfirm" :text="confirmText.toUpperCase()"></salt-text-button>
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
    cancelText: {
        type: String,
        required: false,
        default: 'Cancel'
    },
    confirmText: {
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

const emit = defineEmits(['confirm', 'cancel', 'dismissRequest'])

const onCancel = () => {
    emit('dismissRequest')
    emit('cancel')
}

const onConfirm = () => {
    emit('confirm')
}
</script>
  
<style>
.salt-yes-no-dialog .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding: 0 var(--salt-dimen-outer-horizontal-padding);
}

.salt-yes-no-dialog .spacer-width {
    width: var(--salt-dimen-outer-horizontal-padding);
}

.salt-yes-no-dialog .salt-basic-button.salt-text-button.cancel button {
    color: var(--salt-color-sub-text);
    background-color: var(--salt-color-sub-background);
}
</style>