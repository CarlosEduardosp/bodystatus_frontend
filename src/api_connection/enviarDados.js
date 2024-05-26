import axios from 'axios';

export async function fazerRequisicaoObesidadePOST(
    nome, idade, genero, altura, peso, frequencia_alcool, alimentos_alto_teor_calorico,
    come_vegetais_nas_refeicoes, quantidade_refeicoes_dia, monitora_calorias_que_ingere, fuma,
    quantidade_agua_por_dia, membro_familiar_com_sobre_peso, frequencia_atividade_fisica,
    tempo_que_passa_dispositivos_tecnologicos, come_algo_entre_as_refeicoes, qual_transporte_costuma_usar
) {
    // URL da API 
    const apiUrl = 'https://obesidade-latest.onrender.com/inserir_dados';

    // Criando um objeto com os dados para a requisição
    const dados = {
        nome,
        idade,
        genero,
        altura,
        peso,
        frequencia_alcool,
        alimentos_alto_teor_calorico,
        come_vegetais_nas_refeicoes,
        quantidade_refeicoes_dia,
        monitora_calorias_que_ingere,
        fuma,
        quantidade_agua_por_dia,
        membro_familiar_com_sobre_peso,
        frequencia_atividade_fisica,
        tempo_que_passa_dispositivos_tecnologicos,
        come_algo_entre_as_refeicoes,
        qual_transporte_costuma_usar
    };

    try {
        // Fazendo uma solicitação POST usando Axios
        const resposta = await axios.post(apiUrl, dados, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        // Manipule os dados da resposta aqui
        const data = resposta.data;
        console.log('resposta obesidade:', data);
        return data;
    } catch (error) {
        // Trate os erros de solicitação ou resposta
        console.error('Erro ao fazer a requisição:', error.response ? error.response.data : error.message);
        throw error; // Lança o erro novamente para tratamento posterior, se necessário
    }
}
