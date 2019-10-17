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
		props: {
			'group': {
				type: String,
				default: 'techs'
			}
		},
		components: { StackCard },
		created() {
			console.log(this.$page.frontmatter[this.group])
			// console.log(this.$page.frontmatter.techs)
		},
		computed: {
			techs() {
                return this.techsGroup && this.techsGroup.filter(tech => {
                    return (tech.photo && tech.photo !== '#')
                })
			},
			techsGroup() {
				return this.$page.frontmatter[this.group]
			}

		}
	}
</script>
