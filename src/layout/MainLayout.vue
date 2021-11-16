<template>
    <div class="min-vh-100 d-flex flex-column">
        <top-bar />
        <Menu />
        <router-view style="flex: 1 1 auto" />
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Menu from '../components/Menu.vue'
import TopBar from '../components/TopBar.vue'


export default {
    components: {
        TopBar,
        Menu,
        Footer
    }

}
</script>

<style scoped>

</style>