<template>
    <salt-basic-dialog :open="open" class="salt-input-dialog">
        <slat-dialog-title :text="title"></slat-dialog-title>

        <salt-item-edit v-model="model" @change="onChange"></salt-item-edit>

        <form class="actions" method="dialog">
            <salt-text-button class="cancel" @click="onCancel" text="CANCEL"></salt-text-button>
            <div class="spacer-width"></div>
            <salt-text-button class="confirm" @click="onConfirm" text="CONFIRM"></salt-text-button>
        </form>
    </salt-basic-dialog>
</template>
  
<script setup lang="ts">
import { ModelRef } from 'vue';
import { SlatDialogTitle, SaltBasicDialog, SaltItemEdit, SaltTextButton } from '../../packages'

const open = defineModel('open') as ModelRef<Boolean>;
const model = defineModel() as ModelRef<String>;

defineProps({
    title: {
        type: String,
        required: false
    },
})

const emit = defineEmits(['change', 'confirm', 'cancel', 'dismissRequest'])

const onChange = (event: Event) => {
    emit('change', event)
}

const onCancel = () => {
    emit('dismissRequest')
    emit('cancel')
}

const onConfirm = () => {
    emit('confirm')
}
</script>
  
<style>
.salt-input-dialog .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding: 0 var(--salt-dimen-outer-horizontal-padding);
}

.salt-input-dialog .spacer-width {
    width: var(--salt-dimen-outer-horizontal-padding);
}

.salt-input-dialog .salt-basic-button.salt-text-button.cancel button {
    color: var(--salt-color-sub-text);
    background-color: var(--salt-color-sub-background);
}
</style>