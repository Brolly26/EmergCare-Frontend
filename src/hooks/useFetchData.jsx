import { useEffect, useState } from 'react';
import { token } from '../config'; // Importa o token do arquivo config.js

const useFetchData = (url) => {
    const [data, setData] = useState([]); // Estado para armazenar os dados recebidos
    const [loading, setLoading] = useState(false); // Estado para controlar o estado de carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros, se ocorrerem

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Define loading como true antes de fazer a requisição
            try {
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` } // Inclui o token de autenticação no cabeçalho da requisição
                });
                const result = await res.json(); // Converte a resposta para JSON

                if (!res.ok) {
                    throw new Error(result.message); // Lança um erro se a resposta não estiver OK
                }

                setData(result.data); // Atualiza o estado de data com os dados recebidos
                setLoading(false); // Define loading como false após a requisição ser concluída com sucesso
            } catch (error) {
                setLoading(false); // Define loading como false em caso de erro
                setError(error.message); // Armazena a mensagem de erro no estado de error
            }
        };

        fetchData(); // Chama a função fetchData ao montar o componente ou quando a URL mudar
    }, [url]); // Dependência useEffect, que indica quando re-executar o efeito (quando a URL muda)

    return {
        data,
        loading,
        error,
    };
};

export default useFetchData;
