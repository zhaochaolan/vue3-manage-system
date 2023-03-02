import mitt from "mitt";
const Mitt = mitt();
// TypeScript注册，必须注册ComponentCustomProperties类型才能获得类型提示
declare module 'vue' {
export interface ComponentCustomProperties{
        emitter:typeof Mitt
    }
}
export default Mitt;