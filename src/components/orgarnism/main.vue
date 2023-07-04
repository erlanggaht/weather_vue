<script setup>
import data_week from '../../data_weather/data_week.js'
import rain from '../../assets/rain.png'
import sun from '../../assets/sun.png'
import light from '../../assets/light.png'
import Card_current from '../moleculs/card_current.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const data_weeks = ref(data_week)
const data_current = ref(null)
const store = useStore()

    const forecast_icon = (weather) => {
        switch (weather) {
            case "rain":
                return rain;
            case 'normal':
                return sun;
            default:
                return light
        }
    }

 function set_dataCurrent  (item)  {
        const wind_speed = {wind_speed : item?.['wind_speed']}; // kecepatan angin
        const wind_degree = {wind_degree:item?.['wind_degree']}; //derajat angin 
        const pressure = {pressure:item?.['pressure']}; // tekanan
        const humidity = {humidity:item?.['humidity']}; // kelembabapan 
        const cloudcover = {cloudcover:item?.['cloudcover']} // awan tertutup 
        const temperature = {temperature:item?.['temperature']}      
        
        let items_api = [wind_speed,wind_degree,pressure,humidity,cloudcover,temperature]
       
        return data_current.value =  items_api
}

onMounted(() => {
    setTimeout(()=>{
        set_dataCurrent(store.state.data[0]?.current)
    },1000)
   
})
</script>

<template>
    <div id="main" style="border-radius: 0 2rem 2rem 0;">

        <div class="title_main">
            <div>
                <a href="" @click.prevent="set_dataCurrent ">Yesterday</a>
                <a href="" @click.prevent>Week</a>
            </div>
            <div style="color:#fff;font-weight:400;font-style:italic;padding-right:20px">
                <p>Timezone : {{ this.$store.state.data[0]?.location.timezone_id }}</p>
            </div>
        </div>

        <section>
            <div class="forecast">
                <div v-for="item in data_weeks" :key="item.id">
                    <div :class="`forecast_div forecast_div${item.id}`">

                        <p>{{ item.hour }}</p>
                        <img class="forecast_icon" :src="forecast_icon(item.weather)" :alt="item.weather" />
                        <p>{{ item.temp }}<sup>℃</sup></p>

                    </div>
                </div>
            </div>
        </section>
        <section class="current_highlights" >
            <h1 style="color:#fff">Current Highlights</h1>
            <!-- Area Card -->
            <div class="area_card">
                <Card_current :data="data_current" />
            </div>


        </section>

    </div>
</template>

<style scope>
.title_main a {
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    padding: 1rem .3rem;
    font-weight: bold;
    margin: 0 .8rem;
}

.title_main {
    padding: 2.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.forecast {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin: 0 0rem;
    padding: 0 2rem;
}

.forecast_div {
    color: #fff;
    background-color: #172031;
    text-align: center;
    padding: .1rem .6rem .1rem .6rem;
    width: 110px;
    border-radius: 1.5rem;
    font-weight: 700;
    font-size: 1rem;
}

.forecast_icon {
    width: 36px;
    height: 36px;
}

.current_highlights {
    margin: 5rem 0rem;
    padding: 0 2rem;
}

.area_card {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin: 0 0rem;
    padding: 0 0rem;
}
</style>