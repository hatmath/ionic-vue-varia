<template>
  <ion-page>
    <Header></Header>
    <ion-content :fullscreen="true">
      <ion-title collapse="condense">
        <ion-title size="large">Page d'accueil</ion-title>
      </ion-title>
      <div id="container">
        <strong>Menu de base</strong>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import {
  IonContent,
  IonPage,
  IonTitle,
} from '@ionic/vue';
import Header from '../components/Header.vue'
</script>
