<template>
    <v-footer style="margin: 0px; padding:0px;" class="d-flex flex-column">
      <div class="bg-teal d-flex w-100 align-center px-4">
        <strong>Redes sociais</strong>
  
        <v-spacer></v-spacer>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          size="small"
          variant="plain"
        ></v-btn>
      </div>
  
      <div class="px-4 py-2 bg-black text-center w-100">
  {{ new Date().getFullYear() }} — <strong>Heuller</strong>
</div>
    </v-footer>
  </template>
  <script>
    export default {
      data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }),
    }
  </script>
