import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import MessageForm from './components/MessageForm';
import MyMessage from './components/MyMessage';
import TheirMessage from './components/TheirMessage';
import LoginForm from './components/LoginForm';


const App = ()=>{
  if(!localStorage.getItem('username')) return <LoginForm/>
  return(
    
      
    <ChatEngine
     height="100vh"
     projectID="d354ee5d-d1d2-4e71-b24e-4202c0ad90a0"
     userName="Manjeetkumar"
     userSecret="123456"
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    
  );
}

export default App;