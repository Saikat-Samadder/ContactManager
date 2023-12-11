import AddContact from './AddContact';
import './App.css';

function App() {
 
   const addcontact = (data)=>{
        console.log(data);
   }

  return (
    <>
     <div className='header'>
     <h1>Manage Contacts</h1>
     </div>
     <AddContact addcontact={addcontact}/>
      
    </>
  );
}

export default App;
