<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list>
            <ion-list-header>Mon menu</ion-list-header>
            <ion-menu-toggle :auto-hide="false">
              <ion-item :href="'/page1'">
                <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Page 1: Juste le composant Header</ion-label>
              </ion-item>
              <ion-item :href="'/page2/1'">
                <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Page 2: route.params.id</ion-label>
              </ion-item>
              <ion-item :href="'/page8'">
                <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Page 8: Afficher liste</ion-label>
              </ion-item>
              <ion-item :href="'/page9'">
                <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Page 9: JSON</ion-label>
              </ion-item>
              <ion-item :href="'/page10'">
                <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Page 10: Stockage local et date/heure</ion-label>
              </ion-item>
              <ion-item :href="'/page11'">
                <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Page 11: Module TS date/heure</ion-label>
              </ion-item>
              <ion-item :href="'/page12'">
                <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Page 12: Camera</ion-label>
              </ion-item>
              <ion-item :href="'/page13'">
                <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Page 13: Onglets</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>
<script setup lang="ts">
import {
  IonApp, IonRouterOutlet, IonSplitPane, IonContent,
  IonList, IonListHeader, IonItem, IonLabel, IonMenu,
  IonMenuToggle, IonIcon
} from '@ionic/vue';
import { logoTux } from 'ionicons/icons';
</script>
