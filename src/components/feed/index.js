import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../_redux/actions';

import './feed.css';

class Feed extends Component {
    componentDidMount() {
        this.initialGetApi();
    }

    initialGetApi = () => {
        this.props.requestAPI();
    }

    render() {
        return (
            <div className="FeedMain">
                <section id="feedbox">
                    { this.props.messages.data.map(data => (
                        <article id="allmessagesbox" key={data._id}>
                            <div id="borderdiv">
                                <button id="destroybutton" onClick={() => {
                                    this.props.destroyMessage(data._id);
                                }}>X</button>
                                <span id="message">{data.message}</span> <br/>
                                <span id="author">@23:04</span>
                                <span id="time">{data.createdAt}</span>
                            </div>
                        </article>
                    )) }
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);