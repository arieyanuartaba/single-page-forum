<template>
    <v-card
    class="mx-auto mb-2" 
    color="#26c6da"
    dark
    >
    <v-card-title class="primary-title">
      <div>
        <router-link :to="data.path">
            <h2>{{data.title}}</h2> 
        </router-link>
        <div>
            <small>  
              <v-chip label>{{data.username}} said {{data.created_at}} </v-chip> | 
              <v-chip label outline color="red">Category</v-chip> 
            </small>
        </div>
      </div>
    </v-card-title>
    <v-card-text class="black--text" v-html="body">
        
    </v-card-text>

    
  </v-card>
</template>

<script>
export default {
    props:['data'],
    computed:{
      body(){
        // console.log(md.parse(this.data.body))
        return md.parse(this.data.body)
      }
    }
}
</script>

<style>
.application a {
  /* color: white; */
  text-decoration: none;
}
</style>
