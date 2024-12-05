<script setup>
import {RouterLink} from 'vue-router'
import {useProvinceStore} from '../stores/status'
import { onMounted,ref, watch } from 'vue'

const useProvnce = useProvinceStore()
const datas = useProvnce.datas

const isVali = ref(false)





</script>

<template>
  <div class="list_show">
    <div>
      <h1>This include data : </h1>
      <div>
        <table>
          <tr>
            <th>Student</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone number</th>
          </tr>
          <tr v-for="(data , key ) in datas" :key="key++">
            <td>{{ key }}</td>
            <td>{{ `${data.ftname} ${data.ltname.toUpperCase()}`}}</td>
            <tr>
              <td style="width: 180px;">{{ data.address.village }}</td>
              <td style="width: 30%;">{{ data.address.city }}</td>
              <td style="width: 50%;">{{ data.address.province }}</td>
            </tr>
            <td>{{ data.phNum }}</td>
          </tr>
        </table>
      </div>
      <div>
        
      </div>
      <div>
        <RouterLink :to="{name:'Adde-list' , path:'/province'}">
          <button>Adde data</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

th,td,tr {
  border: 1px solid #dddddd;
  padding: 1rem;
}

button {
  padding: .5rem;
  margin: 1rem 0;
  border-radius: .3rem;
  background-color: rgb(44, 218, 44);
  border: none;
}

.list_show{
  padding: 2rem;
}
</style>
