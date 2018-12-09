import { getUserInfoByCode } from '@/api/api.js'

export function getQueryString (paraName) {
  let url = decodeURI(document.location.toString())
  let arrObj = url.split('?')
  console.log('url 分割问号', arrObj)
  if (arrObj.length === 2) {
    let arrPara = arrObj[1].split('&')
    let arr
    for (let i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')
      if (arr != null && arr[0] === paraName) {
        return arr[1]
      }
    }
    return ''
  } else if (arrObj.length === 3) {
    let arrPara = arrObj[2].split('&')
    console.log('url 分割问号', arrPara)
    let arr
    for (let i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')
      if (arr != null && arr[0] === paraName) {
        return arr[1]
      }
    }
    return ''
  } else {
    return ''
  }
}

export function setUserAuthorize () {
  let str = location.href
  let code = str.substring(str.indexOf('=') + 1, str.lastIndexOf('&'))
  if (!localStorage.getItem('openid')) {
    getUserInfoByCode(code)
      .then(res => {
        localStorage.setItem('openid', res.data.openid)
        localStorage.setItem('resVisitorTag', res.data.resVisitorTag)
        localStorage.setItem('visitorTag', res.data.visitorTag)
        console.log('设置resVisitorTag, visitorTag 成功')
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function isVisType () {
  let visitorTag = localStorage.getItem('visitorTag')
  if (visitorTag === '1') {
    return true
  }
}

export function isResType () {
  let resVisitorTag = localStorage.getItem('resVisitorTag')
  if (resVisitorTag === '1') {
    return true
  }
}
