import note10Img from "./images/note10.jpg";
import iphone from "./images/iphone13.jpg"
import redmi from "./images/redmi9.jpg"
import { useState } from 'react'; 
import './App.css';

const App = () =>{
  const itemList = [
    {id:101,itemName:"Note 10",ItemImage:note10Img },
    {id:102,itemName:"Iphone",ItemImage:iphone},
    {id:103,itemName:"redmi",ItemImage:redmi}
  ];

  const [itemListstate,setItemListState] = useState(itemList);

  return(
    <div className="container">
      <h1>Shopping cart Application- My-App</h1>
      {console.log(note10Img)}
     
      {/* <div className='flex-row'>
        <div className='flex-largs'>
        <h2>Add User</h2>
          <AddUserForm adduser={addUser}/>        
        </div>
        <div className='flex-largs'>
          <h2>View Users Data: </h2>
          <UserTable users={users}/>
        </div>
      </div> */}
    
    </div>
  );

}

export default App;
