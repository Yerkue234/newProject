import { defineStore } from 'pinia'

export const useFormStore = defineStore('form',{
  state: () => ({
    listData: {}
  }),
  actions: {
    async loadForm () {
      
    }
  }
})
