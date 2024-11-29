import axios from 'axios'
import { defineStore } from 'pinia'


export const useProvinceStore = defineStore('province', {
  state: () => ({
    list : [],
    years :['Select','First year','Second year','Third year','Fourth year'],
    classes : ['Select','IT1','IT2','IT3']
  }),
  actions : {
   async loadData () {
    try {
        const respons = await axios.get(`https://673d744a0118dbfe86074cce.mockapi.io/province`)
        this.list = respons.data
        console.log('load data complete...');
    } catch (error) {
        console.log('this is error :' , error);
    }
    },
  }
})