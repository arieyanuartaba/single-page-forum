<template>
    <v-container fluid>
            <comp-reply
            v-for="(reply, index) in contents"
            :key="reply.id"
            :index="index"
            :data="reply"            
        ></comp-reply>
    </v-container>
</template>

<script>
import compReply from '../reply/Reply';
export default {
    props:['question'],
    data(){
        return{
            contents:this.question.replies
        }
    },
    components:{
        compReply
    },
    created() {
      this.listen()  
    },
    methods:{
        listen(){

            EventBus.$on('newReplyEvent',(reply) => {
                this.contents.unshift(reply)
            })

            EventBus.$on('deleteReplyEvent',(index) => {
                axios.delete(`/api/question/${this.question.slug}/reply/${this.contents[index].id}`)
                .then(res => this.contents.splice(index,1))
            })
        }
    }
}
</script>

<style>

</style>
