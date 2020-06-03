<template>
  <v-container v-if="dates.length > 0">
    <v-layout class="top">
      <v-flex>
        <v-card dark>
          <v-card-title centered>
            {{ dates[chosenDate].year }}
          </v-card-title>
          <v-card-text>
            <v-tabs centered>
              <v-tab v-for="event in dates[chosenDate].events">
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
        :max="Object.keys(dates).length - 1"
        tick-size="10"
        ticks="always"
        @click="updateDate"
      ></v-slider>
    </v-layout>
  </v-container>
</template>

<script>
import axios from '../../axios'

export default {
  name: "HelloWorld",
  data () {
    return {
      ex3: { label: "thumb-color", val: 50, color: "red" },
      chosenDate: 0,
      dates: [],
      events: [{ title: "Sith Considered Barbaric" }]
    };
  },
  async mounted(){
    await this.getEvents()
    
  },
  methods: {
    updateDate(obj) {
      this.events = this.dates[this.chosenDate].events
    },
    async getEvents() {
      const data = (await axios.get('/events')).data
      data.map((e, index) => {
        let dateSet = false
        this.dates.map(date => {
          if(date.year === e.Date.replace(/.{3}$/,' $&')) {
            date.events.push({title: e.Title, dialog: e.Text})
            dateSet = true
          }
        })
        if(!dateSet) this.dates.push({year: e.Date.replace(/.{3}$/,' $&'), events: [{title: e.Title, dialog: e.Text}]})
      })
      this.events = this.dates[0].events

    }
  }
};
</script>
<style scoped>
.large-slider {
  margin-top: 10rem;
}
#dialogInfo{
  background: #1d1c1c;
  text-emphasis-color: white;
}
</style>
