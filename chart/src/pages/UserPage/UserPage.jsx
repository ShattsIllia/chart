import { useApi } from "../../components/useApi/useApi"

export const UsersPage = () => {
    const [data, loading, error] = useApi()
    return(
        loading ?
         <p>loading...</p>
         :
        data?
         data.map(user=><div key={user.id}>{user.name}</div>)
         :
         <p>`error: ${error}`</p>
    )
}