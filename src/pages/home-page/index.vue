<template>
    <div class="text-[30px] text-blue h-[300px]">
        {{ t('messages') }}
    </div>
</template>
<script setup lang="ts">

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

</script>