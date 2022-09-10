import { useContext, useState, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unsub();
        };
    }, [data.chatId]);

    return (
        <div className="messages">
            {messages.map((mes) => (
                <Message key={mes.id} message={mes} />
            ))}
        </div>
    );
};

export default Messages;
