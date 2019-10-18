<template>
<div class="mr-5 text-center">
  <a :href="item.href"
      target="_blank">
    <img class="shadow h-8 sm:h-16 rounded-full"
         :src="item.photo" />
  </a>

  <div class="border-transparent hover:border-orange-500 border-2 rounded-full mt-2 mb-6  py-2 px-4  text-gray-700 text-md">
    <a v-text="item.name"
      :href="item.href"
      target="_blank"></a>
  </div>
</div>
</template>

<script>
export default {
  name: "StackCard",

  props: {
    item: {
      type: Object,
      default: function() {
        return {
          name:'',
          photo:'',
          href:''
        }
      }
    },
  }
};
</script>
