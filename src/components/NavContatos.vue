<template>
  <div class="container"  id="contatos">

    <div class="titulos">
      <h2>Fale Conosco!</h2>
      <p>Sinta-se à vontade para entrar em contato conosco:</p>
    </div>
    <div class="contatos-formulario">
      <div class="contatos">
        <h2>Informações de Contato</h2>
        <p>Aqui estão algumas formas de manter contato:</p>
        <ul>
          <li>
            <a href="https://instagram.com/kallebehr">
              <img src="../assets/IMG/icons8-instagram-50.png" alt="Instagram">
              Kallebehr
            </a>
          </li>
          <li>
            <a href="https://wa.me/5586981632626">
              <img src="../assets/IMG/icons8-whatsapp-50.png" alt="WhatsApp">
              +55 86 98163-2626
            </a>
          </li>
        </ul>
      </div>
      <div class="formulario">
        <h2>Envie-nos uma Mensagem</h2>
        <form @submit.prevent="submit" class="form">
          <input type="text" v-model="formData.name" placeholder="Nome Completo" class="input" required>
          <input type="email" v-model="formData.email" placeholder="Endereço de Email" class="input" required>
          <textarea v-model="formData.message" placeholder="Sua Mensagem" class="textarea" rows="5" maxlength="250" required></textarea>
          <button type="submit" class="btnEnviar">Enviar</button>
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
      console.log("O Nome é " + formData.value.name);
      console.log("O Email é " + formData.value.email);
      console.log("A Mensagem é " + formData.value.message);
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

.titulos {
  margin-bottom: 20px;
  text-align: center;
}

.contatos-formulario {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
}

.contatos, .formulario {
  flex: 1;
  padding: 20px;
}

.contatos img {
  width: 24px;
  margin-right: 10px;
  vertical-align: middle;
}

.contatos ul {
  list-style: none;
  padding: 0;
}

.contatos li {
  margin-bottom: 10px;
}
.contatos h2{
  margin-bottom:10px;
}
.contatos p{
  margin-bottom:20px;
}
.contatos a {
  text-decoration: none;
  color: #000; 
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

.btnEnviar {
  width: 100%;
  padding: 10px;
  background: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btnEnviar:hover {
  background: #333;
}

/* Media queries */
@media screen and (max-width: 580px) {
  .contatos-formulario {
    flex-direction: column;
    align-items: center;
  }

  .btnEnviar {
    width: auto;
  }
}
</style>
