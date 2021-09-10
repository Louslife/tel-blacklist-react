import React from "react";

import FloatInput from "../css/FloatInput.module.css";
import Crad from '../css/Crad.module.css';
import SubCategory from '../css/SubCategory.module.css';

import { ReactComponent as Sad } from "../images/sad.svg";
import { ReactComponent as Smile } from "../images/smile.svg";

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

const TableWarp = (props) => {
  return (
    <>
      <div className="table-warp">
        <div className={SubCategory.subCategory}>
          <button name="all" className={SubCategory.subCategoryItem} onClick={(e) => props.handleFilterTel(e)}><p onClick={(e) => { e.preventDefault(e) }}>全部</p></button>
          <button name="black" className={SubCategory.subCategoryItem} onClick={(e) => props.handleFilterTel(e)}><SadSvg /><p onClick={(e) => { e.preventDefault(e) }}>黑名單</p></button>
          <button name="white" className={SubCategory.subCategoryItem} onClick={(e) => props.handleFilterTel(e)}><SmileSvg /><p onClick={(e) => { e.preventDefault(e) }}>白名單</p></button>
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

          {(props.isAdd ? <div className={FloatInput.isAddWrap}>
            <div className="row card">
              <div className={FloatInput.isAddItme}><input onChange={props.getIdInputValue} type="text" disabled placeholder="預設項次(不用填)" /></div>
              <div className={FloatInput.isAddItme}><input onChange={props.getUserInputValue} type="text" placeholder="輸入名字" /></div>
              <div className={FloatInput.isAddItme}><input onChange={props.getTelInputValue} type="text" placeholder="輸入電話" /></div>
              <div className={FloatInput.isAddItme}>
                <div className={FloatInput.isAddSure}
                  onClick={() => props.handleSaveTel()}><i>確定</i></div>
              </div>
            </div>
          </div> : "")}

          {(props.telList ? props.telList.map((obj, index) =>
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
                        onClick={() => props.handleDeleteTel(obj.telId)}
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
    </>
  )
}

export default TableWarp;