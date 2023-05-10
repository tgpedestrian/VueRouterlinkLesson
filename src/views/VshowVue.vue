<script>
export default{
    data() {
        return {
            isShow : true,
        }
    },
    methods:{
        change(){
            this.isShow = !this.isShow;
        }
    }
}
</script>

<template>
    <div>
        <h2>
            V-show
        </h2>
        <div class="boxes"> 
            <div v-if="isShow" class="box box1"></div>
            <!-- v-show 用於動畫比較多， 只是單純 隱藏  -->
            <div v-show="isShow" class="box box2"></div>
        </div>
        <button type="button" @click="change">change</button>
        
 
 
 </div>
</template>


<style scoped>

.boxes{
    position: relative;
}
.box{
    width: 200px ;
    height: 200px;
    position: absolute;

}
.box1{
   
    top: 100px;
    left: 0;
   
    background-color: rgb(187, 239, 56);
}
.box2{

    top: 100px;
    left: 300px;
    background-color: rgb(239, 211, 56);
}

</style>
