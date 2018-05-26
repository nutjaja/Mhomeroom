<template>
  <div>
    <div>
      <select v-model="room">
        <option v-for="r in roomList" :key="r" :value="r">ห้อง {{ r }}</option>
      </select>
    </div>
    <table>
      <tr>
        <td>รหัส</td>
        <td>ชื่อ</td>
        <td>ห้อง</td>
      </tr>
      <tr v-for="st in students2" :key="st.code">
        <td>{{ st.code }}</td>
        <td>{{ st.name }}</td>
        <td>{{ st.room }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    let students = []
    for (let i = 1; i <= 100; i++) {
      students.push({
        code: ('' + i).padStart(4, '0'),
        name: `Name${i}`,
        room: '' + Math.ceil(i / 30),
      })
    }
    return {
      students,
      room: '3',
    }
  },
  computed: {
    roomList() {
      // for (let i = 0; i < this.students.length; i++) {
      //   if (out.indexOf(this.students[i].room) === -1) {
      //     out.push(this.students[i].room)
      //   }
      // }
      // let out = {}
      // for (let i = 0; i < this.students.length; i++) {
      //   if (!out[this.students[i].room]) {
      //     out[this.students[i].room] = true
      //   }
      // }
      // return Object.keys(out) // ['1', '2', '3', '4']
      // prev = ['1']
      // return this.students.reduce((prev, st) => {
      //   if (prev.indexOf(st.room) === -1) {
      //     prev.push(st.room)
      //   }
      //   // return prev //อย่าลืม return
      // }, []) //[] ค่าตั้งต้น เป็นอะเรย์ []

      // reduce เป็นการวนลูปตามจำนวนข้อมูลที่มี reduce เหมือนการ sum เลข
      // และต้องการพารามิเตอร์ 2 ตัวคือ  function และค่าตั้งต้น(objectเปล่า ๆๆ)
      // prev คือค่าของรอบที่แล้ว
      return Object.keys(this.students.reduce((p, st) => {
        p[st.room] = st.room
        return p
      }, {})) // ค่าตั้งต้น เป็น object
    },
    students2() {
      return this.students.filter(st => st.room === this.room)
    },
  },
}
</script>
