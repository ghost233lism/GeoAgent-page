<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import abstractEn from '../mds/abstract.mdx'
import abstractZh from '../mds/abstract.zh.mdx'

const { locale } = useI18n()
const abstract = computed(() => locale.value === 'zh' ? abstractZh : abstractEn)
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
            <component :is="abstract" />
        </el-col>
    </el-row>

  </div>
</template>

<style scoped>

</style>