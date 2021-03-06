import axios from "axios"

export default function ajax(url, data={}, type='GET'){
    let promise;
    if(type === 'GET'){
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key+ '=' +data[key] + '&'
      })
      if(dataStr != ''){
        dataStr = dataStr.substring(0, dataStr.length-1)
        url = url+ '?' + dataStr
      }
      promise = axios.get(url)
    }else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
}
