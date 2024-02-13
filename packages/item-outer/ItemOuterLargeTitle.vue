<template>
  <div class="salt-item-outer-large-title">
    <div class="text">{{ text }}</div>
    <div class="spacer"></div>
    <div class="sub">
      <slot>{{ sub }}</slot>
    </div>
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
    required: false
  }
})
</script>

<style scoped>
.salt-item-outer-large-title {
  width: 100%;
  padding: calc(var(--salt-dimen-outer-vertical-padding) * 6) calc(var(--salt-dimen-outer-horizontal-padding) * 2);
  text-align: center;
}

.salt-item-outer-large-title .text {
  font-size: var(--salt-text-style-main-font-size);
  line-height: var(--salt-text-style-main-line-height);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.salt-item-outer-large-title .spacer {
  height: calc(var(--salt-dimen-content-padding) * 1.5);
}

.salt-item-outer-large-title .sub {
  font-size: var(--salt-text-style-paragraph-font-size);
  line-height: var(--salt-text-style-paragraph-line-height);
  text-align: center;
}
</style>