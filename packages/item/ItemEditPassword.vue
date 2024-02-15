<template>
    <salt-item-edit :type="hidden ? 'password' : 'text'" class="salt-item-edit-password" :model-value="model"
        :readonly="readOnly" :hint="hint" @change="(value: string, event: Event) => emit('change', value, event)">
        <salt-icon class="icon" :name="hidden ? 'closed-eye' : 'eye'" @click="hidden = !hidden"></salt-icon>
    </salt-item-edit>
</template>
  
<script setup lang="ts">
import { ModelRef, ref } from 'vue';
import { SaltItemEdit, SaltIcon } from '../../packages';

const model = defineModel() as ModelRef<string>

defineProps({
    backgroundColor: {
        type: String,
        required: false
    },
    hint: {
        type: String,
        required: false
    },
    hintColor: {
        type: String,
        required: false
    },
    readOnly: {
        type: Boolean,
        required: false,
        default: false
    }
})

const hidden = ref(true)

const emit = defineEmits(['change'])
</script>
  
<style scoped>
.salt-item-edit-password {}

.salt-item-edit-password .icon {
    color: var(--salt-color-sub-text);
}
</style>