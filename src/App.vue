<template>
    <div id="app">
        <Navbar /> <!-- 引用 Navbar 組件 -->   
        <HeroSection /> <!-- 引用 Hero 組件 -->
        <AboutMe /> <!-- 引用 AboutMe 組件 -->
        
        <!-- <Home /> 使用 Home 組件 -->
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; // 導入 Navbar 組件
import HeroSection from './components/Hero.vue'; // 導入 Hero 組件
import AboutMe from './components/About.vue'; // 導入 AboutMe 組件
// import Home from './views/Home.vue'; // 確保導入 Home 組件

export default {
    name: 'App',
    components: {
        Navbar, // 註冊 Navbar 組件
        HeroSection, // 註冊 Hero 組件
        AboutMe // 註冊 AboutMe 組件
        // Home // 註冊 Home 組件
    }
}
</script>

<style>
</style>