<template>
    <div class="mt-5 flex flex-wrap justify-center">
            <Projeto
                    v-for="(projeto, i) in shouldShowProjects"
                    :key="`${i}-${projeto.title}`"
                    :title="projeto.title"
                    :href="projeto.href"
                    :photo="projeto.photo"
                    :description="projeto.description"
                    :date="projeto.date"
                    :tags="projeto.tags"
            />
    </div>
</template>
<script>
	import Projeto from './Projeto.vue'

	export default {
		name: 'BaseProjeto',
		computed: {
			shouldShowProjects() {
				return [
					...this.$page.frontmatter.projetos
                        .filter(project => {
                            return (project.href && project.href !== '#')
						})
                        .filter(project => ! project.draft)
				]
			},

		}
	}
</script>
<style lang="stylus">
</style>
