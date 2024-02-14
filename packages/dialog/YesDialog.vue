<template>
    <salt-basic-dialog :open="open" class="salt-yes-dialog">
        <slat-dialog-title :text="title"></slat-dialog-title>

        <slot><salt-item-text :text="content"></salt-item-text></slot>

        <form class="action-container" method="dialog">
            <salt-text-button class="confirm" @click="onConfirm" :text="text"></salt-text-button>
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
})

const emit = defineEmits(['dismissRequest'])

const onConfirm = () => {
    emit('dismissRequest')
}
</script>
  
<style scoped>
.salt-yes-dialog .action-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding: 0 var(--salt-dimen-outer-horizontal-padding);
}
</style>