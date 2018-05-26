<template>
<<<<<<< HEAD
  <div>
    <img :src="photo" alt="">
  </div>
=======
    <div>
        <img :src="photo" alt="">
        <v-text-field  label="บันทึกข้อมูล"/>
        <v-btn @click="save">Save</v-btn>
    </div>
>>>>>>> 0ff6013beb7482e4befa7d403628aff14e4ff080
</template>
<script>
export default {
<<<<<<< HEAD
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
=======
  data() {
    return {
      photo: '/icon.png',
>>>>>>> 4dd7d3f775382bb8435fc58ea4603b14afd8c65f
    }
  },
  created() {
    let photo = window.localStorage.getItem('photo')
    if (photo) {
      this.photo = photo
    }
  },
}
</script>
