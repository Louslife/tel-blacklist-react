import axio from "axio";

const basicAPI = axio.create(
  {
    baseURL: 'http://telesale.bonvies.com:8080/'
  })

  // 添加 1 筆名單
  export const apiAddTel = data => basicAPI.post('/list', data);

  // 模糊搜尋查詢資料 /lists/search?
  export const apiSearchTel = data => basicAPI.get('/list/search', data);

  // 通過 Id 刪除名單
  export const apiDeletedTel = data => basicAPI.delete('/list', data);

  // 全部搜尋
  export const apiAllSearchTel = data => basicAPI.get('/lists', data);