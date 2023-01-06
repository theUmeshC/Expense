import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({

  history_container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: '12px auto',
  },

  history_title: {
    margin: '10px 0',
  },

  history_transaction_container: {
    width: '90%',
    height: '140px',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    gap: '8px',
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
    padding: '10px 5px',
    borderRadius: '5px',
    fontWeight: 600,
    fontSize: '13px',
    margin: 'auto',
  },

}));
