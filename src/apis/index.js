import axios from "axios";

const basicAPI = axios.create(
  {
    baseURL: 'http://telesale.bonvies.com:8080/'
  })

  // 添加 1 筆名單
  export const apiAddTel = data => basicAPI.post('/list', data);

  // 模糊搜尋查詢資料 /lists/search?
  export const apiSearchTel = data => basicAPI.get('/list/search', data);

  // 通過 Id 刪除名單
  export const apiDeletedTel = data => basicAPI.delete('/list', data);

  // 全部
  export const apiAllTel = data => basicAPI.get('/lists', data);