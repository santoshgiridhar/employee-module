import can from 'can';
import 'can/map/define/';
import Employee from 'models/employee/';
import _ from 'lodash';

export default can.Map.extend({
    define: {
        data: {
            value: []
        },
        employeeName: {
            get() {
                return Employee.findAll().then(function(data) {
                    return data;
                });
            }
        },
        fetchEmployeeName: {
            set: function(value) {
                this.fetchEmployerName();
                return value;
            }
        }
    },
    pushName: [],
    migratedName: [],
    From: [],
    To: [],
    NameList: [],
    selectedNames:[],
    isOpened: true,
    fetchEmployerName: function() {
        var self = this;
        return Employee
            .findAll()
            .then(function(data) {
                // console.log(data);
                self.attr('From', data);
                console.log('from- ', self.attr('From'));
                return data;
            }).fail(function(e) {
                console.error(e);
            });
    },
    fetchEmployeeData: function(options = {}) {
        var self = this;
        options.url = '/get/' + options.empId;
        Employee.findOne(options, function(data) {
            // console.info("Find One Data - ", data);
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
                // firstName: self.attr('firstName'),
                // lastName: self.attr('lastName'),
                // phoneNumber: self.attr('phoneNumber'),
                // emailAddress: self.attr('emailAddress')
                nameList: self.attr('selectedNames')
            }
        console.info('Newly Created Employee Obj - ', employeeObj);

    },
    moveLeft: function(el) {
        var self = this;
        var poplist = self.attr('popName');
        _.find(poplist, function(nlist) {
            for (var i = 0; i < self.selectedNames.length; i++) {
                if (nlist === self.selectedNames[i]) {
                    self.selectedNames.splice(i, 1);
                }
            }
            return null;
        });
        console.log('selectedNames', self.selectedNames);
        self.moveItems('#sbTwo', '#sbOne');
    },
    moveRight: function() {
        var self = this;
        console.log('Moving  Names - ', this.attr('pushName').attr());
        var pushlist = self.attr('pushName');
        _.find(pushlist, function(nlist) {
            self.selectedNames.push(nlist);
            return null;
        });
        console.log('selectedNames', self.selectedNames);
        self.moveItems('#sbOne', '#sbTwo');
    },
    moveItems: function(origin, dest) {
        $(origin).find(':selected').appendTo(dest);
    }
});
