<template>
    <salt-basic-dialog v-model:open="open" class="salt-input-dialog" :close-on-outside-click="closeOnOutsideClick"
        @open="emit('open')" @close="emit('close')">
        <salt-item-out-spacer />
        <slat-dialog-title :text="title" />

        <div class="salt-item-edit-container">
            <salt-item-edit v-model="model" @change="onChange" />
        </div>

        <form class="actions" method="dialog">
            <salt-text-button class="cancel" @click="emit('cancel')" text="CANCEL" />
            <div class="spacer-width"></div>
            <salt-text-button class="confirm" @click="emit('confirm')" text="CONFIRM" />
        </form>

        <salt-item-out-spacer />
    </salt-basic-dialog>
</template>
  
<script setup lang="ts">
import { ModelRef } from 'vue';
import { SlatDialogTitle, SaltBasicDialog, SaltItemEdit, SaltItemOutSpacer, SaltTextButton } from '../../packages'

const open = defineModel('open') as ModelRef<boolean>;
const model = defineModel() as ModelRef<String>;

defineProps({
    title: {
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
})

const emit = defineEmits(['change', 'open', 'close', 'confirm', 'cancel'])

const onChange = (event: Event) => {
    emit('change', event)
}
</script>
  
<style>
.salt-input-dialog .salt-item-edit-container {
    padding: 4px 0;
}

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

.salt-input-dialog .salt-basic-button.salt-text-button button {
    position: relative;
    z-index: 1;
}

.salt-input-dialog .salt-basic-button.salt-text-button.cancel button {
    color: var(--salt-color-sub-text);
    background-color: var(--salt-color-sub-background);
}
</style>