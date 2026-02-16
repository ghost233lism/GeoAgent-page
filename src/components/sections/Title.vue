<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ElIcon } from 'element-plus'
import { Document, Files, MagicStick, Picture, DataAnalysis, Film } from '@element-plus/icons-vue'

const { t } = useI18n()

// logo地址，没有则置为""即可
const logo = './icon.png'

// 标题（在 with 前换行）
const title = 'GeoAgent: Learning to Geolocate Everywhere\nwith Reinforced Geographic Characteristic'

// 标题颜色
const title_color = '#000000'

// 标题补充，没有则置为''即可
const title_supp = ''

// 标题补充颜色
const title_supp_color = '#42B883'

// 按钮颜色
const btn_color = '#444444'

// 作者清单（包含作者姓名、头像、主页、地址序号）
const authors = [
  {
    name: "Modi Jin",
    // icon: "./icon/junyaohu.jpg",
    homepage: "https://ghost233lism.github.io",
    address_flag: "1"
  },
  {
    name: "Yiming Zhang",
    // icon: "./icon/anya.jpg",
    homepage: "https://zhang-yi-ming.github.io/",
    address_flag: "1"
  },
  {
    name: "Boyuan Sun",
    // icon: "./icon/capoo.webp",
    homepage: "https://bbbbchan.github.io/",
    address_flag: "1"
  },
  {
    name: "Dingwen Zhang",
    // icon: "./icon/capoo.webp",
    homepage: "https://zdw-nwpu.github.io/dingwenz.github.com/",
    address_flag: "2"
  },
  {
    name: "MingMing Cheng",
    // icon: "./icon/capoo.webp",
    homepage: "https://mmcheng.net/",
    address_flag: "1"
  },
  {
    name: "Qibin Hou",
    // icon: "./icon/capoo.webp",
    homepage: "https://houqb.github.io/",
    address_flag: "1,†"
  },
]

// 地址清单（nameKey 对应 i18n 的 key）
const addresses = [
  { address_flag: "1", nameKey: "address1" },
  { address_flag: "2", nameKey: "address2" },
]

// 共一和通讯提示（使用 i18n）

// 最新消息
// const news = "🔥 [2024-12-15] This template project is still under development."

// 强调内容
// const emphases = [
//   "🎉 [ABCD 2024] Poster",
//   "🥰 欢迎关注“减论”微信公众号/B站/知乎/小红书",
//   "传递人工智能算法科普教育的减约理解",
//   "提升信息效率及认知维度"
// ]

// 提供引导资料链接（nameKey 对应 i18n）
const buttons = [
  { disabled: false, nameKey: "paper", link: "https://arxiv.org/abs/2602.12617", component: Document },
  { disabled: true, nameKey: "chineseVersion", component: Document },
  { disabled: false, nameKey: "code", link: "https://github.com/HVision-NKU/GeoAgent", component: Files },
  { disabled: false, nameKey: "demo", link: "https://huggingface.co/spaces/ghost233lism/GeoAgent", component: MagicStick },
  { disabled: true, nameKey: "poster", component: Picture },
  { disabled: false, nameKey: "dataset", link: "https://huggingface.co/datasets/ghost233lism/GeoSeek", component: DataAnalysis },
  { disabled: true, nameKey: "video", component: Film },
]

</script>

<template>
  <div>

    <!-- 最新消息提示 -->
    <!-- <el-row justify="center">
      <el-col :span="24">
        <el-alert title="🔥 This template is still under development." type="success" />
      </el-col>
    </el-row> -->

    <!-- 文章logo -->
    <el-row v-if="logo" justify="center">
      <el-image :src="logo" class="logo" fit="cover" />
    </el-row>

    <!-- 文章标题 -->
    <el-row justify="center">
      <el-col :span="20">
        <h1 class="paper-title">
          <span v-if="title" :style="{color:title_color}"> {{ title }}</span>
          <span v-if="title_supp" :style="{color:title_supp_color}"> {{ title_supp }}</span>
        </h1>
      </el-col>
    </el-row>

    <!-- 作者名单 -->
    <el-row justify="center">
      <a :href=author.homepage v-for="author in authors">
        <el-button class="title-button" type="primary" text>
          <el-avatar v-if="author.icon" :size="40" :src="author.icon" />
          <span class="author">
            {{ author.name }}<sup v-if="author.address_flag" class="name_sup">{{ author.address_flag }}</sup>
          </span>
        </el-button>
      </a>
    </el-row>

    <!-- 地址名单 -->
    <el-row justify="center">
      <div v-for="address in addresses" class="address-item">
          <el-avatar v-if="address.icon" :size="40" :src="address.icon" />
          <span class="address">
            <sup v-if="address.address_flag" class="address_sup">{{ address.address_flag }}</sup>{{ t(address.nameKey) }}
          </span>
      </div>
    </el-row>

    <!-- 共一和通讯提示内容 -->
    <el-row justify="center" class="con-cor">
        {{ t('correspondingAuthor') }}
    </el-row>

    <!-- 提供引导按钮 -->
    <el-row justify="center" style="margin-bottom: 20px;">
      <el-col :span="20">
        <el-row justify="center">
          <a :href=button.link v-for="button in buttons">
            <el-button class="guidance-button" size="default" :color="btn_color" :disabled="button.disabled" round>
              <el-icon :size="18">
                <component :is="button.component" />
              </el-icon>
              <span class="btn-text">{{ t(button.nameKey) }}</span>
            </el-button>
          </a>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<style scoped>

/* 文章标题字体、字间距、居中排布、字号 */
.paper-title {
  font-family: "MyFont", Verdana, sans-serif;
  letter-spacing: 2px;
  font-size: 42px;
  margin: 32px;
  text-align: center;
}

/* 标题内部按换行符断行 */
.paper-title span {
  white-space: pre-line;
}

/* 姓名和地址按钮 */
.title-button {
  margin: 10px 3px;
}

/* 姓名和地址按钮光标悬浮 */
.title-button:hover {
  margin: 10px 8px;
}

/* 引导材料按钮 */
.guidance-button {
  margin: 8px 5px;
  box-shadow: #d8d8d8 1px 1px 1px 1px;
}

/* 姓名属性 */
.author {
  font-size: 18px;
  margin-left: 3px;
}

/* 姓名上标属性 */
.name_sup {
  color: #606266; 
  margin-left: 3px;
}

/* 地址属性 */
.address {
  font-size: 18px;
  color: inherit;
}

/* 地址项：普通文本，不使用按钮悬浮效果 */
.address-item {
  margin: 10px 3px;
  display: inline-flex;
  align-items: center;
}

/* 地址上标属性 */
.address_sup {
  color: #606266; 
  margin-right: 1px;
}

/* 头像属性 */
.el-avatar {
  margin-right: 6px;
  box-shadow: #b7b7b7 0px 0px 3px 1px;
}

/* 共一和通讯文字属性 */
.con-cor {
  font-family: Arial;
  font-size: 14px;
  margin: 18px 0px;
  text-align: center;
}

/* 强调信息属性 */
.emphasis {
  color: chocolate;
  font-weight: bold;
  margin: 8px;
  font-size: 22px;
  text-align: center;
}

/* 引导材料按钮文字属性 */
.btn-text {
  font-size: 18px;
  color: #ffffff;
}

.el-alert {
  margin: 10px 0 0;
}

.el-alert:first-child {
  margin: 0;
}

.logo {
  width: 150px; 
  height: 150px;
  border-radius: 50%;
  box-shadow: #ced3dc 0px 0px 3px 2px;
  margin-top: 40px;
}

/* 手机端链接样式处理 */
a:-webkit-any-link {
  text-decoration: none;
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