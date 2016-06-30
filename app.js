import can from 'can';
import $ from 'jquery';
import 'can/map/define/';
import Employee from 'workspace-employee/models/employee/'

var ApplicationViewModel = can.Map.extend({
    define: {
        '*': {
            serialize: false
        },
        page: {
            type: 'string',
            serialize: true
        },
        employeeSlug: {
            type: 'string',
            serialize: true,
            remove(){
                this.removeAttr('employee');
            }
        },
        employee: {
            value: new Employee(),
            get(lastSetVal, setVal){
                let slug = this.attr('employeeSlug');
                if (slug) {
                    Employee.findAll({employeeCode: slug}).then(response => {
                        if (response.Employees.length) {
                            setVal(response.Employees[0]);
                        }
                    });
                }
            }
        }
    }
});

export default ApplicationViewModel;
