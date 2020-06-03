<template>
  <v-app-bar app dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title class="clicky" @click="$router.push('/')"
      >Galaxy Timeline</v-toolbar-title
    >

    <v-spacer></v-spacer>
    <!-- save for most visited or something silly as such -->
    <!-- <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn> -->
    <!-- add for searching title and text  -->
    <!-- <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn> -->

    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in options" @click="() => {}">
          <v-list-item-title @click="$router.push(n.link)">{{
            n.name
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title @click="loginModal = true" style="cursor: pointer"
            >LOGIN</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>

    <v-dialog v-model="loginModal" width="50%">
      <v-card dark>
        <v-card-title white>
          Login if you please
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Username"
            v-model="username"
            single-line
            solo
            light
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            single-line
            solo
            light
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-btn light>Reset</v-btn>
          <v-btn @click="submitLogin" light>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import axios from '../../axios.js';
// import hexSha512 from 'sha512';

export default {
  data() {
    return {
      options: [{ name: "ABOUT", link: "/about" }],
      loginModal: false,
      show1: false,
      username: "",
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
      },
    };
  },
  methods: {
    async submitLogin() {
      const data = (await axios.get('/events')).data
      const res = await axios.get('/users')
      console.log('res:: ', res)
    },
  },
};
</script>

<style scoped>
.clicky:hover {
  cursor: pointer;
}
</style>
