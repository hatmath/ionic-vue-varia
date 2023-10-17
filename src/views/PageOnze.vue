<template>
    <ion-page>
        <Header></Header>
        <ion-content>
            <div class="ion-text-center">
                <p>{{ this.heureAff }}</p>
                <ion-button color="medium" @click="this.action()">
                    Set heure</ion-button>
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
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonBackButton,
    IonButtons,
    IonButton
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { stockageHeure } from "@/components/stockageHeure";
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
        IonButton,
        Header
    },
    data() {
        return {
            heureAff: " ",
        }
    },
    setup() {
        const { setHeure, getHeure } = stockageHeure();
        return {
            setHeure,
            getHeure
        }
    },
    async ionViewDidEnter() {
        this.heureAff = await this.getHeure();
    },
    methods: {
        async action() {
            this.heureAff = await this.setHeure();
        }
    }
});
</script>../components/stockageHeure.ts