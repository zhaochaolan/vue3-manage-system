<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="emitter">emitter</button>
  </div>
</template>

<script setup lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getCurrentInstance } from 'vue';

const ins = getCurrentInstance();
const msg = '123'
function emitter () {
  ins?.proxy?.emitter.emit('helloEvent',{msg:'hello'});
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
