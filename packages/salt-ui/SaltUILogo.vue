<template>
    <salt-rounded-column class="salt-ui-logo">
        <salt-item-container>
            <div class="main">Based on <span style="font-weight: 900;">SaltUI</span></div>
            <div class="sub">Copyright © 2023 Moriafly</div>
        </salt-item-container>
    </salt-rounded-column>
</template>
  
<script setup lang="ts">
import { SaltRoundedColumn, SaltItemContainer } from '../../packages'
</script>
  
<style scoped>
.salt-ui-logo .main {
    font-size: var(--salt-text-style-main-font-size);
    line-height: var(--salt-text-style-main-line-height);
}

.salt-ui-logo .sub {
    font-size: var(--salt-text-style-sub-font-size);
    line-height: var(--salt-text-style-sub-line-height);
}
</style>