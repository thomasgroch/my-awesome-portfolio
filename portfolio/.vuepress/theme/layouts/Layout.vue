<template>
    <div class="theme-container"
         :class="pageClasses"
         @touchstart="onTouchStart"
         @touchend="onTouchEnd">
        <!--<Password v-if="!isHasKey"></Password>-->
        <Navbar v-if="shouldShowNavbar"
                @toggle-sidebar="toggleSidebar" />

        <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

        <Sidebar :items="sidebarItems"
                 @toggle-sidebar="toggleSidebar"
                 class="shadow-lg">
            <slot name="sidebar-top" slot="top"/>
            <slot name="sidebar-bottom" slot="bottom"/>
        </Sidebar>

        <div class="custom-layout" v-if="$page.frontmatter.layout">
            <component :is="$page.frontmatter.layout"/>
        </div>

        <!--@tagChange="tagChange"-->
        <Page :sidebar-items="sidebarItems">
            <slot name="page-top" slot="top"/>
            <slot name="page-bottom" slot="bottom"/>
        </Page>

        <div class="text-center text-sm text-grey-dark py-8">
            <p>Siga-me no  <a target="_blank" href="https://twitter.com/thgroch">twitter</a>, ou assine o meu feed <a target="_blank" href="/rss.xml">rss</a>.</p>
            <p>© 2012-2019 Thomas Letsch Groch.<br />
                Esta obra está licenciada sob uma licença <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>
        </div>

        <router-view></router-view>
        <SWUpdatePopup :updateEvent="swUpdateEvent"/>
    </div>
</template>
<script>
	import Vue from 'vue'
	import nprogress from 'nprogress'
	import Navbar from '@theme/components/Navbar.vue'
	import Page from '@theme/components/Page.vue'
	import Sidebar from '@theme/components/Sidebar.vue'

	import SWUpdatePopup from '@theme/components/SWUpdatePopup/'
	import { resolveSidebarItems } from '@parent-theme/util/'

	export default {
		components: { Page, Sidebar, Navbar, SWUpdatePopup},
        name: 'Layout',
		data() {
			return {
				isSidebarOpen: false,
				swUpdateEvent: null,
				valineRefresh: false,
				isHasKey: true
			}
		},

		computed: {
			shouldShowNavbar() {
				const {themeConfig} = this.$site
				const {frontmatter} = this.$page
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

			shouldShowSidebar() {
				const {frontmatter} = this.$page
				return (
					!frontmatter.home
					&& frontmatter.sidebar !== false
					&& this.sidebarItems.length
				)
			},

			sidebarItems() {
				return resolveSidebarItems(
					this.$page,
					this.$page.regularPath,
					this.$site,
					this.$localePath
				)
			},

			pageClasses() {
				const userPageClass = this.$page.frontmatter.pageClass
				return [
					{
						'no-navbar': !this.shouldShowNavbar,
						'sidebar-open': this.isSidebarOpen,
						'no-sidebar': !this.shouldShowSidebar
					},
					userPageClass
				]
			}
		},

		async mounted() {
			const Darkmode = await import('darkmode-js')
			const options = {
				bottom: '64px', // default: '32px'
				time: '0.5s', // default: '0.3s'
				mixColor: '#fff', // default: '#fff'
				backgroundColor: '#fff',  // default: '#fff'
				buttonColorDark: '#100f2c',  // default: '#100f2c'
				buttonColorLight: '#fff', // default: '#fff'
				label: '🌓' // default: ''
			}

			const darkmode = new Darkmode.default(options)
			darkmode.showWidget()

			// configure progress bar
			nprogress.configure({ showSpinner: true })
			this.$router.beforeEach((to, from, next) => {
				if (to.path !== from.path && !Vue.component(to.name)) {
					nprogress.start()
				}
				next()
			})

			this.$router.afterEach(() => {
				nprogress.done()
				this.isSidebarOpen = false
			})


			this.$on("sw-updated", this.onSWUpdated);
			// const keyPage = this.$site.themeConfig.keyPage
			// if (!keyPage) {
			// 	this.isHasKey =  true
			// }

			// const {keys} = keyPage
			// this.isHasKey = keys.indexOf(sessionStorage.getItem('key')) > -1
		},

		methods: {
			tagChange () {
				this.valineRefresh = true
				setTimeout(() => {
					this.valineRefresh = false
				}, 300)
			},
			toggleSidebar(to) {
				this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
			},
			// side swipe
			onTouchStart(e) {
				this.touchStart = {
					x: e.changedTouches[0].clientX,
					y: e.changedTouches[0].clientY
				};
			},
			onTouchEnd(e) {
				const dx = e.changedTouches[0].clientX - this.touchStart.x;
				const dy = e.changedTouches[0].clientY - this.touchStart.y;
				if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
					if (dx > 0 && this.touchStart.x <= 80) {
						this.toggleSidebar(true);
					} else {
						this.toggleSidebar(false);
					}
				}
			},
			onSWUpdated(e) {
				this.swUpdateEvent = e;
			}
		}
	}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="@theme/styles/theme.styl" lang="stylus"></style>
<style lang="stylus">
#nprogress .spinner
    display: block
    position: fixed
    z-index: 1031
    top: 15px
    right: 50% !important
.custom-layout a
    text-decoration none
    position: relative;
    font-size: 1.28rem;
    line-height: 36px;
    display: inline-block;
    :after
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: $accentColor;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        transition: .3s ease-in-out;
    :hover:after
        visibility visible
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
</style>
