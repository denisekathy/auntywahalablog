
import { Link, Route, Switch } from "react-router-dom";
import UserLogOut from '../UserLogOut/UserLogOut'
import * as userService from "../../utilities/users-service";
import { logOut } from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <>
      <header>AUNTY WAHALA</header>

      <nav>
		  
		 
		<Link to='/'>Home</Link>
		&nbsp; | &nbsp;
        <Link to="/posts/new">New Post</Link>
        &nbsp; | &nbsp;
    {/* user.name is not working...need to fix and the ability to log out  */}
        <span>Welcome,</span> 
        &nbsp;&nbsp;
		{/* <UserLogOut user={user} setUser={setUser} /> */}
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </nav>
    </>
  );
}
