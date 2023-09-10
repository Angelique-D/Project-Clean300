<script setup>
import Header from '../components/Header.vue';
import { useRoute } from 'vue-router';
import { useFormValueStore } from '../stores/formValue';

const formValueStore = useFormValueStore()
</script>

<template>
    <Header />
    <div class="main-container">
        <h2>Confirmation d'avis de passage</h2>
        <router-link to="/home">
            <button>+</button>
        </router-link>
        <div class="container-notices">
            <div class="noticeCard" v-for="notice in formValueStore.notices">
                <ul>
                    <li> Le client {{ notice.customer }}</li>
                    <li> confirme le passage du technicien Jean-Michel</li> 
                    <li> le  {{ notice.time }}</li>
                    <li> Observations : {{ notice.text }}</li> 
                </ul>
            </div>     
        </div>
    </div>
</template>

<style scoped lang="scss">

$color1: #54ad3f;
$colorBG: #3D3D33;
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
        margin-top: 30px;
    }

    a {
        margin-left: 72%;
        text-decoration: none;
    }

    button {
        padding: 2px 6px;
        font-size: 25px;
        background-color: $color1;
        border: none;
        margin-bottom: 5px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: darken($color1, 10);
        }
    }

    .container-notices {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: white;
        padding: 15px;
        width: 80%;
        border-radius: 5px;
        line-height: 1.6;

        .noticeCard {
            background-color: $colorBG;
            width: 400px;
            padding: 15px;
            margin: 10px;

            ul {
                list-style: none;
            }
        }
    }
}
</style>
