<template>
<div class="body h-screen w-full">
  <div class="absolute h-full w-full mt-56">
    <div class="cloud x1"></div>
    <!-- Time for multiple clouds to dance around -->
    <div class="cloud x2"></div>
    <div class="cloud x3"></div>
    <div class="cloud x4"></div>
    <div class="cloud x5"></div>
  </div>
  <div class='c pt-10'>
    <div class='_404'>404</div>
    <div class='_1'>NOT FOUND</div>
    <div class='_3 pb-5' v-text="msg"></div>
    <router-link to="/" class="btn">Voltar</router-link>
  </div>
</div>

    <!--<div class="content">-->
      <!--<h1>404</h1>-->
      <!--<blockquote>{{ getMsg() }}</blockquote>-->
      <!--<router-link to="/">Take me home.</router-link>-->
    <!--</div>-->
</template>
<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  computed: {
    msg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
<style lang="stylus">
  .body
    color #fff
    background-color #33cc99
    font-family 'Open Sans', sans-serif;
  .c{
    text-align: center;
    display: block;
    position: relative;
  }
  ._404{
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  ._1{
    text-align:center;
    display:block;
    position:relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
  }
  ._2{
    text-align:center;
    display:block;
    position: relative;
    font-size: 20px;
  }
  ._2{
    text-align:center;
    display:block;
    position: relative;
    font-size: 20px;
  }
  ._3{
    text-align:center;
    display:block;
    position: relative;
    padding-top 15px
  }
  .text{
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }

  .btn:hover {
    background-color #fff
    color: #33cc99
  }
  .btn{
    border: solid .2em #fff
    background-color #33cc99
    position: relative;
    display: inline-block;
    width: 358px;
    padding: 5px;
    z-index: 5;
    font-size: 25px;
    margin:0 auto;
    color: #fff;
    text-decoration: none;
    margin-right: 10px
  }
  .right{
    float:right;
    width:60%;
  }

  /*Time to finalise the cloud shape*/
  .cloud {
    width: 200px; height: 60px;
    background: #fff;

    border-radius: 200px;
    -moz-border-radius: 200px;
    -webkit-border-radius: 200px;

    position: relative;
  }

  .cloud:before, .cloud:after {
    content: '';
    position: absolute;
    background: #fff;
    width: 100px; height: 80px;
    position: absolute; top: -15px; left: 10px;

    border-radius: 100px;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;

    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -moz-transform: rotate(30deg);
  }

  .cloud:after {
    width: 120px; height: 120px;
    top: -55px; left: auto; right: 15px;
  }

  /*Time to animate*/
  .x1 {
    left: 500px
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }

  /*variable speed, opacity, and position of clouds for realistic effect*/
  .x2 {
    left: calc(300px + 200px)

    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6; /*opacity proportional to the size*/

    /*Speed will also be proportional to the size and opacity*/
    /*More the speed. Less the time in 's' = seconds*/
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }

  .x3 {
    left: calc(300px + -250px); top: -200px;

    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.8; /*opacity proportional to the size*/

    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }

  .x4 {
    left: calc(300px + 470px); top: -250px;

    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75; /*opacity proportional to the size*/

    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }

  .x5 {
    left: calc(300px + -150px); top: -150px;

    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.8; /*opacity proportional to the size*/

    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }

  @-webkit-keyframes moveclouds {
    0% {margin-left: 1000px;}
    100% {margin-left: -1000px;}
  }
  @-moz-keyframes moveclouds {
    0% {margin-left: 1000px;}
    100% {margin-left: -1000px;}
  }
  @-o-keyframes moveclouds {
    0% {margin-left: 1000px;}
    100% {margin-left: -1000px;}
  }
</style>
