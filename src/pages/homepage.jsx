import './user.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Redux/user';
import { useEffect } from 'react';
import Usersnippet from '../component/user_snippet';

const Homepage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    return ( 
        <div className="container">
            <h1>User List</h1>
            <div className="users">
                <Usersnippet user={user} dispatch={dispatch}/>    
            </div>
            
        </div>
     );
}
 
export default Homepage;