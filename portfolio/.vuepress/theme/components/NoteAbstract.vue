<template>
  <div class="w-full">
    <div
      v-for="item in formatData"
      :key="item.path"
      class="abstract-item text-grey-600  flex flex-col">

        <router-link
                class="pb-5"
          :to="item.path">{{item.title}}</router-link>

      <div class="abstract" v-html="item.excerpt"></div>
      <hr>
      <PageInfo :pageInfo="item" :currentTag="currentTag" @currentTag="getCurrentTag"></PageInfo>
    </div>
  </div>
</template>

<script>
import PageInfo from '@theme/components/PageInfo.vue'

export default {
  name: 'NoteAbstract',
  components: { PageInfo },
  props: ['data', 'currentPage', 'currentTag'],
  computed: {
    formatData () {
      const data = this.data
      const currentPage = this.currentPage
      return data.slice(currentPage * 10 - 10, currentPage * 10)
    }
  },
  methods: {
    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    }
  }
}
</script>

<style lang="stylus" scoped>
/*@import '../../styles/config.styl'*/
  a:hover
    background-color transparent

  .abstract-item
    margin: 0 auto 20px;
    padding: 16px 20px;
    width 100%
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    box-sizing: border-box;
    transition all .3s
    background-color $bgColor
    &:hover
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
    /*.title
      position: relative;
      font-size: 1.28rem;
      line-height: 36px;
      display: inline-block;
      :after
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: $accentColor;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        transition: .3s ease-in-out;
      :hover:after
        visibility visible
        -webkit-transform: scaleX(1);
        transform: scaleX(1);*/
    .tags
      .tag-item
        cursor: pointer;
        &.active
          color $accentColor
        &:hover
          color $accentColor

</style>
