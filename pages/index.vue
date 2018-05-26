<template>

  <div>
    <div id="app">
      <v-app id="inspire">
        <v-layout row>
          <v-flex xs20 sm6 offset-sm3>
            <v-card height="900px">
              <v-toolbar color="blue" dark>

                <v-toolbar-title>
                  <h2><img src="../images/vec_logo.gif" height="50"> M-Homeroom </h2>
                </v-toolbar-title>
                <v-spacer/>
                <v-btn icon>
                  <v-icon >touch_app</v-icon>
                </v-btn>
                <v-toolbar-side-icon/>
              </v-toolbar>
              <v-list three-line>

                <v-layout row>
                  <v-flex>
                    <big><b>::: ระบบบันทึกกิจกรรมโฮมรูมนักเรียน นักศึกษา</b></big>
                    <hr>
                  </v-flex>
                </v-layout>
                <br>
                <v-layout row>
                  <v-flex v-for="hr in hrsave" :key="hr.id">
                    <img :src="'/files/images/' + hr.img" width="100">
                    {{ hr.hrdetail }}

                  </v-flex>

                </v-layout>

                <table border="0" width="100%" align="center">
                  <tr v-for="hr in hrsave" :key="hr.id">
                    <td><img :src="'/files/images/' + hr.img" width="100"></td>
                    <td>{{ hr.hrdetail }}</td>
                  </tr>
                </table>

              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-app>
    </div>

  </div>

</template>

<script>
let blankForm = {
  login: '',
  pass: '',
}

export default {
  data1: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),

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
