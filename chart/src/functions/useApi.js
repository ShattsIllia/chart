import { useEffect, useState } from "react"




export const useApi = (url) => {


    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    const fetchApi = () => {
        fetch(url) 
        .then(response => {
          return response.json()
        })
        .then(json => {
          console.log(json)
          setLoading(false)
          setData(json)
        })
    };
    
    useEffect(() => {
        fetchApi();
    }, []);
    
    return { data, loading, error }

}