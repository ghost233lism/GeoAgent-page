<script>
// 暂时注释掉 BibTeX 数据与复制逻辑，仅显示 Coming soon
// export default {
//   data() {
//     return {
//       bibtex: [
//         "Coming Soon",
//         "    title={Academic Project Page Template Vue},",
//         "    author={Hu, Junyao},",
//         "    journal={GitHub},",
//         "    year={2023}",
//         "}",
//       ],
//     }
//   },
//   methods: {
//     copyVal() {
//       let oInput = document.createElement('textarea');
//       let text = document.getElementById('bibtex').innerText;
//       oInput.value = text;
//       document.body.appendChild(oInput);
//       oInput.select();
//       document.execCommand('Copy');
//       this.$message.success('Copy Successfully');
//       oInput.remove();
//     }
//   }
// }
export default {}
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title">BibTeX</h1>
    </el-row>

    <el-row justify="center" style="margin-top: 20px;">
      <h2>Coming soon...</h2>
    </el-row>

    <!-- 暂未上线，先显示占位文案；恢复时取消下方注释并恢复上方 script 中的 data/methods -->
    <!--
    <el-row justify="center">
      <el-col class='bibtex' :xs="24" :sm="20" :md="14" :lg="12" :xl="12" @click="copyVal()" >
        <div style="text-align: center; color: var(--el-text-color-secondary); margin-top: 20px;">🖱️ Click here to copy BibTex.</div>
        <el-row>
            <el-scrollbar style="margin: 0px 20px 5px 20px;">
              <pre id="bibtex"><code v-for="b in bibtex">{{ b }}<br/></code></pre>
            </el-scrollbar>
        </el-row>
      </el-col>
    </el-row>
    -->

  </div>
</template>

<style scoped>

.scrollbar-flex-content {
  display: flex;
}

/* 卡片属性 */
.bibtex {
  margin: 20px 0px;
  padding-top: 5px;
  box-shadow: var(--el-box-shadow-light); 
  border-radius: 10px;
}

/* 卡片悬浮 */
.bibtex:hover {
  box-shadow: var(--el-box-shadow); 
}

/* 卡片点击 */
.bibtex:active{
  box-shadow: var(--el-box-shadow-lighter); 
}

pre {
  border: none;
  border-radius: 0px;
  padding: 10px;
  background: none;
}

pre code {
  font-size: 18px;
  background: #ffffff;
}



</style>