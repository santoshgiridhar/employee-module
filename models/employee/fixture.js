import can from 'can/';
import 'can/util/fixture/';

function getData(params) {
    var data = {
        "Employees": [{
            "userId": "rirani",
            "jobTitleName": "Developer",
            "firstName": "Romin",
            "lastName": "Irani",
            "preferredFullName": "Romin Irani",
            "employeeCode": "E1",
            "region": "CA",
            "phoneNumber": "408-1234567",
            "emailAddress": "romin.k.irani@gmail.com"
        }, {
            "userId": "nirani",
            "jobTitleName": "Developer",
            "firstName": "Neil",
            "lastName": "Irani",
            "preferredFullName": "Neil Irani",
            "employeeCode": "E2",
            "region": "CA",
            "phoneNumber": "408-1111111",
            "emailAddress": "neilrirani@gmail.com"
        }, {
            "userId": "thanks",
            "jobTitleName": "Program Directory",
            "firstName": "Tom",
            "lastName": "Hanks",
            "preferredFullName": "Tom Hanks",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "408-2222222",
            "emailAddress": "tomhanks@gmail.com"
        }]
    };
    console.log('params', params);
    if (params.employeeCode) {
        data.Employees = data.Employees.filter(employee => {
            return employee.employeeCode === params.employeeCode;
        })
    }
    return data;
}

function getEmployeeData() {
    return {
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408222222",
        "emailAddress": "tomhanks@gmail.com"
    };
}

var url = '/ListAll';
can.fixture('GET ' + url, function(params) {
    console.info('FIXTURE: ' + url);
    return getData(params.data);
});

var url = '/get/E3';
can.fixture('GET ' + url, function(params) {
    console.info('FIXTURE: ' + url);
    return getEmployeeData();
});
