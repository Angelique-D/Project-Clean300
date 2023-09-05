<script setup>
import Header from '../components/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <Header />
    <div class="main-container">
        <h2>RECAP AVIS DE PASSAGE</h2>
        <div class="container-text">
            <p>Le client {{ route.query.valueClient }} 
                <br>confirme le passage du technicien <span>Jean-Michel</span> le {{ route.query.valueTime }}
            </p>
            <p v-if="route.query.valueText.length > 0">Ses Observations : {{ route.query.valueText }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h2 {
        margin: 30px;
    }

    .container-text {
        background-color: #3D3D33;
        color: white;
        padding: 15px;
        width: 80%;
        border-radius: 5px;
        line-height: 1.6;
    }
}
</style>
