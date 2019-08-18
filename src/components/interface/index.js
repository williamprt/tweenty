import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../_redux/actions';

class Interface extends Component {
    state = {
        newMessage: '',
    }    

    render() {
        return (
            <div className="InterfaceMain">
                <section>
                    <article>
                        <input
                            value={this.state.newMessage}
                            onChange={(e) => this.setState({ newMessage: e.target.value })}
                        />
                        <button onClick={() => {
                            let new_message = this.state.newMessage;
                            this.props.sendMessage(new_message);
                            this.setState({ newMessage: '' });
                        }}>Send Message</button>
                    </article>
                </section>
            </div>
        )
    }
}
const mapStateToProps = state => ({
  messages: state.messages
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Interface);