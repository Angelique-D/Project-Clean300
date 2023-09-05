<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue';

const listClients = ref([
    {
        nameClient: "Jardins d'Ariana",
    },
    {
        nameClient: "Jérôme Livran",
    },
    {
        nameClient: "Philippe Parguey",
    },
    {
        nameClient: "Archimed",
    },
    {
        nameClient: "BeCom",
    },
])

const dateToday = new Date().toLocaleDateString('fr-fr')
const arrayTech = ref([
    {
        nameClient: '',
        date: '',
        text: '',
    }
]);
const confirmForm = () => {
    arrayTech.push()
}
</script>

<template>
    <Header/>
    <div class="main-container">
        <h2>AVIS DE PASSAGE</h2>
        <div class="container-form">
            <form @submit.prevent="handlerSubmit" class="form">

                <label for="client-select">Nom client :</label><br>
                
                <select name="client" id="client-select" v-model="valueClient">
                <option value="client-select">-Selectionnez le client-</option>
                <option v-for="client in listClients" value="client"> 
                    {{ client.nameClient }} 
                </option>
                </select><br>
                {{ valueClient }}

                <label for="dateToday">Notre technicien est intervenu le :</label><br>
                <input type="date" :id="dateToday" name="techtime" :min="dateToday" 
                :max="dateToday" v-model="valueTime"/><br>
                {{ valueTime }}

                <label for="">Observations :</label><br>
                <textarea v-model="valueText" :minlength="0" :maxlength="500"></textarea><br>

                <p>Merci pour votre confiance.</p><br>

                <label for="signingUpTech">Signature du technicien :</label><br>
                <label for="signingUpClient">Signature du client :</label><br>

                <router-link to="/confirm"><button type="submit" @click="confirmForm">Confirmer</button></router-link>

                <img src="../assets/img/logo-clean3000-mini.png" class="leafImage" alt="Feuille d'arbre">
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
*{
    padding: 0;
    margin: 0;

        .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2 {
            margin: 25px;
        }

        .container-form {
            background-color: #3D3D33;
            color: white;
            padding: 15px;
            width: 80%;
            border-radius: 5px;
            
            .form {

                textarea {
                    height: 150px;
                    width: 90%;
                }

                button {
                    border: none;
                    padding: 8px 20px;
                }

                .leafImage {
                    position: relative;
                    float: right;
                    rotate: 220deg;
                    height: 40px;
                    width: 40px;
                }
            }
        }
    }  
}


</style>