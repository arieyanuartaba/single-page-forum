<template>
    <v-card class="mb-3">
        <v-card-title>
            <div class="headline">
                {{data.name}} 
            </div>
            <div class="small ml-2">
                {{data.created_at}}
            </div>            
        </v-card-title>
        <v-divider></v-divider>

        <comp-editreply
        :dataReply="data" 
        v-if="editing">
        </comp-editreply>

        <v-card-text 
        v-else
        v-html="reply">
        </v-card-text>
        

        <v-divider></v-divider>
        <div v-if="!editing">
            <v-card-actions v-if="own">
                <v-btn icon small @click="edit">
                    <v-icon color="orange">edit</v-icon>
                </v-btn>
                <v-btn icon small @click="destroy">
                    <v-icon color="red" >delete</v-icon>  
                </v-btn>
            </v-card-actions>      
        </div>
            
    </v-card>
</template>

<script>
import compEditreply from '../reply/editReply';

export default {
    props:['data', 'index'],
    data(){
      return{
          editing: false
      }  
    },
    created(){
        this.listen()
    },
    computed: {
        reply(){
            return md.parse(this.data.reply)
        },

        own(){
            return User.own(this.data.user_id)
        }
    },
    methods:{
        edit(){
            this.editing = true
        },
        destroy(){
            EventBus.$emit('deleteReplyEvent', this.index)
        },
        listen(){
            EventBus.$on('cancelReplyEvent', () => {
                this.editing = false
            })
        }
    },
    components:{
        compEditreply
    }
}
</script>

<style>

</style>
