import { useState } from "react"
import { userRows } from "../../Data/Data"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Link } from "react-router";
interface IUserData {
  id: string;
  userId: number;
  username: string;
  img: string;
  status: boolean;
  transaction: string;
}
const Users = () => {
  const [userData, setUserData] = useState(userRows)
  const columns: GridColDef<IUserData>[] = [
    {
      field: 'userId',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'username',
      headerName: 'USERS',
      width: 200,
      renderCell: (params) => {
        const row = params.row
        return (
          <div className="flex items-center gap-2">
            <img
              src={row.img}
              alt={row.username}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium">{row.username}</span>
          </div>
        )
      }
    },
    {
      field:'email',
      headerName:'Email',
      width:200,
    },
    {
      field:'status',
      headerName:'Status',
      width:100,
      renderCell:(params)=>{
        const row = params.row
        return (
          <span className={`btn ${row.status ? 'bg-green-400' : 'bg-red-400'}`} >{row.status ? 'Online' : 'Ofline'}</span>
        )
      }
    },
    {
      field: 'transaction',
      headerName: 'TRANSACTION',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'ACTION',
      width: 100,
      renderCell:(params)=>{
        const row = params.row
        return(
          <div className=" flex gap-2 items-center h-full">
          <Link className="h-1/2" to={`users/${row.id}`}>
          <button className=" flex justify-center text-white  items-center h-full btn bg-slate-400 ">Edit</button>
          </Link>
          <DeleteOutlinedIcon onClick={()=>userDelete(row.id)} />
          </div>
        )
      }
    },
  ]
  const userDelete = (userId:string) => {
    setUserData(prev => prev.filter(user => user.id !== userId))
}
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default Users