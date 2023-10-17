<template>
    <Header></Header>
    <div>
        Page 2 : params {{ $route.params.id }}
    </div>
</template>
<script setup lang="ts">
import Header from "../components/Header.vue"
</script>
<style scoped></style>