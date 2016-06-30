import can from 'can';
import 'can/map/define/';
import DataModel from 'models/employee/';
import _ from 'lodash';

export default can.Map.extend({
    define: {
        data: {
            value: []
        },
        checkedRows: {
            set: function(data) {
                this.attr('isEditable', (data.length > 1) ? true : false);
                return data;
            }
        }
    },
    isEditable: false,
    employeeSlug: '',
    fetchData: function() {
        var self = this,
            requestOptions = {
                'searchRequest': {
                    'regionId': 2,
                    'offset': 0,
                    'limit': 20
                },
                'secretKey': 'employeedata',
                'requestTimeStamp': 1433322546015
            };

        DataModel.findAll(requestOptions, function(data) {
            console.info("data--- ", data);
            self.attr('data', data);
        }, function(xhr) {
            console.error(xhr)
        });
    },
    addEditEmployee: function() {
        var self = this,
            employee = self.attr('checkedRows.0');

        if (employee) {
            //TODO: Navigate to Edit Employee Screen with selected EmployeeID
            can.route.attr({
                employeeSlug: employee.employeeCode,
                employee,
                page: 'addEmployee'
            }, true);
            console.log(can.route.attr());

        } else {
            can.route.attr('page', 'addEmployee');
        }
    }
});
