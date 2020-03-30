import React, {Component} from "react";
// import SockJsClient from 'react-stomp';
import Stomp  from 'stompjs';
import SockJS from 'sockjs-client';

class ChatPage extends Component {
    constructor(props) {
        super(props);
        const socket = SockJS('http://localhost:9000/message');
        const stompClient = Stomp.over(socket);
        stompClient.connect({}, function(frame) {
            console.log('aaaaaaaaaaaaa');
            stompClient.subscribe('/topic/hub', (mes) => {
                console.log(mes.body);
            });
        });
    }

    // componentDidMount() {
    //     const socket = SockJS('http://localhost:9000/message');
    //     const stompClient = Stomp.over(socket);
    //     stompClient.connect({}, function(frame) {
    //         console.log('aaaaaaaaaaaaa');
    //         stompClient.subscribe('http://localhost:9000/topic/hub', (mes) => {
    //             console.log(mes);
    //         });
    //     });
    //     // stompClient.subscribe('/topic/hub', (mes) => {
    //     //     console.log(mes);
    //     // })
    //     // const ws = ("ws://localhost:9000/message");
    //     // const client = Stomp.client(ws);
    //     // client.connect({}, function() {
    //     //     client.send("/app/chat", {}, "coord: [3,2]");
    //     // });
    // }

//  onChangeMess = (event) => {
    //     this.setState({
    //         ...this.state,
    //         inputMess: event.target.value
    //     });
    //     this.sendMessage(event.target.value)
    // };
    // sendMessage = (msg) => {
    //     // this.clientRef.sendMessage('/app/chat', msg);
    // };
    render() {
        return (
            <div>
                {/*<input type="text" onChange={this.onChangeMess}/>*/}
            </div>
        );
    }

}

export default ChatPage;