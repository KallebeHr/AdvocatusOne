<template>
  <div>
    <section class="hero" >
      <main class="main-content">
        <h1>Seus problemas legais, nossas soluções especializadas.</h1>
        <p>Olá! Pronto para resolver seus desafios legais. Explore para encontrar a assistência que você precisa</p>
      </main>
    </section>
    <section class="cardHome">
      <div class="card-item">
        <h2>Serviço 1</h2>
        <p>Descrição do serviço 1.</p>
      </div>
      <div class="card-item">
        <h2>Serviço 2</h2>
        <p>Descrição do serviço 2.</p>
      </div>
      <div class="card-item">
        <h2>Serviço 3</h2>
        <p>Descrição do serviço 3.</p>
      </div>
    </section>
  </div>    
</template>

<script>
export default {

}
</script>

<style>
.hero {
  margin-top: 5rem;
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
}

.main-content h1 {
  color: #333;
}

.cardHome {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url('../assets/IMG/wave (1).svg');
  background-size: cover; /* Ajusta o tamanho do background para cobrir toda a área */
  background-position: center; /* Centraliza o background na seção */
  padding: 100px 0; /* Espaçamento interno superior e inferior da seção */
}

.card-item {
  width: calc(100% / 2); /* Cada serviço ocupará 1/3 do espaço */
  height: 15rem;
  padding: 1rem;
  margin: 1rem;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

}
.card-item1{
  color: #666;
}
.card-item h2 {
  color: #0099ff;
}

.card-item p {
  color: #666;
}

@media screen and (max-width: 568px) {
  .card-item {
    width: calc(100% / 2); /* Em telas menores, cada serviço ocupará 1/2 do espaço */
  }
  h1{
    margin:5px;
  }
  p{
    margin:5px;
  }
}
@media screen and (max-width: 768px) {
  .card-item {
    width: calc(100% / 2); /* Em telas menores, cada serviço ocupará 1/2 do espaço */
  }
}
@media screen and (max-width: 768px) {
  .card-item {
    width: calc(100% / 2); /* Em telas menores, cada serviço ocupará 1/2 do espaço */
  }
}
@media screen and (max-width: 768px) {
  .card-item {
    width: calc(100% / 2); /* Em telas menores, cada serviço ocupará 1/2 do espaço */
  }
}
</style>

