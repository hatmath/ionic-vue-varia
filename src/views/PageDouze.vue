<template>
<ion-page>
    <Header></Header>
    <ion-content>
        <div class="ion-text-center">
            <p>Camera</p>
            <ion-img :src="this.imageSrc"></ion-img>
            <ion-button @click="prendrePhoto">Prendre Photo</ion-button>
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
    IonButton,
    IonImg,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera';
import Header from "../components/Header.vue"
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
        IonImg,
        Header
    },
    methods: {
        async prendrePhoto() {
            console.log("Prendre photo");
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            }); 
            this.imageSrc = String(image.webPath);
        }
    },
    data() {
        return {
            imageSrc: "assets/img/NoImage.png",
        }
    },
});

</script>