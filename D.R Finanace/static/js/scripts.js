
//const base_url = "https://protected-garden-36193.herokuapp.com/";
const base_url = "http://localhost:8080/";


const daily_work_details = {
	'page-value':'daily-work',
	'data-endpoint':"daily-work/all-customer-details",
	'search-endpoint':"daily-work/single-custromer-details",
	'store-daily-work-endpoint':"daily-work/update", // update details button
	'store-daily-report-endpoint':"daily-report/insert", // update details button
	'store-overall-report-endpoint':"daily-work/report-update", //update details button
	'store-admin-work-endpoint':"admin-work/insert", // saa button
	'store-approval-endpoint':"admin-approval/insert", // saa button
	'export-endpoint':"daily-work/customer-details/download",
	//'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'pending','bal':'balance','status':'status','collection_date':'collection_date','rec_amt':'received_amount','agent_id':'agent_id','given_date':'given_date'}
'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'previous_balance','bal':'balance','status':'status','date':'collection_date','rec_amt':'received_amount','agent_id':'agent_id','current_balance':'current_balance','given_date':'given_date'}
};

/*
const daily_work_details = {
	'page-value':'daily-work',
	'data-endpoint':"data-retrieve",
	'search-endpoint':"data-search",
	'store-daily-work-endpoint':"data-store",
	'store-daily-report-endpoint':"data-store",
	'store-overall-report-endpoint':"data-store",
	'store-admin-work-endpoint':"data-store-admin",
	'store-approval-endpoint':"data-store-approval",
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
		'data-endpoint':"daily-report/customer-details",
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

const create_customer_details = {
	'page-value':'create-customer',
	'store-endpoint':"customer/insert",
	'data-accessors':{'id':'customer_id','name':'customer_name','agent' : 'agent','phone': 'ph_no_primary', 'relation': 'relation_primary','phone2': 'ph_no_secondary', 'relation2': 'relation_secondary','phone3': 'ph_no_tertiary', 'relation3': 'relation_tertiary', 'address': 'house_address', 'aadharNo': 'aadhar_no', 'panNo': 'pan_no', 'workAddress': 'work_address', 'grossPay': 'gross_pay', 'netPay': 'net_pay', 'monthlyIncome' : 'monthly_income', 'otherIncome': 'other_income', 'history': 'customer_history', 'loanAmount': 'loan_amount', 'rateOfInterest': 'rate_of_interest', 'emi': 'emi_or_monthly','emiAmount':'amount', 'property': 'property'}	
};

const create_agent_details = {
	'page-value':'create-agent',
	'data-endpoint':"agent-details/all-agent-details",
	'store-endpoint':"agent-details/insert",
	'delete-agent': "agent-details/delete",
	'freeze-agent': "agent-details/freeze",
	'update-agent': "agent-details/update",
	'data-accessors':{'agentId': 'agent_id', 'agentName': 'agent_name', 'mobileNo': 'ph_no'}	
};

const login_details = {
'page-value':'login-form',
'data-endpoint':"data-retrieve",
'store-endpoint':"data-store",
'delete-agent': "data-store",
'freeze-agent': "data-store",
'data-accessors':{ 'userName': 'user_name', 'password': 'password'}	
}

const customer_repayment_page = {
'page-value':'customer-repayment-page',
'data-endpoint':"data-retrieve",
'store-endpoint':"data-store",
'delete-agent': "data-store",
'freeze-agent': "data-store",
'data-accessors':{ 'id':'customer_id', 'name':'customer_name', 'loanAmount': 'loan_amount','loanSanctionDate': 'loan_sanction_date', 'emiPerMonth': 'emi_per_month', 'noOfDuesPaid': 'no_of_dues_paid', 'outStanding' : 'out_standing', 'agentId': 'agent_id', 'update': 'update'}
}

const investor_details = {
	'page-value':'investor-details',
	'data-endpoint':"data-retrieve",
	'search-endpoint':"data-search",
	'store-endpoint':"data-store",
	'export-endpoint':"customer-export",
	'data-accessors':{'id':'customer_id','name':'investor_name','pending':'pending','loan_amount':'loan_amount','roi':'roi','received_date':'received_date','balance':'balance','repay_details':'repay_details'}	
};

const admin_work_details = {
		'page-value':'admin-work',
		'data-endpoint':"admin-work/all-customer-details",
		'search-endpoint':"admin-work/single-custromer-details",
		'store-daily-work-endpoint':"daily-work/update",
		'store-daily-report-endpoint':"daily-report/insert",
		'store-overall-report-endpoint':"daily-work/report-update",
		'store-removal-endpoint':"admin-work/delete",
		'export-endpoint':"daily-work-export",
	'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'pending','bal':'balance','status':'status','collection_date':'collection_date','rec_amt':'received_amount','agent_id':'agent_id','given_date':'given_date','agent_name':'agent_name'}
};

const admin_approval_details = {
	'page-value':'admin-approval',
	'data-endpoint':"admin-approval/all-user-details",
	'search-endpoint':"data-search",
	'store-approval-endpoint':"admin-approval/insert",
	'export-endpoint':"daily-work-export",
	'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'pending','bal':'balance','status':'status','collection_date':'collection_date','rec_amt':'received_amount','agent_id':'agent_id','given_date':'given_date'}
};

const monthly_report_details = {
	'page-value':'monthly-report',
	'data-endpoint':"monthly-report/customer-details",
	'search-endpoint':"monthly-report/single-custromer-details",
	'export-endpoint':"monthly-report/customer-details/download",
	'data-accessors':{'id':'customer_id','name':'customer_name','emi':'emi','pending':'previous_balance','balance':'balance','status':'status','collection_date':'collection_date','received':'received_amount','agent_id':'agent_id','given_date':'given_date','current':'current_balance','due_date':'due_date','date_1':'date_1','date_2':'date_2','date_3':'date_3','date_4':'date_4','date_5':'date_5','date_6':'date_6','date_7':'date_7','date_8':'date_8','date_9':'date_9','date_10':'date_10','date_11':'date_11','date_12':'date_12','date_13':'date_13','date_14':'date_14','date_15':'date_15','date_16':'date_16','date_17':'date_17','date_18':'date_18','date_19':'date_19','date_20':'date_20','date_21':'date_21','date_22':'date_22','date_23':'date_23','date_24':'date_24','date_25':'date_25','date_26':'date_26','date_27':'date_27','date_28':'date_28','date_29':'date_29','date_30':'date_30','date_31':'date_31'}
};

const rows_per_page =10;
const agent_id =100;

const data_updated_message = "Data Updated at the Backend";

$(document).ready(function(){
        //console.log("ready scripts");	
		// load the table intially based on page type
		if($("#page_type").val() == daily_work_details['page-value']){
			renderDailyWorkTable(1);
		}else if($("#page_type").val() == daily_report_details['page-value']){
			renderDailyReportTable(1);
		}else if($("#page_type").val() == investor_details['page-value']){
			renderInvestorsTable(1);
		}else if($("#page_type").val() == manage_customer_details['page-value']){
			renderCustomerTable(1);
		}else if($("#page_type").val() == create_agent_details['page-value']){
			renderAgentTable(1);
		}else if($("#page_type").val() == customer_repayment_page['page-value']){
			renderCustomerRepaymentPage(1);
		}else if($("#page_type").val() == admin_work_details['page-value']){
			renderAdminWorkTable(1);
		}else if($("#page_type").val() == admin_approval_details['page-value']){
			renderAdminapprovalTable(1);
		}else if($("#page_type").val() == monthly_report_details['page-value']){
			renderMonthlyReport(1);
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

	$(document).on('change','.modal-content #newType',function(e){
		if($(this).val() != "Received"){
			$(".modal-content #receamt").attr('disabled',true);
		}else{
			$(".modal-content #receamt").attr('disabled',false);
		}
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
			var monthly_amount = isNaN(parseInt($("."+row).find('.monthly_amount').val())) ? 0 : parseInt($("."+row).find('.monthly_amount').val());
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
				//console.log("new_date");
				//console.log(new_date);
				//console.log(checkValid(new_date));
				if(new_date == null || new_date == ''){
					alert("Enter the Given date");
					return false;
				}

			}

			if(checkValid(new_date)){
				new_date = changeDateFormat(new_date);
			}

			if(isNaN(new_recv_amount)){
				new_balance = parseInt($("."+row).find('.current_bal').text());
			}
			//emi = isNaN(new_balance) ? 0 : new_balance;
			//if(previous_balance !=0 && new_recv_amount > previous_balance){
			//	previous_balance = 0;
			//}else if(new_recv_amount <= previous_balance){
			//	previous_balance = previous_balance - new_recv_amount;
			//}
			console.log("recv_amount");
			console.log(new_recv_amount);
			console.log("new_balance");
			console.log(new_balance);
			console.log("old");
			console.log(old_amount);
			var json_request = {
				customer_id:isNaN(parseInt($("."+row).find('.customer_id').text())) ? 0 : parseInt($("."+row).find('.customer_id').text()),
				customer_name:$("."+row).find('.customer_name').text(),
				balance:new_balance,
				previous_balance:previous_balance,
				current_balance:isNaN(parseInt(emi)) ? 0 : parseInt(emi),
				status:new_status,
				given_date:new_date,
				received_amount:isNaN(parseInt(new_recv_amount)) ? 0 : parseInt(new_recv_amount),
				agent_id:isNaN(parseInt(agent_id)) ? 0 :parseInt(agent_id),
				collection_date:$("."+row).find('.collection_date').val(),
				emi: monthly_amount};
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
	
				for(var i=f_date;i < t_date;i++){
					json_request["date_"+i] = status_code[new_status];
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

				console.log("new_recv_amount");
				console.log(new_recv_amount);
				if(!isNaN(new_recv_amount)){
					$("."+row).find('.received_amt').html(new_recv_amount);
					$("."+row).find('.current_bal').html(new_balance);
				}
				//console.log(new_status);
				if(new_date !=null || new_date !=""){
					//console.log("new_status");
					$("."+row).find('.date').html(new_date);
				}
			  // updating the content in the table end.
			  $('.modal-open .close').click();
		}else if($("#page_type").val() == admin_work_details['page-value']){
			var new_status = $(".modal-body #newType").val();
			var row = $(".modal-content").attr('data-row-id');

			var new_date = $(".modal-body #editstartDate").val();
			var new_recv_amount = parseInt($(".modal-body #receamt").val());
			var old_recv_amount = parseInt($("."+row).find('.current_bal').html());
			var previous_balance = isNaN(parseInt($("."+row).find('.peding_amt').text())) ? 0 : parseInt($("."+row).find('.peding_amt').text());
			var emi = isNaN(parseInt($("."+row).find('.emi').text())) ? 0 : parseInt($("."+row).find('.emi').text());
			var monthly_amount = isNaN(parseInt($("."+row).find('.monthly_amount').val())) ? 0 : parseInt($("."+row).find('.monthly_amount').val());
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
				//console.log("new_date");
				//console.log(new_date);
				//console.log(checkValid(new_date));
				if(new_date == null || new_date == ''){
					alert("Enter the Given date");
					return false;
				}

			}

			if(checkValid(new_date)){
				new_date = changeDateFormat(new_date);
			}

			if(isNaN(new_recv_amount)){
				new_balance = parseInt($("."+row).find('.current_bal').text());
			}
			//emi = isNaN(new_balance) ? 0 : new_balance;
			//if(previous_balance !=0 && new_recv_amount > previous_balance){
			//	previous_balance = 0;
			//}else if(new_recv_amount <= previous_balance){
			//	previous_balance = previous_balance - new_recv_amount;
			//}
			console.log("recv_amount");
			console.log(new_recv_amount);
			console.log("new_balance");
			console.log(new_balance);
			console.log("old");
			console.log(old_amount);
			var json_request = {
				customer_id:isNaN(parseInt($("."+row).find('.customer_id').text())) ? 0 : parseInt($("."+row).find('.customer_id').text()),
				customer_name:$("."+row).find('.customer_name').text(),
				balance:new_balance,
				previous_balance:previous_balance,
				current_balance:isNaN(parseInt(emi)) ? 0 : parseInt(emi),
				status:new_status,
				given_date:new_date,
				received_amount:isNaN(parseInt(new_recv_amount)) ? 0 : parseInt(new_recv_amount),
				agent_id:isNaN(parseInt(agent_id)) ? 0 :parseInt(agent_id),
				collection_date:$("."+row).find('.collection_date').val(),
				emi: monthly_amount};
			//console.log(row);

			// Regardless of status, we will send the data to Daily Work table start.
			$.ajax({
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json' 
					},
				method: "POST",
				data:JSON.stringify(json_request),
				url: base_url+admin_work_details['store-daily-work-endpoint']}).done(function( data) {
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
					url: base_url+admin_work_details['store-daily-report-endpoint']}).done(function( data) {
						//alert(data_updated_message);
						//console.log(data.length);
				});

				// Send Overall Data only to Overall Report Endpoint start.
				var from_date = new Date();
				var f_date = from_date.getDate();
	
				var to_date = new Date(new_date);
				var t_date = to_date.getDate();
	
				for(var i=f_date;i < t_date;i++){
					json_request["date_"+i] = status_code[new_status];
				}
				// Send Overall Data only to Overall Report Endpoint end.
	
				$.ajax({

					headers: { 
						'Accept': 'application/json',
						'Content-Type': 'application/json' 
						},
					method: "POST",
					data:JSON.stringify(json_request),
					url: base_url+admin_work_details['store-overall-report-endpoint']}).done(function( data) {
						alert(data_updated_message);
						//console.log(data.length);
				});
				// Other than received status, we send data to Daily Report and Overall report endpoint.
			}

			  // updating the content in the table start.
				$("."+row).find('.status').html(new_status);
				$("."+row).find('.peding_amt').html(previous_balance);
				$("."+row).find('.emi').html(emi);

				console.log("new_recv_amount");
				console.log(new_recv_amount);
				if(!isNaN(new_recv_amount)){
					$("."+row).find('.received_amt').html(new_recv_amount);
					$("."+row).find('.current_bal').html(new_balance);
				}
				//console.log(new_status);
				if(new_date !=null || new_date !=""){
					//console.log("new_status");
					$("."+row).find('.date').html(new_date);
				}
			  // updating the content in the table end.
			  $('.modal-open .close').click();
		}
	});

	$(document).on('click','.saveButton, .removeButton',function(e){
		console.log("Hello");
		if($("#page_type").val() == daily_work_details['page-value'] || $("#page_type").val() == admin_work_details['page-value'] || $("#page_type").val() == admin_approval_details['page-value']){
			var row = $(this).parent().parent().attr('class');
			var agent_id = $("."+row).find('.agent_id').val();
			var status  = $("."+row).find(".status").text();
			var monthly_amount = isNaN(parseInt($("."+row).find('.monthly_amount').val())) ? 0 : parseInt($("."+row).find('.monthly_amount').val());
			if(!checkValid(status)){
				return false;
			}
			//console.log(status);
			var post_endpoint = "";
			if($("#page_type").val() == daily_work_details['page-value']){
					post_endpoint = daily_work_details['store-admin-work-endpoint'];
					if(status == 'Received'){
						post_endpoint = daily_work_details['store-approval-endpoint'];
					}
			}else if($("#page_type").val() == admin_work_details['page-value']){
					post_endpoint = admin_work_details['store-removal-endpoint'];
					/*if(status == 'Received'){
						post_endpoint = admin_work_details['store-approval-endpoint'];
					}*/
			}else if($("#page_type").val() == admin_approval_details['page-value']){
					post_endpoint = admin_approval_details['store-approval-endpoint'];
					//$("."+row).remove();
			}

			var request_json = {
				customer_id:parseInt($("."+row).find('.customer_id').text()) ? parseInt($("."+row).find('.customer_id').text()) : 0,
				customer_name:$("."+row).find('.customer_name').text(),
				current_balance:$("."+row).find('.emi').text() ? parseInt($("."+row).find('.emi').text()) : 0,
				collection_date:$("."+row).find('.collection_date').val(),
				previous_balance:$("."+row).find('.peding_amt').text() ? parseInt($("."+row).find('.peding_amt').text()) : 0,
				balance:$("."+row).find('.current_bal').text() ? parseInt($("."+row).find('.current_bal').text()) : 0,
				received_amount:$("."+row).find('.received_amt').text() ? parseInt($("."+row).find('.received_amt').text()) : 0,
				status:status,
				given_date:$("."+row).find('.date').text(),
				agent_id:parseInt(agent_id),
				emi:monthly_amount
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
		
		if($("#page_type").val() == admin_work_details['page-value']){
			$("."+row).remove();
			//window.location.reload();
			console.log("Hello");
			//$(this).parent().parent().remove();
		}
	}
});

	$(document).on('click','.search_bar button',function(e){
		e.preventDefault();
		if($("#page_type").val() == daily_work_details['page-value']){
				renderDailyWorkTable(1);
		}else if($("#page_type").val() ==  daily_report_details['page-value']){
				renderDailyReportTable(1);
		}else if($("#page_type").val() ==  investor_details['page-value']){
				renderInvestorsTable(1);
		}else if($("#page_type").val() ==  admin_work_details['page-value']){
				renderAdminWorkTable(1);
		}else if($("#page_type").val() ==  admin_approval_details['page-value']){
			renderAdminapprovalTable(1);
		}else if($("#page_type").val() ==  monthly_report_details['page-value']){
			renderMonthlyReport(1);
		}
	});

		$(document).on('keypress','[name="search"]',function(e){
		if(e.which == '27' || e.key == 'e'){
				return false;
		}
	});

	$(document).on('click','.export_button',function(e){
	/*	e.preventDefault();

		var export_endpoint ="";
		if($("#page_type").val() == daily_work_details['page-value']){			
			export_endpoint = base_url+daily_work_details['export-endpoint'];
		}else if($("#page_type").val() ==  daily_report_details['page-value']){
			export_endpoint = base_url+daily_report_details['export-endpoint'];
		}
		$.ajax({
			method: "GET",
			url: export_endpoint+"?agent_id="+agent_id}).done(function( data) {
				alert(data_updated_message);
				//console.log(data.length);
			});*/
		
		window.open("http://localhost:8080/daily-work/customer-details/download/?agent_id="+agent_id);
		/*window.location.href="http://localhost:8080/daily-work/customer-details/download/?agent_id=100";*/
		
	});
	$(document).on('click','.export_button_monthly',function(e){
		/*	e.preventDefault();

			var export_endpoint ="";
			if($("#page_type").val() == daily_work_details['page-value']){			
				export_endpoint = base_url+daily_work_details['export-endpoint'];
			}else if($("#page_type").val() ==  daily_report_details['page-value']){
				export_endpoint = base_url+daily_report_details['export-endpoint'];
			}
			$.ajax({
				method: "GET",
				url: export_endpoint+"?agent_id="+agent_id}).done(function( data) {
					alert(data_updated_message);
					//console.log(data.length);
				});*/
			
			window.open("http://localhost:8080/monthly-report/customer-details/download/?agent_id="+agent_id);
			/*window.location.href="http://localhost:8080/daily-work/customer-details/download/?agent_id=100";*/
			
		});
	$(document).on('click','.editButton',function(e){
		e.preventDefault();
		if($("#page_type").val() == "daily-work" || $("#page_type").val() == admin_work_details['page-value']){
			var row_id = $(this).parent().parent().attr('class');
			$(".modal-content").attr('data-row-id',row_id);
			resetModal($("#page_type").val());
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
			agent: $('#agent').val() ? $('#agent').val() : 0,
			ph_no_primary: $('#newMobile').val() ? $('#newMobile').val() : 0, 
			relation_primary: $('#relation1').val() ? $('#relation1').val() : 0,
			ph_no_secondary: $('#newMobile2').val() ? $('#newMobile2').val() : 0, 
			relation_secondary: $('#relation2').val() ? $('#relation2').val() : 0,
			ph_no_tertiary: $('#newMobile3').val() ? $('#newMobile3').val() : 0, 
			relation_tertiary: $('#relation3').val() ? $('#relation3').val() : 0,
			house_address: $('#address').val() ? $('#address').val() : 0,
			aadhar_no: $('#aadharno').val() ? $('#aadharno').val() : 0,
			pan_no: $('#panno').val() ? $('#panno').val() : 0,
			work_address: $('#workaddress').val() ? $('#workaddress').val() : 0,
			gross_pay: $('#grosspay').val() ? $('#grosspay').val() : 0,
			net_pay: $('#netpay').val() ? $('#netpay').val() : 0,
			monthly_income: $('#moninc').val() ? $('#moninc').val() : 0,
			other_income: $('#otherinc').val() ? $('#otherinc').val() : 0,
			customer_history: $('#history').val() ? $('#history').val() : 0,
			loan_amount: $('#loanamt').val() ? $('#loanamt').val() : 0,
			rate_of_interest: $('#rateofint').val() ? $('#rateofint').val() : 0,
			emi_or_monthly: $('#newType').val() ? $('#newType').val() : 0,
			property: $('#property').val() ? $('#property').val() : 0,
			amount: $('#emiAmount').val() ? $('#emiAmount').val() : 0,
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
	$(document).on('click','.update-agent-btn',function(e){
		if(!checkValid($('#Userid').val()) && !checkValid($('#newUsername').val()) && !checkValid($('#newMobile').val())){
			console.log('enter req fields')
			return false;
		}
		console.log('agent table')
		var post_endpoint = create_agent_details['update-agent'];
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
	$(document).on('click','#updateCustomerRepayment',function(e){
		e.preventDefault();
		if(!checkValid($('#newMobile').val()) && !checkValid($('#address').val()) && !checkValid($('#agent').val())){
			console.log('enter req fields')
			return false;
		}
		var post_endpoint = customer_repayment_page['store-endpoint'];
		var request_json = {
			phone_number: $('#newMobile').val() ? $('#newMobile').val() : 0,
			address: $('#address').val() ? $('#address').val() : 0,
			agent: $('#agent').val() ? $('#agent').val() : 0,
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

	$(document).on('change','.modal-body #newType',function(e){
		//console.log("test");
		if($("#page_type").val() == daily_work_details['page-value']){
			var new_status = $(".modal-body #newType").val();
			if(new_status == 'No Response' || new_status == 'Switch Off'){
				var date = new Date();
				date.setDate(date.getDate() + 1);
				//console.log("Changed date");
				//console.log(changeDateFormat(date));
				$(".modal-body #editstartDate").val(changeDateFormat(date));
				$(".modal-body #editstartDate").attr('disabled',true);
			}else{
				$(".modal-body #editstartDate").attr('disabled',false);
			}
		}
	});
});

function resetModal(page_type){
	$(".modal-content form input").val("");
	$(".modal-content form select").val("Received");
	$(".modal-content form input").attr('disabled',false);
	$(".modal-content form select").attr('disabled',false);
}

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
			//console.log("dataList");
			//console.log(dataList);
			if(data['dataList']){
				$.each(dataList, function(index,val){
					// calculation =  Previous + Current - Received = Balance.
					var rec_amt = val[daily_work_details['data-accessors']['rec_amt']]!=undefined ? val[daily_work_details['data-accessors']['rec_amt']] : 0;
					var previous = val[daily_work_details['data-accessors']['pending']]!=undefined ? val[daily_work_details['data-accessors']['pending']] : 0;
					var current = val[daily_work_details['data-accessors']['current_balance']]!=undefined ? val[daily_work_details['data-accessors']['current_balance']] : 0;
					var emi = val[daily_work_details['data-accessors']['emi']]!=undefined ? val[daily_work_details['data-accessors']['emi']] : 0;
					var bal = (parseInt(previous) + parseInt(current)) - parseInt(rec_amt);
					if(bal<0){
						bal = 0;
					}

					var append_table = '<tr class="row_'+index+'"><input type="hidden" class="monthly_amount" value='+emi+'/>'+
					'<td>'+(index+1)+'</td>'+
					'<td class="customer_id">'+(val[daily_work_details['data-accessors']['id']]!=undefined ? val[daily_work_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(val[daily_work_details['data-accessors']['name']]!=undefined ? val[daily_work_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="emi">'+current+'</td>'+
					'<td class="peding_amt">'+previous+'</td>'+
					'<td class="received_amt">'+rec_amt+'</td>'+
					'<td class="current_bal">'+bal+'</td>'+
					'<td class="status">'+(val[daily_work_details['data-accessors']['status']]!=undefined ? val[daily_work_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(val[daily_work_details['data-accessors']['given_date']]!=undefined ? val[daily_work_details['data-accessors']['given_date']] : "")+'</td>'+
					'<td><button type="button"  class="fa fa-edit editButton" style="font-size:36px" data-toggle="modal" data-target="#editModal"><span class="material-icons"></span></button></td>'+
					'<td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+val[daily_work_details['data-accessors']['agent_id']]+'"/><input type="hidden" class="collection_date" value="'+val['collection_date']+'"/></td>'+
					'</tr>';
					$("#electric_table").append(append_table);
				});
			}else{
				if(data[daily_work_details['data-accessors']['id']]){

					// calculation =  Previous + Current - Received = Balance.
					var rec_amt = data[daily_work_details['data-accessors']['rec_amt']]!=undefined ? data[daily_work_details['data-accessors']['rec_amt']] : 0;
					var previous = data[daily_work_details['data-accessors']['pending']]!=undefined ? data[daily_work_details['data-accessors']['pending']] : 0;
					var current = data[daily_work_details['data-accessors']['current_balance']]!=undefined ? data[daily_work_details['data-accessors']['current_balance']] : 0;
					var emi = data[daily_work_details['data-accessors']['emi']]!=undefined ? data[daily_work_details['data-accessors']['emi']] : 0;
					var bal = (parseInt(previous) + parseInt(current)) - parseInt(rec_amt);
					if(bal<0){
						bal = 0;
					}

					var append_table = '<tr class="row_0"><input type="hidden" class="monthly_amount" value='+emi+'/>'+
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

function renderMonthlyReport(page_no){
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = getOffsetValue(page_no,rows_per_page);
	
	var search_val = $("[name='search']").val();

	var endpoint = base_url + monthly_report_details['data-endpoint']+"?limit="+rows_per_page+"&offset="+offset+"&agent_id="+agent_id;
	// Search endpoint changes displays only, when the search field is not selected. 
	if(checkValid(search_val)){
		endpoint = base_url+monthly_report_details['search-endpoint']+"?&cust_id="+search_val+"&agent_id="+agent_id;
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
			//console.log("dataList");
			//console.log(dataList);
			if(data['dataList']){
				$.each(dataList, function(index,val){
					// calculation =  Previous + Current - Received = Balance.
					

					var append_table = '<tr class="row_'+index+'"><input type="hidden" class="monthly_amount" value='+emi+'/>'+
					'<td>'+(index+1)+'</td>'+
					'<td class="customer_id">'+(val[monthly_report_details['data-accessors']['id']]!=undefined ? val[monthly_report_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(val[monthly_report_details['data-accessors']['name']]!=undefined ? val[monthly_report_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="customer_name">'+(val[monthly_report_details['data-accessors']['pending']]!=undefined ? val[monthly_report_details['data-accessors']['pending']] : "")+'</td>'+
					'<td class="customer_name">'+(val[monthly_report_details['data-accessors']['current']]!=undefined ? val[monthly_report_details['data-accessors']['current']] : "")+'</td>'+
					'<td class="customer_name">'+(val[monthly_report_details['data-accessors']['received']]!=undefined ? val[monthly_report_details['data-accessors']['received']] : "")+'</td>'+
					'<td class="customer_name">'+(val[monthly_report_details['data-accessors']['balance']]!=undefined ? val[monthly_report_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="status">'+(val[monthly_report_details['data-accessors']['current_balance']]!=undefined ? val[monthly_report_details['data-accessors']['current_balance']] : "")+'</td>'+
					'<td class="date">'+(val[monthly_report_details['data-accessors']['due_date']]!=undefined ? val[monthly_report_details['data-accessors']['due_date']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_31']]!=undefined ? val[monthly_report_details['data-accessors']['date_31']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_30']]!=undefined ? val[monthly_report_details['data-accessors']['date_30']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_29']]!=undefined ? val[monthly_report_details['data-accessors']['date_29']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_28']]!=undefined ? val[monthly_report_details['data-accessors']['date_28']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_27']]!=undefined ? val[monthly_report_details['data-accessors']['date_27']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_26']]!=undefined ? val[monthly_report_details['data-accessors']['date_26']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_25']]!=undefined ? val[monthly_report_details['data-accessors']['date_25']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_24']]!=undefined ? val[monthly_report_details['data-accessors']['date_24']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_23']]!=undefined ? val[monthly_report_details['data-accessors']['date_23']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_22']]!=undefined ? val[monthly_report_details['data-accessors']['date_22']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_21']]!=undefined ? val[monthly_report_details['data-accessors']['date_21']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_20']]!=undefined ? val[monthly_report_details['data-accessors']['date_20']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_19']]!=undefined ? val[monthly_report_details['data-accessors']['date_19']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_18']]!=undefined ? val[monthly_report_details['data-accessors']['date_18']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_17']]!=undefined ? val[monthly_report_details['data-accessors']['date_17']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_16']]!=undefined ? val[monthly_report_details['data-accessors']['date_16']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_15']]!=undefined ? val[monthly_report_details['data-accessors']['date_15']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_14']]!=undefined ? val[monthly_report_details['data-accessors']['date_14']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_13']]!=undefined ? val[monthly_report_details['data-accessors']['date_13']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_12']]!=undefined ? val[monthly_report_details['data-accessors']['date_12']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_11']]!=undefined ? val[monthly_report_details['data-accessors']['date_11']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_10']]!=undefined ? val[monthly_report_details['data-accessors']['date_10']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_09']]!=undefined ? val[monthly_report_details['data-accessors']['date_09']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_08']]!=undefined ? val[monthly_report_details['data-accessors']['date_08']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_07']]!=undefined ? val[monthly_report_details['data-accessors']['date_07']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_06']]!=undefined ? val[monthly_report_details['data-accessors']['date_06']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_05']]!=undefined ? val[monthly_report_details['data-accessors']['date_05']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_04']]!=undefined ? val[monthly_report_details['data-accessors']['date_04']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_03']]!=undefined ? val[monthly_report_details['data-accessors']['date_03']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_02']]!=undefined ? val[monthly_report_details['data-accessors']['date_02']] : "")+'</td>'+
					'<td>'+(val[monthly_report_details['data-accessors']['date_01']]!=undefined ? val[monthly_report_details['data-accessors']['date_01']] : "")+'</td>'+
					'</tr>';
					$("#electric_table").append(append_table);
				});
			}else{
				if(data[monthly_report_details['data-accessors']['id']]){

					// calculation =  Previous + Current - Received = Balance.
					var rec_amt = data[monthly_report_details['data-accessors']['rec_amt']]!=undefined ? data[monthly_report_details['data-accessors']['rec_amt']] : 0;
					var previous = data[monthly_report_details['data-accessors']['pending']]!=undefined ? data[monthly_report_details['data-accessors']['pending']] : 0;
					var current = data[monthly_report_details['data-accessors']['current_balance']]!=undefined ? data[monthly_report_details['data-accessors']['current_balance']] : 0;
					var emi = data[monthly_report_details['data-accessors']['emi']]!=undefined ? data[monthly_report_details['data-accessors']['emi']] : 0;
					var bal = (parseInt(previous) + parseInt(current)) - parseInt(rec_amt);
					if(bal<0){
						bal = 0;
					}

					var append_table = '<tr class="row_0"><input type="hidden" class="monthly_amount" value='+emi+'/>'+
					'<td>1</td>'+
					'<td class="customer_id">'+(data[monthly_report_details['data-accessors']['id']]!=undefined ? data[monthly_report_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(data[monthly_report_details['data-accessors']['name']]!=undefined ? data[monthly_report_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="customer_name">'+(data[monthly_report_details['data-accessors']['pending']]!=undefined ? data[monthly_report_details['data-accessors']['pending']] : "")+'</td>'+
					'<td class="customer_name">'+(data[monthly_report_details['data-accessors']['current']]!=undefined ? data[monthly_report_details['data-accessors']['current']] : "")+'</td>'+
					'<td class="customer_name">'+(data[monthly_report_details['data-accessors']['received']]!=undefined ? data[monthly_report_details['data-accessors']['received']] : "")+'</td>'+
					'<td class="customer_name">'+(data[monthly_report_details['data-accessors']['balance']]!=undefined ? data[monthly_report_details['data-accessors']['balance']] : "")+'</td>'+
					'<td class="status">'+(data[monthly_report_details['data-accessors']['current_balance']]!=undefined ? data[monthly_report_details['data-accessors']['current_balance']] : "")+'</td>'+
					'<td class="date">'+(data[monthly_report_details['data-accessors']['due_date']]!=undefined ? data[monthly_report_details['data-accessors']['due_date']] : "")+'</td>'+
					'<td>'+(data[monthly_report_details['data-accessors']['31']]!=undefined ? data[monthly_report_details['data-accessors']['31']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['30']]!=undefined ? data[monthly_report_details['data-accessors']['30']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['29']]!=undefined ? data[monthly_report_details['data-accessors']['29']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['28']]!=undefined ? data[monthly_report_details['data-accessors']['28']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['27']]!=undefined ? data[monthly_report_details['data-accessors']['27']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['26']]!=undefined ? data[monthly_report_details['data-accessors']['26']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['25']]!=undefined ? data[monthly_report_details['data-accessors']['25']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['24']]!=undefined ? data[monthly_report_details['data-accessors']['24']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['23']]!=undefined ? data[monthly_report_details['data-accessors']['23']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['22']]!=undefined ? data[monthly_report_details['data-accessors']['22']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['21']]!=undefined ? data[monthly_report_details['data-accessors']['21']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['20']]!=undefined ? data[monthly_report_details['data-accessors']['20']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['19']]!=undefined ? data[monthly_report_details['data-accessors']['19']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['18']]!=undefined ? data[monthly_report_details['data-accessors']['18']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['17']]!=undefined ? data[monthly_report_details['data-accessors']['17']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['16']]!=undefined ? data[monthly_report_details['data-accessors']['16']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['15']]!=undefined ? data[monthly_report_details['data-accessors']['15']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['14']]!=undefined ? data[monthly_report_details['data-accessors']['14']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['13']]!=undefined ? data[monthly_report_details['data-accessors']['13']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['date_12']]!=undefined ? data[monthly_report_details['data-accessors']['date_12']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['11']]!=undefined ? data[monthly_report_details['data-accessors']['11']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['10']]!=undefined ? data[monthly_report_details['data-accessors']['10']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['09']]!=undefined ? data[monthly_report_details['data-accessors']['09']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['08']]!=undefined ? data[monthly_report_details['data-accessors']['08']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['07']]!=undefined ? data[monthly_report_details['data-accessors']['07']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['06']]!=undefined ? data[monthly_report_details['data-accessors']['06']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['05']]!=undefined ? data[monthly_report_details['data-accessors']['05']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['04']]!=undefined ? data[monthly_report_details['data-accessors']['04']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['03']]!=undefined ? data[monthly_report_details['data-accessors']['03']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['02']]!=undefined ? data[monthly_report_details['data-accessors']['02']] : "")+'</td>'+
'<td>'+(data[monthly_report_details['data-accessors']['01']]!=undefined ? data[monthly_report_details['data-accessors']['01']] : "")+'</td>'+
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
			//console.log("dataList");
			//console.log(dataList);
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
	//console.log("investors");
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();

	var offset = page_no*rows_per_page;
	var limit= (page_no*rows_per_page) - rows_per_page;
	var search_val = $("[name='search']").val();
	var endpoint = base_url + investor_details['data-endpoint']+"?limit="+rows_per_page+"&offset="+offset+"&agent_id="+agent_id;
	// Search endpoint changes displays only, when the search field is not selected. 
	if(checkValid(search_val)){
		endpoint = base_url+investor_details['search-endpoint']+"?&cust_id="+search_val+"&agent_id="+agent_id;
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
			//console.log("dataList");
			//console.log(dataList);
			if(data['dataList']){
				$.each(dataList, function(index,val){
							
					var append_table = '<tr class="row_'+index+'"><td>'+(index+1)+'</td>'+
						'<td class="investor_id">'+(val[investor_details['data-accessors']['id']]!=undefined ? val[investor_details['data-accessors']['id']] : "")+'</td>'+
						'<td>'+(val[investor_details['data-accessors']['name']]!=undefined ? val[investor_details['data-accessors']['name']] : "")+'</td>'+
						'<td class="peding_amt">'+(val[investor_details['data-accessors']['pending']]!=undefined ? val[investor_details['data-accessors']['pending']] : "")+'</td>'+
						'<td class="loan_amount">'+(val[investor_details['data-accessors']['loan_amount']]!=undefined ? val[investor_details['data-accessors']['loan_amount']] : "")+'</td>'+
						'<td class="roi">'+(val[investor_details['data-accessors']['roi']]!=undefined ? val[investor_details['data-accessors']['roi']] : "")+'</td>'+
						'<td class="date">'+(val[investor_details['data-accessors']['received_date']]!=undefined ? val[investor_details['data-accessors']['received_date']] : "")+'</td>'+
						'<td class="balance">'+(val[investor_details['data-accessors']['balance']]!=undefined ? val[investor_details['data-accessors']['balance']] : "")+'</td>'+
						'<td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px">'+
							'<span class="material-icons"></span>'+
							'</button>'+
							'<input class="agent_id" type="hidden" value="'+(val[investor_details['data-accessors']['agent_id']]!=undefined ? val[investor_details['data-accessors']['agent_id']] : "")+'"/></td>'+
						'</tr>';
					$("#electric_table").append(append_table);
				});
			}else{
				if(data[investor_details['data-accessors']['id']]){
					var append_table = '<tr class="row_'+index+'"><td>'+(index+1)+'</td>'+
						'<td class="investor_id">'+(data[investor_details['data-accessors']['id']]!=undefined ? data[investor_details['data-accessors']['id']] : "")+'</td>'+
						'<td>'+(data[investor_details['data-accessors']['name']]!=undefined ? data[investor_details['data-accessors']['name']] : "")+'</td>'+
						'<td class="peding_amt">'+(data[investor_details['data-accessors']['pending']]!=undefined ? data[investor_details['data-accessors']['pending']] : "")+'</td>'+
						'<td class="loan_amount">'+(data[investor_details['data-accessors']['loan_amount']]!=undefined ? data[investor_details['data-accessors']['loan_amount']] : "")+'</td>'+
						'<td class="roi">'+(data[investor_details['data-accessors']['roi']]!=undefined ? data[investor_details['data-accessors']['roi']] : "")+'</td>'+
						'<td class="date">'+(data[investor_details['data-accessors']['received_date']]!=undefined ? data[investor_details['data-accessors']['received_date']] : "")+'</td>'+
						'<td class="balance">'+(data[investor_details['data-accessors']['balance']]!=undefined ? data[investor_details['data-accessors']['balance']] : "")+'</td>'+
						'<td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px">'+
							'<span class="material-icons"></span>'+
							'</button>'+
							'<input class="agent_id" type="hidden" value="'+(data[investor_details['data-accessors']['agent_id']]!=undefined ? data[investor_details['data-accessors']['agent_id']] : "")+'"/></td>'+
						'</tr>';
					$("#electric_table").append(append_table);
				}else{
					var append_table = '<tr><td colspan="9">No Data Found</td></tr>';
					$("#electric_table").append(append_table);
				}
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
		//data = JSON.parse(data);
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

	var offset = getOffsetValue(page_no,rows_per_page);
	
	var search_val = $("[name='search']").val();

	var endpoint = base_url + admin_work_details['data-endpoint']+"?limit="+rows_per_page+"&offset="+offset+"&agent_id="+agent_id;
	// Search endpoint changes displays only, when the search field is not selected. 
	if(checkValid(search_val)){
		endpoint = base_url+admin_work_details['search-endpoint']+"?&cust_id="+search_val+"&agent_id="+agent_id;
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
			//console.log("dataList");
			//console.log(dataList);
			if(data['dataList']){
				$.each(dataList, function(index,val){
				// calculation =  Previous + Current - Received = Balance.
				var rec_amt = val[daily_work_details['data-accessors']['rec_amt']]!=undefined ? val[daily_work_details['data-accessors']['rec_amt']] : 0;
				var previous = val[daily_work_details['data-accessors']['pending']]!=undefined ? val[daily_work_details['data-accessors']['pending']] : 0;
				var current = val[daily_work_details['data-accessors']['current_balance']]!=undefined ? val[daily_work_details['data-accessors']['current_balance']] : 0;
				var emi = val[daily_work_details['data-accessors']['emi']]!=undefined ? val[daily_work_details['data-accessors']['emi']] : 0;
				var bal = (parseInt(previous) + parseInt(current)) - parseInt(rec_amt);
				if(bal<0){
					bal = 0;
				}

					var append_table = '<tr class="row_'+index+'"><input type="hidden" class="monthly_amount" value='+emi+'/>'+
					'<td>'+(index+1)+'</td>'+
					'<td class="customer_id">'+(val[admin_work_details['data-accessors']['id']]!=undefined ? val[admin_work_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(val[admin_work_details['data-accessors']['name']]!=undefined ? val[admin_work_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="current_bal">'+bal+'</td>'+
					'<td class="peding_amt">'+previous+'</td>'+
					'<td class="received_amt">'+rec_amt+'</td>'+
					'<td class="status">'+(val[admin_work_details['data-accessors']['status']]!=undefined ? val[admin_work_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(val[admin_work_details['data-accessors']['given_date']]!=undefined ? val[admin_work_details['data-accessors']['given_date']] : "")+'<input type="hidden" class="collection_date" value='+val[admin_work_details['data-accessors']['collection_date']]+'></td>'+
					'<td class="agent_id_show">'+(val[admin_work_details['data-accessors']['agent_id']]!=undefined ? val[admin_work_details['data-accessors']['agent_id']] : "")+'</td>'+
					'<td class="agent_name">'+(val[admin_work_details['data-accessors']['agent_name']]!=undefined ? val[admin_work_details['data-accessors']['agent_name']] : "")+'</td>'+
					/*'<td><button type="button"  class="fa fa-edit editButton" style="font-size:36px" data-toggle="modal" data-target="#editModal"><span class="material-icons"></span></button></td>'+*/
					'<td><button type="button" class="fa fa-angle-double-down removeButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+val[admin_work_details['data-accessors']['agent_id']]+'"/></td>'+
					'</tr>';
					$("#electric_table").append(append_table);
				});
			}else{
				if(data[admin_work_details['data-accessors']['id']]){

					// calculation =  Previous + Current - Received = Balance.
					var rec_amt = data[admin_work_details['data-accessors']['rec_amt']]!=undefined ? data[admin_work_details['data-accessors']['rec_amt']] : 0;
					var previous = data[admin_work_details['data-accessors']['pending']]!=undefined ? data[admin_work_details['data-accessors']['pending']] : 0;
					var current = data[admin_work_details['data-accessors']['current_balance']]!=undefined ? data[admin_work_details['data-accessors']['current_balance']] : 0;
					var emi = data[admin_work_details['data-accessors']['emi']]!=undefined ? data[admin_work_details['data-accessors']['emi']] : 0;
					var bal = (parseInt(previous) + parseInt(current)) - parseInt(rec_amt);
					if(bal<0){
						bal = 0;
					}

					var append_table = '<tr class="row_0"><input type="hidden" class="monthly_amount" value='+emi+'/>'+
					'<td>1</td>'+
					'<td class="customer_id">'+(data[admin_work_details['data-accessors']['id']]!=undefined ? data[admin_work_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(data[admin_work_details['data-accessors']['name']]!=undefined ? data[admin_work_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="current_bal">'+bal+'</td>'+
					'<td class="peding_amt">'+previous+'</td>'+
					'<td class="received_amt">'+rec_amt+'</td>'+

					'<td class="status">'+(data[admin_work_details['data-accessors']['status']]!=undefined ? data[admin_work_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(data[admin_work_details['data-accessors']['given_date']]!=undefined ? data[admin_work_details['data-accessors']['given_date']] : "")+'<input type="hidden" class="collection_date" value='+data[admin_work_details['data-accessors']['collection_date']]+'></td>'+
					'<td class="agent_id">'+(data[admin_work_details['data-accessors']['agent_id']]!=undefined ? data[admin_work_details['data-accessors']['agent_id']] : "")+'</td>'+
					'<td class="agent_name">'+(data[admin_work_details['data-accessors']['agent_name']]!=undefined ? data[admin_work_details['data-accessors']['agent_name']] : "")+'</td>'+
					/*'<td><button type="button"  class="fa fa-edit editButton" style="font-size:36px" data-toggle="modal" data-target="#editModal"><span class="material-icons"></span></button></td>'+*/
					'<td><button type="button" class="fa fa-angle-double-down removeButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+data[admin_work_details['data-accessors']['agent_id']]+'"/></td>'+
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

	var offset = getOffsetValue(page_no,rows_per_page);
	
	var search_val = $("[name='search']").val();

	var endpoint = base_url + admin_approval_details['data-endpoint']+"?limit="+rows_per_page+"&offset="+offset+"&agent_id="+agent_id;
	// Search endpoint changes displays only, when the search field is not selected. 
	if(checkValid(search_val)){
		endpoint = base_url+admin_approval_details['search-endpoint']+"?&cust_id="+search_val+"&agent_id="+agent_id;
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
			//console.log("dataList");
			//console.log(dataList);
			if(data['dataList']){
				$.each(dataList, function(index,val){
					// calculation =  Previous + Current - Received = Balance.
					var rec_amt = val[admin_approval_details['data-accessors']['rec_amt']]!=undefined ? val[admin_approval_details['data-accessors']['rec_amt']] : 0;
					var previous = val[admin_approval_details['data-accessors']['pending']]!=undefined ? val[admin_approval_details['data-accessors']['pending']] : 0;
					var current = val[admin_approval_details['data-accessors']['current_balance']]!=undefined ? val[admin_approval_details['data-accessors']['current_balance']] : 0;
					var emi = val[admin_approval_details['data-accessors']['emi']]!=undefined ? val[admin_approval_details['data-accessors']['emi']] : 0;
					var bal = (parseInt(previous) + parseInt(current)) - parseInt(rec_amt);
					if(bal<0){
						bal = 0;
					}

					var append_table = '<tr class="row_'+index+'"><input type="hidden" class="monthly_amount" value='+emi+'/>'+
					'<td>'+(index+1)+'</td>'+
					'<td class="customer_id">'+(val[admin_approval_details['data-accessors']['id']]!=undefined ? val[admin_approval_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(val[admin_approval_details['data-accessors']['name']]!=undefined ? val[admin_approval_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="peding_amt">'+previous+'</td>'+
					'<td class="received_amt">'+rec_amt+'</td>'+
					'<td class="current_bal">'+bal+'</td>'+
					'<td class="status">'+(val[admin_approval_details['data-accessors']['status']]!=undefined ? val[admin_approval_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(val[admin_approval_details['data-accessors']['given_date']]!=undefined ? val[admin_approval_details['data-accessors']['given_date']] : "")+'<input type="hidden" class="collection_date" value='+val[admin_approval_details['data-accessors']['collection_date']]+'></td>'+
					'<td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+val[daily_work_details['data-accessors']['agent_id']]+'"/></td>'+
					'</tr>';
					$("#electric_table").append(append_table);
				});
			}else{
				if(data[admin_approval_details['data-accessors']['id']]){

					// calculation =  Previous + Current - Received = Balance.
					var rec_amt = data[admin_approval_details['data-accessors']['rec_amt']]!=undefined ? data[admin_approval_details['data-accessors']['rec_amt']] : 0;
					var previous = data[admin_approval_details['data-accessors']['pending']]!=undefined ? data[admin_approval_details['data-accessors']['pending']] : 0;
					var current = data[admin_approval_details['data-accessors']['current_balance']]!=undefined ? data[admin_approval_details['data-accessors']['current_balance']] : 0;
					var emi = data[admin_approval_details['data-accessors']['emi']]!=undefined ? data[admin_approval_details['data-accessors']['emi']] : 0;
					var bal = (parseInt(previous) + parseInt(current)) - parseInt(rec_amt);
					if(bal<0){
						bal = 0;
					}

					var append_table = '<tr class="row_0"><input type="hidden" class="monthly_amount" value='+emi+'/>'+
					'<td>1</td>'+
					'<td class="customer_id">'+(data[admin_approval_details['data-accessors']['id']]!=undefined ? data[admin_approval_details['data-accessors']['id']] : "")+'</td>'+
					'<td class="customer_name">'+(data[admin_approval_details['data-accessors']['name']]!=undefined ? data[admin_approval_details['data-accessors']['name']] : "")+'</td>'+
					'<td class="peding_amt">'+previous+'</td>'+
					'<td class="received_amt">'+rec_amt+'</td>'+
					'<td class="current_bal">'+bal+'</td>'+
					'<td class="status">'+(data[admin_approval_details['data-accessors']['status']]!=undefined ? data[admin_approval_details['data-accessors']['status']] : "")+'</td>'+
					'<td class="date">'+(data[admin_approval_details['data-accessors']['date']]!=undefined ? data[admin_approval_details['data-accessors']['date']] : "")+'</td>'+
					'<td><button type="button" class="fa fa-angle-double-down saveButton" style="font-size:36px"><span class="material-icons"></span></button><input class="agent_id" type="hidden" value="'+data[admin_approval_details['data-accessors']['agent_id']]+'"/></td>'+
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
			var append_table = '<tr><td colspan="9">No Data Found</td></tr>';
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
    	//console.log(options);
		if($("#page_type").val() == daily_work_details['page-value']){
			renderDailyWorkTable(options.current);
		}else if($("#page_type").val() ==  "daily-report"){
			renderDailyReportTable(options.current);
		}else if($("#page_type").val() ==  "investor-details"){
			renderInvestorsTable(options.current);
		}else if($("#page_type").val() ==  "create-agent"){
			renderAgentTable(options.current);
		}else if($("#page_type").val() ==  admin_approval_details['page-value']){
			renderAdminapprovalTable(options.current);
		}else if($("#page_type").val() == monthly_report_details['page-value']){
		    renderMonthlyReport(options.current);
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

function getAlert(){
	var textboxes = $(".required");
	var select = $("select");
	var alertMsg = "Please Enter the Following Fields";
	$.each(textboxes,function(index,val){
	if($(this).val() == ""){
		var label = $("label[for='"+$(this).attr('id')+"']").text();
		if(label != ""){
			alertMsg += "\n"+label;
		}
	}
	});
	if(alertMsg != "Please Enter the Following Fields"){
		alert(alertMsg);
		return "error";
	}else{
		return "OK";
	}
}

function getOffsetValue(page_no,page_rows){
	return (page_no*page_rows) - page_rows;
}

function renderCustomerRepaymentPage(page_no){
	$(".loading").show();
	$("#electric_table tbody").html("");
	$("#page").hide();
	console.log('renderCustomerRepaymentPage');
	var offset = page_no*rows_per_page;
	var limit= (page_no*rows_per_page) - rows_per_page;

	var search_val = $("[name='search']").val();
	$.ajax({
	method: "GET",
	url: base_url+ customer_repayment_page['data-endpoint'] +"?limit="+limit+"&offset="+offset+"&query="+search_val+"&agent_id="+agent_id
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
				var append_table = '<tr><td>'+(index+1)+'</td><td>'+val[customer_repayment_page['customer_id']]+'</td><td>'+val[customer_repayment_page['customer_name']]+'</td><td>'+val[customer_repayment_page['loan_amount']]+'</td><td>'+val[customer_repayment_page['loan_sanction_date']]+'</td><td>'+val[customer_repayment_page['emi_per_month']]+'</td><td>'+val[customer_repayment_page['no_of_dues_paid']]+'</td><td>'+val[customer_repayment_page['out_standing']]+'</td>'+val[customer_repayment_page['agent_id']]+'</td><td>'+"<button updateId="+customer_repayment_page['customer_id']+"data-target='editModal'>Update</button>"+'</td><td>'+"<button deleteId="+customer_repayment_page['customer_id']+" onclick='deleteCustomerRepaymentPage(this.deleteId)'>Delete</button>"+'</td></tr>';
	
				
				$("#electric_table").append(append_table);
			});
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
function deleteCustomerRepaymentPage(deleteId) {
	console.log("delete",deleteId);
	const deleteURL = base_url + customer_repayment_page['delete-agent'] + "/"  + deleteId
	$.ajax({
		method: "DELETE",
		url: deleteURL
		}).done(function( data) {
			alert(data_updated_message);
		});
}