import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../_redux/actions';

class Feed extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        return (
            <div className="FeedMain">
                <section>
                    <article>
                        <span>Here will be the message</span>
                        <span>Here will be the message author</span>
                        <span>Herre will be the GMT time</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);