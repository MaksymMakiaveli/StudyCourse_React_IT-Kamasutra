import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage, messageChange } from './../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  let { DataMessage, DataChats, newMessageText } = state.messagePage;
  return { DataMessage, DataChats, newMessageText };
};

export default compose(connect(mapStateToProps, { addMessage, messageChange }), withAuthRedirect)(Dialogs);
