<template>
<!--    <div v-if="item.href" class="flex justify-center w-32 h-full">-->
<!--        <img :src="image" class="object-cover w-64 flex self-center rounded-full shadow-lg mb-6"/>{{ item.name }}-->
<!--    </div>-->

    <div class="flex flex-col w-16 self-center justify-center min-h-full mx-10 text-center py-5">
        <a :href="item.href"
           target="_blank">
            <img class="justify-center text-center object-cover rounded-full shadow-lg mb-6"
                 :src="item.photo" />
            <span v-text="item.name"
                  class="hover:text-black"
                  :href="item.href"
                  target="_blank"></span>
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
