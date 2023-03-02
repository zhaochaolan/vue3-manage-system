import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局挂载 引入组件间通信中间件mitt
import Mitt from './lib/Bus';


const app = createApp(App);



//app.config.globalProperties替代vue2中的Vue.prototype,用于注册能够被应用内所有组件实例访问的全局属性的对象
app.config.globalProperties.emitter = Mitt;

app.use(store).use(router);


app.mount('#app')
