import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  history_container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px',
  },

  history_title: {
    margin: '15px 0',
    borderBottom: '1px solid grey',
  },

  history_transaction_container: {
    width: '90%',
    maxHeight: '60px',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    gap: '5px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '7px',
      backgroundColor: '#807f7f',
    },
    '&::-webkit-scrollbar-thumb ': {
      backgroundColor: '#2053fc',
      borderRadius: '7px',
      border: '1px solid #d7d4d4',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#013bfa',
    },
  },

  history_transaction: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 5px',
    borderRadius: '5px',
    fontWeight: 600,
    fontSize: '12px',
    margin: 'auto',
    color: 'black',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      scale: 1.05,
    },
  },

  //   expense_transaction: {
  //     backgroundColor: '#fa0a0a',
  //   },

//   income_transaction: {
//     backgroundColor: '#00fb00',
//   },
}));
