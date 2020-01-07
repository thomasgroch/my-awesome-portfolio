<template>
<div class="my-5 sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
    <div class="mx-5 rounded shadow-lg min-h-full bg-white flex flex-col">
        <div class="relative pb-2/3">
            <a :href="href" target="_blank" rel="noopener noreferrer">
                <img class="absolute h-full w-full object-cover" :src="displayImage" :alt="title" />
            </a>
        </div>
        <div class="px-6 py-4">
            <div class="mb-2 font-mono flex justify-between leading-tight flex-wrap">
                <a class="font-bold text-xl w-2/3"
                   :href="href"
                   target="_blank"
                   v-text="title"
                   rel="noopener noreferrer"></a>
                <span class="inline-block align-top text-sm text-right">
                    {{ displayDate }}
                </span>
            </div>
            <p class="text-grey-700 text-base">
                {{ description }}
            </p>
        </div>

        <div class="px-6 py-4 h-full inline-block"
             v-if="tags.length > 0">
            <p class="bg-gray-200 rounded-full px-3 py-1 text-xs uppercase tracking-wider font-medium text-black inline-block"
                  v-for="(tag, index) in tags"
                  :key="index">#{{ tag }}</p>
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
			photo: {
				type: String,
				required: false
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
		methods: {
			getHostName(url) {
				if (!url) {
					return null
				}
				const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
				if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
					return match[2]
				}
				return null
			}
		},
		computed: {
			displayImage() {
                if(this.photo){
					return this.photo
				}
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
					return m.format('MMM YY') // default: 'Do MMM YY'
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
