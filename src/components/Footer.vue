<script lang="ts" setup>
// 页脚需要的链接（与 GeoAgent 项目相关）
const links = {
    GeoAgent: "https://github.com/HVision-NKU/GeoAgent",
    HVision: "https://github.com/HVision-NKU",
    Vue: "https://cn.vuejs.org/",
    Vite: "https://cn.vitejs.dev/",
    ElementPlus: "https://element-plus.org/zh-CN/",
}
</script>

<template>
  
  <div class="bg">
    
    <el-watermark :content="['GeoAgent', 'Modi Jin', 'Hvision@NKU']" :gap="['60','0']" :z-index="0">
      <el-row justify="center">
        <p class="footer">
          GeoAgent: Learning to Geolocate Everywhere with Reinforced Geographic Characteristic.<br/>

          Project page of <a :href="links.GeoAgent">GeoAgent</a> by 
          <a :href="links.HVision">Hvision @ NKU</a>.<br/>

          Powered by 
          <a :href="links.Vue">Vue</a>, 
          <a :href="links.Vite">Vite</a>, and
          <a :href="links.ElementPlus">Element Plus</a>.
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