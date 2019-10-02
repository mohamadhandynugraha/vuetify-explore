<template>
  <div class="dashboard">
    <h1 class="subheading black--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn class="primary" outline block>Content1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn class="warning" outline block>Content2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn class="error" outline block>Content3</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn class="success" outline block>Content4</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn class="primary" outline block>Content5</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn class="warning" outline block>Content6</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  
};
</script>
