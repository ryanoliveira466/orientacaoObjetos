import axios from 'axios'

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData() {
    try {
        const response = await axios.get(apiUrl);

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error
    }
}

fetchData().then(data => {
    console.log('Dados da API:', data);  
})
.catch(error => {
    console.error('Erro ao buscar dados da API:', error)

});