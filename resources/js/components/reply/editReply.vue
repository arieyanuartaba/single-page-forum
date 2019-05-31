<template>
    <div>
        <markdown-editor v-model="dataReply.reply"></markdown-editor>

        <v-btn icon small @click="update">
            <v-icon color="success">save</v-icon>
        </v-btn>
        <v-btn icon small @click="cancel">
            <v-icon color="black">cancel</v-icon>
        </v-btn>
    </div> 
    
     
</template>

<script>
export default {
    props:['dataReply'],
    methods:{
        cancel(){
            EventBus.$emit('cancelReplyEvent')
        },
        update(){
            console.log(`/api/question/${this.dataReply.question_slug}/reply/${this.dataReply.id}`)
            axios.patch(`/api/question/${this.dataReply.question_slug}/reply/${this.dataReply.id}`,
                         {body: this.dataReply.reply}
            )
            .then(res => this.cancel())
        }
    }
}
</script>

<style>

</style>
