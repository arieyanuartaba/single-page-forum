<template>
    <div>
        <v-btn icon @click="LikeIt">
            <div>
                <v-icon color="red" v-if="liked">favorite</v-icon>
                <v-icon color="red" v-else>favorite_border</v-icon>  
            </div>
            {{this.count}}
        </v-btn>
    </div>
</template>

<script>
export default {
    props:['content'],
    data(){
        return{
            liked: this.content.liked,
            count: this.content.like_count
        }
    },
    created(){
        Echo.channel('LikeChannel')
            .listen('LikeEvent', (e) => {
                if(this.content.id == e.id) {
                    e.type == 1 ? this.count ++ : this.count --
                }
        });
    },
    methods:{
        LikeIt(){
            if(User.loggedIn){
                this.liked ? this.decr() : this.incr()
                this.liked = !this.liked
            }
        },
        incr(){
            axios.post(`/api/like/${this.content.id}`)
            .then(res => this.count ++)
        },
        decr(){
            axios.delete(`/api/like/${this.content.id}`)
            .then(res => this.count --)
        }
    }
}
</script>

<style>

</style>
