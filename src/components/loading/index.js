import React from 'react';
import { connect } from 'react-redux';

import './loading.css'

const Loading = ({ messages }) => {
    return (
        <div>
            <section id="sectionbox">
                { messages.loading.map(data => (
                    <article id="articlebox" key={data._id}>
                        <p id="pmessage">{data.message}</p>
                    </article>
                )) }
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(Loading);