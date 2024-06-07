<script lang="ts" setup>

useHead({
  title: "Data User"
})

const config = useRuntimeConfig();
//console.log(config.public.apiBase)

//const {data:posts} : any = await useAsyncData('posts',() => fetch('${config.public.apiBase}/api/user'))
//const dataFetch = await $fetch(`${config.public.apiBase}/api/user`)
//console.log(dataFetch)
</script>


<template>
    <div>
        <div class="container text-center">
            <div class="row" style="margin:25px; background-color:white">
                <!-- <div class="col" v-for="(post,index) in posts.data.data" :key="index">
                    <div class="text-1xl font-bold space-x-4" style="color:black">{{ post.name }}</div>
                </div> -->
            </div>
        </div>
    </div>
</template>
