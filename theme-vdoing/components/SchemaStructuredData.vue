       <template>
  <script v-if="meta_structuredData" type="application/ld+json" v-html="meta_structuredData"></script>
</template>

<script>
  import * as dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import timezone from 'dayjs/plugin/timezone'

  dayjs.extend(utc)
  dayjs.extend(timezone)
  // Customize the value to your timezone (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
  dayjs.tz.setDefault('Asia/Shanghai')

  export default {
    name: 'SchemaStructuredData',
    
    created () {
      if (this.$ssrContext) {
        const extra = `
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "WebSite",
  "url": "https://code.luasoftware.com/",
  "author": {
    "@type": "Person",
    "name": "Desmond Lua"
  },
  "description": "Tutorials and snippets for programming languages, frameworks, tools, etc.",
  "image": "https://code.luasoftware.com/img/cover.jpg",
  "thumbnailUrl": "https://code.luasoftware.com/img/logo.png",
  "license": "This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.",
  "name": "Lua Software Code"
}
<\/script>
        `;
        this.$ssrContext.userHeadTags += extra
        // this.$ssrContext.pageMeta += extra;
      }
    }
  };

    computed: {
      meta_data() {
        if (!this.$page || !this.$site) {
          return
        }

        return {
          title: this.$page.title ? this.$page.title.toString().replace(/["|'|\\]/g, '') : null,
          description: this.$page.frontmatter.description
            ? this.$page.frontmatter.description.toString().replace(/["|'|\\]/g, '')
            : null,
          image: this.$page.frontmatter.image ? this.$site.themeConfig.domain + this.$page.frontmatter.image : null,
          type: this.meta_isArticle ? 'article' : 'website',
          siteName: this.$site.title || null,
          siteLogo: this.$site.themeConfig.domain + this.$site.themeConfig.defaultImage,
          published: dayjs(this.$page.frontmatter.date).toISOString() || dayjs(this.$page.lastUpdated).toISOString(),
          modified: dayjs(this.$page.lastUpdated).toISOString(),
          author: this.$site.themeConfig.personalInfo ? this.$site.themeConfig.personalInfo : null,
        }
      },
      // If page is a blog post
      meta_isArticle() {
        // Include path(s) where blog posts/articles are contained
        return ['articles', 'posts', '_posts', 'blog'].some((folder) => {
          let regex = new RegExp('^\\/' + folder + '\\/([\\w|-])+', 'gi')
          // Customize /category/ and /tag/ (or other sub-paths) below to exclude, if needed
          return (
            regex.test(this.$page.path) &&
            this.$page.path.indexOf(folder + '/category/') === -1 &&
            this.$page.path.indexOf(folder + '/tag/') === -1
          )
        })
          ? true
          : false
      },
      // Generate canonical URL (requires additional themeConfig data)
      meta_canonicalUrl() {
        if (!this.$page.frontmatter.canonicalUrl || !this.$page.path || !this.$site.themeConfig.domain) {
          return null
        }
        return this.$page.frontmatter.canonicalUrl
          ? this.$page.frontmatter.canonicalUrl
          : this.$site.themeConfig.domain + this.$page.path
      },
      meta_sameAs() {
        if (!this.meta_data.author.social || !this.meta_data.author.social.length) {
          return []
        }
        let socialLinks = []
        this.meta_data.author.social.forEach((s) => {
          if (s.url) {
            socialLinks.push(s.url)
          }
        })
        return socialLinks
      },
      // Generate Schema.org data for 'Person' (requires additional themeConfig data)
      schema_person() {
        if (!this.meta_data.author || !this.meta_data.author.name) {
          return null
        }

        return {
          '@context': 'https://schema.org/',
          '@type': 'Person',
          'name': this.meta_data.author.name,
          'url': this.$site.themeConfig.domain,
          'image': this.meta_data.author.avatar ? this.$site.themeConfig.domain + this.meta_data.author.avatar : null,
          'sameAs': this.meta_sameAs,
          'jobTitle': this.meta_data.author.title || null,
          'worksFor': {
            '@type': 'Organization',
            'name': this.meta_data.author.company || null,
          },
        }
      },
      // Inject Schema.org structured data
      meta_structuredData() {
        let structuredData = []
        // Home Page
        if (this.$page.frontmatter.pageHome) {
          structuredData.push({
            '@context': 'https://schema.org/',
            '@type': 'WebSite',
            'name':
              this.meta_data.title + (this.$page.frontmatter.subtitle ? ' | ' + this.$page.frontmatter.subtitle : '') ||
              null,
            'description': this.meta_data.description || null,
            'url': this.meta_canonicalUrl,
            'image': {
              '@type': 'ImageObject',
              'url': this.$site.themeConfig.domain + this.$site.themeConfig.defaultImage,
            },
            '@id': this.meta_canonicalUrl,
          })
        }
        // About Page
        else if (this.$page.frontmatter.pageAbout) {
          // Person
          structuredData.push(this.schema_person)
          // About Page
          structuredData.push({
            '@context': 'https://schema.org/',
            '@type': 'AboutPage',
            'name': this.meta_data.title || null,
            'description': this.meta_data.description || null,
            'url': this.meta_canonicalUrl,
            'primaryImageOfPage': {
              '@type': 'ImageObject',
              'url': this.meta_data.image || null,
            },
            'image': {
              '@type': 'ImageObject',
              'url': this.meta_data.image || null,
            },
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': this.meta_canonicalUrl,
            },
            'author': this.schema_person || null,
          })
          // Breadcrumbs
          structuredData.push({
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': this.$site.themeConfig.domain || null,
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': this.meta_data.title || null,
                'item': this.meta_canonicalUrl,
              },
            ],
          })
        }
        // Contact Page
        else if (this.$page.frontmatter.pageContact) {
          // Contact Page
          structuredData.push({
            '@context': 'https://schema.org/',
            '@type': 'ContactPage',
            'name': this.meta_data.title || null,
            'description': this.meta_data.description || null,
            'url': this.meta_canonicalUrl,
            'primaryImageOfPage': {
              '@type': 'ImageObject',
              'url': this.meta_data.image || null,
            },
            'image': {
              '@type': 'ImageObject',
              'url': this.meta_data.image || null,
            },
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': this.meta_canonicalUrl,
            },
            'author': this.schema_person || null,
          })
          // Breadcrumbs
          structuredData.push({
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': this.$site.themeConfig.domain || null,
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': this.meta_data.title || null,
                'item': this.meta_canonicalUrl,
              },
            ],
          })
        }
        // Article
        else if (this.meta_isArticle) {
          structuredData.push({
            '@context': 'https://schema.org/',
            '@type': 'Article',
            'name': this.meta_data.title || null,
            'description': this.meta_data.description || null,
            'url': this.meta_canonicalUrl,
            'discussionUrl': this.meta_canonicalUrl + '#comments',
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': this.meta_canonicalUrl,
            },
            'headline': this.meta_data.title || null,
            'articleSection': this.$page.frontmatter.category
              ? this.$page.frontmatter.category.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
              : null,
            'keywords': this.$page.frontmatter.tags || [],
            'image': {
              '@type': 'ImageObject',
              'url': this.meta_data.image || null,
            },
            'author': this.schema_person || null,
            'publisher': {
              '@type': 'Organization',
              'name': this.meta_data.author.name || '',
              'url': this.$site.themeConfig.domain || null,
              'logo': {
                '@type': 'ImageObject',
                'url': this.meta_data.siteLogo || null,
              },
            },
            'datePublished': dayjs(this.meta_data.published).toISOString() || null,
            'dateModified': dayjs(this.meta_data.modified).toISOString() || null,
            'copyrightHolder': this.schema_person || null,
            'copyrightYear':
              dayjs(this.meta_data.published).format('YYYY') || dayjs(this.meta_data.modified).format('YYYY'),
          })

          // Breadcrumbs
          structuredData.push({
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': this.$site.themeConfig.domain || null,
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Blog',
                'item': this.$site.themeConfig.domain + '/',
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': this.meta_data.title || null,
                'item': this.meta_canonicalUrl,
              },
            ],
          })
        }
        // Blog Index
        else if (this.$page.path === '/') {
          // Breadcrumbs
          structuredData.push({
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': this.$site.themeConfig.domain || null,
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': this.meta_data.title || null,
                'item': this.meta_canonicalUrl,
              },
            ],
          })
        }
        // Blog Category or Tag Page
        else if (this.$page.path === '/category/' || this.$page.path === '/tag/') {
          // Breadcrumbs
          structuredData.push({
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': this.$site.themeConfig.domain || null,
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Blog',
                'item': this.$site.themeConfig.domain + '/',
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': this.meta_data.title || null,
                'item': this.meta_canonicalUrl,
              },
            ],
          })
        }

        // Inject webpage for all pages
        structuredData.push({
          '@context': 'https://schema.org/',
          '@type': 'WebPage',
          'name': this.meta_data.title || null,
          'headline': this.meta_data.title || null,
          'description': this.meta_data.description || null,
          'url': this.meta_canonicalUrl,
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': this.meta_canonicalUrl,
          },
          'keywords': this.$page.frontmatter.tags || [],
          'primaryImageOfPage': {
            '@type': 'ImageObject',
            'url': this.meta_data.image || null,
          },
          'image': {
            '@type': 'ImageObject',
            'url': this.meta_data.image || null,
          },
          'author': this.schema_person || null,
          'publisher': {
            '@type': 'Organization',
            'name': this.meta_data.author.name || '',
            'url': this.$site.themeConfig.domain || null,
            'logo': {
              '@type': 'ImageObject',
              'url': this.meta_data.siteLogo || null,
            },
          },
          'datePublished': dayjs(this.meta_data.published).toISOString() || null,
          'dateModified': dayjs(this.meta_data.modified).toISOString() || null,
          'lastReviewed': dayjs(this.meta_data.modified).toISOString() || null,
          'copyrightHolder': this.schema_person || null,
          'copyrightYear':
            dayjs(this.meta_data.published).format('YYYY') || dayjs(this.meta_data.modified).format('YYYY'),
        })

        this.$ssrContext.pageMeta += JSON.stringify(structuredData, null, 4);
        return JSON.stringify(structuredData, null, 4)
      },
    },
  }
</script>
