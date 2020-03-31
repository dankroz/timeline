<template>
  <v-app-bar app dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title class='clicky' @click="$router.push('/')">Galaxy Timeline</v-toolbar-title>

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
          <v-list-item-title @click="$router.push(n.link)">{{ n.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
             options: [{name: 'About', link: '/about'}]
        }
    }
   
};
</script>

<style scoped>
.clicky:hover {
    cursor: pointer;
}

</style>