<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <AboutView></AboutView>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import AboutView from '@/views/AboutView.vue';


@Options({
  components: {
    HelloWorld,AboutView
  },
})
export default class HomeView extends Vue {}
</script>
