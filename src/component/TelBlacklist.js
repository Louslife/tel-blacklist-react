import React, { useState, useEffect } from "react";

import '../css/Header.module.css';

import SubCategory from '../css/SubCategory.module.css';
import Crad from '../css/Crad.module.css';
import AddBtn from '../css/AddBtn.module.css';
import FloatInput from "../css/FloatInput.module.css";

import { ReactComponent as Sad } from "../images/sad.svg";
import { ReactComponent as Smile } from "../images/smile.svg";

import SearchNav from "./SearchNav";

const SadSvg = () => {

  return (
    <div className={SubCategory.sadWarp}>
      <img src={Sad} className={SubCategory.sadLogo} alt="" />
      <Sad className={SubCategory.sadLogo} />
    </div>
  )
}

const SmileSvg = () => {

  return (
    <div className={SubCategory.smileWarp}>
      <img src={Smile} className={SubCategory.smileLogo} alt="" />
      <Smile className={SubCategory.smileLogo} />
    </div>
  )
}

const TelBlacklist = () => {

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
      isBlack: false,
      date: ""
    }
  ]

  const [telList, setTelList] = useState(null);
  // const [isUpdate, setIsUpdate] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  // const [currentTel, setCurrentTel] = useState({})
  // const [updateTel, setUpdateTel] = useState({})

  const [newTel, setNewTel] = useState("");
  const [newId, setNewId] = useState("");
  const [newUser, setNewUser] = useState("");

  const [searchType, setSearchType] = useState("nameSeach")
  const [searchWord, setSearchWord] = useState("")

  // 拉取資料時將程式碼包覆於 useEffect 在 render 之後執行一次
  useEffect(() => {
    // 在這裏拉取資料
    setTelList(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSeachTel = () => {
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

  const handleFilterTel = (e) => {
    // 點選名單按鈕
    const currentTarget = e.currentTarget
    const btnType = currentTarget.name
    console.log(currentTarget)
    console.log(currentTarget.name)
    switch (btnType) {
      case "black":
        dataReset()
        const newTelListBlack = telList.filter((tel) => {
          return tel.isBlack
        })
        setTelList(newTelListBlack)
        console.log("click button is black.")
        break;

      case "white":
        dataReset()
        const newTelListWhite = telList.filter((tel) => {
          return !tel.isBlack
        })
        setTelList(newTelListWhite)
        console.log("click button is white.")
        break;

      case "all":
        dataReset()
        console.log("click button is all.")
        break;

      default:
        dataReset()
        console.log("no button type.")
        break;
    }
  }

  const handleCreateTel = () => {
    // 新增一筆電話
    // IsAdd === true 時 input會出現
    if (isAdd) {
      setIsAdd(false)
    } else {
      setIsAdd(true)
    }
  }

  const handleSaveTel = () => {
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

  // const handleUpdateTel = (tel) => {
  //   // 修改一筆電話
  //   // 驗證被修改的電話是否合法
  //   // cell Update API
  //   if (isUpdate) {
  //     setIsUpdate(false)
  //   } else {
  //     setIsUpdate(true)
  //   }
  //   setCurrentTel(tel)
  //   console.log(currentTel)
  // }

  // const handleSaveTelUpdate = (tel) => {
  //   // 儲存一筆被修改的電話
  //   console.log(tel)
  //   const nowTel = {
  //     telId: tel.telId,
  //     telName: newUser,
  //     tel: newTel,
  //     isBlack: true,
  //     date: ""
  //   }
  //   setUpdateTel(nowTel)
  //   const newList = telList.map((obj, index) => {
  //     return currentTel.telId === obj.telId ? { ...obj, ...updateTel } : obj;
  //   })
  //   setTelList(newList)
  //   alert("修改一筆電話");
  // }

  // useEffect(() => {
  //   console.log("telList", telList)
  // }, [telList]);

  // const handleCurrentTelInput = (e) => {
  //   setUpdateTel({ ...updateTel, [e.target.name]: e.target.value })
  // }

  const handleDeleteTel = (id) => {
    // cell Delete API
    // 使用 id 作為索引
    alert("刪除一筆電話")
    const newList = telList.filter((telList) => {
      return telList.telId !== id;
    })
    console.log(newList)
    setTelList(newList)
  }

  // const handleChangeType = () => {
  //   // cell Update API
  //   // 修改一筆電話的狀態
  //   // 白名單變成黑名單
  //   // 黑名單變成白名單
  // }

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

  const dataReset = () => {
    setTelList(data);
    console.log("dataReset")
  }

  return (
    <>
      <header>
        <h1>黑白名單管理</h1>
      </header>

      <SearchNav
        getSeachType={getSeachType}
        getSeachWord={getSeachWord}
        handleSeachTel={handleSeachTel}
      />

      <div className={AddBtn.addWarp}>
        <div className={AddBtn.addTel}
          onClick={handleCreateTel}>+
        </div>
        <span>新增</span>
      </div>

      <main className="container">

        <div className="table-warp">
          <div className={SubCategory.subCategory}>
            <button name="all" className={SubCategory.subCategoryItem} onClick={(e) => handleFilterTel(e)}><p onClick={(e) => { e.preventDefault(e) }}>全部</p></button>
            <button name="black" className={SubCategory.subCategoryItem} onClick={(e) => handleFilterTel(e)}><SadSvg /><p onClick={(e) => { e.preventDefault(e) }}>黑名單</p></button>
            <button name="white" className={SubCategory.subCategoryItem} onClick={(e) => handleFilterTel(e)}><SmileSvg /><p onClick={(e) => { e.preventDefault(e) }}>白名單</p></button>
          </div>
          <div className="table-item">
            <div className={Crad.cradWrapCaption} >
              <div className="row">
                <div className={Crad.col}>項次</div>
                <div className={Crad.col}>名字</div>
                <div className={Crad.col}>電話</div>
                <div className={Crad.col}></div>
                <div className="btn-warp">
                </div>
              </div>
            </div>

            {(isAdd ? <div className={FloatInput.isAddWrap}>
              <div className="row card">
                <div className={FloatInput.isAddItme}><input onChange={getIdInputValue} type="text" disabled placeholder="預設項次(不用填)" /></div>
                <div className={FloatInput.isAddItme}><input onChange={getUserInputValue} type="text" placeholder="輸入名字" /></div>
                <div className={FloatInput.isAddItme}><input onChange={getTelInputValue} type="text" placeholder="輸入電話" /></div>
                <div className={FloatInput.isAddItme}>
                  <div className={FloatInput.isAddSure}
                    onClick={() => handleSaveTel()}><i>確定</i></div>
                </div>
              </div>
            </div> : "")}

            {(telList ? telList.map((obj, index) =>
              <React.Fragment key={obj.telId}>
                <div className={Crad.cradWrap}>
                  <div className="row card">
                    <div className={Crad.cradItme}><span className={Crad.id}>{index + 1}</span></div>
                    <div className={Crad.cradItme}>{obj.telName} <SadSvg /></div>
                    <div className={Crad.cradItme}>&#9742; {obj.tel}</div>
                    <div className={Crad.cradItme}>
                      <div className={Crad.btnWarp}>
                        {/* <div className={Crad.telActionRevise}
                      onClick={() => handleUpdateTel(obj)}
                    >&#9998;</div> */}
                        <div className={Crad.telActionDel}
                          onClick={() => handleDeleteTel(obj.telId)}
                        >移除</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* {(isUpdate && currentTel.telId === obj.telId ? <div className={FloatInput.isUpdateWrap} key={currentTel.telId}>
                  <div className="row card">
                    <div className={FloatInput.isUpdateItme}><input onChange={getIdInputValue} type="text" value="ID" /></div>
                    <div className={FloatInput.isUpdateItme}><div className="col"><input name="telName" onChange={handleCurrentTelInput} type="text" placeholder={`${obj.telName}`} /></div>
                    </div>
                    <div className={FloatInput.isUpdateItme}><input name="tel" onChange={handleCurrentTelInput} type="text" placeholder={`${obj.tel}`} /></div>
                    <div className={FloatInput.isUpdateItme}>
                      <div className={FloatInput.isUpdateSure}
                        onClick={() => handleSaveTelUpdate(currentTel)}><i>確定</i></div>
                    </div>
                  </div>
                </div> : "")} */}
              </React.Fragment>
            ) : "Get No Data"
            )}

          </div>
        </div>

      </main>
    </>
  )
};


export default TelBlacklist;