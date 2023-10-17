<template>
    <ion-page>
        <Header></Header>
        <ion-content>
            <div class="ion-text-center">
                <h1>Ma liste</h1>
                <p v-for="item in maListe" :key="item.id">{{ item.nom }}</p>
            </div>
            <ion-button size="large" expand="full" @click="function () {
                maListe.push({ id: 4, nom: 'Ahmed' })
            }">
                Ajouter
            </ion-button>
            <ion-button size="large" expand="full" @click="function () {
                maListe[1].nom += 'ahah'
            }">
                modifier
            </ion-button>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import Header from "../components/Header.vue"
import {
    IonContent,
    IonPage
} from '@ionic/vue';
const maListe = reactive([
    { id: 1, nom: "Stephane" },
    { id: 2, nom: "Antoine" },
    { id: 3, nom: "Gilles" }
])
</script>