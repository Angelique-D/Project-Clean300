<script setup>
import Header from '../components/Header.vue';
</script>

<template>
    <Header/>
    <div class="main-container">
        <h2>RECAP AVIS DE PASSAGE</h2>
        <div class="container-form">
            
        </div>
    </div>
</template>

<style>
* {
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
