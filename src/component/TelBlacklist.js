import React, { useState, useEffect } from "react";
import styles from '../css/Customized.module.css';

import "../css/basic.css";

function TelBlacklist() {
  // 電話名單有 黑名單 與 白名單
  // 狀態：telList(藉由 API 撈回 list)、白名單、黑名單、正在修改

  const data = [
    {
      telId: "1",
      telName: "小王",
      tel: "09",
    }, {
      telId: "2",
      telName: "小李",
      tel: "09",
    }, {
      telId: "3",
      telName: "小葉",
      tel: "09",
    }, {
      telId: "4",
      telName: "小玉",
      tel: "09",
    }, {
      telId: "5",
      telName: "小吳",
      tel: "09",
    }
  ]
  const [telList, setTelList] = useState(null);

  // 拉取資料時將程式碼包覆於 useEffect 在 render 之後執行一次
  useEffect(() => {
    // 在這裏拉取資料
    setTelList(data)
  }, []);

  console.table(telList)

  const hendleSeachTel = () => {
    // 搜尋功能
    // 點選外框之後送出搜尋
    // 打超過兩個字才能搜尋
  }

  const hendleCreateTel = () => {
    // 新增一筆電話
    // 在這裏認證一筆電話是否合法
    // cell Create API
  }

  const hendleUpdateTel = () => {
    // 修改一筆電話
    // 改變一筆電話的狀態(唯讀->修改)
    // 驗證被修改的電話是否合法
    // cell Update API
    // 修改結束之後可以使用點選外框或者 Enter 來存擋
  }

  const hendleDeleteTel = () => {
    // cell Delete API
    // 刪除一筆電話
  }

  const hendleChangeType = () => {
    // cell Update API
    // 修改一筆電話的狀態
    // 白名單變成黑名單
    // 黑名單變成白名單
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

      <div className={styles.addTel}>+</div>

      <main className="container">
        <div className="row">
          <div className="col">id</div>
          <div className="col">名字</div>
          <div className="col">電話</div>
          <div className="col">行動</div>
        </div>
        {(telList ? telList.map((obj, index) =>
          <div className="row">
            <div className="col tel-id">{obj.telId}</div>
            <div className="col tel-name">{obj.telName}</div>
            <div className="col tel">{obj.tel}</div>
            <div className="col tel-action">
              <div className={styles.telActionRevise}><i>修改</i></div>
              <div className={styles.telActionDel}><i>刪除</i></div>
            </div>
          </div>) : "Get No Data"
        )}
      </main>
    </>
  )
};


export default TelBlacklist;