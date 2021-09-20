export const refreshState = (data, newItem) => {
  if (data.length > 9) {
    let newArr = [...data];
    newArr.shift();
    newArr.push(newItem);
    return newArr;
  } else {
    return [...data, newItem];
  }
};
