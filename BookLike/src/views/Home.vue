<template>
    <AppHeader/>
    <div class="flex flex-row">
        <Sidebar @category-changed="updateBookmarkList"/>
        <AppBookmarkList :items="bookmarkList" v-if="bookmarkList.length > 0"/>
        <div style="color: brown; margin-top: 10px; margin-left: 10px;" v-else>Bookmark bulunmamaktadır.</div>
       
    </div>
</template>
<script>
    import Sidebar from "@/components/Home/Sidebar.vue"
    export default{
        data(){
            return{
                bookmarkList:[]
            }
        },
        components:{
            Sidebar
        },
        created(){
            this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(res=>{
                this.bookmarkList = res?.data || []
            })
        },
        methods:{
            updateBookmarkList(categoryId){
                const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`
                this.$appAxios.get(url).then(res=>{
                this.bookmarkList = res?.data || []
            })
          }
        }
    }
</script>