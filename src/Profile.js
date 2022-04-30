import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import Tabbar from './components/Tabbar.js';

function Profile() {
  const { authState, updateDisplayName, signOut } = useAuthStateContext();
  const [name, setName] = useState(authState.user.displayName);


  function save() {
    updateDisplayName(name).then(_=>{
      authState.user.reload()
    })
  }

function Imageupload() {
  const image_input = document.querySelector("#image_input");
  var uploaded_image = "";
  
  image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    })
    reader.readAsDataURL(this.files[0]);
  })  
}

  return (
      <div className="Profile">
        <Avatar name={name}/>
        <label className="label1" htmlFor="displayname"/>
        <input 
          id="displayname"
          type="text" 
          className="text" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input type="button" value="Save" onClick={save}/>
        <input type="button" onClick={() => signOut()} value="Sign-out"/>
        <input type="file" id="image_input" accept="image/png , image/jpg"/>
        <div id="display_image"></div>
        <Tabbar></Tabbar>
      </div>
  );
}

export default Profile;