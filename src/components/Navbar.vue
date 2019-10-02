<template>
  <nav>
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
      <v-list>
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
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      links: [
        {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
        {icon: 'mdi-folder', text: 'Projects', route: '/projects'},
        {icon: 'mdi-nature-people', text: 'Team', route: '/team'}
      ]
    }
  },

  methods: {
    navDrawer: function() {
      this.drawer = !this.drawer;
    }
  }
};
</script>