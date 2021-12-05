
//const base_url = "https://protected-garden-36193.herokuapp.com/";
const base_url = "http://localhost:8080/";


const daily_work_details = {
	'page-value':'daily-work',
	'data-endpoint':"daily-work/all-customer-details",
	'search-endpoint':"daily-work/single-custromer-details",
	'store-daily-work-endpoint':"daily-work/update", // update details button
	'store-daily-report-endpoint':"data-store", // update details button
	'store-overall-report-endpoint':"data-store", //update details button
	'store-admin-work-endpoint':"daily-work/admin-work", // saa button
	'store-approval-endpoint':"daily-work/payment-approval", // saa button
	'export-endpoint':"daily-work-export",
	'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'pending','bal':'balance','status':'status','date':'collection_date','rec_amt':'received_amount','agent_id':'agent_id'}	
};

/*const daily_work_details = {
	'page-value':'daily-work',
	'data-endpoint':"data-retrieve",
	'search-endpoint':"data-search",
	'store-daily-work-endpoint':"data-store",
	'store-daily-report-endpoint':"data-store",
	'store-overall-report-endpoint':"data-store",
	'store-admin-work-endpoint':"data-store",
	'store-approval-endpoint':"data-store",
	'export-endpoint':"daily-work-export",
	'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'pending','bal':'balance','status':'status','date':'collection_date','rec_amt':'received_amount','agent_id':'agent_id'}	
};*/

const status_code = {
	"Received" : "R",
	"No Response" : "NR",
	"Given Date":"DG",
	"Switch Off":"SO"
}

const daily_report_details = {
		'page-value':'daily-report',
		'data-endpoint':"data-retrieve",
		'search-endpoint':"data-search",
		'export-endpoint':"daily-work-export",
		'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'pending','bal':'balance','status':'status','date':'collection_date','rec_amt':'received_amount','agent_id':'agent_id','percentage':'percentage'}		
};

const manage_customer_details = {
	'page-value':'manage-customer',
	'data-endpoint':"data-retrieve",
	'search-endpoint':"data-search",
	'store-endpoint':"data-store",
	'export-endpoint':"customer-export",
	'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'pending','bal':'balance','status':'status','date':'collection_date','rec_amt':'received_amt','agent_id':'agent_id','percentage':'percentage'}	
};


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
			var previous_balance = isNaN(parseInt($("."+row).find('.peding_amt').text())) ? 0 : parseInt($("."+row).find('.peding_amt').text());
			var emi = isNaN(parseInt($("."+row).find('.emi').text())) ? 0 : parseInt($("."+row).find('.emi').text());
			//console.log('old_recv_amount');
			//console.log(old_recv_amount);
			//console.log('new_recv_amount');
			//console.log(new_recv_amount);
			if(new_recv_amount > old_recv_amount){
				alert("Enter lesser amount than Balance amount");
				return false;
			}else if(new_recv_amount <= 0 || isNaN(new_recv_amount)){
				if(new_status == 'Received'){
					alert("Enter a valid amount");
					return false;
				}
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

			if(new_status != 'Received' || new_recv_amount < old_recv_amount){
				console.log("new_date");
				console.log(new_date);
				console.log(checkValid(new_date));
				if(new_date == null || new_date == ''){
					alert("Enter the Given date");
					return false;
				}

			}

			if(checkValid(new_date)){
				new_date = changeDateFormat(new_date);
			}

			if(!checkValid(new_recv_amount)){
				new_balance = $("."+row).find('.current_bal').text();
			}

			if(previous_balance !=0 && new_recv_amount > previous_balance){
				previous_balance = 0;
				emi =  (previous_balance + emi) - new_recv_amount;
			}else if(new_recv_amount <= previous_balance){
				previous_balance = previous_balance - new_recv_amount;
			}
			var json_request = {
				customer_id:isNaN(parseInt($("."+row).find('.customer_id').text())) ? 0 : parseInt($("."+row).find('.customer_id').text()),
				customer_name:$("."+row).find('.customer_name').text(),
				emi:emi,
				previous_balance:previous_balance,
				current_balance:isNaN(parseInt(new_balance)) ? 0 : parseInt(new_balance),
				status:new_status,
				given_date:new_date,
				received_amout:isNaN(parseInt(new_recv_amount)) ? 0 : parseInt(new_recv_amount),
				agent_id:isNaN(parseInt(agent_id)) ? 0 :parseInt(agent_id),
				collection_date:$("."+row).find('.collection_date').val()};
			//console.log(row);

			// Regardless of status, we will send the data to Daily Work table start.
			$.ajax({
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json' 
					},
				method: "POST",
				data:JSON.stringify(json_request),
				url: base_url+daily_work_details['store-daily-work-endpoint']}).done(function( data) {
					//alert(data_updated_message);
					//console.log(data.length);
			});
			// Regardless of status, we will send the data to Daily Work table end.

			if(new_status != 'Received'){
				// Other than received status, we send data to Daily Report and Overall report endpoint.
				$.ajax({
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json' 
						},
					method: "POST",
					data:JSON.stringify(json_request),
					url: base_url+daily_work_details['store-daily-report-endpoint']}).done(function( data) {
						//alert(data_updated_message);
						//console.log(data.length);
				});

				// Send Overall Data only to Overall Report Endpoint start.
				var from_date = new Date();
				var f_date = from_date.getDate();
	
				var to_date = new Date(new_date);
				var t_date = to_date.getDate();

				for(var i=1;i <= 31;i++){
					json_request[i] = "";
				}
	
				for(var i=f_date;i <= t_date;i++){
					json_request[i] = status_code[new_status];
				}
				// Send Overall Data only to Overall Report Endpoint end.
	
				$.ajax({

					headers: { 
						'Accept': 'application/json',
						'Content-Type': 'application/json' 
						},
					method: "POST",
					data:JSON.stringify(json_request),
					url: base_url+daily_work_details['store-overall-report-endpoint']}).done(function( data) {
						alert(data_updated_message);
						//console.log(data.length);
				});
				// Other than received status, we send data to Daily Report and Overall report endpoint.
			}

			  // updating the content in the table start.
				$("."+row).find('.status').html(new_status);
				$("."+row).find('.peding_amt').html(previous_balance);
				$("."+row).find('.emi').html(emi);

				if(checkValid(new_recv_amount)){
					$("."+row).find('.received_amt').html(new_recv_amount);
					$("."+row).find('.current_bal').html(new_balance);
				}
				//console.log(new_status);
				if(new_date !=null || new_date !=""){
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
		if(!checkValid(status)){
			return false;
		}
		console.log(status);
		var post_endpoint = daily_work_details['store-admin-work-endpoint'];
		if(status == 'Received'){
			post_endpoint = daily_work_details['store-approval-endpoint'];
		}
		var request_json = {
			customer_id:parseInt($("."+row).find('.customer_id').text()) ? parseInt($("."+row).find('.customer_id').text()) : 0,
			customer_name:$("."+row).find('.customer_name').text(),
			emi:$("."+row).find('.emi').text(),
			collection_date:$("."+row).find('.collection_date').val(),
			previous_balance:$("."+row).find('.peding_amt').text() ? parseInt($("."+row).find('.peding_amt').text()) : 0,
			current_balance:$("."+row).find('.current_bal').text() ? parseInt($("."+row).find('.current_bal').text()) : 0,
			received_amout:$("."+row).find('.received_amt').text() ? parseInt($("."+row).find('.received_amt').text()) : 0,
			balance:$("."+row).find('.balance').text() ? parseInt($("."+row).find('.balance').text()) : 0,
			status:status,
			given_date:$("."+row).find('.date').text(),
			agent_id:parseInt(agent_id)
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

	$(document).on('click','.search_bar button',function(e){
		e.preventDefault();
		if($("#page_type").val() == daily_work_details['page-value']){
				renderDailyWorkTable(1);
		}else if($("#page_type").val() ==  daily_report_details['page-value']){
				renderDailyReportTable(1);
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
					'<td class="investor_id">'+(val[manage_customer_details['data-accessors']['investor_id']]!=undefined ? val[manage_customer_details['data-accessors']['investor_id']] : "")+'</td>'+
					'<td>'+(val[manage_customer_details['data-accessors']['name']]!=undefined ? val[manage_customer_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="peding_amt">'+(val[manage_customer_details['data-accessors']['prev_bal']]!=undefined ? val[manage_customer_details['data-accessors']['prev_bal']] : "")+'</td>'+
					'<td class="loan_amount">'+(val[manage_customer_details['data-accessors']['loan_amount']]!=undefined ? val[manage_customer_details['data-accessors']['loan_amount']] : "")+'</td>'+
					'<td class="roi">'+(val[manage_customer_details['data-accessors']['roi']]!=undefined ? val[manage_customer_details['data-accessors']['roi']] : "")+'</td>'+
					'<td class="date">'+(val[manage_customer_details['data-accessors']['date']]!=undefined ? val[manage_customer_details['data-accessors']['date']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="balance">'+(val[manage_customer_details['data-accessors']['balance']]!=undefined ? val[manage_customer_details['data-accessors']['balance']] : "")+'</td>';
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
	url: base_url+investor_report_endpoint+"?limit="+limit+"&offset="+offset+"&query="+search_val
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
						
				var append_table = '<tr class="row_'+index+'"><td>'+(index+1)+'</td><td class="agent_id">'+(val[agent_report_accessor['agent_id']]!=undefined ? val[agent_report_accessor['agent_id']] : "")+'</td><td>'+(val[agent_report_accessor['name']]!=undefined ? val[agent_report_accessor['name']] : "")+'</td><td class="phone">'+(val[agent_report_accessor['phone']]!=undefined ? val[agent_report_accessor['phone']] : "")+'</td><td class="addr">'+(val[agent_report_accessor['addr']]!=undefined ? val[agent_report_accessor['addr']] : "")+'</td><td class="aadhar">'+(val[agent_report_accessor['aadhar']]!=undefined ? val[agent_report_accessor['aadhar']] : "")+'</td><td class="pan">'+(val[agent_report_accessor['pan']]!=undefined ? val[agent_report_accessor['pan']] : "")+'</td>';
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