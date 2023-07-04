<script setup>
import { ref } from 'vue';
import latitude from '../../assets/lat.svg'
import longitude from '../../assets/longitude.svg'
import weather from '../../assets/weather.svg'
import observation from '../../assets/observation.svg'
import { useStore } from 'vuex'

const icon = ref({latitude,longitude,weather,observation})
const store = useStore()


</script>

<template>
    <ul class="list_wheater" style="list-style: none;padding:1rem 0 0 0;color:#fff;font-weight:400" v-for="(item, index) in store.state.data" :key="index">
        <li><img :src="icon.latitude" alt="latitude"/> {{item.location.lat}}</li>
        <li><img :src="icon.longitude" alt="longitude"/> {{item.location.lon}}</li>
        <li><img :src="icon.weather" alt="weather"/> {{item.current.weather_descriptions[0]}}</li>
        <li><img :src="icon.observation" alt="weather"/>Observation Time - {{item.current.observation_time}} </li>
      </ul>

      <div style="padding:.3rem;height:8rem;display:flex;align-items:flex-end"  v-for="(item, index) in store.state.data" :key="index">
        <p style="color:#fff;font-size:1rem;margin:0;padding:0">{{item.request.query}}</p>
      </div>
</template>

<style scope>
.list_wheater li{
    padding: .5rem .3rem;
    display: flex;
    align-items: center;
    gap: 24px;
   }

.list_wheater img {
    height: 18px;width:18px;
}
</style>