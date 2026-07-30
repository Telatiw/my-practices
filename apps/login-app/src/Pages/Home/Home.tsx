import Table from '@mui/material/Table';
import { BsFillTrash2Fill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import type { IUser } from '../../Sotre/Index'
import { Box, Modal, Typography } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#6d6868',
  borderRadius:'.5rem',
  boxShadow: 24,
  p: 2,
};
export default function Home() {
  const loaderUsers = useLoaderData()  as [string, IUser][] 
  let navigate = useNavigate()
  //states
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [opendeletemodal, setOpenDeleteModal] = useState(false)
  const [openEditModal,setOpenEditModal] = useState(false)
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [users, setUsers] = useState<[string, IUser][]>(loaderUsers)
  // functions
  const deleteUserHandler = () => {
    fetch(`https://login-page-7c74b-default-rtdb.firebaseio.com/users/${selectedUserId}.json`, {
      method: 'DELETE'
    }).then(res => console.log(res))
    let updatedUsers = users.filter((user:[string,IUser]) => user[0] !== selectedUserId)
    setUsers(updatedUsers)
    setOpenDeleteModal(false)
  }
  const editUserHandler = async () => {
    if(firstname.trim() && lastname.trim() && email.trim()){
      let updatedUser:IUser = {firstname:firstname,lastname:lastname,email:email}
      await fetch(`https://login-page-7c74b-default-rtdb.firebaseio.com/users/${selectedUserId}.json`,{
        method:'PUT',
        body:JSON.stringify(updatedUser)
      }).then(res => console.log(res))
      let updatingUsers = users.map(member =>  member[0] === selectedUserId ? [selectedUserId,updatedUser]  as [string, IUser] : member)
      setUsers(updatingUsers)
    }
    setOpenEditModal(false)
  }
  console.log(users.find(user => user[0] === selectedUserId))
  return (
    <div className='w-full relative min-h-screen flex justify-center items-center bg-slate-400'>
      <button onClick={() => navigate('/')} className=' bg-red-400 p-2 font-semibold cursor-pointer absolute left-5 top-5 rounded-lg bg-'>Back</button>
      <TableContainer sx={{ width: '75%' }} component={Paper}>
        <Table className='bg-slate-300' aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell sx={{ fontWeight: '700' }} >id</TableCell>
              <TableCell sx={{ fontWeight: '700' }} align="center">Firstname</TableCell>
              <TableCell sx={{ fontWeight: '700' }} align="center">Lastname</TableCell>
              <TableCell sx={{ fontWeight: '700' }} align="center">Email</TableCell>
              <TableCell sx={{ fontWeight: '700' }} align="center">Done</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user:[string,IUser], index:number) => (
              <TableRow
                key={user[0]}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ fontWeight: '700' }} component="th" scope="user">
                  {index + 1}
                </TableCell>
                <TableCell sx={{ fontWeight: '700' }} align="center">{user[1].firstname}</TableCell>
                <TableCell sx={{ fontWeight: '700' }} align="center">{user[1].lastname}</TableCell>
                <TableCell sx={{ fontWeight: '700' }} align="center">{user[1].email}</TableCell>
                <TableCell sx={{ fontWeight: '700' }} align="center">
                  <div className='flex justify-evenly w-full'>
                    <button onClick={() => {
                      setSelectedUserId(user[0])
                      setOpenDeleteModal(true)
                    }} className='cursor-pointer' ><BsFillTrash2Fill color='#d84141' size={25} /></button>
                    <button onClick={() => {
                      setSelectedUserId(user[0])
                      setOpenEditModal(true)
                    }} className='cursor-pointer' ><MdEdit color='#3850d8' size={25} /></button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* delete Modal */}
      <Modal
        open={opendeletemodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            do you want to remove {`${users.find(user => user[0] === selectedUserId)?.[1].firstname}  ${users.find(user => user[0] === selectedUserId)?.[1].lastname}`} ?
          </Typography>
          <Typography id="modal-modal-description"  sx={{ mt: 2,fontWeight:'400',color:'white' }}>
            Are you sure?
          </Typography>
          <div className='flex justify-between mt-2'>
            <button onClick={() => deleteUserHandler()} className='btn bg-red-400 ' >yes</button>
            <button onClick={() => setOpenDeleteModal(false)} className='bg-blue-400 btn' >no</button>
          </div>
        </Box>
      </Modal>
      {/* edit Modal */}
      <Modal
        open={openEditModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 className='text-center font-semibold text-2xl' id="parent-modal-title">
            do you want to change {`${users.find(user => user[0] === selectedUserId)?.[1].firstname}  ${users.find(user => user[0] === selectedUserId)?.[1].lastname}`} ?

          </h2>
          <form onSubmit={e => e.preventDefault()} className='flex flex-col justify-between gap-y-5 mt-4'>
            <input onChange={(e)=> setFirstname(e.target.value) } value={firstname} className='input' placeholder='Firstname' type="text" />
            <input onChange={(e)=> setLastname(e.target.value) } value={lastname} className='input' placeholder='Lastname' type="text" />
            <input onChange={(e)=> setEmail(e.target.value) } value={email} className='input' placeholder='Email' type="email" pattern='\w+@gmail\.com' />
            <div className='font-semibold flex w-full justify-around'>
              <button type='button' onClick={editUserHandler}  className='btn bg-blue-400'>Yes</button>
              <button onClick={() => setOpenEditModal(false)} className=' bg-red-400 btn'>No</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
