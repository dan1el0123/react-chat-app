import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Chat App</span>
            <div className="user">
                <img
                    src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                    alt="User Avatar"
                />
                <span>John</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
