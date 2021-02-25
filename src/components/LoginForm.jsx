import {useState} from 'react';
import axios from 'axios';

const LoginForm = () =>{
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    const handleSubmit = async (e) =>{
        e.preventDefault();
    
        const authObject = {'Project-ID': "b5886952-5a76-48fa-9169-9abdc68fa6ee", 'User-Name': username, "User-Secret": password};
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Oops, something went wrong');
        }
        //username / password -> chat engine-> give message
        //works out -> logged in
        //error -> try with new credentials
    }
    return (
        <div className="wrapper">
            <div className="form">
               <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit} action="">
                    <input type="text" value={username} 
                    onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                     <input type="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>

                    <div align="center">
                        <button type="submit" className="button">
                        <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;