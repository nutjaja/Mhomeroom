<template>
 <div>

  <v-footer height="auto">
    <v-card flat tile class="flex">
      <v-card-title class="blue darken-4 white--text">
        <strong class="subheading"><h1><img src="/images/vec_logo.gif" height="50"> M-Homeroom </h1></strong>
        <v-spacer></v-spacer>
        <v-btn icon to="/">
          <v-icon color="white">touch_app</v-icon><font color="white"> Logout .</font>
        </v-btn>
      </v-card-title>
      <v-card-text class="grey lighten-3">
        <v-content>
          <nuxt/>
        </v-content>
      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center">
        <strong> &copy;Copyright : 2018 — VEC Group. 1 ... Date. 27/05/2018 </strong>
      </v-card-actions>
    </v-card>
  </v-footer>

</div>
</template>

<script>
export default {
  computed: {
    user() { // สร้าง user ขึ้นมา สามารถนำไปใส่หน้าอื่น ๆ ได้
      return this.$store.state.user
    },
    online: {
      get() {
        return this.$store.state.online
      },
      set(value) {
        this.$store.commit('setOnline', value)
      },
    },
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },

  async created() {
  //      this.$sture.commit('setUser', {}) // save user
    let ok = await this.$store.dispatch('loadUser') // losd user
    if (!ok) {
      return this.$router.replace('/') // replace ไปหน้า login
    }
  }, // created

  mounted() {
    this.$store.commit('setOnline', window.navigator.onLine)
    window.addEventListener('offline', this.toggleNetworkStatus)
    window.addEventListener('online', this.toggleNetworkStatus)
  },

  beforeDestroyed() {
    window.removeEventListener('offline', this.toggleNetworkStatus)
    window.removeEventListener('online', this.toggleNetworkStatus)
  },

  methods: {
    toggleNetworkStatus({ type }) {
      this.online = type === 'online'
    },
  },
}
</script>
