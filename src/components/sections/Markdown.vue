<script setup>
import page from '../mds/md.mdx';
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
            <page />
        </el-col>
    </el-row>

  </div>
</template>

<style scoped>
/* mdx 渲染区域内的图片：去掉边框/阴影，和文本区域等宽 */
img {
  display: block;
  width: 95%;
  max-width: 95%;
  height: auto;
  border: none;
  box-shadow: none;
}
</style>