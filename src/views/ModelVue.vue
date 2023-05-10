<script>
export default {
    data() {
        return {
            isShow : false,
        }
    },
    methods:{
        change(){
            this.isShow = !this.isShow;
        }
    },
    beforeCreate(){
        const account = sessionStorage.getItem('account')
        const password = sessionStorage.getItem('password')
        if(account !== "abcd" || password !== "123456"){
            alert('GGGGG')
        }
    }
}
</script>


<template>
    <div class="modelClass"> 
        <h2>model</h2>
        <button @click="change" type="button">open</button>
    </div>

    <div v-if="isShow" class="model">
        <div class="card">
            <h1>TiTle</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Fuga, fugit. Nulla dicta, nihil alias incidunt quaerat doloremque 
                eum quos quod maxime dolor reprehenderit harum consectetur error officia vel nostrum
                 aperiam.</p>
            <button @click="change" type="button">close</button>
        </div>

        
        <div class="bg"></div>
    </div>
</template>

<style scoped lang="scss">
.model{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  

    .card{
        background-color: azure;
        width: 30rem;
        border-radius: 2rem;
        padding: 2rem;
        h1{
            text-align: center;
            margin: 0;
        }

        .button{

        }
       
    }

    .bg{
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.6;
        z-index: -1;
        position: fixed;
    }

}

</style>