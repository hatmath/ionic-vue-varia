<template>
    <ion-page> 
        <Header></Header>
        <ion-content>
            <div class="ion-text-center">
                <p>{{ this.heure }}</p>
                <ion-button color="medium" @click="this.setHeure()">Set heure</ion-button>
            </div>
        </ion-content>
        <ion-footer>
            <ion-toolbar color="secondary"> 
                <ion-title>Pied de page</ion-title>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>
<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonBackButton, IonButtons, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Storage } from '@capacitor/storage';
import Header from "../components/Header.vue";
export default defineComponent({ 
    components: { 
        IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar, 
        IonFooter, 
        IonBackButton, 
        IonButtons,
        Header, 
    },
    data() {
        return { heure: " ", } 
    }, 
    ionViewDidEnter() {this.getHeure(); 
    },
    methods: {
        async setHeure() { 
            const heure = String(new Date().toLocaleString()); 
            await Storage.set({key: 'heure',value: heure,}); 
            this.getHeure();
        },
        async getHeure() { 
            const { value } = await Storage.get({ key: 'heure' }); 
            console.log(`Heure: ${value}`);
            this.heure = String(value); 
        } 
    } 
});

</script>

<style scoped>
.milieu {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>