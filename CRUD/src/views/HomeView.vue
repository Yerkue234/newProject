<script setup>
import {RouterLink} from 'vue-router'
import {useProvinceStore} from '../stores/status'
import { onMounted,ref, watch } from 'vue'


import FristFrom from '../component/FristFrom.vue';
import SecondFrom from '../component/secondFrom.vue';
import ThirdFrom from '../component/ThirdFrom.vue';
import FourFrom from '../component/FourFrom.vue';


const useProv = useProvinceStore()
const isvali = useProv.isVali


</script>

<template>
  <div class="list_show">
    <div>
      <h1 style="text-align: center;">This is show Information  </h1>
      <div v-if="isvali.first">
        <FristFrom/>
      </div>
      <div v-if="isvali.second">
        <SecondFrom/>
      </div>
      <div v-if="isvali.third">
        <ThirdFrom/>
      </div>
      <div v-if="isvali.fourth">
        <FourFrom/>
      </div>
      <div>
        <p> Pleacse ,  Enter the button to adde your information student  </p>
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
