import './user.css';
import { Link } from 'react-router-dom';
import profile from '../img/profile.jpg';
import { fetchUserDetails } from '../Redux/user';
const User_snippet = ({user, dispatch}) => {
    
    const handleClick = (userId) => {
        dispatch(fetchUserDetails(userId));
    };
    return ( 
        <div>
            {user.isLoading && <div>...Loading</div>}
            {!user.isLoading && user.error? <did>Error: {user.error} </did>: null}
            {!user.isLoading && user.data.length? (
                <div className='displayGrid'>
                    {user.data.map((item)=> {
                        return(<div className='snipet' key={item.id}>
                        <img src={profile} alt="" />
                        <Link  to={`/details`} onClick={() => handleClick(item.id)}><p className='snipName'>{item.name}</p></Link>
                        <p className='snipEmail'>{item.email}</p>
                        </div>)
                    })}
                </div>
            ) : null}
        </div>
    );
}
 
export default User_snippet;