<template>
    <section class="container" id="depoimentos">
      <div class="titulos">

        <h2>O que eles falam?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper, quis faucibus sem ultricies.</p>
      </div>
      <div class="cards">
        <div class="item-card" v-for="user in users" :key="user.id">
          <div class="content">
            <img src="../assets/IMG/testimonial-icon.png" alt="">
            <p>{{ user.testimony }}</p>
            <div class="user">
              <div class="redondo"></div>
              <h2>{{ user.name }}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    setup() {
      const users = [
       { id: 1, name: "Heuller Kallebe", testimony: "Estou extremamente satisfeito com os serviços prestados pela equipe da Advocatus. Eles foram incrivelmente profissionais e atenciosos em todos os aspectos do meu caso. Recomendo fortemente seus serviços a qualquer pessoa que precise de assistência jurídica confiável." },
  { id: 2, name: "Luan Lima", testimony: "Contratei a Advocatus para lidar com uma disputa legal complexa e não poderia estar mais feliz com os resultados. Sua experiência em direito civil foi crucial para alcançar um desfecho favorável para o meu caso. Sem dúvida, voltarei a eles se precisar de assistência jurídica no futuro." },
  { id: 3, name: "Marcos Davi", testimony: "Gostaria de expressar minha gratidão à equipe da Advocatus por sua dedicação e comprometimento em lidar com meu caso de divórcio. Eles me guiaram através de cada etapa do processo, proporcionando tranquilidade e apoio em um momento difícil da minha vida. Recomendo seus serviços a qualquer pessoa que esteja passando por uma situação semelhante." }
];
  
      return {
        users
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    flex-direction: column;
  }
  
  .titulos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
  }
  
  .titulos > p {
    margin-left: 10px;
    margin-right: 10px;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .item-card {
    width: calc(100% / 3);
    margin: 2rem;
    overflow: hidden; 
  }
  
  .item-card .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%; 
    padding: 5px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 1;
    cursor: pointer;
  }
  
  .item-card > img {
  }
  
  .user {
    display: flex;
    align-items: center;
  }
  
  .redondo {
    width: 50px;
    height: 50px;
    border-radius: 70%;
    background: gray;
    margin: 10px;
    text-align: center;
  }
  
  .card-item h2 {
    color: #0099ff;
    font-size: 1.5rem;
  }
  
  .item-card p {
    color: #666;
    font-size: 0.8rem;
    padding-top: 1rem;
    margin: 10px;
  }
  
  @media screen and (max-width: 580px) {
    .item-card {
      width: calc(100% / 1); 
      padding: 10px;
      margin: 10px;
    }
  
    .item-card > h2,
    .item-card > p {
      font-size: 13px;
    }
  }
  
  @media screen and (min-width: 581px) and (max-width: 800px) {
  .item-card {
    width: calc(100% / 3); 
    padding: 5px; 
  }
}
@media screen and (min-width: 581px) and (max-width: 800px) {
    .item-card {
      width: calc(100% / 3); 
      padding: 5px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 1;
    cursor: pointer;
    }
  }
  
  @media screen and (min-width: 801px) and (max-width: 992px) {
    .item-card {
      width: calc(100% / 4); 
      padding: 10px;
      margin: 10px;
    }
  }
  
  @media screen and (min-width: 993px) {
    .item-card {
      width: calc(100% / 4); 
      padding: 10px;
      margin: 10px;
    }
  }
  </style>
  