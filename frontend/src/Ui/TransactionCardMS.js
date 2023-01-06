import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  transaction_container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px',
  },

  transaction_title: {
    margin: '10px 0',
    borderBottom: '1px solid grey',
  },

  transaction_body: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    '& h5, p': {
      margin: '0px',
    },
    '& p': {
      fontSize: '12px',
    },
    '& input': {
      margin: '5px 0',
      padding: '2px 5px',
    },
  },

  add_transaction: {
    margin: '7px 0',
    padding: '7px',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#4e3ff7',
    border: '1px solid #4e3ff7',
    transition: '0.01s all ease-in-out',
    '&:hover': {
      backgroundColor: '#4d3df9df',
    },
    '&:active': {
      backgroundColor: 'white',
      color: '#4e3ff7',
      border: '1px solid #4e3ff7',
    },
  },

  btn_not_active: {
    margin: '7px 0',
    padding: '7px',
    color: 'white',
    cursor: 'not-allowed',
    borderRadius: '5px',
    backgroundColor: 'gray',
    border: '1px solid #040404',
    transition: '0.01s all ease-in-out',
  },
}));
