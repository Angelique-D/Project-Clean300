<script setup>
import { ref } from 'vue'
const nameTech = ref('JM')

</script>

<template>
<header>
    <img src="../assets/img/logo-clean3000-transparent.png" alt="Logo Clean3000">
    <div class="avatarUserTech">
        <p>{{ nameTech }}</p>
    </div>
</header>
</template>

<style scoped lang="scss">

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    background-color: #3D3D33;

    img {
        height: 50px;
        margin-left: 5px;
    }

    .avatarUserTech {
        height: 50px;
        width: 50px;
        background-color: white;
        border-radius: 50%;
        margin-right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

</style>