<template>
    <div class="salt-item-value">
        <span class="text">{{ text }} </span>
        <span class="spacer"></span>
        <div class="sub">{{ sub }}</div>
    </div>
</template>
  
<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    }
})
</script>
  
<style scoped>
.salt-item-value {
    width: 100%;
    min-height: 48px;
    padding: var(--salt-dimen-inner-vertical-padding) var(--salt-dimen-inner-horizontal-padding);

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.salt-item-value .text {
    color: var(--salt-text-style-main-color);
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);

    flex: 50%;
}

.salt-item-value .spacer {
    width: var(--salt-dimen-content-padding);
}

.salt-item-value .sub {
    color: var(--salt-text-style-sub-color);
    font-size: var(--salt-text-style-sub-font-size);
    line-height: var(--salt-text-style-sub-line-height);

    color: var(--salt-color-sub-text);
    font-size: 15px;
    text-align: end;

    flex: 50%;
}
</style>