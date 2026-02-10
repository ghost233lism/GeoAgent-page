<script lang="ts" setup>

// 右侧更多菜单（可以在这里按需继续添加）
const more_paper = {
    GeoAgent: {
        name: "GeoAgent GitHub",
        link: "https://github.com/HVision-NKU/GeoAgent",
    },
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
            <template #title>More</template>
            <el-menu-item
              v-for="(item, key, idx) in more_paper"
              :key="key"
              :index="`2-${idx + 1}`"
            >
                <a :href="item.link">{{ item.name }}</a>
            </el-menu-item>
        </el-sub-menu>

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

  