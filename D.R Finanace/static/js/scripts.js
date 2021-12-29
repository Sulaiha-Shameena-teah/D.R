
const base_url = "https://protected-garden-36193.herokuapp.com/";

const daily_work_details = {
	'page-value':'daily-work',
	'data-endpoint':"daily-work/all-customer-details",
	'search-endpoint':"daily-work/single-custromer-details",
	'store-daily-work-endpoint':"daily-work/update", // update details button
	'store-daily-report-endpoint':"data-store", // update details button
	'store-overall-report-endpoint':"data-store", //update details button
	'store-entry-endpoint':"daily-work/report-update", // saa button
	'store-approval-endpoint':"daily-work/payment-approval", // saa button
	'export-endpoint':"daily-work-export",
	'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'pending','bal':'balance','status':'status','date':'collection_date','rec_amt':'received_amt','agent_id':'agent_id'}	
};


const daily_report_details = {
		'page-value':'daily-report',
		'data-endpoint':"data-retrieve",
		'search-endpoint':"data-search",
		'export-endpoint':"daily-work-export",
		'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'pending','bal':'balance','status':'status','date':'collection_date','rec_amt':'received_amt','agent_id':'agent_id','percentage':'percentage'}		
};

const manage_customer_details = {
	'page-value':'manage-customer',
	'data-endpoint':"data-retrieve",
	'search-endpoint':"data-search",
	'store-endpoint':"data-store",
	'export-endpoint':"customer-export",
	'data-accessors':{'id':'customer_id','name':'customer_name','agent' : 'agent','phone': 'phone_number', 'relation': 'relation','phone2': 'phone_number_2', 'relation2': 'relation2','phone3': 'phone_number_3', 'relation3': 'relation3', 'address': 'address', 'aadharNo': 'aadhar_number', 'panNo': 'pan_number', 'workAddress': 'work_address', 'grossPay': 'gross_pay', 'netPay': 'net_pay', 'monthlyIncome' : 'monthly_income', 'otherIncome': 'other_income', 'history': 'history', 'loanAmount': 'loan_amount', 'rateOfInterest': 'rate_of_interest', 'emi': 'emi', 'property': 'property', 'collectionDate': 'collection_date', 'emiAmount': 'emi_amount'}	
};
const create_customer_details = {
	'page-value':'create-customer',
	'store-endpoint':"data-store",
	'data-accessors':{'id':'customer_id','name':'customer_name','phone': 'phone_number', 'relation': 'relation', 'address': 'address', 'aadharNo': 'aadhar_number', 'panNo': 'pan_number', 'workAddress': 'work_address', 'grossPay': 'gross_pay', 'netPay': 'net_pay', 'monthlyIncome' : 'monthly_income', 'otherIncome': 'other_income', 'history': 'history', 'loanAmount': 'loan_amount', 'rateOfInterest': 'rate_of_interest', 'emi': 'emi', 'property': 'property'}	
};

const create_agent_details = {
	'page-value':'create-agent',
	'data-endpoint':"data-retrieve",
	'store-endpoint':"data-store",
	'delete-agent': "data-store",
	'freeze-agent': "data-store",
	'data-accessors':{'agentId': 'agent_id', 'agentIdByCompany': 'agent_id_by_company' ,'agentName': 'agent_name', 'mobileNo': 'mobile_number'}	
};

const login_details = {
	'page-value':'login-form',
	'data-endpoint':"data-retrieve",
	'store-endpoint':"data-store",
	'delete-agent': "data-store",
	'freeze-agent': "data-store",
	'data-accessors':{ 'userName': 'user_name', 'password': 'password'}	
}

const rows_per_page =10;
const agent_id =100;

const data_updated_message = "Data Updated at the Backend";

$(document).ready(function(){
        console.log("ready scripts");	
		// load the table intially based on page type
		if($("#page_type").val() == daily_work_details['page-value']){
			renderDailyWorkTable(1);
		}else if($("#page_type").val() == daily_report_details['page-value']){
			renderDailyReportTable(1);
		}else if($("#page_type").val() == manage_customer_details['page-value']){
			renderCustomerTable(1);
		}else if($("#page_type").val() == create_agent_details['page-value']){
			renderAgentTable(1);
		}
		// load the table intially based on page type
	
		$(document).on('keyup','.modal-body #receamt',function(e){
			var row = $(".modal-content").attr('data-row-id');
			var old_recv_amount = parseInt($("."+row).find('.current_bal').html());
			var new_recv_amount = parseInt($(this).val());
			//console.log('old_recv_amount');
			//console.log(old_recv_amount);
			//console.log('new_recv_amount');
			//console.log(new_recv_amount);
			if(new_recv_amount >= old_recv_amount){
				$("#editstartDate").attr('disabled',true);
			}else{
				$("#editstartDate").attr('disabled',false);
			}

			/*if(new_recv_amount>old_recv_amount){
				alert("Enter lesser amount than Balance amount");
			}else if(new_recv_amount <= 0){
				alert("Enter a valid amount");
			}*/
		});

	$(document).on('click','.modal-content [type="submit"]',function(e){
		e.preventDefault();
		
		if($("#page_type").val() == daily_work_details['page-value']){
			var new_status = $(".modal-body #newType").val();
			var row = $(".modal-content").attr('data-row-id');

			var new_date = $(".modal-body #editstartDate").val();
			var new_recv_amount = parseInt($(".modal-body #receamt").val());
			var old_recv_amount = parseInt($("."+row).find('.current_bal').html());
			//console.log('old_recv_amount');
			//console.log(old_recv_amount);
			//console.log('new_recv_amount');
			//console.log(new_recv_amount);
			if(new_recv_amount > old_recv_amount){
				alert("Enter lesser amount than Balance amount");
				return false;
			}else if(new_recv_amount <= 0){
				alert("Enter a valid amount");
				return false;
			}

			var old_amount = parseInt($("."+row).find('.current_bal').html());
			var new_balance = old_amount - new_recv_amount;

			//console.log("old_amount");
			//console.log(old_amount);
			//console.log("new_recv_amount");
			//console.log(new_recv_amount);
			//console.log("new_balance");
			//console.log(new_balance);
			var new_date = $("#editstartDate").val();
			if(checkValid(new_date)){
				new_date = changeDateFormat(new_date);
			}
			//console.log("new date");
			//console.log(new_date);
			if(!checkValid(new_recv_amount)){
				new_balance = $("."+row).find('.current_bal').text();
			}
			var json_request = {customer_id:$("."+row).find('.customer_id').text(),customer_name:$("."+row).find('.customer_name').text(),emi:$("."+row).find('.emi').text(),previous_balance:$("."+row).find('.peding_amt').text(),current_balance:new_balance,status:new_status,date:new_date,received_amout:new_recv_amount,agent_id:agent_id,collection_date:$("."+row).find('.collection_date').val()};
			//console.log(row);
			console.log(new_status);
			if(new_status != 'Recieved'){
				$.ajax({
					method: "POST",
					data:JSON.stringify(json_request),
					url: base_url+daily_work_details['store-daily-work-endpoint']}).done(function( data) {
						//alert(data_updated_message);
						//console.log(data.length);
				});
				$.ajax({
					method: "POST",
					data:JSON.stringify(json_request),
					url: base_url+daily_work_details['store-daily-report-endpoint']}).done(function( data) {
						//alert(data_updated_message);
						//console.log(data.length);
				});
				$.ajax({
					method: "POST",
					data:JSON.stringify(json_request),
					url: base_url+daily_work_details['store-overall-report-endpoint']}).done(function( data) {
						alert(data_updated_message);
						//console.log(data.length);
				});
			}
			  // updating the content in the table start.
			  $("."+row).find('.status').html(new_status);
				$("."+row).find('.status').html(new_status);
				if(checkValid(new_recv_amount)){
					$("."+row).find('.received_amt').html(new_recv_amount);
					$("."+row).find('.current_bal').html(new_balance);
				}
				//console.log(new_status);
				if(new_status != 'Received' && checkValid(new_date)){
					console.log("new_status");
					$("."+row).find('.date').html(new_date);
				}
			  // updating the content in the table end.
			  $('.modal-open .close').click();
		}
	});

	$(document).on('click','.saveButton',function(e){
		var row = $(".modal-content").attr('data-row-id');
		var agent_id = $("."+row).find('.agent_id').val();
		var status  = $("."+row).find(".status").text();
		console.log(status);
		var post_endpoint = daily_work_details['store-entry-endpoint'];
		if(status == 'Received'){
			post_endpoint = daily_work_details['store-approval-endpoint'];
		}
		var request_json = {
			customer_id:$("."+row).find('.customer_id').text(),
			customer_name:$("."+row).find('.customer_name').text(),
			emi:$("."+row).find('.emi').text(),
			previous_balance:$("."+row).find('.peding_amt').text(),
			current_balance:$("."+row).find('.current_bal').text(),
			status:status,
			date:$("."+row).find('.date').text(),
			received_amout:$("."+row).find('.received_amt').text(),
			agent_id:agent_id
		}

		$.ajax({
		method: "POST",
		data:JSON.stringify(request_json),
		url: base_url+post_endpoint
		}).done(function( data) {
			alert(data_updated_message);
		});

		
	});

	$(document).on('click','.search_bar button',function(e){
		e.preventDefault();
		if($("#page_type").val() == daily_work_details['page-value']){
				renderDailyWorkTable(1);
		}else if($("#page_type").val() ==  daily_report_details['page-value']){
				renderDailyReportTable(1);
		}else if($("#page_type").val() ==  create_agent_details['page-value']){
			renderAgentTable(1);
		}
	});

	$(document).on('click','.export_button',function(e){
		e.preventDefault();

		var export_endpoint ="";
		if($("#page_type").val() == daily_work_details['page-value']){			
			export_endpoint = base_url+daily_work_details['export-endpoint'];
		}else if($("#page_type").val() ==  daily_report_details['page-value']){
			export_endpoint = base_url+daily_report_details['export-endpoint'];
		}
		$.ajax({
			method: "GET",
			url: export_endpoint}).done(function( data) {
				alert(data_updated_message);
				//console.log(data.length);
			});
	});
	$(document).on('click','.editButton',function(e){
		e.preventDefault();
		if($("#page_type").val() == "daily-work"){
			var row_id = $(this).parent().parent().attr('class');
			$(".modal-content").attr('data-row-id',row_id);
		}
	});
	$(document).on('click','.add-customer',function(e){
		if(!checkValid($('#Userid').val()) && !checkValid($('#newUsername').val()) && !checkValid($('#newMobile').val()) 
		&& !checkValid($('#relation1').val()) && !checkValid($('#address').val()) && !checkValid($('#aadharno').val()) && !checkValid($('#panno').val())&& !checkValid($('#workaddress').val()) && !checkValid($('#grosspay').val()) &&  !checkValid($('#netpay').val()) && !checkValid($('#moninc').val()) && !checkValid($('#otherinc').val()) && !checkValid($('#history').val()) && !checkValid($('#loanamt').val()) && !checkValid($('#rateofint').val()) && !checkValid($('#newType').val()) && !checkValid($('#property').val())){
			console.log('enter req fields')
			return false;
		}
		console.log('.add-customer');
		var post_endpoint = create_customer_details['store-endpoint'];
		var request_json = {
			// customer_id: $('#Userid').val() ? $('#Userid').val() : 0,
			customer_name: $('#newUsername').val() ? $('#newUsername').val() : 0,
			phone_number: $('#newMobile').val() ? $('#newMobile').val() : 0, 
			relation: $('#relation1').val() ? $('#relation1').val() : 0,
			phone_number_2: $('#newMobile2').val() ? $('#newMobile2').val() : 0, 
			relation2: $('#relation2').val() ? $('#relation2').val() : 0,
			phone_number_3: $('#newMobile3').val() ? $('#newMobile3').val() : 0, 
			relation3: $('#relation3').val() ? $('#relation3').val() : 0,
			address: $('#address').val() ? $('#address').val() : 0,
			aadhar_number: $('#aadharno').val() ? $('#aadharno').val() : 0,
			pan_number: $('#panno').val() ? $('#panno').val() : 0,
			work_address: $('#workaddress').val() ? $('#workaddress').val() : 0,
			gross_pay: $('#grosspay').val() ? $('#grosspay').val() : 0,
			net_pay: $('#netpay').val() ? $('#netpay').val() : 0,
			monthly_income: $('#moninc').val() ? $('#moninc').val() : 0,
			other_income: $('#otherinc').val() ? $('#otherinc').val() : 0,
			history: $('#history').val() ? $('#history').val() : 0,
			loan_amount: $('#loanamt').val() ? $('#loanamt').val() : 0,
			rate_of_interest: $('#rateofint').val() ? $('#rateofint').val() : 0,
			emi: $('#newType').val() ? $('#newType').val() : 0,
			property: $('#property').val() ? $('#property').val() : 0,
			emiAmount: $('#emiAmount').val() ? $('#emiAmount').val() : 0,
			collectionDate: $('#collectionDate').val() ? $('#collectionDate').val() : 0,
			
		}
		console.log('request_json', request_json);
		$.ajax({
		headers: { 
			'Accept': 'application/json',
			'Content-Type': 'application/json' 
			},		
		method: "POST",
		data:JSON.stringify(request_json),
		url: base_url+post_endpoint
		}).done(function( data) {
			alert(data_updated_message);
		});
	});
	$(document).on('click','#newuser',function(e){
		var post_endpoint = create_agent_details['store-endpoint'];
		var request_json = {
			agent_id: ('#Userid').text() ? ('#Userid').text() : 0,
			agent_name: ('#newUsername').text() ? ('#newUsername').text() : 0,
			mobile_number: ('#newMobile').text() ? ('#newMobile').text() : 0
		}
		$.ajax({
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
				},		
			method: "POST",
			data:JSON.stringify(request_json),
			url: base_url+post_endpoint
			}).done(function( data) {
				alert(data_updated_message);
			});
	});
	$(document).on('click','.create-agent-btn',function(e){
		if(!checkValid($('#Userid').val()) && !checkValid($('#newUsername').val()) && !checkValid($('#newMobile').val())){
			console.log('enter req fields')
			return false;
		}
		console.log('agent table')
		var post_endpoint = create_agent_details['store-endpoint'];
		var request_json = {
			agent_id: $('#Userid').val() ? $('#Userid').val() : 0,
			agent_name: $('#newUsername').val() ? $('#newUsername').val() : 0,
			mobile_number: $('#newMobile').val() ? $('#newMobile').val() : 0
		}
		$.ajax({
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
				},		
			method: "POST",
			data:JSON.stringify(request_json),
			url: base_url+post_endpoint
			}).done(function( data) {
				alert(data_updated_message);
			});
	});

	$(document).on('click','#loginFormSumbit',function(e){
		e.preventDefault();
		console.log($('#username').val(), $('#password').val(), !checkValid($('#username').val()) , !checkValid($('#password').val()))
		if(!checkValid($('#username').val()) && !checkValid($('#password').val())){
			console.log('enter req fields')
			return false;
		}
		console.log('working');
		var post_endpoint = login_details['store-endpoint'];
		var request_json = {
			username: $('#username').val() ? $('#username').val() : 0,
			password: $('#password').val() ? $('#password').val() : 0
		}
		$.ajax({
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
				},		
			method: "POST",
			data:JSON.stringify(request_json),
			url: base_url+post_endpoint
			}).done(function( data) {
				alert(data_updated_message);
			});
	});
});

function renderDailyWorkTable(page_no){
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = getOffsetValue(page_no,rows_per_page);
	
	var search_val = $("[name='search']").val();

	var endpoint = base_url + daily_work_details['data-endpoint']+"?limit="+rows_per_page+"&offset="+offset+"&agent_id="+agent_id;
	// Search endpoint changes displays only, when the search field is not selected. 
	if(checkValid(search_val)){
		endpoint = base_url+daily_work_details['search-endpoint']+"?&cust_id="+search_val+"&agent_id="+agent_id;
	}
	$.ajax({
	method: "GET",
	url: endpoint
	}).done(function( data) {
		////data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		//console.log("total_count");
		//console.log(total_count);

		if(total_count > 0 || checkValid(search_val)){
			var dataList = data['dataList'];
			console.log("dataList");
			console.log(dataList);
			if(data['dataList']){
				$.each(dataList, function(index,val){
					// calculation =  Previous + Current - Received = Balance.
					var rec_amt = val[daily_work_details['data-accessors']['rec_amt']]!=undefined ? val[daily_work_details['data-accessors']['rec_amt']] : 0;
					var previous = val[daily_work_details['data-accessors']['pending']]!=undefined ? val[daily_work_details['data-accessors']['pending']] : 0;
					var current = val[daily_work_details['data-accessors']['emi']]!=undefined ? val[daily_work_details['data-accessors']['emi']] : 0;
					var bal = (parseInt(previous) + parseInt(current)) - parseInt(rec_amt);
					if(bal<0){
						bal = 0;
					}

					var append_table = '<tr class="row_'+index+'">'+
					'<td>'+(index+1)+'</td>'+
					'<td class="customer_id">'+(val[daily_work_details['data-accessors']['id']]!=undefined ? val[daily_work_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(val[daily_work_details['data-accessors']['name']]!=undefined ? val[daily_work_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="emi">'+current+'</td>'+
					'<td class="peding_amt">'+previous+'</td>'+
					'<td class="received_amt">'+rec_amt+'</td>'+
					'<td class="current_bal">'+bal+'</td>'+
					'<td class="status">'+(val[daily_work_details['data-accessors']['status']]!=undefined ? val[daily_work_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(val[daily_work_details['data-accessors']['date']]!=undefined ? val[daily_work_details['data-accessors']['date']] : "")+'<input type="hidden" class="collection_date" value='+val[daily_work_details['data-accessors']['date']]+'></td>'+
					'<td><button type="button"  class="fa fa-edit editButton" style="font-size:36px" data-toggle="modal" data-target="#editModal"><span class="material-icons"></span></button></td>'+
					'<td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+val[daily_work_details['data-accessors']['agent_id']]+'"/></td>'+
					'</tr>';
					$("#electric_table").append(append_table);
				});
			}else{
				if(data[daily_work_details['data-accessors']['id']]){

					// calculation =  Previous + Current - Received = Balance.
					var rec_amt = data[daily_work_details['data-accessors']['rec_amt']]!=undefined ? data[daily_work_details['data-accessors']['rec_amt']] : 0;
					var previous = data[daily_work_details['data-accessors']['pending']]!=undefined ? data[daily_work_details['data-accessors']['pending']] : 0;
					var current = data[daily_work_details['data-accessors']['emi']]!=undefined ? data[daily_work_details['data-accessors']['emi']] : 0;
					var bal = (parseInt(previous) + parseInt(current)) - parseInt(rec_amt);
					if(bal<0){
						bal = 0;
					}

					var append_table = '<tr class="row_0">'+
					'<td>1</td>'+
					'<td class="customer_id">'+(data[daily_work_details['data-accessors']['id']]!=undefined ? data[daily_work_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(data[daily_work_details['data-accessors']['name']]!=undefined ? data[daily_work_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="emi">'+current+'</td>'+
					'<td class="peding_amt">'+previous+'</td>'+
					'<td class="received_amt">'+rec_amt+'</td>'+
					'<td class="current_bal">'+bal+'</td>'+
					'<td class="status">'+(data[daily_work_details['data-accessors']['status']]!=undefined ? data[daily_work_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(data[daily_work_details['data-accessors']['date']]!=undefined ? data[daily_work_details['data-accessors']['date']] : "")+'</td>'+
					'<td><button type="button"  class="fa fa-edit editButton" style="font-size:36px" data-toggle="modal" data-target="#editModal"><span class="material-icons"></span></button></td>'+
					'<td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+data[daily_work_details['data-accessors']['agent_id']]+'"/></td>'+
					'</tr>';
					$("#electric_table").append(append_table);
				}else{
					var append_table = '<tr><td colspan="11">No Data Found</td></tr>';
					$("#electric_table").append(append_table);
				}
			}
			
			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}
		}else{
			var append_table = '<tr><td colspan="11">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function renderDailyReportTable(page_no){
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = getOffsetValue(page_no,rows_per_page);

	var search_val = $("[name='search']").val();

	// Search endpoint changes displays only, when the search field is not selected. 
	var endpoint = base_url+daily_report_details['data-endpoint']+"?limit="+rows_per_page+"&offset="+offset+"&agent_id="+agent_id;
	if(checkValid(search_val)){
		endpoint = base_url+daily_report_details['search-endpoint']+"?&customer_id="+search_val+"&agent_id="+agent_id;
	}

	$.ajax({
	method: "GET",
	url: endpoint
	}).done(function( data) {
		//data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		//console.log("total_count");
		//console.log(total_count);

		if(total_count > 0 || checkValid(search_val)){
			var dataList = data['dataList'];
			console.log("dataList");
			console.log(dataList);
			if(data['dataList']){
				$.each(data['dataList'], function(index,val){
					var append_table = '<tr>'+
					'<td>'+(index+1)+'</td>'+
					'<td class="customer_id">'+(val[daily_report_details['data-accessors']['id']]!=undefined ? val[daily_report_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(val[daily_report_details['data-accessors']['name']]!=undefined ? val[daily_report_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="peding_amt">'+(val[daily_report_details['data-accessors']['pending']]!=undefined ? val[daily_report_details['data-accessors']['pending']] : "")+'</td>'+
					'<td class="received_amt">'+(val[daily_report_details['data-accessors']['rec_amt']]!=undefined ? val[daily_report_details['data-accessors']['rec_amt']] : "")+'</td>'+
					'<td class="current_bal">'+(val[daily_report_details['data-accessors']['bal']]!=undefined ? val[daily_report_details['data-accessors']['bal']] : "")+'</td>'+
					'<td class="status">'+(val[daily_report_details['data-accessors']['status']]!=undefined ? val[daily_report_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(val[daily_report_details['data-accessors']['date']]!=undefined ? val[daily_report_details['data-accessors']['date']] : "")+'</td>'+
					'<td>'+(val[daily_report_details['data-accessors']['percentage']]!=undefined ? val[daily_report_details['data-accessors']['percentage']] : "")+'</td>'+
					'</tr>';
					$("#electric_table").append(append_table);
				});
			}else{
				var append_table = '<tr class="row_0">'+
					'<td>1</td>'+
					'<td class="customer_id">'+(data[daily_report_details['data-accessors']['id']]!=undefined ? data[daily_report_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(data[daily_report_details['data-accessors']['name']]!=undefined ? data[daily_report_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="peding_amt">'+(data[daily_report_details['data-accessors']['pending']]!=undefined ? data[daily_report_details['data-accessors']['pending']] : "")+'</td>'+
					'<td class="received_amt">'+(data[daily_report_details['data-accessors']['rec_amt']]!=undefined ? data[daily_report_details['data-accessors']['rec_amt']] : "")+'</td>'+
					'<td class="current_bal">'+(data[daily_report_details['data-accessors']['bal']]!=undefined ? data[daily_report_details['data-accessors']['bal']] : "")+'</td>'+
					'<td class="status">'+(data[daily_report_details['data-accessors']['status']]!=undefined ? data[daily_report_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(data[daily_report_details['data-accessors']['date']]!=undefined ? data[daily_report_details['data-accessors']['date']] : "")+'</td>'+
					'<td>'+(data[daily_report_details['data-accessors']['percentage']]!=undefined ? data[daily_report_details['data-accessors']['percentage']] : "")+'</td>'+
					'</tr>';
					$("#electric_table").append(append_table);
			}
			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}

		}else{
			var append_table = '<tr><td colspan="10">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function renderCustomerTable(page_no){
	console.log("customer");
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();
	var offset = getOffsetValue(page_no,rows_per_page);

	var search_val = $("[name='search']").val();

	// Search endpoint changes displays only, when the search field is not selected. 
	var endpoint = base_url+manage_customer_details['data-endpoint']+"?limit="+rows_per_page+"&offset="+offset;
	if(checkValid(search_val)){
		endpoint = base_url+manage_customer_details['search-endpoint']+"?&cust_id="+search_val;
	}

	$.ajax({
	method: "GET",
	url: endpoint
	}).done(function( data) {
		//data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		//console.log("total_count");
		//console.log(total_count);

		if(total_count > 0){
			var dataList = data['dataList'];
			console.log("dataList");
			console.log(dataList);
			if(data['dataList']){	
				$.each(data['dataList'], function(index,val){
							
					var append_table = '<tr class="row_'+index+'"><td>'+(index+1)+'</td>'+
					'<td class="id">'+(val[manage_customer_details['data-accessors']['id']]!=undefined ? val[manage_customer_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="name">'+(val[manage_customer_details['data-accessors']['name']]!=undefined ? val[manage_customer_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="agent">'+(val[manage_customer_details['data-accessors']['agent']]!=undefined ? val[manage_customer_details['data-accessors']['agent']] : "")+'</td>'+
					'<td class="phone">'+(val[manage_customer_details['data-accessors']['phone']]!=undefined ? val[manage_customer_details['data-accessors']['phone']] : "")+'</td>'+
					'<td class="relation">'+(val[manage_customer_details['data-accessors']['relation']]!=undefined ? val[manage_customer_details['data-accessors']['relation']] : "")+'</td>'+
					'<td class="phone2">'+(val[manage_customer_details['data-accessors']['phone2']]!=undefined ? val[manage_customer_details['data-accessors']['phone2']] : "")+'</td>'+
					'<td class="relation2">'+(val[manage_customer_details['data-accessors']['relation2']]!=undefined ? val[manage_customer_details['data-accessors']['relation2']] : "")+'</td>'+
					'<td class="phone3">'+(val[manage_customer_details['data-accessors']['phone3']]!=undefined ? val[manage_customer_details['data-accessors']['phone3']] : "")+'</td>'+
					'<td class="relation3">'+(val[manage_customer_details['data-accessors']['relation3']]!=undefined ? val[manage_customer_details['data-accessors']['relation3']] : "")+'</td>'+
					'<td class="address">'+(val[manage_customer_details['data-accessors']['address']]!=undefined ? val[manage_customer_details['data-accessors']['address']] : "")+'</td>'+
					'<td class="aadharNo">'+(val[manage_customer_details['data-accessors']['aadharNo']]!=undefined ? val[manage_customer_details['data-accessors']['aadharNo']] : "")+'</td>'+
					'<td class="panNo">'+(val[manage_customer_details['data-accessors']['panNo']]!=undefined ? val[manage_customer_details['data-accessors']['panNo']] : "")+'</td>'+
					'<td class="workAddress">'+(val[manage_customer_details['data-accessors']['workAddress']]!=undefined ? val[manage_customer_details['data-accessors']['workAddress']] : "")+'</td>'+
					'<td class="grossPay">'+(val[manage_customer_details['data-accessors']['grossPay']]!=undefined ? val[manage_customer_details['data-accessors']['grossPay']] : "")+'</td>'+
					'<td class="netPay">'+(val[manage_customer_details['data-accessors']['netPay']]!=undefined ? val[manage_customer_details['data-accessors']['netPay']] : "")+'</td>'+
					'<td class="monthlyIncome">'+(val[manage_customer_details['data-accessors']['monthlyIncome']]!=undefined ? val[manage_customer_details['data-accessors']['monthlyIncome']] : "")+'</td>'+
					'<td class="otherIncome">'+(val[manage_customer_details['data-accessors']['otherIncome']]!=undefined ? val[manage_customer_details['data-accessors']['otherIncome']] : "")+'</td>'+
					'<td class="history">'+(val[manage_customer_details['data-accessors']['history']]!=undefined ? val[manage_customer_details['data-accessors']['history']] : "")+'</td>'+
					'<td class="loanAmount">'+(val[manage_customer_details['data-accessors']['loanAmount']]!=undefined ? val[manage_customer_details['data-accessors']['loanAmount']] : "")+'</td>'+
					'<td class="rateOfInterest">'+(val[manage_customer_details['data-accessors']['rateOfInterest']]!=undefined ? val[manage_customer_details['data-accessors']['rateOfInterest']] : "")+'</td>'+
					'<td class="emi">'+(val[manage_customer_details['data-accessors']['emi']]!=undefined ? val[manage_customer_details['data-accessors']['emi']] : "")+'</td>'+
					'<td class="property">'+(val[manage_customer_details['data-accessors']['property']]!=undefined ? val[manage_customer_details['data-accessors']['property']] : "")+'</td>'+
					'<td class="collectionDate">'+(val[manage_customer_details['data-accessors']['collectionDate']]!=undefined ? val[manage_customer_details['data-accessors']['collectionDate']] : "")+'</td>'+
					'<td class="emiAmount">'+(val[manage_customer_details['data-accessors']['emiAmount']]!=undefined ? val[manage_customer_details['data-accessors']['emiAmount']] : "")+'</td>'+'</tr>';
					$("#electric_table").append(append_table);
				});
			}else{
				var append_table = '<tr class="row_0">'+
					'<td>1</td>'+
					'<td class="customer_id">'+(data[manage_customer_details['data-accessors']['id']]!=undefined ? data[manage_customer_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(data[manage_customer_details['data-accessors']['name']]!=undefined ? data[manage_customer_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="peding_amt">'+(data[manage_customer_details['data-accessors']['pending']]!=undefined ? data[manage_customer_details['data-accessors']['pending']] : "")+'</td>'+
					'<td class="received_amt">'+(data[manage_customer_details['data-accessors']['rec_amt']]!=undefined ? data[manage_customer_details['data-accessors']['rec_amt']] : "")+'</td>'+
					'<td class="current_bal">'+(data[manage_customer_details['data-accessors']['bal']]!=undefined ? data[manage_customer_details['data-accessors']['bal']] : "")+'</td>'+
					'<td class="status">'+(data[manage_customer_details['data-accessors']['status']]!=undefined ? data[manage_customer_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(data[manage_customer_details['data-accessors']['date']]!=undefined ? data[manage_customer_details['data-accessors']['date']] : "")+'</td>'+
					'<td>'+(data[manage_customer_details['data-accessors']['percentage']]!=undefined ? data[manage_customer_details['data-accessors']['percentage']] : "")+'</td>'+
					'</tr>';
					$("#electric_table").append(append_table);
			}


			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}

		}else{
			var append_table = '<tr><td colspan="10">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function renderInvestorsTable(page_no){
	console.log("investors");
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = page_no*rows_per_page;
	var limit= (page_no*rows_per_page) - rows_per_page;
	var search_val = $("[name='search']").val();
	$.ajax({
	method: "GET",
	url: base_url+investor_report_endpoint+"?limit="+limit+"&offset="+offset+"&query="+search_val+"&agent_id="+agent_id
	}).done(function( data) {
		//data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		//console.log("total_count");
		//console.log(total_count);

		if(total_count > 0){
			$.each(data['dailyWorksList'], function(index,val){
						
				var append_table = '<tr class="row_'+index+'"><td>'+(index+1)+'</td><td class="investor_id">'+(val[investor_report_accessor['investor_id']]!=undefined ? val[investor_report_accessor['investor_id']] : "")+'</td><td>'+(val[investor_report_accessor['name']]!=undefined ? val[investor_report_accessor['name']] : "")+'</td><td class="peding_amt">'+(val[investor_report_accessor['prev_bal']]!=undefined ? val[investor_report_accessor['prev_bal']] : "")+'</td><td class="loan_amount">'+(val[investor_report_accessor['loan_amount']]!=undefined ? val[investor_report_accessor['loan_amount']] : "")+'</td><td class="roi">'+(val[investor_report_accessor['roi']]!=undefined ? val[investor_report_accessor['roi']] : "")+'</td><td class="date">'+(val[investor_report_accessor['date']]!=undefined ? val[investor_report_accessor['date']] : "")+'</td><td class="balance">'+(val[investor_report_accessor['balance']]!=undefined ? val[investor_report_accessor['balance']] : "")+'</td><td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+val[investor_report_accessor['agent_id']]+'"/></td></tr>';
				$("#electric_table").append(append_table);
			});
			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}

		}else{
			var append_table = '<tr><td colspan="10">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function renderAgentTable(page_no){
	console.log("agent");
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = page_no*rows_per_page;
	var limit= (page_no*rows_per_page) - rows_per_page;

	var search_val = $("[name='search']").val();
	$.ajax({
	method: "GET",
	url: base_url+ create_agent_details['data-endpoint'] +"?limit="+limit+"&offset="+offset+"&query="+search_val
	}).done(function( data) {
		data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		console.log("total_count");
		console.log(total_count);

		if(total_count > 0){
			console.log('abcd')
			$.each(data['dataList'], function(index,val){
				var append_table = '<tr class="row_'+index+'"><td>'+(index+1)+'</td><td class="agent_id">'+(val['agent_id']!=undefined ? val['agent_id'] : "")+'</td><td class="agent_id_by_company">'+(val['agent_id']!=undefined ? val['agent_id_by_company'] : "")+'</td><td>'+(val['agent_name']!=undefined ? val['agent_name'] : "")+'</td><td class="phone">'+(val['ph_no']!=undefined ? val['ph_no'] : "")+'</td>' + "<td><button class='btn btn-info' freezeId="+create_agent_details['agentId']+" onclick='freezeAgent(this.freezeId)'>Freeze</button></td>" + "<td><button class='btn btn-danger' deleteId="+create_agent_details['agentId']+" onclick='deleteAgent(this.deleteId)'>Delete</button></td>" ;

				// var append_table = '<tr class="row_'+index+'"><td>'+(index+1)+'</td><td class="agent_id">'+(val[create_agent_details['agentId']]!=undefined ? val[create_agent_details['agentId']] : "")+'</td><td class="agent_id_by_company">'+(val[create_agent_details['agentIDByCompany']]!=undefined ? val[create_agent_details['agentIDByCompany']] : "")+'</td><td class="agent_name">'+(val[create_agent_details['agentName']]!=undefined ? val[create_agent_details['agentName']] : "")+'</td><td class="phone">'+(val[create_agent_details['mobileNo']]!=undefined ? val[create_agent_details['mobileNo']] : "")+'</td>' + "<td><button class='btn btn-info' freezeId="+create_agent_details['agentId']+" onclick='freezeAgent(this.freezeId)'>Freeze</button></td>" + "<td><button class='btn btn-danger' deleteId="+create_agent_details['agentId']+" onclick='deleteAgent(this.deleteId)'>Delete</button></td>" ;
				$("#electric_table").append(append_table);
			});
			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}

		}else{
			var append_table = '<tr><td colspan="10">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function freezeAgent(freezeId) {
	console.log("freeze",freezeId);
	const freezeURL = base_url + create_agent_details['freeze-agent'] + "/"  + freezeId
	$.ajax({
		method: "POST",
		url: freezeURL
		}).done(function( data) {
			alert(data_updated_message);
		});
	
}
function deleteAgent(deleteId) {
	console.log("delete",deleteId);
	const deleteURL = base_url + create_agent_details['delete-agent'] + "/"  + deleteId
	$.ajax({
		method: "DELETE",
		url: deleteURL
		}).done(function( data) {
			alert(data_updated_message);
		});
}

function renderAdminWorkTable(page_no){
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = page_no*rows_per_page;
	var limit= (page_no*rows_per_page) - rows_per_page;
	
	var search_val = $("[name='search']").val();
	$.ajax({
	method: "GET",
	url: base_url+admin_work_endpoint+"?limit="+limit+"&offset="+offset+"&query="+search_val+"&agent_id="+agent_id
	}).done(function( data) {
		//data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		//console.log("total_count");
		//console.log(total_count);

		if(total_count > 0){
			$.each(data['dailyReportsList'], function(index,val){
				
				
				var append_table = '<tr><td>'+(index+1)+'</td><td>'+(val[admin_work_accessor['cust_id']]!=undefined ? val[admin_work_accessor['cust_id']] : "")+'</td><td>'+(val[admin_work_accessor['name']]!=undefined ? val[admin_work_accessor['name']] : "")+'</td><td>'+(val[admin_work_accessor['prev_bal']]!=undefined ? val[admin_work_accessor['prev_bal']] : "")+'</td><td>'+(val[admin_work_accessor['received_amt']]!=undefined ? val[admin_work_accessor['received_amt']] : "")+'</td><td>'+(val[daily_work_accessor['current_bal']]!=undefined ? val[daily_work_accessor['current_bal']] : "")+'</td><td class="status">'+(val[daily_work_accessor['status']]!=undefined ? val[daily_work_accessor['status']] : "")+'</td><td>'+(val[daily_work_accessor['date']]!=undefined ? val[admin_work_accessor['date']] : "")+'</td><td><button type="button"  class="fa fa-edit editButton" style="font-size:36px" data-toggle="modal" data-target="#editModal"><span class="material-icons"></span></button></td><td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+val[daily_work_accessor['agent_id']]+'"/></td></tr>';
				$("#electric_table").append(append_table);
			});
			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}

		}else{
			var append_table = '<tr><td colspan="10">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function renderPeopleTable(page_no){
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = page_no*rows_per_page;
	var limit= (page_no*rows_per_page) - rows_per_page;

	var search_val = $("[name='search']").val();
	$.ajax({
	method: "GET",
	url: base_url+admin_work_endpoint+"?limit="+limit+"&offset="+offset+"&query="+search_val+"&agent_id="+agent_id
	}).done(function( data) {
		//data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		//console.log("total_count");
		//console.log(total_count);

		if(total_count > 0){
			$.each(data['dailyReportsList'], function(index,val){
				
				
				var append_table = '<tr><td>'+(index+1)+'</td><td>'+(val[people_classify_accessor['cust_id']]!=undefined ? val[admin_work_accessor['cust_id']] : "")+'</td><td>'+(val[admin_work_accessor['name']]!=undefined ? val[admin_work_accessor['name']] : "")+'</td></tr>';
				$("#electric_table").append(append_table);
			});
			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}

		}else{
			var append_table = '<tr><td colspan="10">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function renderAdminapprovalTable(page_no){
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = page_no*rows_per_page;
	var limit= (page_no*rows_per_page) - rows_per_page;
	var search_val = $("[name='search']").val();
	$.ajax({
	method: "GET",
	url: base_url+daily_work_endpoint+"?limit="+limit+"&offset="+offset+"&query="+search_val+"&agent_id="+agent_id
	}).done(function( data) {
		//data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		//console.log("total_count");
		//console.log(total_count);

		if(total_count > 0){
			$.each(data['dailyWorksList'], function(index,val){
				
				
				var append_table = '<tr><td>'+(index+1)+'</td><td>'+(val[admin_approval_accessor['cust_id']]!=undefined ? val[admin_approval_accessor['cust_id']] : "")+'</td><td>'+(val[admin_approval_accessor['name']]!=undefined ? val[admin_approval_accessor['name']] : "")+'</td><td>'+(val[admin_approval_accessor['prev_bal']]!=undefined ? val[admin_approval_accessor['prev_bal']] : "")+'</td><td>'+(val[admin_approval_accessor['received_amt']]!=undefined ? val[admin_approval_accessor['received_amt']] : "")+'</td><td>'+(val[admin_approval_accessor['current_bal']]!=undefined ? val[admin_approval_accessor['current_bal']] : "")+'</td><td class="status">'+(val[admin_approval_accessor['status']]!=undefined ? val[admin_approval_accessor['status']] : "")+'</td><td>'+(val[admin_approval_accessor['date']]!=undefined ? val[admin_approval_accessor['date']] : "")+'</td><td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+val[admin_approval_accessor['agent_id']]+'"/></td></tr>';
				$("#electric_table").append(append_table);
			});
			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}

		}else{
			var append_table = '<tr><td colspan="10">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function renderFinanceTable(page_no){
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();
	
	var offset = page_no*rows_per_page;
	var limit= (page_no*rows_per_page) - rows_per_page;

	var search_val = $("[name='search']").val();
	$.ajax({
	method: "GET",
	url: base_url+daily_work_endpoint+"?limit="+limit+"&offset="+offset+"&query="+search_val+"&agent_id="+agent_id
	}).done(function( data) {
		//data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		//console.log("total_count");
		//console.log(total_count);

		if(total_count > 0){
			$.each(data['dailyWorksList'], function(index,val){
				var append_table = '<tr><td>'+(index+1)+'</td><td>'+val[finance_work_accessor['cust_id']]+'</td><td>'+val[finance_work_accessor['name']]+'</td><td>'+val[finance_work_accessor['prev_bal']]+'</td><td>'+val[finance_work_accessor['received_amt']]+'</td><td>'+val[finance_work_accessor['current_bal']]+'</td><td>'+val[finance_work_accessor['status']]+'</td><td>'+val[finance_work_accessor['date']]+'</td><td><button type="button"  class="fa fa-edit" style="font-size:36px" data-toggle="modal" data-target="#editModal" id="editButton"><span class="material-icons"></span></button></td><td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+val[finance_work_accessor['agent_id']]+'"/></td></tr>';
	
				
				$("#electric_table").append(append_table);
			});
			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}

		}else{
			var append_table = '<tr><td colspan="10">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function renderMonthlyTable(page_no){
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = page_no*rows_per_page;
	var limit= (page_no*rows_per_page) - rows_per_page;

	var search_val = $("[name='search']").val();
	$.ajax({
	method: "GET",
	url: base_url+daily_work_endpoint+"?limit="+limit+"&offset="+offset+"&query="+search_val+"&agent_id="+agent_id
	}).done(function( data) {
		//data = JSON.parse(data);
		//console.log("data.length");
		//console.log(data);
		var total_count;
		if(data['dataSize'] != undefined){
			total_count = data['dataSize'];
		}
		//console.log("total_count");
		//console.log(total_count);

		if(total_count > 0){
			$.each(data['dailyWorksList'], function(index,val){
				var append_table = '<tr><td>'+(index+1)+'</td><td>'+val[monthly_report_accessor['cust_id']]+'</td><td>'+val[monthly_report_accessor['name']]+'</td><td>'+val[monthly_report_accessor['prev_bal']]+'</td><td>'+val[monthly_report_accessor['received_amt']]+'</td><td>'+val[monthly_report_accessor['current_bal']]+'</td><td>'+val[monthly_report_accessor['status']]+'</td><td>'+val[monthly_report_accessor['date']]+'</td>'+val[monthly_report_accessor['v1']]+'</td><td>'+val[monthly_report_accessor['v2']]+'</td><td>'+val[monthly_report_accessor['v3']]+'</td><td>'+val[monthly_report_accessor['v4']]+'</td><td>'+val[monthly_report_accessor['v5']]+'</td><td>'+val[monthly_report_accessor['v6']]+'</td><td>'+val[monthly_report_accessor['v7']]+'</td><td>'+val[monthly_report_accessor['v8']]+'</td><td>'+val[monthly_report_accessor['v9']]+'</td><td>'+val[monthly_report_accessor['v10']]+'</td><td>'+val[monthly_report_accessor['v11']]+'</td><td>'+val[monthly_report_accessor['v11']]+'</td><td>'+val[monthly_report_accessor['v12']]+'</td><td>'+val[monthly_report_accessor['v13']]+'</td><td>'+val[monthly_report_accessor['v14']]+'</td><td>'+val[monthly_report_accessor['v15']]+'</td><td>'+val[monthly_report_accessor['v16']]+'</td><td>'+val[monthly_report_accessor['v17']]+'</td><td>'+val[monthly_report_accessor['v18']]+'</td><td>'+val[monthly_report_accessor['v19']]+'</td><td>'+val[monthly_report_accessor['v20']]+'</td><td>'+val[monthly_report_accessor['v21']]+'</td><td>'+val[monthly_report_accessor['v22']]+'</td><td>'+val[monthly_report_accessor['v23']]+'</td><td>'+val[monthly_report_accessor['v24']]+'</td><td>'+val[monthly_report_accessor['v25']]+'</td><td>'+val[monthly_report_accessor['v26']]+'</td><td>'+val[monthly_report_accessor['v27']]+'</td><td>'+val[monthly_report_accessor['v28']]+'</td><td>'+val[monthly_report_accessor['v29']]+'</td><td>'+val[monthly_report_accessor['v30']]+'</td><td>'+val[monthly_report_accessor['v31']]+'</td></tr>';
	
				
				$("#electric_table").append(append_table);
			});
			if(total_count >10){
				renderPagination(total_count,page_no,10,1);
			}

		}else{
			var append_table = '<tr><td colspan="10">No Data Found</td></tr>';
			$("#electric_table").append(append_table);
		}
		$(".loading").hide();
  });
}

function changeDateFormat(date){
	var d = new Date(date);
	var curr_date = d.getDate();
	var curr_month = d.getMonth() + 1;
	var curr_year = d.getFullYear();
	return curr_year + "-" + curr_month + "-" + curr_date;
}

function renderPagination(total,current,length,size){
		$("#page").hide();
	//console.log("pagination");
	$('#page').pagination({
    total: total,
    current: current,
	length: length,
    size: size,
	prev: 'Previous',
    next: 'Next',
    click: function(options,$target) {
    	console.log(options);
		if($("#page_type").val() == daily_work_details['page-value']){
			renderDailyWorkTable(options.current);
		}else if($("#page_type").val() ==  "daily-report"){
			renderDailyReportTable(options.current);
		}else if($("#page_type").val() ==  "investor-details"){
			renderInvestorsTable(options.current);
		}else if($("#page_type").val() ==  "create-agent"){
			renderAgentTable(options.current);
		}
    }
});
	$("#page").show();
}

function checkValid(v){
	if(v != "" && v != undefined && v!=null){
		return true;
	}else{
		return false;
	}
}

function getOffsetValue(page_no,page_rows){
	return (page_no*page_rows) - page_rows;
}