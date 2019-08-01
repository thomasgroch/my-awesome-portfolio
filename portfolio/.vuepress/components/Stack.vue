<template>
<span v-if="item.domain">
    <img :src="image" />{{ item.title }}
</span>
</template>

<script>
	export default {
		name: 'Stack',
		props: {
			'item': {
				type: Object,
				default: function () {
					return {
						name: '',
						domain: ''
					}
				}
			},
		},
        methods:{
			getHostName(url) {
                const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
                if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
                    return match[2]
                }
                return null
            }
        },
		computed: {
			title(){
				return (this.item.name) ? this.item.name : this.getHostName(this.item.domain)
            },
			image(){
				return 'https://logo.clearbit.com/' + this.item.domain
			}
		}
	}
</script>

<style scoped>

</style>
