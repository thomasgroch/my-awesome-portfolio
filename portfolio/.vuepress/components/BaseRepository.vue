<template>
    <div class="mt-5 flex flex-col items-center">
            <!-- <p class="pb-5">projetos open sources</p> -->
            <ul class="flex mb-4 justify-center list-reset">
                <li class="inline-block text-center border border-green-500 rounded py-2 px-4 mr-4 bg-green-500 hover:bg-green-600 text-white min:w-1/5">
                    <repository-count/>
                </li>
                <li class="inline-block text-center border border-green-500 rounded py-2 px-4 mr-4 bg-green-500 hover:bg-green-600 text-white min:w-1/5">
                    <repository-count provider="gist"/>
                </li>
                <li class="inline-block text-center border border-green-500 rounded py-2 px-4 mr-4 bg-green-500 hover:bg-green-600 text-white min:w-1/5">
                    <repository-count provider="gitlab"/>
                </li>
            </ul>

    </div>
</template>
<script>
	import RepositoryCount from './RepositoryCount.vue'

	export default {
		name: 'BaseRepository',
		components: {RepositoryCount}
	}
</script>
<style lang="stylus">
    ul, ol
        padding-left 0
</style>
