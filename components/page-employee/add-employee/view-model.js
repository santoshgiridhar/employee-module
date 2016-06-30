import can from 'can';
import 'can/map/define/';
import DataModel from 'models/employee/';
import _ from 'lodash';

export default can.Map.extend({
    define: {
        data: {
            value: []
        },
        employeeSlug : {
          get: function(){
            console.log(can.route.attr());
            console.log(this.attr('employeeSlug'));
          }
        }
    }
});
