<script>
import emitVue from '../components/FormVue.vue'
export default {
    components : {
        emitVue
},
data() {
    return {
         inputText : "1511565661"
    }
},
methods:{
    getPush(sourceData){
        this.inputText = sourceData;
    }
},

}
</script>

<template>
    <div class="emitVueHeader">
        <h2>Emit</h2>
        <P>{{ inputText}}</P>
        <br>

        <emitVue  v-on:emitPush="getPush" />
    </div
    >
</template>

<style scoped>
.emitVueHeader{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>