<template>
    <div>
        <img :src="photo" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            photo: '/icon.png'
        }
    },
    created(){
       let photo = window.localStorage.getItem('photo')
       if (photo){
           this.photo = photo
       }
    }
}
</script>
