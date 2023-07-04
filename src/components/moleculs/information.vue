<script>
import latitude from '../../assets/lat.svg'
import longitude from '../../assets/longitude.svg'
import weather from '../../assets/weather.svg'

export default{
   data () {
    return {
        icon : {latitude,longitude,weather}
    }
   }
}
</script>

<template>
    <ul class="list_wheater" style="list-style: none;padding:1rem 0 0 0;color:#fff;font-weight:400">
        <li><img :src="icon.latitude" alt="latitude"/> Latitude.  -6.712</li>
        <li><img :src="icon.longitude" alt="longitude"/> Longitude.  108.509</li>
        <li><img :src="icon.weather" alt="weather"/> Sunny</li>
      </ul>

      <div style="padding:.3rem;height:8rem;display:flex;align-items:flex-end">
        <p style="color:#fff;font-size:1rem;margin:0;padding:0">Bandung, Indonesia</p>
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