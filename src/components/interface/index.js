import React, { Component } from 'react';

class Interface extends Component {
    state = {
        message: [],
        newMessage: '',
    }

    render() {
        return (
            <div className="InterfaceMain">
                <section>
                    <article>
                        { this.state.message.map(message => (
                            <li key={message.id}>{message.text}</li>
                        )) }
                    </article>

                    <article>
                        <input 
                            value={this.state.newMessage}
                            onChange={(e) => this.setState({ newMessage: e.target.value })}
                        />
                        <button onClick={() => {
                            let messages_array = this.state.message;
                            let new_content = this.state.newMessage;
                            this.setState(
                                { message: [...messages_array, {id: Math.random(), text: new_content}] }
                            );
                            this.setState({ newMessage: '' });
                        }}>Send Message</button>
                    </article>
                </section>
            </div>
        )
    }
}

export default Interface;