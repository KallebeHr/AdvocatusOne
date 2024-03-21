<template>
  <v-app>
    <v-main>
      <NavBarHeader />
      <MainHome />
      <NavSobre />
      <NavCasos />
      <NavTestemunhos /> 
      <NavContatos /> 
      <NavFooter />
    </v-main>
  </v-app>
</template>
 
<script>
  import NavBarHeader from './components/NavBarHeader.vue'
  import MainHome from './components/MainHome.vue'
  import NavSobre from './components/NavSobre.vue'
  import NavCasos from './components/NavCasos.vue'
  import NavTestemunhos from './components/NavTestemunhos.vue';
  import NavContatos from './components/NavContatos.vue';
  import NavFooter from './components/NavFooter.vue';

</script>
<style>


</style>