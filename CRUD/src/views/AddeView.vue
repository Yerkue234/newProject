<script setup>
import { reactive ,computed,onMounted,watch, ref } from 'vue'
import {useProvinceStore} from '../stores/status'

const formData = reactive({
  firstname : '',
  lastname : '',
  phNumber: '',
  learn : {
    year : '',
    class: ''
  }
  ,
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


const provinceStore = useProvinceStore()

const isvali = ref('')

const validatename = (newValue) =>{
  const numberPattern = /\d/
    
  if(!newValue){
    error.value.ftname = 'firstname required'
    isvali.value =false
    console.log('firstname :',isvali.value);
  }
  else if (numberPattern.test(newValue)){
    error.value.ftname = 'firstname is number'
    isvali.value = false
    console.log('firstname :',isvali.value);
  }else {
    error.value.ftname= null
  }
} 
const validatelname = (newValue) => {
    const number = /\d/
    
    if(!newValue){
      error.value.ltname = 'lastname required'
      isvali.value =!isvali.value
      console.log('lastname :',isvali.value);
    }
    else if (number.test(formData.lastname)){
      error.value.ltname = 'lastname is number'
      isvali.value = !isvali.value
      console.log('lastname :',isvali.value);
    }else {
      error.value.ltname = null
      if(formData.firstname){
        error.value.ftname = null
      }else{
        error.value.ftname = 'firstname required'
        isvali.value =false
        console.log('firstname :',isvali.value);
      }
    }
  }

  const validatePhnum = () =>{
    // const phonePattern = /^[0-9]+$/
    const phonePttern = [1,2,3,4,5,6,7,8]
    if(!formData.phNumber){
      error.value.phNum = 'phone number required'
    }
    else{
      if ( formData.phNumber.length < phonePttern.length){
      error.value.phNum = 'your number phone incorrect'
      }else {
        error.value.phNum = null
      }
      if(formData.firstname){
        error.value.ftname = null
      }else {
        error.value.ftname = 'firstname required'
        isvali.value =false
        console.log('firstname :',isvali.value);
      }
      if(formData.lastname){
        error.value.ltname = null
      }else {
        error.value.ltname = 'firstname required'
        isvali.value =false
        console.log('lastname :',isvali.value);
      }
    }
  }


onMounted(async () => {
  await provinceStore.loadData()
})

watch(
  () => formData.firstname ,
   (newValue) => {

    isvali.value = true

    if(validatename(newValue)){
      isvali.value = false
    }
})
watch(
  () => formData.lastname ,
   (newValue) => {

    isvali.value = true

    if(validatelname(newValue)){
      isvali.value = false
    }
})
watch(
  () => formData.phNumber ,
   (newValue) => {

    isvali.value = true

    if(validatePhnum(newValue)){
      isvali.value = false
    }
})





const addeData = () =>{
    console.log('this is your Data :' , formData);
  }


const fullname = computed(() => {
  return `${formData.firstname}  ${formData.lastname.toUpperCase()}`
})
</script>


<template>
  <div class="form_list">
    <div class="fom_child">
      <h1> Your information</h1>
      <div>
        <div class="fullname">
          Fullname : {{ fullname }}
        </div>
        <div class="from_input" style="display: flex;">
          <div>Firstname:</div>
          <div>
            <input type="text" v-model="formData.firstname" style="width: 100%; margin-left: .5rem;">
            <div v-if="error.ftname" style="color: red;">{{ error.ftname }}</div>
          </div>
        </div>
        <div class="from_input" style="display: flex;">
          <div>
            Lastname:
          </div>
          <div>
            <input type="text" v-model="formData.lastname" style="width: 100%;margin-left: .5rem;">
            <div v-if="error.ltname" style="color: red;">{{ error.ltname }}</div>
          </div>
        </div>
        <div class="from_input" style="display: flex;">
          <div>
            Phone number : <span style="padding: 0 10px 0 0">+856</span>
          </div>
          <div>
            <input type="text" v-model="formData.phNumber" style="width: 100%;">
            <div v-if="error.phNum" style="color: red;">{{ error.phNum }}</div>
          </div>
        </div>
        <div class="from_input">
          Learn :
          <div class="from_input" style="display: flex;">
            <div style="display: flex;" >
              Year:
              <select v-model="formData.learn.year" style="width: 100%; margin-left: 1rem;">
                <option v-for="year in provinceStore.years" style="text-align: center;">{{ year }}</option>
              </select>
            </div>
            <div style="display: flex; margin-left: 2rem;">
              Class:
              <select v-model="formData.learn.class" style="width: 70%; margin-left: 1rem;">
                <option v-for="room in provinceStore.classes"> 
                  {{ room }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="from_input">
          Address:
           <div class="status">
            <div>
              Village:
              <input type="text" placeholder="village" v-model="formData.addrss.village" style="margin-left: .5rem;">
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
    margin-top: 4rem;
    border: none;
    border-radius: 20px;
    padding: 2rem;
    height: 100%;
    width: 30%;
    box-shadow: 5px 20px 15px 5px rgb(56, 58, 56);
    h1 {
      text-align: center;
    }
    .fullname {
      padding: 10px;
    }
    .from_input {
      padding: 10px;
      input,select{
        width: 30%;
        height: 20px;
        border-bottom: 2px solid #000;
        border-top: none;
        border-left: none;
        border-right: none;
      }
 
    }


    .status{
        display: grid;
        grid-template-columns: auto;
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

