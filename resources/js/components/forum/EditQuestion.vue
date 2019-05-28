<template>
   <v-container>
       <v-card>
           <v-form @submit.prevent="update" class="ma-3"
            >    
            <v-text-field
            v-model="form.title"
            label="Title"
            type="text"
            required
            ></v-text-field>           

            <markdown-editor v-model="form.body"></markdown-editor>

            <v-card-actions>
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn icon color="success" v-on="on" class="mr-2" type="submit">
                        <v-icon>save</v-icon>
                    </v-btn>
                    </template>
                    <span>Update the question</span>
                </v-tooltip> 
                
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn icon color="grey" v-on="on" @click="cancel">
                            <v-icon>cancel</v-icon>
                        </v-btn>
                    </template>
                    <span>Back to question</span>
                </v-tooltip> 
            </v-card-actions>
            
        </v-form>
       </v-card>
   </v-container>
</template>

<script>
export default {
    props: ['data'],
    data(){
        return{
            form:{
                title: null,
                body: null
            }
        }
    },
    created(){
        this.form = this.data
    },
    methods: {
        cancel(){
            EventBus.$emit('sendCancelCommand')
        },
        update(){
            axios.patch(`/api/question/${this.data.slug}`, this.form)
            .then(res => this.cancel())
        }
    }
}
</script>

<style>

</style>
