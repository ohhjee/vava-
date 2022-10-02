<template>
    <div>
        <router-view></router-view>
    
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import aos from './animate'

onMounted(() => {
    aos
})
</script>

<style>
.bg {
    background: linear-gradient(0deg, rgba(197 197 197) 0%, rgba(255, 255, 255, 1) 100%)
}
</style>