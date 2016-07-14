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
        fetchEmployeeName:{
          set: function(value){
            this.fetchEmployeeName();
            return value;
          }
        }
    },
    pushName: [],
    migratedName: [],
    From: [],
    To: [],
    NameList: [],
    isOpened: true,
    fetchEmployeeName: function(){
      var self = this;
      return Employee
                  .findAll()
                  .then(function(data) {
                    // console.log(data);
                      self.attr('From', data);
                      console.log('from- ',self.attr('From'));
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
                nameList: self.attr('NameList')
            }
        console.info('Newly Created Employee Obj - ', employeeObj);

    },
    moveLeft: function(el) {
        var self = this,
            list = self.attr('NameList'),
            mlist = self.attr('migratedName');
        console.log('Moving out  Names - ', self.attr('migratedName').attr());
        _.find(list, function(nlist) {
            for (var i = 0; i <= mlist.length; i++) {
                if (nlist === mlist[i]) {
                    list.pop(mlist[i]);
                }
            }
            return null;
        });
        console.log('updated list', list);
        self.moveItems('#sbTwo', '#sbOne');
    },
    moveRight: function() {
        var self = this;
        console.log('Moving  Names - ', this.attr('pushName').attr());
        self.attr('NameList', self.attr('pushName').attr());
        self.moveItems('#sbOne', '#sbTwo');
    },
    moveItems: function(origin, dest) {
        $(origin).find(':selected').appendTo(dest);
    }
});
