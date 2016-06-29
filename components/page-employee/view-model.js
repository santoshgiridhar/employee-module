import can from 'can';
import 'can/map/define/';
import DataModel from 'models/employee/';
import _ from 'lodash';

export default can.Map.extend({
    define: {
        data: {
            value: []
        }
    },
    checkedRows: [],
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
            console.log("data--- ", data);
            self.attr('data', data);
        }, function(xhr) {
            console.log(xhr)
        });
    }
});
