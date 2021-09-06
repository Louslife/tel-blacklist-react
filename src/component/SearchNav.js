import React from "react";

import SearchBar from '../css/SearchBar.module.css';

const SearchNav = (props) => {
  
  return (
    <nav className="container">
      <form className={SearchBar.seachWrap}>
        <div className={SearchBar.inputGroup}>
          <select className={SearchBar.select} name="category" id="category"
          onChange={props.getSeachType}
          >
            <option value="nameSeach">姓名</option>
            <option value="telSeach">電話</option>
          </select>
          <input className={SearchBar.input} type="text" placeholder="關鍵字"
          onChange={props.getSeachWord} 
          />
          <div className={SearchBar.icon}
          onClick={props.hendleSeachTel}
          >GO</div>
        </div>
      </form>
    </nav>
  )
}

export default SearchNav;