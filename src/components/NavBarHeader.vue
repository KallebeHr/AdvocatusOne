<template>
  <div>
    <header :class="{ 'hidden': !headerVisible }">
      <a href="#" class="logo">Advocatus</a>
      <ul v-if="!isMobile">
        <!-- <li @click="handleClick('#contatos')">Contatos</li> -->
        <li><a @click="handleClick('#inicio')" style="color:red;" href="#">Inicio</a></li>
        <li><a @click="handleClick('#sobre')" href="#">Sobre Nós</a></li>
        <li><a @click="handleClick('#casos')" href="#">Casos de Sucesso</a></li>
        <li><a @click="handleClick('#depoimentos')" href="#">Depoimentos</a></li>
        <li><a @click="handleClick('#contatos')" href="#">Contatos</a></li>
      </ul>
      <v-icon v-if="isMobile" @click="toggleMenu" style="cursor: pointer;" icon="mdi-menu" />
    </header>

    <v-expand-transition mode="out-in" v-if="isMobile">
      <v-card v-show="expand" :class="{ 'no-margin': !expand }" class="headerMenu">

        <v-btn @click="handleClick('#inicio')" style="margin-top:30px;" class="bnt-menu">Inicio</v-btn>
        <v-btn @click="handleClick('#sobre')" class="bnt-menu">Sobre Nós</v-btn>
        <v-btn @click="handleClick('#casos')" class="bnt-menu">Casos de Sucesso</v-btn>
        <v-btn @click="handleClick('#depoimentos')" class="bnt-menu">Depoimentos</v-btn>
        <v-btn @click="handleClick('#contatos')" class="bnt-menu">Contatos</v-btn>
      </v-card>
    </v-expand-transition>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router'
import {useGoTo} from 'vuetify'

export default {
  name: 'HeaderAndNav',
  setup() {

    const goTo = useGoTo()
    const isMobile = ref(false);
    const expand = ref(false);
    const headerVisible = ref(true);

    function handleClick(id){
      goTo(id)
      toggleMenu()
    }

    const handleWindowSizeChange = () => {
      isMobile.value = window.innerWidth <= 1000;
    };

    const toggleMenu = () => {
       expand.value = !expand.value;
      // Menu aberto ou fechado
      if (!expand.value) {
        // tempo antes de remover a margem
        setTimeout(() => {
          headerVisible.value = false;
        }, 20000);
      }
    };

    const handleOutsideClick = (event) => {
      // se foi clicado dentro do header
      if (!event.target.closest('header')) {
        headerVisible.value = false;
        if (expand.value) {
          expand.value = false;
        }
      }
    };

    const handleScroll = () => {
      //
      headerVisible.value = false;
      if (expand.value) {
        expand.value = false;
      }
    };

    onMounted(() => {
      handleWindowSizeChange();
      window.addEventListener('resize', handleWindowSizeChange);
      document.addEventListener('click', handleOutsideClick);
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleWindowSizeChange);
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isMobile,
      expand,
      headerVisible,
      toggleMenu,
      goTo,
      useGoTo,
      handleClick
    };
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
  border-radius: 4rem;
  background-color: #ececec;
  font-family: "Raleway", sans-serif;
}
.headerMenu{
  position: fixed;
  top: 0;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 18rem;
  background-color: #ececec;
  border-radius: 2rem 2rem 4rem 4rem;
  margin-top: 30px;
  
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
.headerMenu {
  margin-top: 3rem; 
}

.no-margin {
 display:none;
}
.bnt-menu{
  width:100%;
  background-color: transparent; 
  font-weight: 600;
  letter-spacing: 3px;
  margin: 5px;
  padding: 10px;
  color: #1e1e1e;
  font-size: 13px;
  transition: .6s;
  border: none;
  box-shadow:none;
  text-transform:none;
  --v-btn-height: 0;
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
  }
  .headerMenu{
    width: 90%;
    padding: 30px 20px;
    margin-top: 45px;
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
    font-size: 1.3rem;
  }
}

/* Estilos para telas grandes (monitores desktop e laptops) */
@media screen and (min-width: 993px){
  header ul {
    display: flex;
  }

  header ul li a {
    margin: 0 11px;
    letter-spacing: 2px;
    font-size: 11.5px;
  }

  header .logo {
    font-size: 1.4rem;
  }
}
</style>
