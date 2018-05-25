<template>
  <div>
    <h1>Chat room {{lott}} </h1>
    <div>
      <v-text-field v-model="name" label="ชื่อ"/>
      <v-text-field v-model="text" label="ข้อความ"/>
      <v-btn @click="send">ส่ง</v-btn>
    </div>
    <ul>
      <li v-for="(m, idx) in msg" :key="idx">
        <b>{{ m.name }}</b> พูดว่า {{ m.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      text: '',
      msg: [],
      lott: '',
    }
  }, // data
  created() {
    this.$socket.subscribe('room39', this.onMsg)  //onMsg ตั้งชื่อให้ตรงกับ methods ด้านล่าง
    this.$socket.subscribe('login', this.onLogin)
    this.$socket.subscribe('lotto', this.onLotto)    
  },
  beforeDestroy() {
    this.$socket.unsubscribe('room39')
    this.$socket.unsubscribe('login')
    this.$socket.unsubscribe('lotto')    
  },
  methods: {
    send() { 
      this.$socket.publish('room39', {
        name: this.name,
        text: this.text,
      })
    },
    onMsg(data) {
      this.msg.unshift(data)
      this.mis.splice(5) //ควบคุมค่าการแสดงผลแค่ 5 แต่ข้อมูลจะหายไปหมดเลย
    },
    onLogin(data) {
      console.log('login=', data)
    },
    onLotto(data) {
      this.lott = data
      console.log('lotto=', data)
    },
  }, // methods
}
</script>
