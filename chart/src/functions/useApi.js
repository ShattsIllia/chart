import { useEffect, useState } from "react"




export const useApi = (url = "https://jsonplaceholder.typicode.com/users") => {

    //https://jsonplaceholder.typicode.com/users

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    const fetchApi = () => {
        fetch(url) 
        .then(response => {
          return response.json()
        })
        .then(json => {
          setLoading(false)
          setData(json)
        })
        .catch(e => {
          setLoading(false)
          setError(e)
        })
    };
    
    useEffect(() => {
        fetchApi();
    }, []);
    
    return  [data, loading, error ]
}