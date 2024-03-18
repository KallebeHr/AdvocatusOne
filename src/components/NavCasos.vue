<template>
    <div class="container">
      <div class="titulos">
        <h2>Processos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper, quis faucibus sem ultricies.</p>
      </div>
      <div class="item">
        <div class="item-card">
          <img src="../assets/IMG/work-process-item-01.png" alt="">
          <h2>heuller Kallebe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,</p>
        </div>
        <div class="item-card">
          <img src="../assets/IMG/work-process-item-01.png" alt="">
          <h2>heuller Kallebe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,</p>
        </div>
        <div class="item-card">
          <img src="../assets/IMG/work-process-item-01.png" alt="">
          <h2>heuller Kallebe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,</p>
        </div>
        <div class="item-card">
          <img src="../assets/IMG/work-process-item-01.png" alt="">
          <h2>heuller Kallebe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,</p>
        </div>
        <div class="item-card">
          <img src="../assets/IMG/work-process-item-01.png" alt="">
          <h2>heuller Kallebe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,</p>
        </div>
        <div class="item-card">
          <img src="../assets/IMG/work-process-item-01.png" alt="">
          <h2>heuller Kallebe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(137, 43, 226, 0.253);
  height: 27%; 
}
  
  .titulos {
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-top: 10px; 
    margin: 10px;
  }
  
  .item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 
    margin-top: 3rem; 
  }
  
  .item-card {
    text-align: center; 
    background: aliceblue;
    height: 15rem;
    width: calc(100% / 6); 
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }
  
  .item-card > h2 {
    font-size: 16px;
  }
  
  .item-card > p {
    font-size: 14px;
  }
  
  /* Estilos para telas pequenas (celulares em modo paisagem e menor) */
  @media screen and (max-width: 580px) {
    .item-card {
      height: 15rem;
      width: calc(100% / 3); 
      padding: 10px;
      margin: 10px;
    }
  
    .container {
    }
  
    .item-card > h2,
    .item-card > p {
      width: 5.8rem;
      font-size: 13px;
    }
  }
  
  /* Estilos para telas médias (tablets e dispositivos maiores) */
  @media screen and (min-width: 581px) and (max-width: 800px) {
    .item-card {
      height: 15rem;
      width: calc(100% / 5); 
    }
    .item-card {
      height: 17rem;
    }
  }
  
  /* Estilos para telas grandes (monitores desktop e laptops) */
  @media screen and (min-width: 801px) and (max-width: 992px) {
    .item-card {
      height: 13rem;
      width: calc(100% / 4); 
      padding: 10px;
      margin: 10px;
    }
  }
  
  /* Estilos para telas extra grandes (monitores maiores) */
  @media screen and (min-width: 993px) {
    .item-card {
      height: 15rem;
      width: calc(100% / 7); 
      padding: 10px;
      margin: 10px;
    }
  }
  </style>
  