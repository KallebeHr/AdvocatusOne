<template>
  <div class="container">
    <div class="titulosP">
      <h2>Fale com a Gente!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper, quis faucibus sem ultricies.</p>
    </div>
    <div class="formContatos">
      <div class="contatos">
        <h2>Keep in touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet tellus sit amet ante ullamcorper, quis faucibus sem ultricies.</p>
      </div>
      <div class="form">
        <form @submit.prevent="submit" class="form">
          <input type="text" v-model="formData.name" placeholder="Nome Completo" class="input">
          <input type="email" v-model="formData.email" placeholder="Endereço de Email" class="input">
          <textarea v-model="formData.message" placeholder="Sua Mensagem" class="textarea" rows="5" maxlength="250"></textarea>
          <button type="submit" class="btnSend">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const formData = ref({
      name: '',
      email: '',
      message: ''
    });

    const submit = () => {
      // Lógica para enviar os dados do formulário
      console.log(formData.value);
    };

    return { formData, submit };
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  background: rgba(137, 43, 226, 0.253);
  padding: 20px;
}

.titulosP {
  margin-bottom: 20px;
  text-align: center;
}

.formContatos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.contatos, .form {
  flex: 1;
  padding: 20px;
}

.input, .textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.textarea {
  height: 8rem;
  resize: none;
}

.btnSend {
  width: 100px;
  padding: 10px;
  background: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
@media screen and (max-width: 580px) {
  .formContatos {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  margin-top: 20px;
}
}
/* Estilos para telas médias (tablets e dispositivos maiores) */
@media screen and (min-width: 581px) and (max-width: 800px) {
  .formContatos {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  margin-top: 20px;
}
}

/* Estilos para telas grandes (monitores desktop e laptops) */
@media screen and (min-width: 801px) and (max-width: 992px) {

}

/* Estilos para telas extra grandes (monitores maiores) */
@media screen and (min-width: 993px) {

}
</style>
