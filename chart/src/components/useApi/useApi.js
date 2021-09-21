import {useState, useEffect, useCallback} from "react"
import axios from 'axios'


export const useApi = (url = "https://jsonplaceholder.typicode.com/users") => {
   
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    const handleError = (error) => {
        setError(error.response?.data.err)
        setLoading(false)
    }

    const runQuery = useCallback(() => {
        const handleSuccess = (res) => {
            setData(res.data)
            setLoading(false)
        }

        setLoading(true)
        axios.get(url).then(handleSuccess).catch(handleError)
    }, [url])

    useEffect(() => {
        runQuery()
    }, [runQuery])

    return { data, loading, error, refetch: runQuery }
}