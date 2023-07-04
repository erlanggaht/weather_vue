<script setup>
import Navbar from './orgarnism/navbar.vue'
import Main from './orgarnism/main.vue'
import { useStore } from 'vuex'
import {onMounted,onBeforeMount,ref} from 'vue'
import {host_example,host_api} from '../utility/host_api.js'

const store = useStore()

onMounted(async () => {
  const response = await fetch(host_api(store.state.region))
  const result = await response.json()
  store.commit('add_data',[result])

})

onBeforeMount(() => {
  const enter_region = prompt('enter region')
  store.commit('setRegion',enter_region)
}) 



</script>

<template>
  <div class="layout">
    <Navbar />
    <Main />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  padding: 2rem 3rem;
  gap: 0px;
  background-image: url('../assets/bg.jpg');
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


}

#navbar {
  padding: 1rem;
  background-color: #172032;
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  width: 350px;
}

#main {
  background-color: #09101f;
}

@media (max-width:723px) {
  .layout {
    padding: 1rem 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  #navbar {
    padding: 1rem;
    background-color: #172032;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    width: 100%;
    border-radius: 2rem 2rem 0 0 !important;
  }

  #main {
    border-radius: 0 0 2rem 2rem !important;
  }

}
</style>
