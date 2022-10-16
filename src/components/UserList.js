import React,{useState,useEffect} from 'react'
import { Table,Col } from 'react-bootstrap'
import { UserService } from './UserService'

export const UserList = () => {

    let [table,setTable] = useState({
        tableData:[]
    })

    useEffect(() =>
    {
        UserService.getAllUsers().then((response)=>
        {
            setTable({
                ...table,
                tableData:response.data,
            })

        }).catch((error)=>
        {
            console.log(error);
        })
    },[])

console.log(table)
  return (
    <div>


<Col>
       <Table striped bordered hover className="">
        <thead>
        <tr>
                <th>SNO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Company</th>
                <th>Location</th>
              </tr>
        </thead>
        <tbody>

            {table.tableData.length>0 && table.tableData.map(
                user=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>                            
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.address.city}</td>

                        </tr>
                        )
                }
            )}
        </tbody>

             

       </Table>
</Col>


    </div>
  )
}
