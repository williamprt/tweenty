import React from 'react';
import { connect } from 'react-redux';

import './alerts.css';

const Alerts = ({ messages }) => {
    return (
        <div id="AlertsMain">
            <section id="alertname">
                <h1 id="aplicationname">Tweenty</h1>
            </section>

            <section id="alertloading">
                { messages.loading.map(alert => (
                    <p id="alertloadingmessage" key={alert._id}>{alert.message}</p>
                )) }
            </section>

            <section id="alertlogs">
                { messages.logs.map(alert => (
                    <p id="alertlogsmessage" key={alert._id}>{alert.message}</p>
                )) }
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
  messages: state.messages
});
export default connect(mapStateToProps)(Alerts);