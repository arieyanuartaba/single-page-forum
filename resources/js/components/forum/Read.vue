<template>
    <div>
        <comp-editquestion 
        :data="question"
        v-if="editnow">

        </comp-editquestion>
        <div v-else>
            <comp-showquestion 
                :data="question"
                v-if="question"
            />
        </div>
    </div>
    
</template>

<script>
import compShowquestion from './ShowQuestion';
import compEditquestion from './EditQuestion';

export default {
    data(){
        return{
            question:null,
            editnow: false
        }
    },
    created(){
        
        this.listen()
        this.showQuestion()
    },
    
    components: {
        compShowquestion,
        compEditquestion
    },
    methods: {
        listen(){
            EventBus.$on('sendEventEdit', () => {
                this.editnow = true
            })

             EventBus.$on('sendCancelCommand', () => {
                this.editnow = false
            })
        },
        showQuestion(){
            axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
            .catch(error => console.log(response.error.data))
        }
    }
}
</script>

<style>

</style>
