<template>
    <div class="salt-slider" @click="barClick">
        <div class="bar" ref="element">
            <div class="thumb" :style="{ left: position + 'px' }" @mousedown="dragStart" @touchstart="dragStart">
            </div>
            <div class="track" :style="{ width: position + 22 + 'px' }"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ModelRef, onMounted, ref, toRefs } from 'vue';

const model = defineModel() as ModelRef<number>

const props = defineProps({
    enabled: {
        type: Boolean,
        required: false,
        default: true
    },
    valueRange: {
        required: false,
        default: () => [0, 100]
    },
    steps: {
        type: Number,
        required: false,
        default: 0
    }
})

const { enabled, valueRange, steps } = toRefs(props)

const emit = defineEmits(['change'])

const position = ref<number>(0)
const dragging = ref(false)
const width = ref()
const offset = ref()

const element = ref<HTMLElement | null>(null)

/**
 * 保留小数点位数
 * @param value  数值
 * @param precision 小数点位数  默认 4
 */
const round = (value: number, precision = 4) => {
    return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
}

onMounted(() => {
    position.value = percentage2Position(model.value)
    width.value = element.value?.offsetWidth
    offset.value = element.value?.getBoundingClientRect().left
    bindListener()
})

const bindListener = () => {
    window.addEventListener('mousemove', drag)
    window.addEventListener('mouseup', dragEnd)

    window.addEventListener('touchmove', drag);
    window.addEventListener('touchend', dragEnd);
}

const postion2Percentage = (position: number) => {
    const value = position / (width.value - 24) * 100
    if (value < 0) {
        return 0
    } else if (value > 100) {
        return 100
    } else {
        return round(value)

    }
}

const percentage2Position = (percentage: number) => {
    const width = element.value?.offsetWidth || 0
    return (width - 24) * percentage / 100
}

const limit = (percentage: number) => {
    // 限制步长
    if (steps.value > 0) {
        percentage = Math.round(percentage / steps.value) * steps.value;
    }

    // 限制范围 valueRange
    if (valueRange.value.length === 2) {
        const min = valueRange.value[0]
        const max = valueRange.value[1]
        if (percentage < min) {
            percentage = min
        } else if (percentage > max) {
            percentage = max
        }
    }

    // 默认范围 0 - 100
    if (percentage < 0) {
        percentage = 0
    } else if (percentage > 100) {
        percentage = 100
    }

    return percentage
}

const refreshPosition = (event: MouseEvent | TouchEvent) => {
    width.value = element.value?.offsetWidth
    offset.value = element.value?.getBoundingClientRect().left

    let pos;
    if (event instanceof TouchEvent) {
        pos = event.touches[0].clientX - offset.value;
    } else {
        pos = event.clientX - offset.value;
    }

    if (pos < 0) {
        pos = 0
    } else if (pos > width.value + 1) {
        pos = width.value + 1
    }

    pos = Math.max(pos - 24, 0)

    let percentage = postion2Percentage(pos)
    percentage = limit(percentage)

    position.value = percentage2Position(percentage)
    model.value = percentage
    emit('change', percentage, event)
}

const barClick = (event: MouseEvent | TouchEvent) => {
    if (!enabled.value) return;
    refreshPosition(event);
}

const dragStart = () => {
    if (!enabled.value) return;

    dragging.value = true
}

const drag = (event: MouseEvent | TouchEvent) => {
    if (!dragging.value) return;
    refreshPosition(event);
}

const dragEnd = () => {
    if (!dragging.value) return;
    dragging.value = false;
}
</script>

<style scoped>
.salt-slider {
    --salt-slider-thumb-size: 24px;
    --salt-slider-track-height: 22px;
}

.salt-slider .bar {
    height: var(--salt-slider-track-height);
    position: relative;
    display: block;
    border-radius: var(--salt-slider-track-height);
    background-color: rgba(var(--salt-color-sub-text-rgb), 0.25);
}

.salt-slider .thumb {
    width: var(--salt-slider-thumb-size);
    height: var(--salt-slider-thumb-size);
    position: absolute;
    border-radius: 50%;
    background-color: #ffffff;
    border: 1px solid rgba(var(--salt-color-sub-text-rgb), 0.25);

    top: -1px;
}

.salt-slider .track {
    background-color: var(--salt-color-highlight);
    width: 0px;
    height: var(--salt-slider-track-height);
    padding-right: var(--salt-slider-track-height);
    border-radius: var(--salt-slider-track-height);

    margin-left: 1px;
}
</style>