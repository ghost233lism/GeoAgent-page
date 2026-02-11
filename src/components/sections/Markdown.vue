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

<style>
/* License 区块样式（与正文等宽、无背景） */
.license-content {
  width: 100%;
  margin: 1.5rem 0;
}

.license-container {
  background: none;
  border: none;
  border-radius: 0;
  padding: 0;
  box-shadow: none;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.license-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.5rem;
  color: #2ecc71;
  flex-shrink: 0;
}

.license-icon i {
  display: block;
}

.license-text {
  flex: 1;
}

.license-text h3 {
  color: #1a1a2e;
  font-size: 1.4rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.license-text p {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  text-align: justify;
}

.license-actions {
  display: flex;
  gap: 1rem;
}

.license-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #2ecc71, #27ae60);
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
}

.license-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(46, 204, 113, 0.4);
  background: linear-gradient(135deg, #27ae60, #229954);
}

@media (max-width: 768px) {
  .license-container {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .license-icon {
    font-size: 2rem;
  }

  .license-text h3 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  .license-text p {
    font-size: 1rem;
    text-align: left;
  }
}
</style>