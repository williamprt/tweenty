import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import api from '../../services/axios';

import './interface.css';
import './feed.css';

const Feed = () => {
    const [content, setContent] = useState([]);
    const [newMessage, setMessage] = useState(undefined);
    useEffect(() => {
        getDocsAndSetContent();
    });

    async function getDocsAndSetContent() {
        const response = await api.get('posts')
        let { docs } = response.data;
        setContent(docs)
    };

    async function sendNewMessage() {
        try {
            await api.post('posts', {
                message: newMessage
            });
        } catch (e) {
            console.log(e);
        }
    };

    async function destroyMessage(id) {
        try {
            await api.delete(`posts/${id}`);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="FeedMain">
            <section id="titlebox">
                <header id="headerborder">
                    <h1 id="title">Tweenty</h1>
                </header>
            </section>

            <section id="feedbox">
                { content.map(data => (
                    <article id="allmessagesbox" key={data._id}>
                        <div id="borderdiv">
                            <button id="destroybutton" onClick={() => {
                                destroyMessage(data._id)
                            }}>X</button>
                            <span id="message">{data.message}</span> <br/>
                            <span id="author">@23:04</span>
                            <span id="time">{data.createdAt}</span>
                        </div>
                    </article>
                )) }
            </section>

            <section id="interfacebox">
                <section id="interfaceborderbox">
                    <form id="inputform">
                        <input
                            id="newmessageinput"
                            placeholder="Qual é a mensagem de hoje?"
                            value={newMessage}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </form>
                    <article id="buttonbox">
                        <button id="sendbutton" onClick={() => {
                            sendNewMessage();
                            setMessage('');
                        }}>Send</button>
                    </article>
                </section>
            </section>
        </div>
    )
};
export default Feed;