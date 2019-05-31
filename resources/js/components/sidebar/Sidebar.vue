<template>
    <div>
        <v-card>
            <v-toolbar dark dense color="teal">
                <h1>Category</h1>
            </v-toolbar>

            <v-list>
                <v-list-tile
                v-for="category in categories"
                :key="category.id"
                >
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{category.name}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            categories:{}
        }
    },
    created(){
        axios.get('/api/category')
        .then( res => this.categories = res.data.data)
    }
}
</script>

<style>

</style>
