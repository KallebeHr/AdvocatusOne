<template>
  <div class="container">
    <div class="titulos">
      <h2>Processos</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper, quis faucibus sem ultricies.</p>
    </div>
    <div class="item">
      <div v-for="item in items" :key="item.id" class="item-card">
        <img :src="item.image" :alt="item.alt">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, title: 'Heuller Kallebe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,', image: '../src/assets/IMG/work-process-item-01.png' },
        { id: 2, title: 'Heuller Kallebe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,', image: '../src/assets/IMG/work-process-item-01.png' },
        { id: 3, title: 'Heuller Kallebe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,', image: '../src/assets/IMG/work-process-item-01.png' },
        { id: 4, title: 'Heuller Kallebe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,', image: '../src/assets/IMG/work-process-item-01.png' },
        { id: 5, title: 'Heuller Kallebe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,', image: '../src/assets/IMG/work-process-item-01.png' },
        { id: 6, title: 'Heuller Kallebe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper,', image: '../src/assets/IMG/work-process-item-01.png' }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(137, 43, 226, 0.253);
  padding: 2rem;
}

.titulos {
  text-align: center;
  margin-bottom: 1rem;
}

.item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item-card {
  text-align: center;
  background: aliceblue;
  height: auto; /* Alterado para altura automática */
  width: calc(100% / 8);
  padding: 1rem;
  border-radius: 10px;
  transition: .2s;
  margin: 1rem;
  display: flex; /* Adicionado para permitir alinhamento vertical */
  flex-direction: column; /* Adicionado para alinhar o conteúdo verticalmente */
  justify-content: space-between; /* Adicionado para espaço uniforme entre o título e o texto */
}
.item-card:hover{
  transform: translateY(-8px);
  transition:.2s;
}

.item-card > h2 {
  font-size: 1rem;
  margin-bottom: 0.5rem; /* Adicionado espaçamento inferior */
}

.item-card > p {
  font-size: 0.9rem;
  flex-grow: 1; /* Permite que o texto cresça para ocupar o espaço disponível */
}
.item-card > img {
  width: 20%; /* Reduz a largura da imagem para 50% do card */
  height: auto; /* Permite que a altura da imagem seja ajustada automaticamente de acordo com a largura */
  max-width: 100%; /* Garante que a imagem não ultrapasse a largura do contêiner */
  margin: 0 auto 0.5rem auto; /* Centraliza a imagem horizontalmente e adiciona um espaço abaixo */
}
/* Responsividade */
@media screen and (max-width: 580px) {
  .item-card {
    height: auto; /* Alterado para altura automática */
    width: calc(100% / 2);
    padding: .5rem;
  }

  .container {
    padding: 1rem;
  }
}

@media screen and (min-width: 581px) and (max-width: 800px) {
  .item-card {
    height: auto; /* Alterado para altura automática */
    width: calc(100% / 3);
  }
}

@media screen and (min-width: 801px) and (max-width: 992px) {
  .item-card {
    height: auto; /* Alterado para altura automática */
    width: calc(100% / 5);
    padding: .5rem;
  }
}
@media screen and (max-width: 1110px){
  .item-card {
    height: auto;
    width: calc(100% / );
    padding: .5rem;
  }
}
</style>
