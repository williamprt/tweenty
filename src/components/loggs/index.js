import React from 'react';
import { connect } from 'react-redux';

import './logs.css'

const Logs = ({ messages }) => {
    return (
        <div id="logsdiv">
            { messages.logs.map(logs => (
                <article id="errorp" key={logs._id}>
                    <p>{logs.name}: {logs.message}</p>
                </article>
            )) }
        </div>
    )
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(Logs);