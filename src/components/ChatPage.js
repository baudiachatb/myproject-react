import React, {Component} from "react";
// import SockJsClient from 'react-stomp';
import Stomp  from 'stompjs';
import SockJS from 'sockjs-client';

class ChatPage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const socket = SockJS('http://localhost:9000/message');
        const stompClient = Stomp.over(socket);
        stompClient.connect({}, function(frame) {
            console.log('aaaaaaaaaaaaa');
            stompClient.subscribe('/topic/hub', (mes) => {
                console.log(mes.body);
            });
        });
    }
    render() {
        return (
            <div>
                {/*<input type="text" onChange={this.onChangeMess}/>*/}
            </div>
        );
    }

}

export default ChatPage;