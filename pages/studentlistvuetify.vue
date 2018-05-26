dfd;fjsdfkjasdf;lk
<template>
  <v-container>
    <v-layout column>
      <v-flex><v-select v-model="room" :items="roomList"/></v-flex>
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="students2"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.code }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.room }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      room: '3',
      headers: [
        {
          text: 'รหัส',
          align: 'left',
          value: 'code',
        },
        { text: 'ชื่อ - นามสกุล', value: 'name' },
        { text: 'ห้อง', value: 'room' },
      ],
    }
  }, // data
  computed: {
    students() {
      return this.$store.state.students
    },
    roomList() {
      return Object.keys(this.students.reduce((p, st) => {
        p[st.room] = st.room
        return p
      }, {}))
    },
    students2() {
      return this.students.filter(st => st.room === this.room)
    },
  }, // computed
}
</script>
