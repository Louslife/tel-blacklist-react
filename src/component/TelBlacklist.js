import React, { useState, useEffect } from "react";
import styles from '../css/Customized.module.css';

import "../css/basic.css";

function TelBlacklist() {

  const data = [
    {
      telId: "1",
      telName: "小王",
      tel: "09",
      isBlack: false,
      date: ""
    }, {
      telId: "2",
      telName: "小李",
      tel: "09",
      isBlack: false,
      date: ""
    }, {
      telId: "3",
      telName: "小葉",
      tel: "09",
      isBlack: false,
      date: ""
    }, {
      telId: "4",
      telName: "小玉",
      tel: "09",
      isBlack: false,
      date: ""
    }, {
      telId: "5",
      telName: "小吳",
      tel: "09",
      isBlack: false,
      date: ""
    }
  ]

  const [telList, setTelList] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentTel, setCurrentTel] = useState({})
  const [isAdd, setIsAdd] = useState(false);

  const [newTel, setNewTel] = useState("");
  const [newId, setNewId] = useState("");
  const [newUser, setNewUser] = useState("");

  // 拉取資料時將程式碼包覆於 useEffect 在 render 之後執行一次
  useEffect(() => {
    // 在這裏拉取資料
    setTelList(data)
  }, []);

  const hendleSeachTel = () => {
    // 搜尋功能
    // 點選外框之後送出搜尋
    // 打超過兩個字才能搜尋
  }

  const hendleCreateTel = () => {
    // 新增一筆電話
    // 在這裏認證一筆電話是否合法
    // IsAdd === true 時 input會出現
    if (isAdd) {
      setIsAdd(false)
    } else {
      setIsAdd(true)
    }
  }

  const hendleSaveTel = () => {
    // 儲存一筆電話
    // 若我按下外框或者 enter 將存擋並且 setIsAdd(false)
    // cell Create API
    const newList = [...telList, {
      telId: newId,
      telName: newUser,
      tel: newTel,
    }]
    setIsAdd(false)
    setTelList(newList)
  }

  const hendleUpdateTel = (tel) => {
    // 修改一筆電話
    // v1.改變一筆電話的狀態(唯讀->能修改) 顯示 input (只顯示被修改的資料)
    // v2.讓使用者可以修改 input 的內容
    // v3.取得被修改的內容
    // 4.set 回來
    // 5.刪除舊的 新增新的 依照改變的資料顯示畫面

    // 先刪除掉舊的資料 在新增新的一模一樣的資料 就能達到修改的目的

    // 驗證被修改的電話是否合法
    // cell Update API

    if (isUpdate) {
      setIsUpdate(false)
    } else {
      setIsUpdate(true)
    }
    setCurrentTel(tel)
    console.log(currentTel)
  }

  const hendleSaveTelUpdate = (tel) => {
    // 儲存一筆被修改的電話
    alert("刪除修改電話")
    console.log(tel)
  }

  const hendleDeleteTel = (id) => {
    // cell Delete API
    // 使用 id 作為索引
    alert("刪除一筆電話")
    const newList = telList.filter((telList) => {
      return telList.telId !== id;
    })
    console.log(newList)
    setTelList(newList)
  }

  const hendleChangeType = () => {
    // cell Update API
    // 修改一筆電話的狀態
    // 白名單變成黑名單
    // 黑名單變成白名單
  }

  const getIdInputValue = (e) => {

    setNewId(e.target.value);
    console.log(e.target.value)
  }
  const getUserInputValue = (e) => {

    setNewUser(e.target.value);
    console.log(e.target.value)
  }

  const getTelInputValue = (e) => {

    setNewTel(e.target.value);
    console.log(e.target.value)
  }


  return (
    <>
      <header>
        <h1>電話黑名單</h1>
      </header>

      <nav>
        <h5>seach bar</h5>
        <div><input type="text" /><i>放大鏡</i></div>
        <button>黑名單</button>
        <button>白名單</button>
        <button>顯示全部</button>
      </nav>

      <div className={styles.addTel}
        onClick={hendleCreateTel}>+</div>

      <main className="container">
        <div className="row">
          <div className="col">id</div>
          <div className="col">名字</div>
          <div className="col">電話</div>
          <div className="col">行動</div>
        </div>

        {(telList ? telList.map((obj, index) =>
          <>
            <div className="row" key={obj.telId}>
              <div className="col tel-id"> {obj.telId}</div>
              <div className="col tel-name"> {obj.telName}</div>
              <div className="col tel"> {obj.tel}</div>
              <div className="col tel-action">
                <div className={styles.telActionRevise}
                  onClick={() => hendleUpdateTel(obj)}><i>修改</i></div>
                <div className={styles.telActionDel}
                  onClick={() => hendleDeleteTel(obj.telId)}><i>刪除</i></div>
              </div>
            </div>
            {(isUpdate && currentTel === obj ?
              <div className="row">
                <div className="col"><input onChange={getIdInputValue} type="text" value={`${obj.telId}(id 不可改)`} /></div>
                <div className="col"><input onChange={getUserInputValue} type="text" placeholder={`${obj.telName}(在這裡更新內容)`} /></div>
                <div className="col"><input onChange={getTelInputValue} type="text" placeholder={`${obj.tel}(在這裡更新內容)`} /></div>
                <div className={styles.telActionDel}
                  onClick={() => hendleSaveTelUpdate(obj)}><i>確定</i></div>
              </div> : "")}
          </>
        ) : "Get No Data"
        )}
        {isAdd ? <div className="row">
          <div className="col"><input name="addId" type="text"
            onChange={getIdInputValue} /></div>
          <div className="col"><input name="addUser" type="text"
            onChange={getUserInputValue} /></div>
          <div className="col"><input name="addtel" type="text"
            onChange={getTelInputValue} /></div>
          <div className="col tel-action">
            <div className={styles.telActionDel}
              onClick={hendleSaveTel}><i>確定</i></div>
          </div>
        </div> : ""}
      </main>
    </>
  )
};


export default TelBlacklist;