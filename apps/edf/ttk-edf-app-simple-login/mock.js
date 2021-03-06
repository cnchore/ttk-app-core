/**
 * mock.js 提供应用截获ajax请求，为脱离后台测试使用
 * 模拟查询更改内存中mockData,并返回数据
 */

import { fetch } from 'edf-utils'

//import './server/service'

const mockData = fetch.mockData

function initMockData() {
    if (!mockData.users) {
        mockData.users = [{
            id: 1,
            mobile: 13333333333,
            password: '1',
            token: 'xxxxxxxxxxx'
        }]
    }
}

// fetch.mock('/v1/edf/user/login', (option) => {
//     initMockData()

//     const user = mockData.users.find(o => o.mobile == option.mobile && o.token == option.password)

//     if (user) {
//         return {
//             result: true,
//             //token模拟简单处理，正式不应该有密码等数据
//             token: `${user.id},${user.mobile},${user.password},${user.nickname ? user.nickname : ''},${user.sex ? user.sex : ''},${user.birthday ? user.birthday : ''}`,
//             value: option
//         }
//     }
//     else {
//         return { result: false, error: { message: '请输入正确的用户名密码（系统内置用户user:13333333333,pwd:1）' } }
//     }
// })


fetch.mock('/v1/edf/connector/accessLogin', (option) => {
    initMockData()

    const user = mockData.users.find(o => o.token == option.token)

    if (user) {
        return {
            result: true,

            //token模拟简单处理，正式不应该有密码等数据
            token: `${user.id},${user.mobile},${user.password},${user.nickname ? user.nickname : ''},${user.sex ? user.sex : ''},${user.birthday ? user.birthday : ''}`,
            value: option
        }
    }
    else {
        return { result: false, error: { message: '请输入正确的用户名密码（系统内置用户user:13333333333,pwd:1）' } }
    }
})