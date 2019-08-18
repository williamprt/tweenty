import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../_redux/actions';

class Interface extends Component {
    state = {
        newMessage: '',
        page: 1
    }
    
    requestNextPage = () => {
        let next_page = this.props.messages.infos.nextPage
        let next_page_number = this.state.page + 1;
        if (!next_page) return;

        this.props.requestAPI(next_page_number);
        this.setState({ page: next_page_number })
    }

    requestPrevPage = () => {
        let prev_page = this.props.messages.infos.prevPage
        let prev_page_number = this.state.page - 1;
        if (!prev_page) return;

        this.props.requestAPI(prev_page_number);
        this.setState({ page: prev_page_number })
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
                        <button onClick={() => {
                            this.requestPrevPage();
                        }}>Change to prev page</button>
                        <button onClick={() => {
                            this.requestNextPage();
                        }}>Change to next page</button>
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