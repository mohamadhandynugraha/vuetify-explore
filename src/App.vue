<template>
  <v-app class="grey lighten-4">
    <navbar></navbar>
    <v-content class="mx-4 my-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '../src/components/Navbar';
export default {
  components: {
    Navbar
  }
}
</script>