<template>
    <main class="page">
        <slot name="top"/>

        <Content slot-key="header" class="custom"/>
        <Content/>
        <Content slot-key="footer" class="custom"/>

        <footer class="page-edit">
            <div class="edit-link" v-if="editLink && showComments">
                <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
                <OutboundLink/>
            </div>

            <div class="last-updated" v-if="lastUpdated && showComments">
                <span class="prefix">{{ lastUpdatedText }}: </span>
                <span class="time">{{ lastUpdated }}</span>
            </div>
        </footer>

        <div class="page-nav py-10" v-if="prev || next">
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

        <ClientOnly v-if="showComments">
            <Vssue title="Vssue Demo"/>
        </ClientOnly>

        <slot name="bottom"/>
    </main>
</template>

<script>
	import {endingSlashRE, normalize, outboundRE, resolvePage} from '@parent-theme/util'

	export default {
		name: 'Page',
		props: ['sidebarItems'],

        data(){
			return {
				url: ''
            }
        },

		// beforeMount() {
		// 	const protocol = location.protocol
		// 	const slashes = protocol.concat('//')
		// 	this.host = slashes.concat(window.location.hostname)
		// },

		computed: {
			showComments() {
				return process.env.NODE_ENV !== 'development' &&
					this.$page.frontmatter.type &&
					this.$page.frontmatter.type === 'post' &&
					this.$page.path !== '/blog/' // TODO: Add way to remove comments per post
			},

			lastUpdated() {
				const d = new Date(this.$page.lastUpdated)
				return d.getDate() + '/' +
					(d.getUTCMonth() + 1) + '/' +
					(d.getUTCFullYear() + 1)
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

				} else if (prev) {
					return resolvePage(this.$site.pages, prev, this.$route.path)
				} else {
					return resolvePrev(this.$page, this.sidebarItems)
				}
			},

			next() {
				const next = this.$page.frontmatter.next
				if (next === false) {

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

			disqusIdentifier() {
				return this.$page.frontmatter.disqus || this.$page.path
			},

			disqusUrl() {
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
.vssue
    padding 0 !important

button.vssue-button:hover
    @apply bg-green !important
    @apply text-white !important
    @apply border-transparent !important

button.vssue-button
    @apply bg-transparent !important
    @apply shadow !important
    @apply text-green-dark !important
    @apply font-semibold !important
    @apply py-2 !important
    @apply px-4 !important
    @apply border !important
    @apply border-green !important
    @apply rounded !important

span.vssue-header-powered-by
    display none
</style>
