import React from "react";

import SearchBar from "../css/SearchBar.module.css";

const SearchNav = (props) => {
  return (
    <nav className="container">
      <form className={SearchBar.seachWrap}>
        <div className={SearchBar.inputWrap}>
          <div className={SearchBar.inputGroup}>
            <div className={SearchBar.select} name="category" id="category">
              <span value="telSeach">電話：</span>
            </div>
            <input
              className={SearchBar.input}
              type="text"
              placeholder="關鍵字"
              {...props.bindSearchTel}
            />
          </div>
          <div className={SearchBar.inputGroup}>
            <div className={SearchBar.select} name="category" id="category">
              <span value="nameSeach">姓名：</span>
            </div>
            <input
              className={SearchBar.input}
              type="text"
              placeholder="關鍵字"
              {...props.bindSearchUser}
            />
          </div>
        </div>
        <div className={SearchBar.iconWarp} onClick={props.handleSearchTel}>
          <div className={SearchBar.iconGroup}>
            <span className={SearchBar.icon}></span>
          </div>
        </div>
      </form>
    </nav>
  );
};

export default SearchNav;
