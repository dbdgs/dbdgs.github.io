<template>
  <div>
    <main class="page">
      <slot name="top" />

      <div :class="`theme-vdoing-wrapper ${bgStyle}`">
        <ArticleInfo v-if="isArticle()" />
        <component class="theme-vdoing-content" v-if="pageComponent" :is="pageComponent" />

        <div class="content-wrapper">
          <RightMenu v-if="showRightMenu" />
          <h1 v-if="showTitle">
            <img :src="currentBadge" v-if="$themeConfig.titleBadge === false ? false : true" />
            {{ this.$page.title }}
          </h1>
          <Content class="theme-vdoing-content" />
        </div>

        <PageEdit />
        <PageNav v-bind="{ sidebarItems }" />
      </div>

      <UpdateArticle :length="3" :moreArticle="updateBarConfig && updateBarConfig.moreArticle" v-if="isShowUpdateBar" />

      <slot name="bottom" />
    </main>
  </div>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import ArticleInfo from "./ArticleInfo.vue";
import Catalogue from "./Catalogue.vue";
import UpdateArticle from "./UpdateArticle.vue";
import RightMenu from "./RightMenu.vue";

import TitleBadgeMixin from "../mixins/titleBadge";

export default {
  mixins: [TitleBadgeMixin],
  data() {
    return {
      updateBarConfig: null,
    };
  },
  props: ["sidebarItems"],
  components: { PageEdit, PageNav, ArticleInfo, Catalogue, UpdateArticle, RightMenu },
  created() {
    this.updateBarConfig = this.$themeConfig.updateBar;

    if (typeof this.$ssrContext !== "undefined") {
      const extra = `
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ImageObject",
                "@id": "https://cdn.jsdelivr.net/gh/yanglr/images/webster-dict-jekyll1.png",
                "inLanguage": "zh-CN",
                "url": "https://cdn.jsdelivr.net/gh/yanglr/images/webster-dict-jekyll1.png",
                "width": 266,
                "height": 266,
                "caption": "github的jekyll是什么意思-大白的故事 "
            },
            {
                "@type": "WebPage",
                "@id": "https://dbdgs.cn/why-name-jekyll.html",
                "url": "https://dbdgs.cn/why-name-jekyll.html",
                "name": "github的jekyll是什么意思-大白的故事 ",
                "isPartOf": {
                    "@id": "https://dbdgs.cn",
                    "name": "大白的故事"
                },
                "primaryImageOfPage": {
                    "@id": "https://dbdgs.cn",
                    "name": "大白的故事"
                },
                "datePublished": "",
                "dateModified": "2020-11-17T01:29:33+08:00",
                "description": "最著名的静态站点生成器为什么取名为Jekyll? Jekyll是一个简单的静态网站生成器，github pages默认就会用这个生成器，用于生成个人、项目或组织的网站。它由GitHub联合创始人汤姆·普雷斯顿·沃纳(Tom Preston-Werner)用Ruby编写，并根据MIT许可证发布。 Je [&hellip;]",
                "inLanguage": "zh-CN",
                "potentialAction": [
                    {
                        "@type": "ReadAction",
                        "target": [
                            "https://dbdgs.cn/why-name-jekyll.html"
                        ]
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://dbdgs.cn/why-name-jekyll.html",
                "isPartOf": {
                    "@id": "https://dbdgs.cn/why-name-jekyll.html"
                },
                "author": {
                    "@id": "https://dbdgs.cn",
                    "name": "大白的故事"
                },
                "headline": "github的jekyll是什么意思-大白的故事 ",
                "datePublished": "",
                "dateModified": "2020-11-17T01:29:33+08:00",
                "commentCount": 30,
                "publisher": {
                    "@id": "https://dbdgs.cn",
                    "name": "大白的故事"
                },
                "image": {
                    "@id": "https://cdn.jsdelivr.net/gh/yanglr/images/webster-dict-jekyll1.png"
                },
                "articleSection": "github的jekyll是什么意思-大白的故事 ",
                "inLanguage": "zh-CN",
                "potentialAction": [
                    {
                        "@type": "CommentAction",
                        "name": "Comment",
                        "target": [
                            "https://dbdgs.cn/why-name-jekyll.html"
                        ]
                    }
                ]
            },
            {
                "@type": "Person",
                "@id": "https://dbdgs.cn",
                "name": "大白的故事"
            },
            {
                "@context": "https://schema.org/",
                "@type": "Recipe",
                "name": "最著名的静态站点生成器为什么取名为Jekyll? Jekyll是一个简单的静态网站生成器，github pages默认就会用这个生成器，用于生成个人、项目或组织的网站。它由GitHub联合创始人汤姆·普雷斯顿·沃纳(Tom Preston-Werner)用Ruby编写，并根据MIT许可证发布。 Je [&hellip;]",
                "description": "最著名的静态站点生成器为什么取名为Jekyll? Jekyll是一个简单的静态网站生成器，github pages默认就会用这个生成器，用于生成个人、项目或组织的网站。它由GitHub联合创始人汤姆·普雷斯顿·沃纳(Tom Preston-Werner)用Ruby编写，并根据MIT许可证发布。 Je [&hellip;]",
                "author": {
                    "@type": "Person",
                    "name": "大白的故事"
                },
                "image": [
                    "https://cdn.jsdelivr.net/gh/yanglr/images/webster-dict-jekyll1.png"
                ],
                "url": "https://dbdgs.cn/why-name-jekyll.html",
                "recipeIngredient": [
                    "第1步",
                    "第2步",
                    "第3步",
                    "第4步"
                ],
                "recipeInstructions": [
                    {
                        "@type": "HowToStep",
                        "text": "第1步",
                        "url": "https://dbdgs.cn/why-name-jekyll.html#step-1"
                    },
                    {
                        "@type": "HowToStep",
                        "text": "第2步",
                        "url": "https://dbdgs.cn/why-name-jekyll.html#step-2"
                    },
                    {
                        "@type": "HowToStep",
                        "text": "第3步",
                        "url": "https://dbdgs.cn/why-name-jekyll.html#step-3"
                    }
                ],
                "datePublished": "",
                "@id": "https://dbdgs.cn/why-name-jekyll.html",
                "isPartOf": {
                    "@id": "https://dbdgs.cn"
                },
                "mainEntityOfPage": "https://dbdgs.cn"
            }
        ]
    }
<\/script>
`;
      this.$ssrContext.userHeadTags += extra;
    }
  },
  computed: {
    bgStyle() {
      const { contentBgStyle } = this.$themeConfig;
      return contentBgStyle ? "bg-style-" + contentBgStyle : "";
    },
    isShowUpdateBar() {
      return this.updateBarConfig && this.updateBarConfig.showToArticle === false ? false : true;
    },
    showTitle() {
      return !this.$frontmatter.pageComponent;
    },
    showRightMenu() {
      return this.$page.headers && (this.$frontmatter && this.$frontmatter.sidebar && this.$frontmatter.sidebar !== false) !== false;
    },
    pageComponent() {
      return this.$frontmatter.pageComponent ? this.$frontmatter.pageComponent.name : false;
    },
  },
  methods: {
    isArticle() {
      return this.$frontmatter.article !== false;
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
  @media (max-width $MQMobile)
    padding-top $navbarHeight
  @media (min-width $MQMobile)
    padding-top ($navbarHeight + 1.5rem)
  >*
    @extend $vdoing-wrapper
.theme-vdoing-wrapper
  .content-wrapper
    position relative
  h1 img
    margin-bottom -0.2rem
    max-width 2.2rem
    max-height 2.2rem
.theme-vdoing-wrapper
  --linesColor rgba(50, 0, 0, 0.05)
  &.bg-style-1 // 方格
    background-image linear-gradient(90deg, var(--linesColor) 3%, transparent 3%), linear-gradient(0deg, var(--linesColor) 3%, transparent 3%)
    background-position center center
    background-size 20px 20px
  &.bg-style-2 // 横线
    background-image repeating-linear-gradient(0, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 30px 30px
  &.bg-style-3 // 竖线
    background-image repeating-linear-gradient(90deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 30px 30px
  &.bg-style-4 // 左斜线
    background-image repeating-linear-gradient(-45deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 20px 20px
  &.bg-style-5 // 右斜线
    background-image repeating-linear-gradient(45deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 20px 20px
  &.bg-style-6 // 点状
    background-image radial-gradient(var(--linesColor) 1px, transparent 1px)
    background-size 10px 10px
// 背景纹适应深色模式
.theme-mode-dark
  .theme-vdoing-wrapper
    --linesColor rgba(125, 125, 125, 0.05)
/**
 * 右侧菜单的自适应
 */
@media (min-width 720px) and (max-width 1279px)
  .have-rightmenu
    .page
      padding-right 0.8rem !important
@media (max-width 1279px)
  .right-menu-wrapper
    display none
@media (min-width 1280px)
  .sidebar .sidebar-sub-headers
    display none
</style>
