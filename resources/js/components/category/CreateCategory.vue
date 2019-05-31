<template>
    <v-container>
        <v-form @submit.prevent="submit" class="mb-4">
             <v-text-field
                v-model.lazy="form.name"
                label="Category Name"
                type="text"
                required                                                
            ></v-text-field>

            <v-btn color="teal" type="submit" v-if="editSlug">Update</v-btn>
            <v-btn class="success" type="submit" v-else>Save</v-btn>
        </v-form>

        <v-card>
            <v-toolbar dark dense color="indigo">
                <v-toolbar-title>Category</v-toolbar-title>
            </v-toolbar>

            <v-list>
                <div  
                v-for="(category, index)  in categories" 
                :key="category.id">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>{{category.name}}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-spacer></v-spacer>
                       
                               <v-list-tile-action>
                                    <v-btn icon small @click="edit(index)">
                                        <v-icon color="orange">edit</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                          
                        
                       
                                <v-list-tile-action>
                                    <v-btn icon small @click="destroy(index, category.slug)">
                                        <v-icon color="red">delete</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                         
                        
                    </v-list-tile>
                    <v-divider></v-divider>
                </div>                    
            </v-list>
            
        </v-card>
    </v-container>
</template>

<script>
export default {
    props:{index: Number},
    data(){
        return{
            form:{
                name: null
            },
            categories:{},
            editSlug: null
        }
    },
    created(){
        if(!User.isAdmin()){
                this.$router.push('forum')
            }
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    },
    methods:{
        submit(){
            this.editSlug ?  this.updated() : this.create()
            // console.log(this.category.name)
          
            // .then(res => this.$router.push('forum'))
        },
        create(){            
            axios.post('/api/category', this.form)           
            .then(res => {
               this.categories.unshift(res.data)
               this.form.name = null
            })
        },
        updated(){
            axios.patch(`/api/category/${this.editSlug}`, this.form)
            .then(res => {
               this.categories.unshift(res.data)
               this.form.name = null
            //    this.editSlug = null
            })
        },
        destroy(index, slug){
            // console.log(`/api/category/${slug}`)
            // this.categories.splice(index,1)
            axios.delete(`/api/category/${slug}`)
            .then(res => this.categories.splice(index, 1))
        },
        edit(index){
            this.form.name = this.categories[index].name
            this.editSlug = this.categories[index].slug
            this.categories.splice(index,1)
        }
    }
}
</script>

<style>

</style>
