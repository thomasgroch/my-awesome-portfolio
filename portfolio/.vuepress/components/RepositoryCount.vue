<template>
	<a :href="href"
		target="_blank">
		<font-awesome-icon :icon="icon"></font-awesome-icon>
    <span class="tracking-wider" v-text="displayTotal"></span>
	</a>
</template>
<script>
	import axios from 'axios'

	export default {
		name: 'RepositoryCount',
		props: {
			provider: {
				type: String,
				default: () => 'github'
			}
		},
		data() {
			return {
				displayTotal: 0,
				local_items: [],
				config: {
					'github': {
						'url': 'https://api.github.com/users/thomasgroch/repos?per_page=100',
						'href': 'https://github.com/thomasgroch',
						'icon': ['fab', 'github'],
					},
					'gist': {
						'url': 'https://api.github.com/users/thomasgroch/gists?per_page=100',
						'href': 'https://gist.github.com/thomasgroch',
						'icon': 'sticky-note',
					},
					'gitlab': {
						'url': 'https://gitlab.com/api/v4/users/thomas.groch/projects?per_page=100',
						'href': 'https://gitlab.com/thomas.groch',
						'icon': ['fab', 'gitlab'],
					},
				}
			}
		},
		computed: {
			total() {
				return this.local_items.length
			},
			providerUrl() {
				return this.config[this.provider].url
			},
			href() {
				return this.config[this.provider].href
			},
			icon() {
				return this.config[this.provider].icon
			}
		},
		methods: {
			async fetchRepository() {
				try {
					const response = await axios({
						url: this.providerUrl,
						method: 'GET'
					})
					this.local_items = response.data
				} catch (error) {
					console.error(error)
				}
			},
		},
		created() {
			this.fetchRepository()
		},
		watch: {
			total() {
				clearInterval(this.interval)
				if (this.total === this.displayTotal) {
					return
				}
				this.interval = window.setInterval(() => {
					if (this.displayTotal !== this.total) {
						let change = (this.total - this.displayTotal) / 10
						change = change >= 0 ? Math.ceil(change) : Math.floor(change)
						this.displayTotal = this.displayTotal + change
					}
				}, 50)
			}
		}
	}
</script>
<style lang="stylus" scoped>
span:before
	content "+"
a
	color white
</style>
