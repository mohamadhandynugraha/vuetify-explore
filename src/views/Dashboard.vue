<template>
  <div class="dashboard">
    <h1 class="subheading black--text center">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3" color="grey">
        <v-tooltip top>
          <v-btn small flat @click="sortBy('title')" slot="activator">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">By project title</span>
          </v-btn>
          <span>Sort by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn small flat @click="sortBy('person')" slot="activator">
            <v-icon left small>mdi-human</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>Sort by person name</span>
        </v-tooltip>
      </v-layout>

      <v-card flat class="grey" v-for="project in projects" :key="project.name">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption black--text text-capitalize">project title</div>
            <div class="text-capitalize">{{project.title}}</div>
          </v-flex>
          <v-flex xs6 md2 sm4>
            <div class="caption black--text text-capitalize">person</div>
            <div class="text-capitalize">{{project.person}}</div>
          </v-flex>
          <v-flex xs6 md2 sm4>
            <div class="caption black--text text-capitalize">due by</div>
            <div class="text-capitalize">{{project.due}}</div>
          </v-flex>
          <v-flex xs2 md2 sm4>
            <div class="right">
              <v-chip
                v-bind:class="`${project.status} caption my-2`"
                text-color="white"
              >{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '../fb';
export default {
  data() {
    return {
      projects: []
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    })
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>
