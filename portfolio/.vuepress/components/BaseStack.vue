<template>
    <div class="flex w-full flex-wrap justify-center">
        <Stack v-for="(tech, index) in techs"
                   :item="tech"
                   :key="index"></Stack>
    </div>
</template>

<script>
	import Stack from './Stack.vue'

	export default {
		name: 'BaseStack',
		props: {
			'group': {
				type: String,
				default: 'techs'
			}
		},
		components: { Stack },
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
