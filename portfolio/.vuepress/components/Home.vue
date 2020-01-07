<template>
    <main class="mt-5 flex flex-col" aria-labelledby="main-title">
        <div class="flex mb-4 flex-wrap justify-center">

            <header class="hero uppercase font-mono px-4 py-2 m-2 text-center text-black">

                <div class="animated fadeInDown">
                    <img v-if="data.heroImage" class="rounded shadow-lg" :src="$withBase(data.heroImage)"
                         :alt="data.heroAlt || 'hero'"/>

                    <h1 class="font-mono text-2xl sm:text-3xl font-bold tracking-wide" v-if="data.heroText !== null" id="main-title">{{
                        data.heroText ||
                        $title || 'Hello' }}</h1>
                </div>

                <vue-typed-js
                  :strings="['Full stack', 'Lead', 'Web', 'Exploit']"
                  :repeat='Infinity'
                  :shuffle='true'
                  initial-action='erasing'
                  :typeSpeed="100"
                  :backSpeed="30"
                  :backDelay="4000"
                  :pre-erase-delay='7000'
                  :pre-type-delay='5000'
                  :type-delay='3500'
                  :erase-delay='7500'
                  :erase-on-complete='false'
                  caret-animation='blink'
                  erase-style='select-back'
                  :loop="true">
                  <p class="description my-6 mx-auto leading-tight font-mono text-xl md:text-2xl">
                    <span class="typing"></span>developer,
                    <br />adepto da convenção sobre configuração.
                  </p>
                    <!-- {{ //data.tagline || $description || 'Welcome to your VuePress site' }} -->
                </vue-typed-js>

                <div class="links py-2 sm:text-xl sm:flex sm:flex-row sm:justify-between tracking-wide"
                     v-if="data.links && data.links.length">
                    <div class="link py-6" v-for="(link, index) in activeLinks" :key="index">
                        <router-link class="hover:text-black text-green-500"
                                     active-class="active"
                                     :to="link.href"
                                     v-text="link.title"
                                     v-if="!link.external"
                                     exact/>
                        <a v-else
                           :href="nav.link"
                           target="_blank">{{ nav.text }}</a>
                    </div>
                </div>
            </header>

        </div>
    </main>
</template>

<script>
	export default {
		computed: {
			data() {
				return this.$page.frontmatter
			},

			activeLinks() {
				return this.data.links.filter(link => !link.draft)
			},
			actionLink() {
				return {
					link: this.data.actionLink,
					text: this.data.actionText
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
    //    .bg-accent
    //        background-color $accentColor

    /*
    .home
      padding $navbarHeight 2rem 0
      max-width 960px
      .hero
        img
          max-width: 100%
          max-height 280px
          display block
          margin 3rem auto 1.5rem
        .description
          max-width 35rem
          color lighten($textColor, 40%)
        .action-button
          transition background-color .1s ease
          box-sizing border-box
      .links
        border-top 1px solid $borderColor
        padding 1.2rem 0
        margin-top 2.5rem
        display flex
        flex-wrap wrap
        align-items flex-start
        align-content stretch
        justify-content space-between
      .link
        flex-grow 1
        flex-basis 30%
        max-width 30%
        h2
          font-size 1.4rem
          font-weight 500
          border-bottom none
          padding-bottom 0
          color lighten($textColor, 10%)
        p
          color lighten($textColor, 25%)

    */
</style>
