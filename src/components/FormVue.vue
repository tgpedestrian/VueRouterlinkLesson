<script>
export default{
    props:["inputText"],
    data() {
        return {
            sourceData:'',
        }
    },
    methods :{
        push(){
            this.$emit("emitPush",this.sourceData)

        }
    }
}
</script>

<template>
    <div class="formDiv">
        <p>{{ sourceData }}</p>
        <form>
            <input type="text" v-model="sourceData">

        <!--    @click  ===>  v-on     :  ====>  v-bind  縮寫寫法 -->
            <button type="button" @click="push" >Click</button>
        </form>
    </div
    >
</template>

<style scoped></style>