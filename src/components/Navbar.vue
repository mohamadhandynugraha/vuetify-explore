<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="3000" top color="indigo">
      <span>Add a new data to database</span>
      <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar flat app class="indigo">
      <v-toolbar-side-icon class="grey--text" @click="navDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-capitalize white--text">
        <span class="font-weight-light">menu item</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="white" right>
        <span>
          Sign out
        </span><v-icon>mdi-sign-direction-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" />
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>
        <v-flex class="mt-4">
          <popup @projectAdded="snackbar = true"></popup>
        </v-flex>
      </v-layout>
      <v-list align-center>
        <v-list-tile v-for="link in links" :key="link.icon" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup';
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      links: [
        {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
        {icon: 'mdi-folder', text: 'Projects', route: '/projects'},
        {icon: 'mdi-nature-people', text: 'Team', route: '/team'}
      ],
      snackbar: false
    }
  },

  methods: {
    navDrawer: function() {
      this.drawer = !this.drawer;
    }
  },

  components: {
    Popup
  }
};
</script>