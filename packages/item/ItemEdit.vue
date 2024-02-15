<template>
    <!-- TODO: 暂时没有支持多行文本 -->
    <div class="salt-item-edit" :class="[$slots.default ? 'has-slot' : null]">
        <div class="text">
            <input :type="type" ref="inputRef" v-model="model" :readonly="readOnly" :placeholder="hint"
                @focus="fixInputPosition" @blur="restoreInputPosition" @change="(event: Event) => emit('change', event)" />
        </div>
        <div class="action">
            <slot></slot>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ModelRef, ref } from 'vue';

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
    },

    type: {
        type: String,
        required: false,
        default: 'text'
    }
})

const emit = defineEmits(['change'])

const inputRef = ref<HTMLInputElement | null>(null)
const lastTime = ref<number>(0)
const interval = ref<NodeJS.Timeout | null>(null)

const fixInputPosition = () => {
    if (!inputRef.value) return

    lastTime.value = Date.now()
    interval.value = setInterval(() => {
        // 最多持续 200ms
        if (Date.now() - lastTime.value > 200) {
            restoreInputPosition()
        }

        const top = inputRef.value?.getBoundingClientRect()?.top
        if (top && top < 0) {
            inputRef.value?.scrollIntoView(true)
        }
    }, 5)
}

const restoreInputPosition = () => {
    if (interval.value) {
        clearInterval(interval.value)
        interval.value = null
    }
}
</script>
  
<style scoped>
.salt-item-edit {
    padding: var(--salt-dimen-inner-vertical-padding) var(--salt-dimen-inner-horizontal-padding);
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);

    position: relative;
}

.salt-item-edit .text {
    width: 100%;
    border-radius: var(--salt-dimen-corner);
    background-color: rgba(140, 140, 140, 0.1);
}

.salt-item-edit .text input {
    width: 100%;
    border-radius: var(--salt-dimen-corner);
    background-color: transparent;

    border: none;
    height: 46px;
    padding: var(--salt-dimen-corner);
}

.salt-item-edit .text input:focus {
    outline: none;
}

.salt-item-edit.has-slot .text input {
    width: calc(100% - var(--salt-dimen-inner-horizontal-padding) - var(--salt-dimen-content-padding));
}

.salt-item-edit .action {
    position: absolute;
    top: calc(var(--salt-dimen-inner-vertical-padding) * 2);
    right: calc(var(--salt-dimen-inner-horizontal-padding) + var(--salt-dimen-content-padding));
}

@media (prefers-color-scheme: dark) {
    .salt-item-edit .text {
        background-color: rgba(225, 230, 235, 0.1)
    }
}
</style>