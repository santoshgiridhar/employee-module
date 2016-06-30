import can from 'can/';
import 'can/util/fixture/';
import 'can/map/define/';
import $ from 'jquery';

import './fixture';

var Model = can.Model.extend({
	parseModels:function(data){
		return data.Employees || [];
	},
  findAll: function(params){
    return $.ajax({
      url: '/ListAll',
      type: 'GET',
      data: params,
      datatype:'json',
      contentType: 'application/json; charset=utf-8'
    });
  }
	// ,
  // findOne: function(params){
  //   return $.ajax({
  //     url: '/get/E3',
  //     type: 'GET',
  //     datatype:'json',
  //     contentType: 'application/json; charset=utf-8'
  //   });
  // }

}, {});

export default Model;
