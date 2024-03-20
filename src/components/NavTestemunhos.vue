<template>
    <section class="container">
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
        { id: 1, name: "Kallebe", testimony: "Testemunho do Kallebe, Testemunho do Kallebe, Testemunho do Kallebe" },
        { id: 2, name: "Fulano", testimony: "Testemunho do Fulano, Testemunho do Fulano, Testemunho do Fulano" },
        { id: 3, name: "Ciclano", testimony: "Testemunho do Ciclano, Testemunho do Ciclano, Testemunho do Ciclano" }
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
      width: calc(100% / 2); 
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
  