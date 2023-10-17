<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons slot="end">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ $route.name ? $route.name : "no name" }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>
<script setup lang="ts">
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/vue';
</script>
<style scoped></style>