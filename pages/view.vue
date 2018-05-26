<template>
    <div>
        <img :src="photo" alt="">
        <v-text-field  label="บันทึกข้อมูล"/>
        <v-btn @click="save">Save</v-btn>
    </div>
</template>
<script>
export default {
  data() {
    return {
      photo: '/icon.png',
           
       }
    },

    created(){
       let photo = window.localStorage.getItem('photo')
       if (photo){
           let ph = photo.substring(0,',',1)
            console.log('enc', ph)
           this.photo = photo
       }
    },
    methods: {
        save(){
            this.$router.push('/checkin')
        }
    }
}

</script>
