<script setup>
import { computed, ref } from 'vue';
import dayOfWeekAsString from '../../utility/days_string.js'

const temp_random = ref(0)
const gettime = ref(null)

const temp_random_set = computed(() => {
    return temp_random.value = Math.floor(Math.random() * 10 ) 
})

const get_time = computed(() => {
    return function (localtime) {
        return gettime.value = localtime.split(' ')[1]

    }
         
    
})
 

</script>

<template>
    <div style="text-align: center;margin:3rem 0" v-for="(item,i) in  this.$store.state.data " :key="i">
        <img src='../../assets/weather.png' alt="weather" style="height: 155px;width:155px;" />
        <p class="text_celcius">{{item.current.temperature}} {{temp_random_set}}<span style="position: absolute;top:0;font-size:2.8rem">℃</span></p>
        <p class='text_time' style="text-align: left;font-size:1.3rem;color:white;padding-left:.6rem; margin:0;   font-weight: 700;
        ">{{dayOfWeekAsString(new Date().getDay())}}, {{ get_time(item.location.localtime) }}</p>
    </div>
</template>

<style scoped>
.text_celcius{
    font-size: 4rem;
    text-align: left;
    padding: 1rem .2rem .1rem .2rem;
    color: white;
    margin: 3.2rem 0 0 0;
    position: relative;
    font-weight: 700;
  }

  @media (max-width:723px) { 
    .text_celcius {
        text-align: center;
    }
    .text_time {
        text-align: center !important;
    }
  }
</style>