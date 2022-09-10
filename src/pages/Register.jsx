import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, storage, db } from "../firebase";

import Add from "../img/addAvatar.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            // Create a new user
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        // update user profile
                        await updateProfile(response.user, {
                            displayName: displayName,
                            photoURL: downloadURL,
                        });
                        // create user in firestore
                        await setDoc(doc(db, "users", response.user.uid), {
                            uid: response.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
                        // create empty user chats in firestore
                        await setDoc(
                            doc(db, "userChats", response.user.uid),
                            {}
                        );
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat App</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="display name" />
                    <input required type="email" placeholder="email" />
                    <input required type="password" placeholder="password" />
                    <input
                        required
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                    />
                    <label htmlFor="file">
                        <img src={Add} alt="Add avatar" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {loading &&
                        "Uploading the image and registering new user..."}
                    {err && <span>Something went wrong</span>}
                </form>
                <p>
                    Do you have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
