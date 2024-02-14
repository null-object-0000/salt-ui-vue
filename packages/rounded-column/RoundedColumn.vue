<template>
    <div class="salt-rounded-column" :class="[outer ? 'outer' : null]" :style="{ backgroundColor: color }">
        <template v-if="title && title.length > 0">
            <salt-item-outer-title v-if="outer">{{ title }}</salt-item-outer-title>
            <salt-item-title v-else>{{ title }}</salt-item-title>
        </template>
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
import { SaltItemTitle, SaltItemOuterTitle } from '../../packages'

defineProps({
    color: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    outer: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>
  
<style scoped>
.salt-rounded-column {
    margin: calc(var(--salt-dimen-outer-vertical-padding) * 2) var(--salt-dimen-outer-horizontal-padding);
    border-radius: var(--salt-dimen-corner);
    background-color: var(--salt-color-sub-background);

    overflow: hidden;
}

.salt-rounded-column.outer {
    background-color: var(--salt-color-background);
}
</style>