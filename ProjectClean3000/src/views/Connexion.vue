<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

    <div class="container-bodyConnexion">
        <img src="../assets/img/logo-clean3000-transparent.png" alt="Logo Clean3000">
        <router-link to="/home">
            <div class="circleAvatar">
                <p>JM</p>
            </div>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.container-bodyConnexion {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #3D3D33;

    img {
        height: 50px;
        position: absolute;
        top: 125px;
        left: 50px;
    }

    .circleAvatar {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        cursor: pointer;

        p{
            font-size: 50px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-decoration: none;
        }
    }
}

</style>