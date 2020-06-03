<template>
  <div class="home">
    <timeline msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import timeline from './timeline.vue'

export default {
  name: 'Home',
  components: {
    timeline
  }
}
</script>
