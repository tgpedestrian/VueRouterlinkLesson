<script>
export default{
        data(){
            return{
                isRounded : false,
                move : false,
                imgNum:0,   
                imgArr: [
                "../../public/Java_logo-2.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_1KgnnFRdcaOqhYWo9uqQjX9JLkspDdOhQ&usqp=CAU",
                // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QiQkZM3bi3tksPadaEgf4uA7ma2v6fQJrg&usqp=CAU",
                ],
                
                
            }
        },
methods :{
        changeRounded(){
            // 第一次案的時候 是 false第二次是 true
            this.isRounded = !this.isRounded;
            this.move = !this.move;
        },
        changImg(){
            // 三源判斷式  如果等於1的話 顯示第一張 
            this.imgNum  = this.imgNum===1?0:1
            

        }
            
},
}

</script>


<template>
    <div>
        
        <header>
            <h2>container 的內容</h2>
            <button type="button" @click="changeRounded">Rounded </button>
            <div class="box" v-bind:class="{rounded:isRounded,toRight:move}"></div>
            
            <button type="button" @click="changImg">imgBox</button>
        </header>
    </div>
    <img v-bind:src="imgArr[imgNum]" alt="">


</template>

<style scoped>
header{
    position: relative;

}
.box{
    width: 300px;
    height: 300px;
    background-color: aquamarine;
    position: absolute;
    top: 300px;
    left: 20px;
    transition: 1s;
    
}
.rounded{
    border-radius: 100px;
}
.imgBox1{

}
.toRight{
    left: 500px;
}

</style>