<script setup>
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { DocumentCopy } from '@element-plus/icons-vue'

const { t } = useI18n()

function copyBibtex() {
  const el = document.getElementById('bibtex')
  if (!el) return
  const text = el.innerText
  navigator.clipboard.writeText(text).then(() => {
    ElMessage.success(t('copySuccess'))
  }).catch(() => {
    ElMessage.error(t('copyFailed'))
  })
}
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title">BibTeX</h1>
    </el-row>

    <el-row justify="center" style="margin-top: 20px;">
      <el-col class='bibtex' :xs="24" :sm="20" :md="14" :lg="12" :xl="12">
        <div class="bibtex-header">
          <span class="bibtex-label">BibTeX</span>
          <el-button type="primary" size="small" @click="copyBibtex" class="copy-btn">
            <el-icon><DocumentCopy /></el-icon>
            {{ t('copy') }}
          </el-button>
        </div>
        <el-scrollbar style="margin: 0px 20px 5px 20px;">
          <pre id="bibtex"><code>
@article{jin2026geoagent,
  title={GeoAgent: Learning to Geolocate Everywhere with Reinforced Geographic Characteristics},
  author={Jin, Modi and Zhang, Yiming and Sun, Boyuan and Zhang, Dingwen and Cheng, Ming-Ming and Hou, Qibin},
  journal={arXiv preprint arXiv:2602.12617},
  year={2026}
}
          </code></pre>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

.scrollbar-flex-content {
  display: flex;
}

/* 卡片属性 */
.bibtex {
  margin: 20px 0px;
  padding-top: 0;
  box-shadow: var(--el-box-shadow-light); 
  border-radius: 10px;
  overflow: hidden;
}

/* BibTeX 头部：标题 + 复制按钮 */
.bibtex-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
}

.bibtex-label {
  font-weight: 600;
  font-size: 14px;
  color: #303133;
}

.copy-btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
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