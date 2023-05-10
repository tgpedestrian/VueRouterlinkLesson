<script>
export default{

    //props  是一個用於父子組件通信的機制。它允許父組件向子組件傳遞數據，從而實現組件之間的解耦和複用。
    props :[ "imgData","imgTitle"],
    
}
</script>


<template>
    <div class="card" >
        <img :src="imgData" :alt="imgTitle">
        <h2>{{ imgTitle }}</h2>


    </div>

</template>

<style></style>