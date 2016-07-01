import can from 'can';
import 'can/map/define/';
import Employee from 'models/employee/';
import _ from 'lodash';

export default can.Map.extend({
    define: {
        data: {
            value: []
        }
    },
    fetchEmployeeData: function(options = {}) {
        var self = this;
        options.url = '/get/' + options.empId;
        Employee.findOne(options, function(data) {
            console.info("Find One Data - ", data);
            self.attr('data', data);
            self.attr('firstName', data.firstName);
            self.attr('lastName', data.lastName);
            self.attr('phoneNumber', data.phoneNumber);
            self.attr('emailAddress', data.emailAddress);
        }, function(xhr) {
            console.error(xhr)
        });
    },
    addEmployee: function() {
        var self = this,
            employeeObj = {
                firstName: self.attr('firstName'),
                lastName: self.attr('lastName'),
                phoneNumber: self.attr('phoneNumber'),
                emailAddress: self.attr('emailAddress')
            }
        console.info('Newly Created Employee Obj - ', employeeObj);

    }
});
