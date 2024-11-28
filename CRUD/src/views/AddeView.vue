<script setup>
import { reactive ,computed,onMounted,watch, ref } from 'vue'
import {useProvinceStore} from '../stores/status'

const formData = reactive({
  firstname : '',
  lastname : '',
  phNumber: '',
  addrss : {
    village: '',
    city : '',
    province : ''
  }
})



const error = ref({
  ftname : null,
  ltname : null,
  phNum : null,
})

const isVali = ref('')

const provinceStore = useProvinceStore()

onMounted ( async () => {
  await provinceStore.loadData()
})

watch(formData, (newValue) =>{
  isVali.value = true
  error.value = {}
  if(newValue.firstname){
    if(!validateFtname(newValue.firstname)){
      isVali.value = false
    }
  }
  if(newValue.lastname){
    if(!validateLtname(newValue.lastname)){
      isVali.value = false
    }
  }
})

const validateFtname = (newValue) => {
  const numberPattern = /\d/
  if (!newValue){
    error.value.ftname = 'Firstname required'
    isVali.value = !isVali.value
    console.log('firstname : ' , isVali.value);
  }
  else if (numberPattern.test(newValue)){
    error.value.ftname = 'Firstname have number'
    isVali.value = !isVali.value
    console.log('firstname : ' , isVali.value);
  }
  else {
    error.value.ftname = null
  }
}

const validateLtname = (newValue) => {
  const numberPattern = /\d/
  if(!newValue){
    error.value.ltname = 'Lastname required'
    return false
  }
  else if (numberPattern.test(newValue)){
    error.value.ltname = 'Lastname have number'
    return false
  }else {
    error.value.ltname = null
  }
}



const addeData = () =>{
    
  }


const fullname = computed(() => {
  return `${formData.firstname}  ${formData.lastname}`
})
</script>


<template>
  <div class="form_list">
    <div class="fom_child">
      <h1>Adde Student data</h1>
      <div>
        <div class="fullname">
          Fullname : {{ fullname }}
        </div>
        <div class="from_input">
          Firstname:
          <input type="text" v-model="formData.firstname">
          <div v-if="error.ftname">{{ error.ftname }}</div>
        </div>
        <div class="from_input">
          Lastname:
          <input type="text" v-model="formData.lastname">
          <div v-if="error.ltname">{{ error.ltname }}</div>
        </div>
        <div class="from_input">
          Phone number : <span style="padding: 0 10px 0 0">+856</span>
          <input type="text" v-model="formData.phNumber">
        </div>
        <div class="from_input">
          Address:
           <div class="status">
            <div>
              Village:
              <input type="text" placeholder="village" v-model="formData.addrss.village">
            </div>
            <div>
              City:
              <input type="text" placeholder="city" v-model="formData.addrss.city">
            </div>
            <div>
              Province :
              <select v-model="formData.addrss.province" v-if="provinceStore.list.length">
                <option v-for="province in provinceStore.list">
                  {{ province.province }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="form_btn">
          <RouterLink :to="{name : 'home-list'  }">
            <button @click="addeData()" style="background-color: green;">Adde Data</button>
            <button style="background-color: red;">Clean</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- Style for fromData -->

<style>
.form_list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .fom_child {
    margin-top: 3rem;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 2rem;
    height: 60vh;
    width: 30%;
    h1 {
      text-align: center;
    }
    .fullname {
      padding: 10px;
    }
    .from_input {
      padding: 10px;
      input,select{
        width: 50%;
        height: 20px;
        outline: none;
        border-bottom: 2px solid #000;
        border-top: none;
        border-left: none;
        border-right: none;
      }
 
    }


    .status{
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
        padding: 20px;
    }

    .form_btn {
      button {
        margin:1rem  3rem 0 0; 
        padding: 10px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
      }
    }


  }

}
</style>

