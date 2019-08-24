import React from 'react';
import { connect } from 'react-redux';

import './logs.css'

const Logs = ({ messages }) => {
    return (
        <div id="logsdiv">
            { messages.logs.map(logs => (
                <article id="errorarticle" key={logs._id}>
                    <p id="errorp">{logs.message}</p>
                </article>
            )) }
        </div>
    )
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(Logs);