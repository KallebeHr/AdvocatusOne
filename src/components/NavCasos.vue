<template>
  <div class="container" id="casos">
    <div class="titulos">

      <h2>Casos de Sucesso</h2>
      <p>Nossos ultimos Casos de Sucessos</p>
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
        { id: 1, title: 'Divórcio Amigável',
         description: 'O Sr. e a Sra. Silva enfrentaram um divórcio amigável após anos de casamento. Com a ajuda dos nossos advogados, conseguiram chegar a um acordo justo e respeitoso, garantindo o bem-estar de toda a família.',
          image: '../src/assets/IMG/foguete.png' },
        { id: 2, title: 'Herança Contestada',
         description: 'A família Oliveira enfrentou uma disputa complexa sobre a herança de um parente falecido. Nossos advogados conseguiram resolver o conflito de forma rápida e eficaz, protegendo os interesses de todos os envolvidos.',
          image: '../src/assets/IMG/foguete.png' },
        { id: 3, title: 'Acordo Trabalhista',
         description: 'O cliente João Santos enfrentou uma disputa com seu empregador sobre questões trabalhistas. Com a representação legal da nossa equipe, ele obteve um acordo justo que garantiu seus direitos e compensações adequadas.',
          image: '../src/assets/IMG/foguete.png' },
        { id: 4, title: 'Casamento Internacional',
         description: 'O casal Silva e Garcia, de nacionalidades diferentes, buscava orientação jurídica para seu casamento internacional. Nossos advogados auxiliaram em todo o processo, garantindo que todos os requisitos legais fossem atendidos com sucesso.',
          image: '../src/assets/IMG/foguete.png' },
        { id: 5, title: 'Adoção Concluída',
         description: 'O casal Pereira finalmente concluiu o processo de adoção de seu filho após anos de espera e desafios legais. Nossa equipe ofereceu suporte jurídico durante todo o processo, tornando possível a realização desse sonho.',
          image: '../src/assets/IMG/foguete.png' },
        { id: 6, title: 'Negociação Imobiliária',
         description: 'O cliente Maria Alves enfrentava dificuldades em uma negociação imobiliária complexa. Com a assistência dos nossos advogados especializados, ela conseguiu chegar a um acordo vantajoso que atendeu às suas necessidades e objetivos.',
          image: '../src/assets/IMG/foguete.png' }
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
  height: auto; 
  width: calc(100% / 8);
  padding: 1rem;
  border-radius: 10px;
  transition: .2s;
  margin: 1rem;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
}
.item-card:hover{
  transform: translateY(-8px);
  transition:.2s;
}

.item-card > h2 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.item-card > p {
  font-size: 0.9rem;
  flex-grow: 1; 
}
.item-card > img {
  width: 28px; 
  height: auto; 
  max-width: 100%;
  margin: 0 auto 0.5rem auto;
}
/* Responsividade */
@media screen and (max-width: 580px) {
  .item-card {
    height: auto;
    width: calc(100% / 2);
    padding: .5rem;
  }

  .container {
    padding: 1rem;
  }
}

@media screen and (min-width: 581px) and (max-width: 800px) {
  .item-card {
    height: auto; 
    width: calc(100% / 3);
  }
}

@media screen and (min-width: 801px) and (max-width: 992px) {
  .item-card {
    height: auto; 
    width: calc(100% / 5);
    padding: .5rem;
  }
}
@media screen and (max-width: 1110px){
  .item-card {
    height: auto;
    width: calc(100% / 1 );
    padding: .5rem;
  }
}
</style>
