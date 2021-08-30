import React from "react";
import styles from '../css/Customized.module.css';

import "../css/basic.css";

function TelBlacklist() {

  return (
    <>
      <header>
        電話黑名單
      </header>

      <nav>
        seach bar
        <input type="text" />
        <i>放大鏡</i>
      </nav>

      <div className={styles.addTel}>+</div>

      <main className="container">
        <div className="row">
          <div className="col">id</div>
          <div className="col">name</div>
          <div className="col">電話</div>
          <div className="col ">
            行動
          </div>
        </div>
        <div className="row">
          <div className="col tel-id">1</div>
          <div className="col tel-name">小王</div>
          <div className="col tel-action">0911111111</div>
          <div className="col tel-action">
            <div className={styles.telActionRevise}><i>修改</i></div>
            <div className={styles.telActionDel}><i>刪除</i></div>
          </div>
        </div>
        <div className="row">
          <div className="col tel-id">2</div>
          <div className="col tel-name">小李</div>
          <div className="col tel-action">0922222222</div>
          <div className="col tel-action">
            <div className={styles.telActionRevise}><i>修改</i></div>
            <div className={styles.telActionDel}><i>刪除</i></div>
          </div>
        </div>
        <div className="row">
          <div className="col tel-id">3</div>
          <div className="col tel-name">小葉</div>
          <div className="col tel-action">09333333333</div>
          <div className="col tel-action">
            <div className={styles.telActionRevise}><i>修改</i></div>
            <div className={styles.telActionDel}><i>刪除</i></div>
          </div>
        </div>
        <div className="row">
          <div className="col tel-id">4</div>
          <div className="col tel-name">小玉</div>
          <div className="col tel-action">09444444444</div>
          <div className="col tel-action">
            <div className={styles.telActionRevise}><i>修改</i></div>
            <div className={styles.telActionDel}><i>刪除</i></div>
          </div>
        </div>
        <div className="row">
          <div className="col tel-id">5</div>
          <div className="col tel-name">小吳</div>
          <div className="col tel-action">09555555555</div>
          <div className="col tel-action">
            <div className={styles.telActionRevise}><i>修改</i></div>
            <div className={styles.telActionDel}><i>刪除</i></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TelBlacklist;