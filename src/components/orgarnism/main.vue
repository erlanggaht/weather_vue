<script>
import data_week from '../../data_weather/data_week.js'
import rain from '../../assets/rain.png'
import sun from '../../assets/sun.png'
import light from '../../assets/light.png'

export default {
    data() {
        return {
            data_week: data_week
        }
    },

    methods : {
        forecast_icon : (weather) =>  {
            switch (weather) {
            case "rain" : 
                return rain;
            case 'normal' :
                return sun;
            default :
                return light 
        }
        }
    },
    
}
</script>

<template>
    <div id="main" style="border-radius: 0 2rem 2rem 0;">

        <div class="title_main">
            <a href="" @click.prevent="">Yesterday</a>
            <a href="" @click.prevent>Week</a>
        </div>

        <section>
            <div class="forecast">
                <div v-for="item in data_week" :key="item.id">
                    <div :class="`forecast_div forecast_div${item.id}`">

                        <p>{{ item.hour }}</p>
                        <img class="forecast_icon" :src="forecast_icon(item.weather)" :alt="item.weather" />
                        <p>{{item.temp}}<sup>℃</sup></p>

                    </div>
                </div>
            </div>
        </section>

        <section class="current_highlights">
        <h1 style="color:#fff">Current Highlights</h1>
        
        <div class="area_card">
        <div class="card_current">
            <h4>Wind_Speed</h4>
            <p>0</p>
            <p class="p-bottom">-</p>
        </div> 

        <div class="card_current">
            <h4>Wind_Speed</h4>
            <p>0</p>
            <p class="p-bottom">-</p>
        </div> 

        <div class="card_current">
            <h4>Wind_Speed</h4>
            <p>0</p>
            <p class="p-bottom">-</p>
        </div> 

        <div class="card_current">
            <h4>Wind_Speed</h4>
            <p>0</p>
            <p class="p-bottom">-</p>
        </div> 

        <div class="card_current">
            <h4>Wind_Speed</h4>
            <p>0</p>
            <p class="p-bottom">-</p>
        </div> 

        <div class="card_current">
            <h4>Wind_Speed</h4>
            <p>0</p>
            <p class="p-bottom">-</p>
        </div> 

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
}


.forecast {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin:0 0rem;
    padding: 0 2rem;
}

.forecast_div {
    color: #fff;
    background-color: #172031;
    text-align: center;
    padding: .1rem .6rem .1rem .6rem;
    width: 120px;
    border-radius: 1.5rem;
    font-weight: 700;
    font-size: 1rem;
}

.forecast_icon {
    width: 36px;
    height: 36px;
}

.current_highlights {
    margin:5rem 0rem;
    padding: 0 2rem;
}

.area_card {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin:0 0rem;
    padding: 0 0rem;
}

.card_current {
width: 270px;
color: #fff;
background-color: #172031;
border-radius: 1rem;
padding: 1rem 1rem 0 1rem;
}

.card_current h4 {
    font-size: 1.1rem;
    padding: 0;
    margin: 0;
    font-weight: 700;
}

.card_current p {
    text-align: center;
    font-size: 2rem;
}

.card_current .p-bottom {
    text-align: left;
    font-size: 2rem;
    margin: 0;padding: 0;
}
</style>