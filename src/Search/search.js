import { connect } from 'react-redux';
import * as actions from '../Actions';
import SearchView from './searchview';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state){
  return {
    //enter code here
  }
}

export default withRouter(connect(null, actions)(SearchView));
