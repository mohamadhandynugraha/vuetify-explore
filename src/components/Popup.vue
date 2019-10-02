<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">Add new project</v-btn>
    <v-card>
      <v-card-title>
        <h2>add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
          <v-textarea label="information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules" ></v-textarea>

          <v-menu>
            <v-text-field :value="due" slot="activator" label="due date" prepend-icon="mdi-eventbrite" :rules="inputRules"></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-btn flat dark class="indigo mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import db from '../fb';
  
  export default {
    name: 'popup',
    data() {
      return {
        title: '',
        content: '',
        due: '',
        inputRules: [
          v => v.length > 4 || 'Minimum characters is 4 characters'
        ],
        loading: false,
        dialog: false
      }
    },
    methods: {
      submit(){
        this.loading = true
        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: 'Default person',
          status: 'ongoing'
        }

        db.collection('projects').add(project).then(() => {
          this.loading = false
          this.dialog = false
          this.title = ''
          this.content = ''
          this.due = ''
          this.$emit('projectAdded')
        });
      }
    },

    computed: {
      formattedDate(){
        return this.due ? this.due : ''
      }
    }
  }
</script>