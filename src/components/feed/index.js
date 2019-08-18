import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../_redux/actions';

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
                <section>
                    <article>
                        { this.props.messages.data.map(data => (
                            <ul key={data._id}>
                                <span>{data.message}</span> <br/>
                                <span>@23:04</span>
                                <button onClick={() => {
                                    this.props.destroyMessage(data._id);
                                }}>X</button>
                            </ul>
                        )) }
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