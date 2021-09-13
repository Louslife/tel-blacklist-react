import React, { useState, useEffect } from "react";

import '../css/Header.module.css';

import AddBtn from '../css/AddBtn.module.css';

import SearchNav from "./SearchNav";
import TableWarp from "./TableWarp";

import { apiAllTel, apiCreateTel, apiDeletedTel } from "../apis/index.js";

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
    // const data = []
    // const getData = () => {
    //   const { data } = apiAllTel()
    //     .catch(err => console.log(err));

    //   fetch('http://telesale.bonvies.com:8080/lists', {method: 'GET'})
    //   .then((response) => {
    //     console.log(response);
    //     return response.json(); 
    //   }).then((jsonData) => {
    //     console.log(jsonData);
    //   }).catch((err) => {
    //     console.log('錯誤:', err);
    // });



    // return data;
    // }
    // getData()
    // console.log(data)
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

    // apiCreateTel({
    //   header: {
    //     accept: "application/json",
    //     "Content-Type": "application/x-json-stream"
    //   },
    //   data: {
    //     name: 'test',
    //     phone: 'test'
    //   }
    // })

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
    apiDeletedTel({ id })

    alert("刪除一筆電話")
    // const newList = telList.filter((telList) => {
    //   return telList.telId !== id;
    // })
    // console.log(newList)
    // setTelList(newList)


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

      <div className={AddBtn.addWarp}
        onClick={handleCreateTel}>
        <div className={AddBtn.addTel}>+
        </div>
        <span>新增</span>
      </div>

      <main className="container">

        <TableWarp
          isAdd={isAdd}
          telList={telList}
          getIdInputValue={getIdInputValue}
          getUserInputValue={getUserInputValue}
          getTelInputValue={getTelInputValue}
          handleSaveTel={handleSaveTel}
          handleDeleteTel={handleDeleteTel}
          handleFilterTel={handleFilterTel}
        />

      </main>
    </>
  )
};


export default TelBlacklist;