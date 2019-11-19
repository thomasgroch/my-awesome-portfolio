<template>
    <div class="flex flex-wrap w-full self-center justify-center">
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
		computed: {
			techs() {
                return this.techsGroup && this.techsGroup.filter(tech => {
                    return (tech.href && tech.href !== '#')
                })
			},
			techsGroup() {
				return this.$page.frontmatter[this.group]
			}

		}
	}
</script>
