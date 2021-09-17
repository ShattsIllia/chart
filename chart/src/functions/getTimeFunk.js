export   const getTime = (timestamp) => {
    const date = new Date(timestamp)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${hours}:${minutes<10?0: ''}${minutes}:${seconds<10?0:''}${seconds}`
}