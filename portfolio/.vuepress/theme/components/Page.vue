<template>
    <main class="page">
        <slot name="top"/>

        <Content/>

        <footer class="page-edit">
            <div class="edit-link" v-if="editLink">
                <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
                <OutboundLink/>
            </div>

            <div class="last-updated" v-if="lastUpdated">
                <span class="prefix">{{ lastUpdatedText }}: </span>
                <span class="time">{{ lastUpdated }}</span>
            </div>
        </footer>

        <div class="page-nav" v-if="prev || next">
            <p class="inner">
                <span class="prev" v-if="prev">
                  <router-link class="prev" :to="prev.path" v-if="prev">
                    {{ prev.title || prev.path }}
                  </router-link>
                </span>

                <span class="next" v-if="next">
                  <router-link :to="next.path" v-if="next">
                    {{ next.title || next.path }}
                  </router-link>
                </span>
            </p>
        </div>

        <div class="text-center" v-if="$page.frontmatter.view && $page.frontmatter.view === 'posts'">
            <ClientOnly>
                <Disqus
                        :shortname="$site.themeConfig.disqus"
                        :title="$page.title"
                        :identifier="disqusIdentifier"
                        :url="disqusUrl"
                        :api_key="$site.themeConfig.disqusApiKey"
                />
            </ClientOnly>
        </div>

        <slot name="bottom"/>
    </main>
</template>

<script>
	import {resolvePage, normalize, outboundRE, endingSlashRE} from '@parent-theme/util'

	export default {
		props: ['sidebarItems'],

		created(){
			const protocol = location.protocol
			const slashes = protocol.concat('//')
			this.host = slashes.concat(window.location.hostname)
		},

		computed: {
			lastUpdated() {
				return this.$page.lastUpdated
			},

			lastUpdatedText() {
				if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
					return this.$themeLocaleConfig.lastUpdated
				}
				if (typeof this.$site.themeConfig.lastUpdated === 'string') {
					return this.$site.themeConfig.lastUpdated
				}
				return 'Last Updated'
			},

			prev() {
				const prev = this.$page.frontmatter.prev
				if (prev === false) {
					return
				} else if (prev) {
					return resolvePage(this.$site.pages, prev, this.$route.path)
				} else {
					return resolvePrev(this.$page, this.sidebarItems)
				}
			},

			next() {
				const next = this.$page.frontmatter.next
				if (next === false) {
					return
				} else if (next) {
					return resolvePage(this.$site.pages, next, this.$route.path)
				} else {
					return resolveNext(this.$page, this.sidebarItems)
				}
			},

			editLink() {
				if (this.$page.frontmatter.editLink === false) {
					return

				}
				const {
					repo,
					editLinks,
					docsDir = '',
					docsBranch = 'master',
					docsRepo = repo
				} = this.$site.themeConfig

				let path = normalize(this.$page.path)
				if (endingSlashRE.test(path)) {
					path += 'README.md'
				} else {
					path += '.md'
				}
				if (docsRepo && editLinks) {
					return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path)
				}
			},

			editLinkText() {
				return (
					this.$themeLocaleConfig.editLinkText
					|| this.$site.themeConfig.editLinkText
					|| `Edit this page`
				)
			},

			disqusIdentifier () {
				return this.$page.frontmatter.disqus || this.$page.path
			},

			disqusUrl () {
				return this.host + this.$page.path
			}
		},

		methods: {
			createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
				const bitbucket = /bitbucket.org/
				if (bitbucket.test(repo)) {
					const base = outboundRE.test(docsRepo)
						? docsRepo
						: repo
					return (
						base.replace(endingSlashRE, '')
						+ `/src`
						+ `/${docsBranch}`
						+ (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '')
						+ path
						+ `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
					)
				}

				const base = outboundRE.test(docsRepo)
					? docsRepo
					: `https://github.com/${docsRepo}`

				return (
					base.replace(endingSlashRE, '')
					+ `/edit/${docsBranch}`
					+ (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '')
					+ path
				)
			}
		}
	}

	function resolvePrev(page, items) {
		return find(page, items, -1)
	}

	function resolveNext(page, items) {
		return find(page, items, 1)
	}

	function find(page, items, offset) {
		const res = []
		flatten(items, res)
		for (let i = 0; i < res.length; i++) {
			const cur = res[i]
			if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
				return res[i + offset]
			}
		}
	}

	function flatten(items, res) {
		for (let i = 0, l = items.length; i < l; i++) {
			if (items[i].type === 'group') {
				flatten(items[i].children || [], res)
			} else {
				res.push(items[i])
			}
		}
	}

</script>

<style lang="stylus">
    @require '~@parent-theme/styles/wrapper.styl'
    .page
        padding-bottom 2rem
        display block

    .page-edit
        @extend $wrapper
        padding-top 1rem
        padding-bottom 1rem
        overflow auto

        .edit-link
            display inline-block

            a
                color lighten($textColor, 25%)
                margin-right 0.25rem

        .last-updated
            float right
            font-size 0.9em

            .prefix
                font-weight 500
                color lighten($textColor, 25%)

            .time
                font-weight 400
                color #aaa

    .page-nav
        @extend $wrapper
        padding-top 1rem
        padding-bottom 0

        .inner
            min-height 2rem
            margin-top 0
            border-top 1px solid $borderColor
            padding-top 1rem
            overflow auto

        // clear float

        .next
            float right

    @media (max-width: $MQMobile)
        .page-edit
            .edit-link
                margin-bottom .5rem

            .last-updated
                font-size .8em
                float none
                text-align left

</style>