export   const refreshState=(data, state,  setState)=> {
  
    
    if(state.length > 10) {
      

      const newArr = [...state]
      newArr.shift()

      setState([...newArr, {
        value: data.value,
        timestamp: data.timestamp
      }])
    } else {
      setState(
        [...state, {
          value: data.value,
          timestamp: data.timestamp
        }]
      )      
    }
  }