
import { Component } from "react";
import { connect } from "react-redux";
import Message from './../components/Message'


class MessageContainer extends Component {
  render() {
    var message = this.props
    console.log(message.message);
    return (
      <Message message={message.message}/>
    );
  }

}

const mapsStateToProps = state => {
  return {
    message: state.message
  }
}


export default connect(mapsStateToProps, null)(MessageContainer);
