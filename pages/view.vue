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
           let ph = photo.substring(0,',',1)
            console.log('enc', ph)
           this.photo = photo
       }
    }
}
</script>
