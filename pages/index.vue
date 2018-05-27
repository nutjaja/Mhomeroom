<template>
 <div>
  <v-footer height="auto" xs12 lg6>
    <v-card flat tile class="flex">
      <v-card-title class="blue darken-4 white--text">
        <strong class="subheading"><h1><img src="/images/vec_logo.gif" height="50"> M-Homeroom </h1></strong>
        <v-spacer></v-spacer>
        <v-btn icon to="/login">
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
        <br><center>
          <img src="/images/pic1.jpg" width="100%">
        </center>
        <br>
        <table border="0" width="100%" align="center">
          <tr v-for="hr in hrsave" :key="hr.id">
            <td align="center" width="120"><img :src="'/files/images/' + hr.img" width="120"></td>
            <td valign="top"><font class="body-2">&nbsp;&nbsp;&nbsp; {{hr.hrdetail}}</font></td>
          </tr>
        </table>
        <center>
          <img src="/images/pic3.png" width="100">
        </center>
      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center">
        <strong> &copy;Copyright : 2018 — VEC Group. 1 </strong>
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
      hrsave: [],
    }
  },

  async created() {
    let res = await this.$http.get('/display/display')
    this.hrsave = res.data.hr
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
      this.$router.push('/home')
    },
  },

}
</script>
