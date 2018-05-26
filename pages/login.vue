<template>

<div>

  <v-footer height="auto">
    <v-card flat tile class="flex">
      <v-card-title class="blue darken-4 white--text">
        <strong class="subheading"><h1><img src="../images/vec_logo.gif" height="50"> M-Homeroom </h1></strong>
        <v-spacer></v-spacer>
        <v-btn icon to="/">
          <v-icon color="white">touch_app</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="grey lighten-3">

       <v-layout row> 
          <v-flex >
            <big class="subheading" ><b>::: ระบบบันทึกกิจกรรมโฮมรูมนักเรียน นักศึกษา</b></big>
            <hr>
          </v-flex>
        </v-layout>
        <br>


    <v-layout column>
      <v-flex>
        <v-text-field v-model="form.login" label="ชื่อผู้ใช้"/>
      </v-flex>
      <v-flex>
        <v-text-field v-model="form.pass" label="รหัสผ่าน"/>
      </v-flex>
      <v-flex>
        <v-btn color="primary" @click="doLogin">เข้าสู่ระบบ</v-btn>
      </v-flex>
    </v-layout>

      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center">
        <strong> &copy;Copyright : 2018 — VEC Group. 1 ... Date. 27/05/2018 </strong>
      </v-card-actions>
    </v-card>
  </v-footer>

</div>
</template>

<script>
let blankForm = {
  login: '',
  pass: '',
}

export default {
  layout: 'public',
  data() {
    return {
      form: JSON.parse(JSON.stringify(blankForm)),
    }
  },
  methods: {
    async doLogin() {
      let res = await this.$http.post('/login', this.form)
      if (!res.data.ok) {
        // TODO: login ไม่สำเร็จ
        return
      }
      console.log('login สำเร็จ')
      // 1. จำ user/login
      window.sessionStorage.setItem('user', JSON.stringify(res.data.user))
      // 2. ไปหน้า home
      //  this.$socket.publish('login', `${res.data.user.name}`)
      this.$router.push('/ephoto')
    },
  },
}
</script>
