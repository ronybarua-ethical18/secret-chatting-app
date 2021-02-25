import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () =>{
    if(!localStorage.getItem('username')){
        return <LoginForm/>
    }
    return (
        <ChatEngine
            height = "100vh"
            projectID = "b5886952-5a76-48fa-9169-9abdc68fa6ee"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')} //password
            renderChatFeed ={(ChatAppProps) => <ChatFeed {...ChatAppProps}/>}
        />
    )
}
export default App;