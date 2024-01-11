import { useSelector } from 'react-redux';
import "./user.css"
import profile from '../img/profile.jpg';
const Details = () => {
    const user = useSelector((state) => state.user);
    const selectedUser = useSelector((state) => state.user.selectedUser);
  
    return (
      <div>
        <h1>User Details</h1>
        {user.isLoading && <div>...Loading</div>}
        {!user.isLoading && user.error? <did>Error: {user.error} </did>: null}
        {!user.isLoading && selectedUser ? (
          <div className='details'>
            <div className="basicInfo">
                <img src={profile} alt="user image" />
                <div className="info">
                    <h2>Basic Infomation</h2>
                    <ul>
                        <li className="infoList">Name: {selectedUser.name}</li>
                        <li className="infoList">user: {selectedUser.username}</li>
                        <li className="infoList">Email: {selectedUser.email}</li>
                        <li className="infoList">Phone: {selectedUser.phone}</li>
                        <li className="infoList">Address:{selectedUser.address.suite}, {selectedUser.address.street}, {selectedUser.address.city}.</li>
                    </ul>
                    <h2>Other Infomation</h2>
                    <ul>
                        <li>Website: {selectedUser.website}</li>
                        <li>company: {selectedUser.company.name}</li>
                    </ul>
                </div>
            </div>
            <ul/>
            <div className="otherInfo">
                
            </div>
            
            
          </div>
        ) : (
          <p>No user selected</p>
        )}
      </div>
    );
};
  
 
export default Details;