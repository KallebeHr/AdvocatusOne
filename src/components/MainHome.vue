<template>
  <div class="container">
    <section class="hero">
      <main class="main-content">
        <h1>Construindo um Futuro Legal para Sua Família</h1>
        <p>Em nosso escritório, buscamos proporcionar soluções legais eficazes para nossos clientes. Com uma equipe experiente e dedicada, estamos prontos para ajudá-lo a resolver seus problemas jurídicos.</p>
      </main>
    </section>
    <section class="cardHome" ref="box">
      <div class="card-item" v-for="(testimonial, index) in testimonials" :key="testimonial.id">
        <img src="../assets/IMG/icons8-install-64.png" class="card-item-img" alt="">
        <h2>{{ testimonial.titulo }}</h2>
        <p>{{ testimonial.descricao }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const testimonials = [
      { id: 1, titulo: " Serviços Oferecidos", descricao: "Explore nossas áreas de especialização e descubra como nossa equipe dedicada pode ajudá-lo com uma ampla gama de questões legais." },
      { id: 2, titulo: "Compromisso com o Cliente", descricao: "Nosso compromisso é fornecer atendimento jurídico de qualidade excepcional, com transparência, ética e dedicação total aos nossos clientes." },
      { id: 3, titulo: "Experiência e Credibilidade", descricao: "Conte com nossa vasta experiência e credibilidade para resolver suas questões legais com eficiência e eficácia. Nossa equipe experiente está aqui para ajudar você a alcançar seus objetivos legais." }
    ];

    return {
      testimonials
    };
  }
};
</script>

<style scoped>
.container{
  background: rgba(137, 43, 226, 0.253);
}
.hero {
  font-size: 18px;
  background-image: url('/caminho/para/o/seu/arquivo.svg');
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top:7rem;
}

.main-content h1 {
  color: #333;
  margin: 10px;

}
.main-content > p{
  margin: 10px;
  width: 50rem;

}

.cardHome {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  
}
.card-item:hover > .card-item-img{
  background: #0099ff63;
  transition: .4s;

} 
.card-item-img {
  background: #0099ff;
  padding: 10px;
  border-radius: 35px;
  transition: .4s;
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
  background: rgb(255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1;
  cursor: pointer;
  color: #666;
}

.card-item h2 {
  color: #0099ff;
  font-size: 1rem;
}

.card-item p {
  font-size: 0.9rem;
}

/* Estilos para telas pequenas (celulares em modo paisagem e menor) */
@media screen and (max-width: 576px) {
  .card-item {
    width: calc(100% / 1);
    margin: 2rem;
  }
  .cardHome{
  margin: 0;
  }
  .main-content > p{
  margin: 10px;
  width: 20rem;

}
}

/* Estilos para telas médias (tablets e dispositivos maiores) */
@media screen and (min-width: 577px) and (max-width: 992px) {
  .card-item {
    width: calc(100% / 2);
    margin: 1.5rem;
  }
  .main-content > p{
  margin: 10px;
  width: 35rem;

}
}
</style>
