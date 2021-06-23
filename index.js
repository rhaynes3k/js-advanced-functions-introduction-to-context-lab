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

function hoursWorkedOnDate (rec, wkDate) {
   let dtIn, dtOut, recIn, recOut
   rec.timeInEvents.map(n => {
     let [date, hour] = n.split(' ')
     recIn = hour
     dtIn = date
       console.log(recIn)
     })
    rec.timeOutEvents.map(n => {
        let [date2, hour2] = n.split(' ')
       recOut = hour2
       dtOut = date2
               console.log(recOut)
    })
    if(dtIn && dtOut === wkDate){
        return (recOut - recIn)/100
    } else {
      alert('No dice!')
    }
}
