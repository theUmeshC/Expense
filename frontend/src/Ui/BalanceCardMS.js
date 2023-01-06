import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  balance_card_container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px',
  },

  container_title: {
    margin: '15px 0',
    textAlign: 'center',
  },

  balance_card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  balance_card_current_status: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '5px 0',
    '& h5, h3': {
      margin: 0,
    },
  },
  positive_balance: {
    color: '#00fb00',
  },

  negative_balance: {
    color: '#fa0a0a',
  },

  balance_card_expenses_card: {
    width: '100%',
    display: 'flex',
    margin: '5px auto',
  },

  income_expense: {
    flex: 1,
    textAlign: 'center',
    border: '1px solid #a6a6a6',
    borderRadius: '5px',
    backgroundColor: '#252525',
    '& h6': {
      margin: '7px 0',
    },
  },
}));
