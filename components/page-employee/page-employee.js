import can from 'can';
import Component from 'can/component/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';
import 'components/page-employee/add-employee/';

can.Component.extend({
	tag: 'page-employee',
	viewModel: VM,
	template: template,
	events: {
		'inserted': function() {
			console.log('loaded employee list screen');
			this.viewModel.fetchData();
		}
	}
});
