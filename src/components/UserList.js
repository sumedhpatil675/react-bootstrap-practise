import React from 'react'
import { UserService } from './UserService'

export const UserList = () => {

    let [table,setTable] = useState({
        tableData:[]
    })

    useEffect(() =>
    {
        UserService.getAllUsers().then((response)=>
        {
            setState({
                ...state,
                tableData:response.data,
            })

        }).catch((error)=>
        {
            console.log(error);
        })
    },[])


  return (
    <div>

User List
{state.table}


    </div>
  )
}
