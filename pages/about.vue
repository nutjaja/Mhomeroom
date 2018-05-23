<template>
  <div> 
    <h1 v-if="ok"> About <i>{{upperName}}</i></h1>
    <h1> About <i>{{newName}}</i></h1>  
    <h2 v-show="ok"> Age <i>{{age}}</i></h2>
    <input :value="name" type="text"> <br>
    <input v-model="name" type="text"> <br>
    <input v-model="org" type="text"> <br>    
    <button @click="doSave">SAVE</button> <br>
    <button @click="doAdd">ADD MEMBER</button>    
    <table>
      <th>
        <td>ลำดับ</td>
        <td>ชื่อ</td>
        <td>หน่วยงาน</td>
      </th>
    </table>
    <tbody>
      <tr v-for="mem in members" :key="mem.id"
          :class="{gray: mem.id % 2 === 0, text: true}"
          class="text">
        <td >{{mem.id}}</td>
        <td>{{mem.name}}</td>
        <td>{{mem.org}}</td>
      </tr>
    </tbody>
  </div>
</template>
<script>
export default {
  data(){
    return{ 
      name: "Nutja",
      age: 25,
      ok: true,
      members: [
        { id: 1, name:"Nutjaree", org:"CVC"},
        { id: 2, name:"Tawatchai", org:"CVK"},
        { id: 3, name:"Suriya", org:"KVC"}
      ]
    }
  },
  computed:{
    upperName(){
      return this.name.toUpperCase()
    },
    newName(){
      var tmp = this.name.split(' ')
      if (tmp.length === 1){
        return this.name
      }
      return tmp[0] + ' ' + tmp[1].substr(0, 1)
    },    
  },
  methods:{
    doSave(){
      this.name += '*'
      this.ok = !this.ok  //กดปุ่มแล้วซ่อน กดปุ่มแล้วแสดง 
    },
    doSave2(){
      this.name = this.newName  
      this.doSave()
    },
    doAdd(){
      let id = this.members.length + 1
      this.members.push({
        id: id,
        name: `Name$`+id,
        org : `Org$`+id})
    },
  },

}
</script>
<style scoped>
.text{
  color: blue;
}
.gray{
  background-color: plum;
}
</style>

