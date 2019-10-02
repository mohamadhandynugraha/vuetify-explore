<template>
  <v-container class="my-5">
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(project, i) in projects" :key="i">
        <div slot="header">{{project.title}}</div>
        <v-card>
          <v-card-text>
            <div class="font-weight-bold">due {{project.due}}</div>
            <div>{{project.content}}</div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
import db from '../fb'
export default {
  data() {
    return {
      projects: []
    };
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
