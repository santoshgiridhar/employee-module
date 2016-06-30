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
            checkedRow = self.attr('checkedRows'),
            employeeID = '';
        if (checkedRow.length) {
            //TODO: Navigate to Edit Employee Screen with selected EmployeeID
            employeeID = checkedRow[0].employeeCode;
            can.route.attr({employeeSlug: employeeID});
            can.route.attr({page:'addEmployee'});
            console.log(can.route.attr());
        } else {
            can.route.attr('page', 'addEmployee');
        }
    }
});
