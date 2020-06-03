<template>
  <v-app>
    <Appbar />

    <v-content>
      <div id="particleBackground">
        
          <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="50"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="5"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
          z-index="0"
        >
        </vue-particles>
        
        <router-view style="margin-top: -45rem;" :key="$route.path" />
      </div>
         
    </v-content>
  </v-app>
</template>

<script>
import Appbar from './appBar'

export default {
  name: 'App',

  components: {
    Appbar
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#particleBackground {
  background-image: url('https://vignette.wikia.nocookie.net/starwars/images/b/b9/Hos.png/revision/latest?cb=20171113015859');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
</style>
