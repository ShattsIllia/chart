import { getTime } from "./getTimeFunk"

export   const refreshState=(data, newItem)=> {  

    const newItemTime = {
      ...newItem, 
      timestamp: getTime(newItem.timestamp)
    }


    if(data.length > 9) {
      let  newArr = [...data]
      newArr.shift()
      newArr.push(newItemTime)
      return newArr
    } else {
      const newArr = [...data, newItemTime]
      return newArr
    }
}