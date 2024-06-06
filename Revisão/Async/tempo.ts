import axios from 'axios';

async function consultarPrevisaoTempo(cidade: string): Promise<void> {

    try {
        const API_KEY = '01a5511480073de5a3ecc66534d25e02';

        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`);

        const {main, weather } = response.data;

        console.log(`Previsão do tempo em ${cidade}`);
        console.log(`Temperatura: ${main.temp} C`);
        console.log(`Condição: ${weather[0].description}`);
        
        
        
    
    } catch (error) {
        console.error('Ocorreu um erro ao consultar a previsão do tempo:', error.response.data.message)
    }
    
}

const cidadeConsulta: string = 'Novo Hamburgo';

consultarPrevisaoTempo(cidadeConsulta)