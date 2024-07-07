import { useState, useEffect } from 'react';

function useFetchCharacters(apiUrl) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [apiUrl]);

    return { data, loading, error };
}

export default useFetchCharacters;