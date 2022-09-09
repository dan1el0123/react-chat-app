const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img
                    src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                    alt="User avatar"
                />
                <div className="userChatInfo">
                    <span>Johny</span>
                    <p>Hello there</p>
                </div>
            </div>
            <div className="userChat">
                <img
                    src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                    alt="User avatar"
                />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img
                    src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                    alt="User avatar"
                />
                <div className="userChatInfo">
                    <span>Bob</span>
                    <p>Where is Alice</p>
                </div>
            </div>
        </div>
    );
};

export default Chats;
