<template>
 <div class="m-auto md:w-1/2 lg:w-1/2">
    <TopMenu></TopMenu>
    <h1 class="text-center text-2xl text-orange-500 py-3">Stack</h1>

    <p class="text-center text-gray-700 px-10 py-10 content">
      
     <span class="text-lg">{{stack.description}}</span> 

      <div class="flex w-full flex-wrap mb-10 justify-center">
          <StackCard v-for="stack in stack.techs" 
                    :item="stack"
                    :key="stack.name"></StackCard>
      </div>
      
    </p>

    <Footer class="m-auto text-sm text-center"></Footer>
</div>
</template>

<script>
import StackCard from "@/components/cards/StackCard.vue";
import TopMenu from "@/components/TopMenu.vue";
import Footer from "@/components/Footer.vue";
import info from "@/info.json";

export default {
  name: "StackPage",
  data() {
   return {
      stack: info.stack
    }
  },
  components: {
    StackCard,
    TopMenu,
    Footer,
  }
}
</script>