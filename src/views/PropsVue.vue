<script>
import Child from'../components/ChildVue.vue';
export default{
components : {
    Child
},
data() {
    return {
        title : "",
        cardData : [{img:"../../public/下載.png",title:" i am card"},{img:"../../public/favicon.ico",title:" i am card"}]
    }
},
}
</script>


<template>
    <div >
                    <!-- src:＂＂   alt:""  尋找單一筆--> 
        <!-- <Child :imgData = "cardData[0].img" :imgTitle="cardData[0].title" /> -->

        <!-- 尋陣列 用 v-for ="變數 in 遍歷的對象 "-->
        <Child v-for="item in cardData" :imgData = "item.img" :imgTitle="item.title" />

    </div>


</template>

<style scoped></style>