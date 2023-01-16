import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({

  balance_card_container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: '12px auto',
  },

  container_title: {
    margin: '20px auto',
    textAlign: 'center',
  },

  balance_card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '7px 0',
  },

  balance_card_current_status: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '7px 0',
    '& h5, h3': {
      margin: 0,
    },
  },
  positive_balance: {
    color: '#000',
    fontSize: '16px',
    fontWeight: 900,
  },

  negative_balance: {
    color: '#000',
    fontSize: '16px',
    fontWeight: 900,
  },

  balance_card_expenses_card: {
    width: '100%',
    display: 'flex',
    gap: '15px',
    margin: '5px auto',
  },

  income_expense: {
    flex: 1,
    textAlign: 'center',
    border: '1px solid #a6a6a6',
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#000',
    '& h6': {
      fontSize: '15px',
      fontWeight: 'bold',
      margin: '7px 0',
    },
  },
}));
