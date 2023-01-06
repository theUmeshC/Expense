import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  expense_tracker_container: {
    width: '320px',
    backgroundColor: '#191919',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    maxHeight: '90%',
    borderRadius: '5px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
}));
