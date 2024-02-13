<template>
    <IconArrowBack v-if="name === 'arrow-back'" />
    <IconArrowDropDown v-else-if="name === 'arrow-drop-down'" />
    <IconCheck v-else-if="name === 'check'" />
    <IconChevronRight v-else-if="name === 'chevron-right'" />
    <IconClosedEye v-else-if="name === 'closed-eye'" />
    <IconEye v-else-if="name === 'eye'" />
    <IconQRCode v-else-if="name === 'qr-code'" />
    <IconUnCheck v-else-if="name === 'un-check'" />
    <IconVerified v-else-if="name === 'verified'" />
    <slot v-else></slot>
</template>
  
<script setup lang="ts">
import IconArrowBack from './IconArrowBack.vue'
import IconArrowDropDown from './IconArrowDropDown.vue'
import IconCheck from './IconCheck.vue'
import IconChevronRight from './IconChevronRight.vue'
import IconClosedEye from './IconClosedEye.vue'
import IconEye from './IconEye.vue'
import IconQRCode from './IconQRCode.vue'
import IconUnCheck from './IconUnCheck.vue'
import IconVerified from './IconVerified.vue'

defineProps({
    name: {
        type: String,
        required: false
    }
})
</script>
  