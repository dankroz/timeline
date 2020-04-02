<template>
  <v-container>
    <v-layout class="top">
      <v-flex>
        <v-card dark>
          <v-card-title centered>
            {{ dates[chosenDate].year }}
          </v-card-title>
          <v-card-text>
            <v-tabs centered>
              <v-tab v-for="event in events">
                {{event.title}}
              </v-tab>
              <v-tab-item v-for="event in events">
                  <v-card-subtitle id='dialogInfo'> {{event.dialog}}</v-card-subtitle>
              
              </v-tab-item> 
            </v-tabs>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="large-slider">
      <v-slider
        dark
        v-model="chosenDate"
        :thumb-color="ex3.color"
        :max="(dates.length -1)"
        tick-size="10"
        ticks="always"
        @click="updateDate"
      ></v-slider>
    </v-layout>
  </v-container>
</template>

<script>
import dates from '../assets/data/events.json'
export default {
  name: "HelloWorld",
  data () {
    return {
      ex3: { label: "thumb-color", val: 50, color: "red" },
      chosenDate: 0,
      dates: dates.dates,
      events: [{ title: "Sith Considered Barbaric" }]
    };
  },
  created(){

  },
  methods: {
    updateDate(obj) {
      console.log("chosen Date: ", this.chosenDate);
      this.events = this.dates[this.chosenDate].events
    }
  }
};
</script>
<style scoped>
.top {
  margin-top: -45rem;
}
.large-slider {
  margin-top: 10rem;
}
#dialogInfo{
  background: #1d1c1c;
  text-emphasis-color: white;
}
</style>
