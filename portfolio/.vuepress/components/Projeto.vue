<template>
<div class="my-5 sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
    <div class="mx-5 rounded shadow-lg min-h-full">
    <img class="w-full" :src="displayImage" :alt="title" />

    <div class="px-2 py-4">
        <div class="mb-2 font-mono flex items-center justify-between leading-tight">
			 <span><a class="font-bold text-xl"
               :href="href"
               target="_blank"
               v-text="title"
               rel="noopener noreferrer"></a>
			   </span>
            <span class="text-sm">
                {{ displayDate }}
            </span>
        </div>
        <p class="text-grey-700 text-base">
            {{ description }}
        </p>
    </div>

    <div class="px-6 py-4">
                <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2 mb-2"
                      v-if="tags.length > 0"
                      v-for="tag in tags">#{{ tag }}</span>
    </div>
    </div>
</div>
</template>
<script>
	import moment from 'moment'
	import 'moment/locale/pt-br'

	export default {
		name: 'Projeto',
		props: {
			title: {
				type: String,
				required: true
			},
			href: {
				type: String,
				required: true,
				default: () => '#'
			},
			description: String,
			date: String,
			tags: {
				type: Array,
				required: false
			}
		},
		beforeMount(){
			const protocol = location.protocol
			const slashes = protocol.concat('//')
			this.host = slashes.concat(window.location.hostname)
        },
		computed: {
			displayImage() {
				// return 'https://http2pic.haschek.at/api.php?' +
				// 	'onfail=' + encodeURI(this.host + '/images/no-image.svg') +
				// 	'&ondomainfail=' + encodeURI(this.host + '/images/no-image.svg') +
				// 	'&js=yes' +
				// 	'&type=png' +
				// 	'&cache=1' +
				// 	'&viewport=810x400' +
				// 	'&url=' + encodeURI(this.href)
					return 'https://render-tron.appspot.com/screenshot/' + encodeURI(this.href)
			},
			displayDate() {
				try {
					const m = moment(this.date)
					m.locale('pt-BR')
					return m.format('MMM YY')
				}catch (e) {
                    return ''
				}
			}
		},
		data() {
			return {
				host: ''
            }
		}
	}
</script>
<style lang="stylus">
</style>
