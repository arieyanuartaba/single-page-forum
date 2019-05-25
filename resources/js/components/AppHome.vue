<template>
    <div>
        <app-nav></app-nav>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppNav from './AppNav';
import AppFooter from './AppFooter';

export default {
    components: {
        AppNav,
        AppFooter
    }
}
</script>

<style>
    
</style>