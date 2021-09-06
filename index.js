/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


let createEmployeeRecord = function (arr){
    const obj =  {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    const employeeRecord = Object.create(obj)
    return employeeRecord
}

let createEmployeeRecords = function(arr){
    return arr.map((record) => createEmployeeRecord(record))
}

let createTimeInEvent = function (d){
    const hour = d.split(" ")[1]*1
    const date = d.split(" ")[0]
    const newObj = {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    this.timeInEvents.push(newObj)
    return this

}

let createTimeOutEvent = function (d){
    const hour = d.split(" ")[1]*1
    const date = d.split(" ")[0]
    const newObj = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    this.timeOutEvents.push(newObj)
    return this
}

let hoursWorkedOnDate = function (date){
    const timeInHour = this.timeInEvents.find(e => e.date == date).hour
    const timeOutHour = this.timeOutEvents.find(e => e.date == date).hour
    return timeOutHour/100 - timeInHour/100
}

let wagesEarnedOnDate = function (date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let findEmployeeByFirstName = function(arr, name){
    return arr.find(e => e.firstName == name)
}

let calculatePayroll = function(arr){
    return arr.reduce((arr, curr) => arr + allWagesFor.call(curr), 0)
}