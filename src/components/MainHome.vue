<template>
  <div>
    <section class="hero">
      <main class="main-content">
        <h1>Seus problemas legais, nossas soluções especializadas.</h1>
        <p>Olá! Pronto para resolver seus desafios legais. Explore para encontrar a assistência que você precisa</p>
      </main>
    </section>
    <section class="cardHome" ref="box">
      <div class="card-item" v-for="(item, index) in items" :key="index" :ref="`card${index + 1}`" :class="{ 'visible': isVisible[index] }">
        <img src="../assets/IMG/icons8-install-64.png" class="card-item-img" alt="">
        <h2>Titulo Sobre</h2>
        <p>Descrição do Sobre.</p>
        <p>Descrição do Sobre.</p>
        <p>Descrição do Sobre.</p>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
  
  }
};
</script>

<style scoped>
.hero {
  margin-top: 7rem;
  font-size: 18px;
  background-image: url('tal.svg');
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.main-content h1 {
  color: #333;
}

.cardHome {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
}

.card-item-img {
  background: #0099ff;
  padding: 10px;
  border-radius: 35px;
}

.card-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% / 4);
  height: 15rem;
  padding: 1rem;
  margin: 1rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1;
  cursor: pointer;
}

.card-item {
  color: #666;
}

.card-item h2 {
  color: #0099ff;
  font-size: 1.5rem;
}

.card-item p {
  color: #666;
  font-size: 0.8rem;
}

/* Estilos para telas pequenas (celulares em modo paisagem e menor) */
@media screen and (max-width: 576px) {
  .card-item {
    width: calc(100% / 1);
  }

  h1 {
    margin: 5px;
  }

  p {
    margin: 5px;
  }
}

/* Estilos para telas médias (tablets e dispositivos maiores) */
@media screen and (min-width: 577px) and (max-width: 992px) {
  .card-item {
    width: calc(100% / 3);
  }

  h1 {
    margin: 5px;
  }

  p {
    margin: 5px;
  }
}

/* Estilos para telas grandes (monitores desktop e laptops) */
@media screen and (min-width: 993px) {
}
</style>
