// Your code here
function createEmployeeRecord (employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents:[],
    }
}

function createEmployeeRecords(employees){
    return employees.map((employee) => {
        return createEmployeeRecord(employee);
    })
}

function createTimeInEvent(employee, punchIn){
    let timeInEvents = {
        type: "TimeIn",
        hour: parseInt(punchIn.split(' ')[1]),
        date: punchIn.split(' ')[0],
    }
    employee.timeInEvents.push(timeInEvents)
    return employee;
}

function createTimeOutEvent(employee, punchOut){
    let timeOutEvents = {
        type: "TimeOut",
        hour: parseInt(punchOut.split(' ')[1]),
        date: punchOut.split(' ')[0],
    }
    employee.timeOutEvents.push(timeOutEvents)
    return employee;
}

function hoursWorkedOnDate(employee, date){
    let timeIn = employee.timeInEvents.find(day => day.date ===date).hour;
    let timeOut = employee.timeOutEvents.find(day => day.date ===date).hour;
    return (timeOut -timeIn) / 100;
}

function wagesEarnedOnDate (employee, date){
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
}

function allWagesFor(employees){

}
