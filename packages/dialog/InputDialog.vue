<template>
    <salt-basic-dialog :open="open" class="salt-input-dialog">
        <slat-dialog-title :text="title"></slat-dialog-title>

        <salt-item-edit v-model="model" @change="onChange"></salt-item-edit>

        <form class="action-container" method="dialog">
            <salt-text-button class="cancel" @click="onCancel" text="Cancel"></salt-text-button>
            <div class="spacer"></div>
            <salt-text-button class="confirm" @click="onConfirm" text="Confirm"></salt-text-button>
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
  
<style scoped>
.salt-input-dialog .action-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding: 0 var(--salt-dimen-outer-horizontal-padding);
}

.salt-input-dialog .action-container .spacer {
    width: var(--salt-dimen-outer-horizontal-padding);
}

.salt-input-dialog button.salt-basic-button.salt-text-button.cancel {
    color: var(--salt-color-sub-text);
    background-color: var(--salt-color-sub-background);
}
</style>