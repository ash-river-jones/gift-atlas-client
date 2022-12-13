export default function calcDaysTo (dateString) {
    const lowercaseDateString = dateString.toLowerCase()
    const dateSplit = lowercaseDateString.split(' ')
    const monthString = dateSplit[0].slice(0,3)
    const day = dateSplit[1]
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    const month = months.indexOf(monthString)

    let year = new Date().getFullYear()
    const dateTest = new Date(year, month, day)
    const today = new Date()
    if (dateTest < today) {
        year = year + 1
    }
    const date = new Date(year, month, day)
    const timeDiff = date.getTime() - today.getTime()
    const dayDiff = Math.floor(timeDiff/(1000*60*60*24))
    return(dayDiff)
}
