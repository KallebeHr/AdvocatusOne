<template>
    <div class="container">
        <div class="titulo">
            <h1>Vamos discutir sobre os Serviços.</h1>
        </div>
        <div class="cardHome">
            <div class="card-item">
                <div class="card-img">
                    <img src="../assets/IMG/left-image.png" alt="">
                </div>
                <div class="card-sobre">
                    <h2>Ajudando a mudar vidas com a lei</h2>
                    <p>Explore nossas diversas áreas de prática, desde direito civil e criminal até direito empresarial
                        e imobiliário.
                    </p>
                </div>
            </div>
        </div>
        <v-divider style="margin: 1rem;"></v-divider>
        <div class="cardHome">
            <div class="card-item">
                <div class="card-img">
                    <img src="../assets/IMG/left-image.png" alt="">
                </div>
                <div class="card-sobre">
                    <h2>Ajudando a mudar vidas com a lei</h2>
                    <p>Explore nossas diversas áreas de prática, desde direito civil e criminal até direito empresarial
                        e imobiliário.
                    </p>
                </div>
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
  margin-top: 5rem;
}

.titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.cardHome {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5rem 10rem;
}

.card-item {
  width: calc(100% / 1); 
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card-sobre {
  text-align: center;
}

.card-img {
  margin-bottom: 1rem; 
}

.card-sobre h2, .card-sobre p {
  color: black;
}

.card-sobre h2 {
  font-size: 1.5rem;
}

.card-sobre p {
  font-size: 1rem;
  max-width: 20rem;
}


/* Estilos para telas pequenas (celulares em modo paisagem e menor) */
@media screen and (max-width: 576px) {
    .card-item {
    width: 100%; 
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    .card-img > img{
    width: 200px;
  }
  .card-sobre h2 , p{
    width: 19rem;
  }
}

/* Estilos para telas médias (tablets e dispositivos maiores) */
@media screen and (min-width: 577px) and (max-width: 992px) {
      .card-item {
    width: calc(100% / 1); 
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
  }
  
  .card-sobre {
    text-align: center;
  }
  
  .card-img {
    margin-bottom: 1rem; 
  }
  .card-img > img{
  }
}

/* Estilos para telas grandes (monitores desktop e laptops) */
@media screen and (min-width: 993px) {}
</style>