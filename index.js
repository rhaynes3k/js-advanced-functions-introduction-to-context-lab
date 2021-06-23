// Your code here
let createEmployeeRecord = arr => {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

let createEmployeeRecords = arr => {
  return arr.map(num => {
    return createEmployeeRecord(num)
  })
}

function createTimeInEvent (emp, dateTime = ''){
  let [date, hour] = dateTime.split(' ')
   console.log(emp, [date, hour])
    emp.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date
    })
    return emp
}

function createTimeOutEvent (emp, dateTime = ''){
  let [date, hour] = dateTime.split(' ')
   console.log(emp, [date, hour])
    emp.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date
    })
    return emp
}

// let hoursWorkedOnDate = function (emp, wkDate){
//   emp.timeInEvents.find(e => {
//     return e.date})
//   console.log(emp.timeInEvents)
// }
