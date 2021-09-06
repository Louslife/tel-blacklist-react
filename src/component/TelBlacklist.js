import React, { useState, useEffect } from "react";

import '../css/Header.module.css';

import SubCategory from '../css/SubCategory.module.css';
import Crad from '../css/Crad.module.css';
import AddBtn from '../css/AddBtn.module.css';
import FloatInput from "../css/FloatInput.module.css";

import SearchNav from "./SearchNav";

function TelBlacklist() {

  const data = [
    {
      telId: "A1AS",
      telName: "小王",
      tel: "0911111111",
      isBlack: true,
      date: ""
    }, {
      telId: "B2SF",
      telName: "小李",
      tel: "0922222222",
      isBlack: true,
      date: ""
    }, {
      telId: "C3VB",
      telName: "小葉",
      tel: "0933333333",
      isBlack: true,
      date: ""
    }, {
      telId: "D4TY",
      telName: "小玉",
      tel: "0944444444",
      isBlack: true,
      date: ""
    }, {
      telId: "E5UY",
      telName: "小吳",
      tel: "0955555555",
      isBlack: true,
      date: ""
    }
  ]

  const [telList, setTelList] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [currentTel, setCurrentTel] = useState({})

  const [newTel, setNewTel] = useState("");
  const [newId, setNewId] = useState("");
  const [newUser, setNewUser] = useState("");

  const [searchType, setSearchType] = useState("nameSeach")
  const [searchWord, setSearchWord] = useState("")

  // 拉取資料時將程式碼包覆於 useEffect 在 render 之後執行一次
  useEffect(() => {
    // 在這裏拉取資料
    setTelList(data)
  }, []);

  const hendleSeachTel = () => {
    // 搜尋功能
    // 點選外框之後送出搜尋
    console.log(searchType)
    switch (searchType) {

      case 'nameSeach':
        const newTelListName = telList.filter((tel) => {
          return tel.telName.includes(searchWord)
        })
        setTelList(newTelListName)
        console.log('search type is name.');
        break;

      case 'telSeach':
        const newTelListTel = telList.filter((tel) => {
          return tel.tel.includes(searchWord)
        })
        setTelList(newTelListTel)
        console.log('search type is phone.');
        break;

      default:
        console.log(`no type.`);
    }
  }

  const hendleFilterTel = (e) => {
    // 點選名單按鈕
    const btnType = e.target.name
    switch (btnType) {
      case "black":
        const newTelListBlack = telList.filter((tel) => {
          return tel.isBlack
        })
        setTelList(newTelListBlack)
        console.log("click button is black.")
        break;

      case "white":
        const newTelListWhite = telList.filter((tel) => {
          return !tel.isBlack
        })
        setTelList(newTelListWhite)
        console.log("click button is white.")
        break;

      case "all":
        const newTelListAll = telList.filter((tel) => {
          return true
        })
        setTelList(newTelListAll)
        console.log("click button is all.")
        break;

      default:
        console.log("no button type.")
        break;
    }
  }

  const hendleCreateTel = () => {
    // 新增一筆電話
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
    // 在這裏認證一筆電話是否合法
    // cell Create API
    confirmPhone(newTel)
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
    console.log(tel)
    const nowTel = {
      telId: tel.telId,
      telName: newUser,
      tel: newTel,
      isBlack: true,
      date: ""
    }
    const newList = telList.map((obj, index) => {
      console.log(obj)
      console.log(tel)
      console.log(nowTel)
      return tel.telId === obj.telId ? { ...obj, ...nowTel } : obj;
    })
    setCurrentTel({ ...currentTel, ...nowTel })
    setTelList(newList)
    alert("修改一筆電話");
    console.log(telList);
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

  const getSeachWord = (e) => {

    setSearchWord(e.target.value);
    console.log(e.target.value)

  }
  const getSeachType = (e) => {

    setSearchType(e.target.value)
    console.log(searchType)
  }

  const confirmPhone = (phoneNumber) => {

    const reg = new RegExp(/^(0\d{1,2})-?(\d{6,7})(#\d+)?$/);
    return reg.test(phoneNumber);
  };

  return (
    <>
      <header>
        <h1>黑白名單管理</h1>
      </header>

      <SearchNav
        getSeachType={getSeachType}
        getSeachWord={getSeachWord}
        hendleSeachTel={hendleSeachTel}
      />
      <div className={AddBtn.addWarp}>
        <div className={AddBtn.addTel}
          onClick={hendleCreateTel}>+
        </div>
        <span>新增</span>
      </div>

      <div className={SubCategory.subCategory}>
        <button name="black" className={SubCategory.subCategoryItem} onClick={hendleFilterTel}>全部</button>
        <button name="white" className={SubCategory.subCategoryItem} onClick={hendleFilterTel}>黑名單</button>
        <button name="all" className={SubCategory.subCategoryItem} onClick={hendleFilterTel}>白名單</button>
      </div>

      <main className="container">
        <div className={Crad.cradWrapCaption} >
          <div className="row">
            <div className="col">項次</div>
            <div className="col">名字</div>
            <div className="col">電話</div>
            <div className="col">行動</div>
            <div className="btn-warp">
            </div>
          </div>
        </div>

        {(telList ? telList.map((obj, index) =>
          <React.Fragment key={obj.telId}>
            <div className={Crad.cradWrap}>
              <div className="row card">
                <div className={Crad.cradItme}><span className={Crad.id}>{index + 1}</span></div>
                <div className={Crad.cradItme}>{obj.telName}</div>
                <div className={Crad.cradItme}>&#9742;{obj.tel}</div>
                <div className={Crad.cradItme}>
                  <div className={Crad.btnWarp}>
                    <div className={Crad.telActionRevise}
                      onClick={() => hendleUpdateTel(obj)}
                    >&#9998;</div>
                    <div className={Crad.telActionDel}
                      onClick={() => hendleDeleteTel(obj.telId)}
                    >&#9746;</div>
                  </div>
                </div>
              </div>
            </div>

            {(isUpdate && currentTel === obj ? <div className={FloatInput.isUpdateWrap} key={obj.telId}>
              <div className="row card">
                <div className={FloatInput.isUpdateItme}><input onChange={getIdInputValue} type="text" value={`${obj.telId}(不可改)`} /></div>
                <div className={FloatInput.isUpdateItme}><div className="col"><input onChange={getUserInputValue} type="text" placeholder={`${obj.telName}`} /></div>
                </div>
                <div className={FloatInput.isUpdateItme}><input onChange={getTelInputValue} type="text" placeholder={`${obj.tel}`} /></div>
                <div className={FloatInput.isUpdateItme}>
                  <div className={FloatInput.isUpdateSure}
                    onClick={() => hendleSaveTelUpdate(currentTel)}><i>確定</i></div>
                </div>
              </div>
            </div> : "")}
          </React.Fragment>
        ) : "Get No Data"
        )}
        {(isAdd ? <div className={FloatInput.isAddWrap}>
          <div className="row card">
            <div className={FloatInput.isAddItme}><input onChange={getIdInputValue} type="text" placeholder="輸入項次" /></div>
            <div className={FloatInput.isAddItme}><input onChange={getUserInputValue} type="text" placeholder="輸入名字" /></div>
            <div className={FloatInput.isAddItme}><input onChange={getTelInputValue} type="text" placeholder="輸入電話" /></div>
            <div className={FloatInput.isAddItme}>
              <div className={FloatInput.isAddSure}
                onClick={() => hendleSaveTel()}><i>確定</i></div>
            </div>
          </div>
        </div> : "")}
      </main>
    </>
  )
};


export default TelBlacklist;