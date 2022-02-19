import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile.js';
import FriendList from './FriendList.js';

function Router()
{
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/friendlist' element={<FriendList/>} />
    </Routes>
    </BrowserRouter>
    )
}
export default Router;