export default function calcDaysTo (month, day) {
    let year = new Date().getFullYear()
    const dateTest = new Date(year, month, day)
    const today = new Date()
    if (dateTest < today) {
        year = year + 1
    }
    const date = new Date(year, month, day)
    const timeDiff = date.getTime() - today.getTime()
    const dayDiff = Math.floor(timeDiff/(1000*60*60*24))
    return(`${dayDiff}`)
}