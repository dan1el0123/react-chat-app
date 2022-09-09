const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img
                    src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                    alt="sender avatar"
                />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                {/* <img
                    src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                    alt=""
                /> */}
            </div>
        </div>
    );
};

export default Message;
