<template>
    <div class="flex rounded-lg p-6 mx-auto w-1/3">
        <div class="text-center mx-auto">
            <a :href="item.href"
               class="flex flex-col hover:text-black mx-auto text-center"
               target="_blank">
            <img class="bg-white h-12 w-12 md:h-16 md:w-16 object-cover rounded-full shadow-lg mx-auto"
                 :src="item.photo" />
                <span class=" mt-5">{{item.name}}</span>
            </a>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Stack',
		props: {
			item: {
				type: Object,
				default: function () {
					return {
						name: '',
						photo: '',
						href: ''
					}
				}
			}
		},
		methods: {
			getHostName(url) {
				const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
				if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
					return match[2]
				}
				return null
			}
		},
		computed: {
			title() {
				return (this.item.name) ? this.item.name : this.getHostName(this.item.href)
			}
			,
			image() {
				return 'https://logo.clearbit.com/' + this.item.href
			}
		}
	}
</script>

<style scoped>

</style>
