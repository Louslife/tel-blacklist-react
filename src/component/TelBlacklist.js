import React from "react";
import styles from '../css/Customized.module.css';

import "../css/basic.css";

function TelBlacklist() {

  const data =
    [
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

  return (
    <>
      <header>
        <h1>電話黑名單</h1>
      </header>

      <nav>
        <h5>seach bar</h5>
        <div><input type="text" /><i>放大鏡</i></div>
      </nav>

      <div className={styles.addTel}>+</div>

      <main className="container">
        <div className="row">
          <div className="col">id</div>
          <div className="col">name</div>
          <div className="col">電話</div>
          <div className="col">行動</div>
        </div>
        {data.map((obj, index) =>
          <div className="row">
            <div className="col tel-id">{obj.telId}</div>
            <div className="col tel-name">{obj.telName}</div>
            <div className="col tel">{obj.tel}</div>
            <div className="col tel-action">
              <div className={styles.telActionRevise}><i>修改</i></div>
              <div className={styles.telActionDel}><i>刪除</i></div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default TelBlacklist;