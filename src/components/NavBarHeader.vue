<template>
  <div>
    <header>
      <a href="#" class="logo">Advocatus</a>
      <ul v-if="!isMobile">
        <li><a href="#" style="color: red;">Inicio</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Casos</a></li>
        <li><a href="#">Testemunhos</a></li>
        <li><a href="#">Contatos</a></li>
      </ul>
      <v-icon v-if="isMobile"  @click="expand = !expand" style="cursor: pointer;" icon="mdi-menu" />
      
    </header>
    <v-fade-transition mode="out-in" v-if="isMobile">
        <v-card
          v-show="expand"
          class="headerMenu"
        >
        <v-btn @click="expand = !expand" class="bnt-menu">Inicio</v-btn>
        <v-btn @click="expand = !expand" class="bnt-menu">Serviços</v-btn>
        <v-btn @click="expand = !expand" class="bnt-menu">Casos</v-btn>
        <v-btn @click="expand = !expand" class="bnt-menu">Testemunhos</v-btn>
        <v-btn @click="expand = !expand" class="bnt-menu">Contatos</v-btn>

        
      </v-card>
      </v-fade-transition>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'HeaderAndNav',
  setup() {
    const isMobile = ref(false);
    const expand = ref(false);

    const handleWindowSizeChange = () => {
      isMobile.value = window.innerWidth <= 1000;
    };

    onMounted(() => {
      handleWindowSizeChange();
      window.addEventListener('resize', handleWindowSizeChange);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleWindowSizeChange);
    });

    return { isMobile, expand };
  }
};
</script>

<style scoped>
header{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .6s;
  margin-top: 25px;
  padding: 40px 50px;
  z-index: 100000;
  border-radius: 50px;
  background-color: #ececec;
  font-family: "Raleway", sans-serif;
}
.headerMenu{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 20rem;
  background-color: #ececec;
  border-radius: 0 0 50px 50px;
  margin-top: 60px
  
} 
header .logo {
  font-weight: 800;
  color: #493e3e;
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: .6s;
}
.bnt-menu{
  margin-top: 1rem;
  width:100%;
  background-color: transparent; 
  padding: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #1e1e1e;
  font-size: 13px;
  transition: .6s;
  border: none;
  box-shadow:none;
  text-transform:none;
}
.bnt-menu:focus{
}
.bnt-menu:hover{
  box-shadow:none;
  background: none;
  background-color: none; 
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

header ul li {
  list-style: none;
}

header ul li a {
  margin: 0 15px;
  text-decoration: none;
  color: #1e1e1e;
  letter-spacing: 2px;
  font-weight: 600;
  transition: .6s;
  font-size: 13px;
}

header ul li a:hover {
  color: rgb(255, 57, 57);
  transition: .3s;

}

/* Estilos para telas pequenas (celulares em modo paisagem e menor) */
@media screen and (max-width: 576px) {
  header {
    width: 90%;
    padding: 20px 20px;
    height: auto;
  }
  .headerMenu{
    width: 90%;
    padding: 30px 20px;
  }
  header .logo {
    font-size: 1rem;
  }

  header ul {
    display: none;
  }
}

/* Estilos para telas médias (tablets e dispositivos maiores) */
@media screen and (min-width: 577px) and (max-width: 992px) {
  header {
    padding: 40px 50px;
  }
  .headerMenu{
    padding: 30px 50px;
    width: 80%;
  }
  header ul li a {
    margin: 0 10px;
    font-size: 12px;
    letter-spacing: 2px;
  }

  header .logo {
    font-size: 1.6rem;
  }
}

/* Estilos para telas grandes (monitores desktop e laptops) */
@media screen and (min-width: 993px){
  header ul {
    display: flex;
  }

  header ul li a {
    margin: 0 10px;
    letter-spacing: 2px;
    font-size: 13px;
  }

  header .logo {
    font-size: 1.4rem;
  }
}
</style>
