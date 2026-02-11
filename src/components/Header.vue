<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 右侧更多菜单（可以在这里按需继续添加）
const more_paper = {
    GeoAgent: {
        name: "DepthAnything-AC Arxiv 2025",
        link: "https://ghost233lism.github.io/depthanything-AC-page/",
    },
}

function setLocale(lang: string) {
  locale.value = lang
}
</script>

<template>
    <!-- 设置页首始终悬浮顶部 -->
    <el-affix :offset="0" :style="{width: '100%'}">
    
    <!-- 水平导航目录（仅保留 More 菜单） -->
    <el-menu 
        default-active="2"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
    >
        <!-- 更多栏目 -->
        <el-sub-menu index="2">
            <template #title>{{ t('more') }}</template>
            <el-menu-item
              v-for="(item, key, idx) in more_paper"
              :key="key"
              :index="`2-${idx + 1}`"
            >
                <a :href="item.link">{{ item.name }}</a>
            </el-menu-item>
        </el-sub-menu>
        <!-- 语言切换 -->
        <el-menu-item index="lang" class="lang-menu-item">
          <div class="lang-switcher" @click.stop>
            <button :class="{ active: locale === 'en' }" @click="setLocale('en')">EN</button>
            <span class="lang-sep">|</span>
            <button :class="{ active: locale === 'zh' }" @click="setLocale('zh')">中文</button>
          </div>
        </el-menu-item>

    </el-menu>
    </el-affix>
</template>

<style>

/* 导航背景 */
.el-menu {
	background: none;
}

/* 下拉菜单宽度 */
.el-menu--popup {
	min-width: 100%;
}

/* 导航背景特效和阴影 */
.el-affix--fixed {
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	background-image: radial-gradient(#ffffffca 1px,#ffffff 1px);
	background-size: 3px 3px;
}

/* 水平导航高度 */
.el-header {
    --el-header-height: 50px;
}

</style>

<style scoped>

/* 水平导航高度 */
.el-menu--horizontal {
    --el-menu-horizontal-height: 50px;
}

/* 语言切换 */
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1rem;
}
.lang-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  padding: 0.2rem 0.4rem;
}
.lang-switcher button:hover {
  color: #333;
}
.lang-switcher button.active {
  color: #3273dc;
  font-weight: 600;
}
.lang-sep {
  color: #ccc;
  font-size: 12px;
}
.lang-menu-item {
  margin-left: auto;
}
.lang-menu-item:hover {
  background: transparent !important;
}

/* 取消鼠标焦点悬浮在链接上的颜色装饰 */
a:hover {
  color: inherit;
  border-bottom: none;
}

/* 链接装饰，取消下划线和链接颜色 */
a {
	text-decoration: None;
	color: inherit;
}

</style>

  