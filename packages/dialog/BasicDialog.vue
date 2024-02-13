<template>
    <div class="salt-basic-dialog" :class="[open ? 'open' : null]">
        <transition>
            <dialog v-if="open" :open="true">
                <slot></slot>
            </dialog>
        </transition>
    </div>
</template>
  
<script setup lang="ts">
import { ModelRef } from 'vue';

const open = defineModel('open') as ModelRef<Boolean>;
</script>
  
<style scoped>
.salt-basic-dialog {}

.salt-basic-dialog.open {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2001;
}

.salt-basic-dialog dialog {
    border: 0;

    width: 80%;
    border-radius: var(--salt-dimen-dialog-corner);
    background: var(--salt-color-background);
}

.v-enter-active,
.v-leave-active {
    transition: transform 0.3s ease
}

.v-enter-from,
.v-leave-to {
    transform: translateY(10%);
}
</style>