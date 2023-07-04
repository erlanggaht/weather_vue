<script>
import input_search from '../atoms/input_search.vue'
import Temperature_time from '../moleculs/temperature_time.vue';
import Information from '../moleculs/information.vue';

export default{
    components: { Temperature_time, Information,input_search }
}
</script>

<template>
    <div id="navbar" style="border-radius: 2rem 0 0 2rem;">
        <div>
          <input_search />
          <Temperature_time />
          <hr style="margin: .4rem 0 0 0;color:#fff" />
          <Information />
        </div>
      </div>
</template>

<style scoped>


</style>