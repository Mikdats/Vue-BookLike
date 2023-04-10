<template>
    <AppHeader/>
    <div class="flex flex-row">
        <sideBar/>
        <AppBookmarkList :items="bookmarkList" v-if="bookmarkList.length > 0"/>
        <div style="color: brown; margin-top: 10px; margin-left: 10px;" v-else>Bookmark bulunmamaktadır.</div>
    </div>
</template>

<script>
import sideBar from "@/components/Account/sideBar.vue"
    export default{
        components:{
            sideBar
        },
        data(){
            return{
                bookmarkList:[]
            }
        },
        created(){
            this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(res=>{
                this.bookmarkList = res?.data || []
            })
        }
    }
</script>