<template>
    <v-container fluid>
        <markdown-editor v-model="body"></markdown-editor>

        <v-btn color="purple" dark @click="newReply">
            Reply
        </v-btn>
    </v-container>
</template>

<script>
export default {
    props:['questionSlug'],
    data(){
        return{
            body:null
        }
    },
    methods:{
        newReply(){
            axios.post(`/api/question/${this.questionSlug}/reply`, {body:this.body})
            .then( res => {
                this.body = ''
                EventBus.$emit('newReplyEvent', res.data.reply)
                console.log(res.data.reply)
                window.scrollTo(0,0)
            })
        }
    }
}
</script>

<style>

</style>
