<template>
    <salt-basic-dialog v-model:open="open" class="salt-yes-dialog" :close-on-outside-click="closeOnOutsideClick"
        @open="emit('open')" @close="emit('close')">
        <salt-item-out-spacer />
        <template v-if="title && title.length > 0">
            <slat-dialog-title :text="title" />
            <salt-item-out-spacer />
        </template>

        <slot>
            <template v-if="content && content.length > 0">
                <salt-item-text :text="content" />
                <salt-item-out-half-spacer />
                <!-- drawContent?.invoke() -->
                <salt-item-out-half-spacer />
            </template>
        </slot>

        <form class="actions" method="dialog">
            <salt-text-button class="confirm" @click="event => emit('confirm', event)" :text="text.toUpperCase()" />
        </form>

        <salt-item-out-spacer />
    </salt-basic-dialog>
</template>
  
<script setup lang="ts">
import { ModelRef } from 'vue';
import { SlatDialogTitle, SaltBasicDialog, SaltItemText, SaltItemOutSpacer, SaltItemOutHalfSpacer, SaltTextButton } from '../../packages'

const open = defineModel('open') as ModelRef<boolean>;

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
    }
})

const emit = defineEmits(['open', 'close', 'confirm'])
</script>
  
<style>
.salt-yes-dialog .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding: 0 var(--salt-dimen-outer-horizontal-padding);
}

.salt-yes-dialog .salt-basic-button.salt-text-button button {
    position: relative;
    z-index: 1;
}
</style>