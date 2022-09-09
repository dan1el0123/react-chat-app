const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user" />
            </div>
            <div className="userChat">
                <img
                    src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                    alt="User avatar"
                />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
};

export default Search;
