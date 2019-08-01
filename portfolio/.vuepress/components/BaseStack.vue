<template>
    <div class="mt-5 flex flex-col items-center">
        <ul class="flex mb-4 justify-center list-reset">
            <li class="inline-block text-center border border-green rounded py-2 px-4 mr-4 text-white"
                v-for="stack in items">
                <Stack :item="stack"></Stack>
            </li>
        </ul>
    </div>
</template>
<script>
	import Stack from './Stack'
	export default {
		name: 'BaseStack',
		components: {Stack},
		props: {
			'items': {
				type: Array,
                default: function () {
                    return [{
                    	name: '',
						domain: ''
                    }]
				}
			},
            // 'greyscale'
		}
	}
</script>
<style lang="stylus">
</style>
