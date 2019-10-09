<template>
    <div class="flex w-full flex-wrap mb-10 justify-center">
        <StackCard v-for="(tech, index) in techs"
                   :item="tech"
                   :key="index"></StackCard>
    </div>
</template>

<script>
	import StackCard from './StackCard.vue'

	export default {
		name: 'BaseStack',
		// data() {
		// 	return {
		// 		stack: info.stack
		// 	}
		// },
		components: {
			StackCard,
		},
        created(){
			console.log(this.$page.frontmatter.techs)
        },
		computed: {
			techs() {
				return [
					...this.$page.frontmatter.techs
						.filter(tech => {
							return (tech.link && tech.link !== '#')
						})
				]
			},

		},
	}
</script>
