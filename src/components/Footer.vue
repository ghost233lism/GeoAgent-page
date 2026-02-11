<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const links = {
    GeoAgent: "https://github.com/HVision-NKU/GeoAgent",
    HVision: "https://github.com/HVision-NKU",
    Vue: "https://cn.vuejs.org/",
    Vite: "https://cn.vitejs.dev/",
    ElementPlus: "https://element-plus.org/zh-CN/",
    TemplateContributor: "https://github.com/JunyaoHu/academic-project-page-template-vue",
}
</script>

<template>
  <div class="bg">
    <el-watermark :content="['GeoAgent', 'Modi Jin', 'Hvision@NKU']" :gap="['60','0']" :z-index="0">
      <el-row justify="center">
        <p class="footer">
          {{ t('footerDesc') }}<br/>

          {{ t('projectPage') }} <a :href="links.GeoAgent">GeoAgent</a> {{ t('by') }}
          <a :href="links.HVision">Hvision @ NKU</a>.<br/>

          {{ t('poweredBy') }}
          <a :href="links.Vue">Vue</a>,
          <a :href="links.Vite">Vite</a>,
          <a :href="links.ElementPlus">Element Plus</a>.<br/>

          {{ t('templateThanks') }} <a :href="links.TemplateContributor">{{ t('templateThanksLink') }}</a>.
        </p>
      </el-row>
    </el-watermark>
  </div>
</template>

<style scoped>

/* 页脚背景 */
.bg {
  background-color: rgb(235, 235, 235);
}

/* 页脚文字 */
.footer {
  text-align: center;
  margin: 20px;
  z-index: 1;
}

</style>