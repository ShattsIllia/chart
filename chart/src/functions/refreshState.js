import { getTime } from "./getTimeFunk";

export const refreshState = (data, newItem) => {
  
   const newItemData = {
     ...newItem,
     timestamp: getTime(newItem.timestamp)
   }

  if (data.length > 9) {
    let newArr = [...data];
    newArr.shift();
    newArr.push(newItemData);
    return newArr;
  } else {
    return [...data, newItemData];
  }
};
