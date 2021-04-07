import {useState} from 'react';
import axios from  'axios';

const LoginForm = ()=>{

    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const authObject = {'Project-ID' : "d354ee5d-d1d2-4e71-b24e-4202c0ad90a0" , 'User-Name' :username, 'User-Secret': password}

        try{
              // usernamer|| password ==> chatengine -> give messages

             await axios.get('https://api.chatengine.io/chats', {headers : authObject });

               localStorage.setItem('username', username);
               localStorage.setItem('password',password);

               window.location.reload();

        }
        
        catch (error){
            setError('Oops, Incorrect credentials')



            }

      
    

    }
     
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type ="text" value = {username} onChange ={(e)=>setuserName(e.target.value)} className="input" placeholder="Usename" required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting </span>
                        </button>
                    </div>

                    <h2 className="error">{error }</h2>
                </form>

            </div>
        </div>
    );
}

export default LoginForm;

