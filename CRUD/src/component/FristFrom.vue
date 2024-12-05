<script setup>
import {useProvinceStore} from '../stores/status'
import { onActivated ,onMounted,ref } from 'vue'

const useProv = useProvinceStore()
const datas = useProv.dataFirst
const years = useProv.years






</script>

<template>
    <div>
        <div>
            <h1 style="text-align: center;">First years:</h1>
            <div >
               <table>
                   <tr>
                        <th>Student</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Address</th>
                        <th>Phone number</th>
                   </tr>
                   <tr v-for="getData, key in datas" :key="key++" >
                    <td>{{ key }}</td>
                    <td>{{ `${getData.ftname} ${getData.ltname.toUpperCase()}`}}</td>
                    <td>{{ getData.learn.class }}</td>
                    <tr>
                      <td style="width: 180px;">{{ getData.address.village }}</td>
                      <td style="width: 30%;">{{ getData.address.city }}</td>
                      <td style="width: 50%;">{{ getData.address.province }}</td>
                    </tr>
                    <td>{{ getData.phNum }}</td>
                   </tr>
               </table>
            </div>
        </div>
    </div>
</template>