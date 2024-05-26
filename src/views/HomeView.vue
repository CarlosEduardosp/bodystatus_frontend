<script>
import Menu from '/src/components/header.vue';
import { fazerRequisicaoObesidadePOST } from '@/api_connection/enviarDados';

export default {
  name: 'HomeView',
  components: {
    Menu
  },

  data() {
    return {
      nome: '',
      idade: null, // Certifique-se de que os tipos são apropriados
      altura: null,
      peso: null,
      genero: '',
      alcool: null,
      alimentos_caloricos: null,
      vegetais: null,
      refeicoes: null,
      monitora_calorias: null,
      fuma: null,
      agua_diaria: null,
      familia_historico: null,
      atividade_fisica: '',
      tempo_celular: null,
      alimentos_entre_refeicoes: null,
      transporte: '',
      resposta_requisicao: '',
    }
  },
  methods: {
    enviar_dados() {
      this.resposta_requisicao = "Carregando resposta, Por Favor Aguarde um instante."
      this.enviando();
    },
    async enviando() {

      this.altura = parseFloat(this.altura)
      this.peso = parseFloat(this.peso)

      try {
        // Realiza a requisição com os dados do formulário ou dados fixos para teste
        const data = await fazerRequisicaoObesidadePOST(
          this.nome, this.idade, this.genero, this.altura, this.peso, this.alcool,
          this.alimentos_caloricos, this.vegetais, this.refeicoes, this.monitora_calorias,
          this.fuma, this.agua_diaria, this.familia_historico, this.atividade_fisica,
          this.tempo_celular, this.alimentos_entre_refeicoes, this.transporte
        );

        this.resposta_requisicao = data;
        console.log(this.resposta_requisicao);
      } catch (error) {
        console.error('Erro ao iniciar:', error);
      }

      
    }
  }
}
</script>

<template>
  <div class="home">

    <Menu></Menu>

    <div class="titulo">
      <p>Análise de Peso com IA: </p>
      <p>Predições Precisas com Base nos Seus Dados</p>
    </div>

    <form @submit.prevent="enviar_dados" class="form">



      <div class="sub">
        <p class="subtitulo">Dados Pessoais:</p>
      </div>

      <div>
        <label for="nome">Nome</label>
        <input class="input" v-model="nome" type="text" id="nome" required>

        <label for="idade">Idade</label>
        <input class="input" v-model="idade" type="number" id="idade" required>
      </div>

      <div>
        <label>Altura</label>
        <input class="input" v-model="altura"  step="0.01" id="altura" required>

        <label>Peso Corporal</label>
        <input class="input" v-model="peso" type="" step="0.01" id="peso" required>
      </div>

      <div class="genero">
        <label for="">Gênero: </label>
        <div>
          <label>
            <input class="input-genero" v-model="genero" type="radio" name="genero" value="0" required> Masculino
          </label>
          <label>
            <input class="input-genero" type="radio" v-model="genero" name="genero" value="1" required> Feminino
          </label>
        </div>
      </div>


      <label>Com que frequência você bebe álcool?</label>
      <div>
        <label>
          <input class="input-alcool" v-model="alcool" type="radio" name="alcool" value="0" required> Nunca
        </label>
        <label>
          <input class="input-alcool" type="radio" v-model="alcool" name="alcool" value="1" required> Às vezes
        </label>
      </div>
      <div>
        <label>
          <input class="input-alcool" type="radio" v-model="alcool" name="alcool" value="2" required> Frequentemente
        </label>
        <label>
          <input class="input-alcool" type="radio" v-model="alcool" name="alcool" value="3" required> Sempre
        </label>
      </div>

      <label>Você come alimentos com alto teor calórico com frequência?</label>
      <div>
        <label>
          <input class="input-alimentos_caloricos" v-model="alimentos_caloricos" type="radio" name="alimentos_caloricos"
            value="0" required> Não
        </label>
        <label>
          <input class="input-alimentos_caloricos" type="radio" v-model="alimentos_caloricos" name="alimentos_caloricos"
            value="1" required> Sim
        </label>
      </div>

      <label>Você costuma comer vegetais em suas refeições?</label>
      <div>
        <label>
          <input class="input-vegetais" v-model="vegetais" type="radio" name="vegetais" value="1" required> Nunca
        </label>
        <label>
          <input class="input-vegetais" type="radio" v-model="vegetais" name="vegetais" value="2" required> Às Vezes
        </label>
        <label>
          <input class="input-vegetais" type="radio" v-model="vegetais" name="vegetais" value="3" required> Sempre
        </label>
      </div>

      <label>Quantas refeições principais você faz diariamente?</label>
      <div>
        <label>
          <input class="input-refeicoes" v-model="refeicoes" type="radio" name="refeicoes" value="1" required> 1
        </label>
        <label>
          <input class="input-refeicoes" type="radio" v-model="refeicoes" name="refeicoes" value="2" required> 2
        </label>
        <label>
          <input class="input-refeicoes" type="radio" v-model="refeicoes" name="refeicoes" value="3" required> 3
        </label>
        <label>
          <input class="input-refeicoes" type="radio" v-model="refeicoes" name="refeicoes" value="4" required> 4 ou Mais
        </label>
      </div>


      <label>Você monitora as calorias que ingere diariamente?</label>
      <div>
        <label>
          <input class="input-monitora_calorias" v-model="monitora_calorias" type="radio" name="monitora_calorias"
            value="0" required> Não
        </label>
        <label>
          <input class="input-monitora_calorias" type="radio" v-model="monitora_calorias" name="monitora_calorias"
            value="1" required> Sim
        </label>
      </div>

      <label>Você fuma?</label>
      <div>
        <label>
          <input class="input-fuma" v-model="fuma" type="radio" name="fuma" value="0" required> Não
        </label>
        <label>
          <input class="input-fuma" type="radio" v-model="fuma" name="fuma" value="1" required> Sim
        </label>
      </div>

      <label>Quanta água você bebe diariamente?</label>
      <div>
        <label>
          <input class="input-agua_diaria" v-model="agua_diaria" type="radio" name="agua_diaria" value="1" required> 1
          litro
        </label>
        <label>
          <input class="input-agua_diaria" type="radio" v-model="agua_diaria" name="agua_diaria" value="2" required> 2
          litros
        </label>
        <label>
          <input class="input-agua_diaria" type="radio" v-model="agua_diaria" name="agua_diaria" value="3" required> 3
          ou mais litros
        </label>
      </div>

      <label>Algum membro da família sofreu ou sofre de excesso de peso?</label>
      <div>
        <label>
          <input class="input-familia_historico" v-model="familia_historico" type="radio" name="familia_historico"
            value="0" required> Não
        </label>
        <label>
          <input class="input-familia_historico" type="radio" v-model="familia_historico" name="familia_historico"
            value="1" required> Sim
        </label>
      </div>

      <label>Com que frequência você pratica atividade física?</label>
      <div>
        <label>
          <input class="input-atividade_fisica" v-model="atividade_fisica" type="radio" name="atividade_fisica"
            value="0" required> Nunca
        </label>
        <label>
          <input class="input-atividade_fisica" type="radio" v-model="atividade_fisica" name="atividade_fisica"
            value="1" required> Às Vezes
        </label>
        <label>
          <input class="input-atividade_fisica" type="radio" v-model="atividade_fisica" name="atividade_fisica"
            value="2" required> frequentemente
        </label>
        <label>
          <input class="input-atividade_fisica" type="radio" v-model="atividade_fisica" name="atividade_fisica"
            value="3" required> Sempre
        </label>
      </div>

      <label>Quanto tempo você usa dispositivos tecnológicos como celular, videogame, televisão , computador e
        outros</label>
      <div>
        <label>
          <input class="input-tempo_celular" v-model="tempo_celular" type="radio" name="tempo_celular" value="0"
            required> Nenhum Tempo
        </label>
        <label>
          <input class="input-tempo_celular" type="radio" v-model="tempo_celular" name="tempo_celular" value="1"
            required> Entre 1 à 3 horas
        </label>
        <label>
          <input class="input-tempo_celular" type="radio" v-model="tempo_celular" name="tempo_celular" value="2"
            required> Mais de 4 horas
        </label>
      </div>

      <label>Você come algum alimento entre as refeições?</label>
      <div>
        <label>
          <input class="input-alimentos_entre_refeicoes" v-model="alimentos_entre_refeicoes" type="radio"
            name="alimentos_entre_refeicoes" value="0" required> Nunca
        </label>
        <label>
          <input class="input-alimentos_entre_refeicoes" type="radio" v-model="alimentos_entre_refeicoes"
            name="alimentos_entre_refeicoes" value="1" required> Às vezes
        </label>
        <label>
          <input class="input-alimentos_entre_refeicoes" type="radio" v-model="alimentos_entre_refeicoes"
            name="alimentos_entre_refeicoes" value="2" required> Frequentemente
        </label>
        <label>
          <input class="input-alimentos_entre_refeicoes" type="radio" v-model="alimentos_entre_refeicoes"
            name="alimentos_entre_refeicoes" value="3" required> Sempre
        </label>
      </div>

      <label>Qual transporte você costuma usar?</label>
      <div>
        <label>
          <input class="input-transporte" v-model="transporte" type="radio" name="transporte" value="0" required>
          Andando
        </label>
        <label>
          <input class="input-transporte" type="radio" v-model="transporte" name="transporte" value="1" required>
          Transporte Público
        </label>
        <label>
          <input class="input-transporte" type="radio" v-model="transporte" name="transporte" value="2" required>
          Bicicleta
        </label>
        <label>
          <input class="input-transporte" type="radio" v-model="transporte" name="transporte" value="3" required> Moto
        </label>
        <label>
          <input class="input-transporte" type="radio" v-model="transporte" name="transporte" value="4" required> Carro
        </label>
      </div>

      <h4 class="resposta" v-show="resposta_requisicao">{{resposta_requisicao}}</h4>

      <button type="submit" @click="enviar">CADASTRAR</button>


    </form>

  </div>
</template>


<style scoped>
.home{
  background: linear-gradient(#9ad4ea, #60b8a5);
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.titulo{
  text-align: center;
  font-size: 1rem;
  margin: 1rem;
}
</style>
