<template>
    <div>
        <!--<input class="appearance-none block w-full bg-grey-200 text-grey-700 border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey-500"-->
        <!--id="grid-cidade" type="text">-->
        <select class="block appearance-none w-full bg-grey-200 border border-grey-200 text-grey-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey-500"
                v-model="cidade"
                :id="id">
            <option v-for="cidade in cidadesList" :value="cidade">{{cidade}}</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>
</template>
<script>
	import brasil from '../../setup/brasil.json'

	export default {
		name: 'Cidades',
		props: {
			id: {
				type: String,
				required: false
			},
			estado: {
				type: String,
				required: true
			}
		},
		computed: {
			cidadesList() {
				return brasil[this.estado].cidades
			},
		},
		data() {
			return {
				cidade: null,
				brasil
			}
		},
		watch: {
			cidade() {
				this.$emit('onCidadeSelected', this.cidade)
			}
		}
	}
</script>
