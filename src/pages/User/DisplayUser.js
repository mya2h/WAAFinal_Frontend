import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, IconButton, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment/moment';
import sampleData from './sampleData';
import DeleteUser from './DeleteUser';
import AddUser from './AddUser';

function DisplayUser({isModalOpen,setIsModalOpen}) {
  const [rows, setRows] = React.useState(sampleData);
  const [open, setOpen] = React.useState(false);
  const [userId, setUserId] = React.useState(null);

  const handleClickDelete = (id) => {
    console.log(`deleting this id ${ id}`);
    setOpen(true);
    setUserId(id);

  };
  
  const handleEdit = (user) => {
    console.log(`called edit on id ${ user}`);
  }; 

  const columns = [
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'username',
      headerName: 'Username',
      type: 'text',
      width: 200,
      filterable: true,
      sortable: true,
    },
    {
      field: 'role',
      headerName: 'Role',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      filterable: false,
      width: 160,
    },
    {
      field: 'active',
      headerName: 'Active',
      type: 'boolean',
      width: 100,
      editable:true,
      filterable: false,
      sortable: false,

    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 130,
      filterable: false,
      sortable: false,
      renderCell: (params) => moment(params.value).format('YYYY/MM/DD'),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      renderCell: (params) => (
        <div>
          <IconButton
            aria-label="edit"
            style={{color:'#45478c'}}
            onClick={() => handleEdit(params.row)}
          >
            <Edit />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleClickDelete(params.id)}
          >
            <DeleteIcon color= 'error' />
          </IconButton>
        </div>
      ),
    },
  ];



  return (
    <div>
      <Box style={{ height: 400, width: '100%' }}>
        <div>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}

          />
        </div>
        <DeleteUser open={open}
          setOpen={setOpen}
          userId={userId}
          rows={rows} 
          setRows={setRows}
          setUserId={setUserId}/>
        <AddUser rows={rows} setRows={setRows} open={isModalOpen} setOpen={setIsModalOpen}/>
      </Box>  
    </div>
  );
}
export default DisplayUser;

