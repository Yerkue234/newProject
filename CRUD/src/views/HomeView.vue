<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div>
    <div>
      <h1>This include data : </h1>
      <div>
        Fullname : {{  }}
      </div>
      <div>
        <RouterLink :to="{name:'Adde-list' , path:'/province'}">
          <button>Adde data</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
