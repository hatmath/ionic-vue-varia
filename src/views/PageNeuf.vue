<template>
    <ion-page>
        <Header></Header>
        <ion-content>
            <div class="ion-text-center">
                <h1>Ma liste</h1>
                <div v-if="maListe.length > 0">
                    <p v-for="item in maListe" :key="item.id">{{
                        item.nom.toUpperCase() }}</p>
                </div>
                <div v-else>
                    <ion-skeleton-text animated style="width: 100%; height:
    100px;"></ion-skeleton-text>
                </div>
            </div>
            <ion-button size="large" expand="full" @click="fetchJSONData">
                Récuperer les données
            </ion-button>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { IonContent, IonPage, IonSkeletonText } from '@ionic/vue';
import Header from "../components/Header.vue"
type Personne = {
    id: number;
    nom: string;
};
let maListe: Personne[] = reactive([]);
async function fetchJSONData() {
    let url = 'https://StephaneDGill.github.io/nom.json';
    maListe.length = 0;
    setTimeout(() => {
        fetch(url)
        .then(data => data.json())
        .then(data => {
            //console.log(data);
            for (let i = 0; i < data.length; i++) {
                maListe.push({ id: data[i].id, nom: data[i].nom });
            }
        })
    }, 800);
}
</script>