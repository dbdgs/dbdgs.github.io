<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >

    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
      v-show="showSidebar"
    >
      <slot
        name="sidebar-top"
        #top
      />
      <slot
        name="sidebar-bottom"
        #bottom
      />
    </Sidebar>

    <!-- 首页 -->
    <Home v-if="$page.frontmatter.home" />

    <!-- 分类页 -->
    <CategoriesPage v-else-if="$page.frontmatter.categoriesPage" />

    <!-- 标签页 -->
    <TagsPage v-else-if="$page.frontmatter.tagsPage" />

    <!-- 归档页 -->
    <ArchivesPage v-else-if="$page.frontmatter.archivesPage" />

    <!-- 文章页或其他页 -->
    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        #top
      />
      <slot
        name="page-bottom"
        #bottom
      />
    </Page>

    <Footer />

    <Buttons
      ref="buttons"
      @toggle-theme-mode="toggleThemeMode"
    />

    <BodyBgImg v-if="$themeConfig.bodyBgImg" />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import CategoriesPage from '@theme/components/CategoriesPage.vue'
import TagsPage from '@theme/components/TagsPage.vue'
import ArchivesPage from '@theme/components/ArchivesPage.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import Buttons from '@theme/components/Buttons.vue'
import Footer from '@theme/components/Footer'
import BodyBgImg from '@theme/components/BodyBgImg'
import { resolveSidebarItems } from '../util'
import storage from 'good-storage' // 本地存储
import _ from 'lodash'

import moment from 'moment';
import * as dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Shanghai')

const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
const NAVBAR_HEIGHT = 58 // 导航栏高度

export default {
  name: 'theme-container',
  components: { Home, Navbar, Page, CategoriesPage, TagsPage, ArchivesPage, Sidebar, Footer, Buttons, BodyBgImg },

  data () {
    return {
      hideNavbar: false,
      isSidebarOpen: true,
      showSidebar: false,
      themeMode: 'light'
    }
  },
  computed: {
    showRightMenu () {
      const { headers } = this.$page
      return (
        !this.$frontmatter.home
        && headers
        && headers.length
        && this.$frontmatter.sidebar !== false
      )
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'hide-navbar': this.hideNavbar, // 向下滚动隐藏导航栏
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
          'have-rightmenu': this.showRightMenu,
          'have-body-img': this.$themeConfig.bodyBgImg
        },
        // 'theme-mode-' + this.themeMode,
        userPageClass
      ]
    }
  },
  created () {
    const sidebarOpen = this.$themeConfig.sidebarOpen
    if (sidebarOpen === false) {
      this.isSidebarOpen = sidebarOpen
    }

    var siteUrl = this.$site.themeConfig.domain;      
    if (typeof this.$ssrContext !== "undefined") {    
      var pageTitle = this.$page.title ? this.$page.title.toString().replace(/["|'|\\]/g, '') : null;
      var imageUrl = this.$page.frontmatter.image ? this.$page.frontmatter.image : 'https://cdn.jsdelivr.net/gh/dbdgs/images@main/dabai.jpg';
      var siteName = this.$site.title || null;
      var publishedTime = dayjs(this.$page.frontmatter.date).toISOString() || dayjs(this.$page.lastUpdated).toISOString() || moment().toISOString();
      var modifiedTime = dayjs(this.$page.lastUpdated).toISOString() || moment().toISOString();
      var pageUrl = siteUrl + this.$page.path;
      var pageType = this.$page.path.length <= 1 ? 'website' : 'article' ;
      // var author = this.$site.themeConfig.personalInfo ? this.$site.themeConfig.personalInfo : null;    

      const data =
      {
          "@context": "https://schema.org",
          "@graph": [
              {
                  "@type": "ImageObject",
                  "@id": imageUrl,
                  "inLanguage": "zh-CN",
                  "url": imageUrl,
                  "width": 266,
                  "height": 266,
                  "caption": pageTitle + " - " + siteName
              },
              {
                  "@type": "WebPage",
                  "@id": pageUrl,
                  "url": pageUrl,
                  "name": this.$title,
                  "isPartOf": {
                      "@id": siteUrl,
                      "name": siteName
                  },
                  "primaryImageOfPage": {
                      "@id": siteUrl,
                      "name": siteName
                  },
                  "datePublished": publishedTime,
                  "dateModified": modifiedTime,
                  "description": this.$description,
                  "inLanguage": "zh-CN",
                  "potentialAction": [
                      {
                          "@type": "ReadAction",
                          "target": [
                              pageUrl
                          ]
                      }
                  ]
              },
              {
                  "@type": pageType,
                  "@id": pageUrl,
                  "isPartOf": {
                      "@id": pageUrl
                  },
                  "author": {
                      "@id": siteUrl,
                      "name": siteName
                  },
                  "headline": this.$title,
                  "datePublished": publishedTime,
                  "dateModified": modifiedTime,
                  "commentCount": 30,
                  "publisher": {
                      "@id": siteUrl,
                      "name": siteName
                  },
                  "image": {
                      "@id": imageUrl
                  },
                  "articleSection": this.$title,
                  "inLanguage": "zh-CN",
                  "potentialAction": [
                      {
                          "@type": "CommentAction",
                          "name": "Comment",
                          "target": [
                              pageUrl
                          ]
                      }
                  ]
              },
              {
                  "@type": "Person",
                  "@id": siteUrl,
                  "name": siteName
              },
              {
                  "@context": "https://schema.org/",
                  "@type": "Recipe",
                  "name": this.$description,
                  "description": this.$description,
                  "author": {
                      "@type": "Person",
                      "name": siteName
                  },
                  "image": [
                      imageUrl
                  ],
                  "url": pageUrl,
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
                          "url": pageUrl + "#step-1"
                      },
                      {
                          "@type": "HowToStep",
                          "text": "第2步",
                          "url": pageUrl + "#step-2"
                      },
                      {
                          "@type": "HowToStep",
                          "text": "第3步",
                          "url": pageUrl + "#step-3"
                      }
                  ],
                  "datePublished": publishedTime,
                  "@id": pageUrl,
                  "isPartOf": {
                      "@id": siteUrl
                  },
                  "mainEntityOfPage": siteUrl
              }
          ]
      };

      //creating the script element and storing the JSON-LD
      var my_jsonld = '\n<script type="application/ld+json">\n' + JSON.stringify(data, null, 2) + "\n<\/script>\n";
      this.$ssrContext.userHeadTags += my_jsonld;
    }
  },
  beforeMount () {
    this.isSidebarOpenOfclientWidth()
    const mode = storage.get('mode') // 不放在created是因为vuepress不能在created访问浏览器api，如window
    if (!mode || mode === 'auto') { // 当未切换过模式，或模式处于'跟随系统'时
      this._autoMode()
    } else {
      this.themeMode = mode
    }
    this.setBodyClass()

    // 引入图标库
    const social = this.$themeConfig.social
    if (social && social.iconfontCssFile) {
      let linkElm = document.createElement("link")
      linkElm.setAttribute('rel', 'stylesheet');
      linkElm.setAttribute("type", "text/css")
      linkElm.setAttribute("href", social.iconfontCssFile)
      document.head.appendChild(linkElm)
    }
  },
  mounted () {

    // 初始化页面时链接锚点无法跳转到指定id的解决方案
    const hash = document.location.hash;
    if (hash.length > 1) {
      const id = decodeURIComponent(hash.substring(1))
      const element = document.getElementById(id)
      if (element) element.scrollIntoView()
    }

    // 解决移动端初始化页面时侧边栏闪现的问题
    this.showSidebar = true
    this.$router.afterEach(() => {
      this.isSidebarOpenOfclientWidth()
    })

    // 向下滚动收起导航栏
    let p = 0, t = 0;
    window.addEventListener('scroll', _.throttle(() => {
      if (!this.isSidebarOpen) { // 侧边栏关闭时
        p = this.getScrollTop()
        if (t < p && p > NAVBAR_HEIGHT) { // 向下滚动
          this.hideNavbar = true
        } else { // 向上
          this.hideNavbar = false
        }
        setTimeout(() => { t = p }, 0)
      }
    }, 300))

  },
  watch: {
    isSidebarOpen () {
      if (this.isSidebarOpen) {  // 侧边栏打开时，恢复导航栏显示
        this.hideNavbar = false
      }
    },
    themeMode () {
      this.setBodyClass()
    }
  },
  methods: {
    setBodyClass () {
      document.body.className = 'theme-mode-' + this.themeMode
    },
    getScrollTop () {
      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0
    },
    isSidebarOpenOfclientWidth () {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.isSidebarOpen = false
      }
    },
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
    _autoMode () {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) { // 系统处于深色模式
        this.themeMode = 'dark'
      } else {
        this.themeMode = 'light'
      }
    },
    toggleThemeMode (key) {
      if (key === 'auto') {
        this._autoMode()
      } else {
        this.themeMode = key
      }
      storage.set('mode', key)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
