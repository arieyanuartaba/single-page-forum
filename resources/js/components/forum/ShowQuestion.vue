<template>
<div>
    <v-card
    class="mx-auto ma-3" 
    color="#26c6da"
    dark
    >
    <v-card-title class="primary-title">
      <div>
            <h2>{{data.title}}</h2> 
        <div>
            <small>  
              <v-chip label>{{data.username}} said {{data.created_at}} </v-chip> | 
              <v-chip label outline color="red">{{data.cat_name}}</v-chip> 
            </small>
        </div>
       
      </div>
       <v-spacer>           
        </v-spacer>
         <v-btn color="teal">5 replies</v-btn>
    </v-card-title>
    <!-- <v-card-body color="white"> -->
        <v-card-text class="black--text whiteCol" v-html="bodyToMark">
            
        </v-card-text>  
    <!-- </v-card-body> -->

    <v-card-actions v-if="own">
        <v-btn icon small color="orange" @click="edit">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-btn icon small color="red" @click="destroy">
            <v-icon>delete</v-icon>
        </v-btn>
    </v-card-actions>
    
  </v-card>

    <router-link to="/forum">
        <v-btn color="orange">Back</v-btn>
    </router-link>  
</div>
</template>

<script>
export default {
    data(){
        return{
            own: User.own(this.data.user_id)
        }
    },
    props: ['data'],
    computed: {
        bodyToMark(){
            return md.parse(this.data.body)
        }
    },
    methods:{
        destroy(){
            console.log(`/api/question/${this.data.slug}`)
            axios.delete(`/api/question/${this.data.slug}`)
            .then (res => this.$router.push('/forum'))
            .catch(error => console.log(error.response.data))
        },
        edit(){
            EventBus.$emit('sendEventEdit')
        }
    }
}
</script>

<style>
    .whiteCol {
        background-color: white;
    }
</style>
