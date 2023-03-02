<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{msg}}</h2>
  </div>
</template>
<script setup lang="ts">
import {getCurrentInstance} from 'vue';
import { ref } from 'vue';
const ins = getCurrentInstance();
const msg = ref('');

ins?.proxy?.emitter.on('helloEvent',(p:any) => {
  console.log('收到',p.msg)
  msg.value = p.msg;
})

</script>
