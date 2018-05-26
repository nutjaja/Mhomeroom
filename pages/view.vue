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
  data() {
    return {
      photo: '/icon.png',
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
