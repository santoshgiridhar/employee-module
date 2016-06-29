import can from 'can/';
import 'can/util/fixture/';

function getData() {
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
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
    };
}

var url = '/ListAll';
can.fixture('GET ' + url, function(params) {
    console.log('FIXTURE: ' + url);
    //var params = JSON.parse(options.data);
    console.log(getData());
    return getData();
});

// var url = '/get/E3';
// can.fixture('GET ' + url, function(params) {
//     console.log('FIXTURE: ' + url);
//     //var params = JSON.parse(options.data);
//     return getEmployeeData();
// });
