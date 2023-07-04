<script>
export default {

}

</script>

<template>
    <div style="text-align: center;margin:3rem 0">
        <img src="src/assets/weather.png" alt="weather" style="height: 155px;width:155px;" />
        <p class="text_celcius">36.9 <span style="position: absolute;top:0;font-size:2.8rem">℃</span></p>
        <p class='text_time' style="text-align: left;font-size:1.3rem;color:white;padding-left:.6rem; margin:0;   font-weight: 700;
        ">Friday, 11:54 PM</p>
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