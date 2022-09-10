import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { auth } from "../firebase";

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    return (
        <div className="navbar">
            <span className="logo">Chat App</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="User Avatar" />
                <span>{currentUser.displayName}</span>
                <button
                    onClick={() => {
                        signOut(auth);
                        dispatch({ type: "RESET" });
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
