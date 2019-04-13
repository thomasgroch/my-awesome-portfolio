<template>
    <div>
        <div class="main">
            <slot name="default"/>
            <div class="cat" v-if="page.tag">
                #{{ page.tag }}
            </div>
            <div class="post-list">
                <div class="post-item" v-for="post in page.posts" :key="post.permalink">
                    <h2 class="post-title">
                        <router-link :to="post.attributes.permalink">
                            {{ post.attributes.title }}
                        </router-link>
                    </h2>
                </div>
            </div>
            <div class="pagination" v-if="page.pagination">
                <router-link
                        class="prev"
                        title="anterior"
                        v-if="page.pagination.hasPrev"
                        :to="page.pagination.prevLink">
                    anterior
                </router-link>
                <router-link
                        class="next"
                        title="próximo"
                        v-if="page.pagination.hasNext"
                        :to="page.pagination.nextLink">
                    próximo
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

	export default {
		name: 'Categories',
		props: ['page'],

		head() {
			return {
				title: this.$siteConfig.title,
				meta: [
					{
						name: 'description',
						content: this.$siteConfig.description
					}
				]
			}
		},

		components: {}
	}
</script>

<style scoped lang="stylus">
    .post-title
        font-weight: 300
        font-size: 2rem
        margin: 0 0 15px 0

        a
            color: #b58900
            text-decoration: none

            &:hover
                color: #ff69b4

    .pagination
        margin-top: 30px

        a
            margin-right: 20px
            color: #b58900
            height: 38px
            line-height: 38px
            transition: all .3s ease
            position: relative
            overflow: hidden
            display: inline-block
            background: #eee8d5
            padding: 0 15px
            text-decoration: none

            &:before
                content: attr(title)
                width: 100%
                left: 0
                transform: translateX(-100%)
                text-align: center
                top: 0
                bottom: 0
                background-color: #b58900
                position: absolute
                transition: transform .3s ease
                z-index: 1
                color: #eee8d5

            &:hover
                color: #eee8d5

                &:before
                    transform: translateX(0)

    .cat
        font-size: 5rem
        color: #586e75
        margin-bottom: 20px

    @media screen and (max-width: 768px)
        .post-title
            font-size: 18px

        .cat
            font-size: 2rem
</style>