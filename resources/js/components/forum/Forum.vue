<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <comp-question 
            v-for="question in questions"
            :key="question.path"
            :data="question"
        />
      </v-flex>

      <v-flex xs4>
        <comp-sidebar></comp-sidebar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import compQuestion from './Question';
import compSidebar from '../sidebar/Sidebar';

export default {
    data(){
        return{
            questions:{}
        }
    },
    created(){
        axios.get('/api/question')
        .then(res => this.questions = res.data.data)
        .catch( error => console.log(error.response.data))
    },
    components: {
        compQuestion,
        compSidebar
    }
}
</script>

<style>

</style>
