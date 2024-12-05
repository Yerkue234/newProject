import axios from 'axios'
import { defineStore } from 'pinia'


export const useProvinceStore = defineStore('province', {
  state: () => ({
    list : [],
    years :['First year','Second year','Third year','Fourth year'],
    classes : ['IT1','IT2','IT3'],
    dataFirst :[],
    dataSecond :[],
    dataThird :[],
    dataFour :[],
    isVali : {
      first : null,
      second : null,
      third: null,
      fourth:null
    }
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
    async addeData (data) {
      try {
        console.log('this is ', data.learn.year);
// first
        if(data.learn.year === this.years[0]){
          this.dataFirst.push(data)
          this.isVali.first = true
        }else{
          this.isVali.first = false
        }
// second
        if(data.learn.year === this.years[1]){
          this.dataSecond.push(data)
          this.isVali.second = true
        }else{
          this.isVali.second = false
        }
// third
        if(data.learn.year === this.years[2]){
          this.dataThird.push(data)
          this.isVali.third = true
        }else{
          this.isVali.third = false
        }
        // fourth
        if(data.learn.year === this.years[3]){
          this.dataFour.push(data)
          this.isVali.fourth = true
        }else{
          this.isVali.fourth = false
        }
      } catch (error) {
        console.log('error',error);
      }
    }
  }
})