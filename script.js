$(document).ready(function () {
    $("#entry_date").val(moment(new Date()).format('YYYY-MM-DD'));
    $("#negotiation_date").val(moment(new Date()).format('YYYY-MM-DD'));
    $("#start_date").val(moment(new Date()).format('YYYY-MM-DD'));
    $("#end_date").val(moment(new Date(addDaysWRONG(new Date(), 10))).format('YYYY-MM-DD'));

    let a = $("#number_a")
    let b = $("#number_b")
    let c = $("#number_c")
    let d = $("#number_d")

    let d_nd = $("#number_d_nd")
    let a_nd = $("#number_a_nd")
    let d1 = $("#number_d1")

    a.on("change", () => {
        if (b.val() && c.val()){
            let value = (a.val() + b.val()) * c.val() / 100
            d.val(Number.isInteger(value) ? value : value.toFixed(2));
            
            d_nd.val(d.val());
            a_nd.val(a.val());

            let value_1 = d.val() / a.val() * 100;
            d1.val(Number.isInteger(value_1) ? value_1 : value_1.toFixed(2))
        }
    })
    b.on("change", () => {
        if (a.val() && c.val()){
            let value = (a.val() + b.val()) * c.val() / 100
            d.val(Number.isInteger(value) ? value : value.toFixed(2));
            
            d_nd.val(d.val());
            a_nd.val(a.val());

            let value_1 = d.val() / a.val() * 100;
            d1.val(Number.isInteger(value_1) ? value_1 : value_1.toFixed(2))
        }
    })
    c.on("change", () => {
        if (b.val() && a.val()){
            let value = (a.val() + b.val()) * c.val() / 100
            d.val(Number.isInteger(value) ? value : value.toFixed(2));
            
            d_nd.val(d.val());
            a_nd.val(a.val());

            let value_1 = d.val() / a.val() * 100;
            d1.val(Number.isInteger(value_1) ? value_1 : value_1.toFixed(2))
        }
    })

    $("#profit_save").on("click", () => {
        const data = {
            d: d.val(),
            d1: d1.val(),
        }
        alert(JSON.stringify(data))
    })

    //Engineer
    $("#info-engineer_update").on('click', () => {
        let select_engineer = $("#info-engineer_select").val();
        if (select_engineer == 1) { 
            $.getJSON('json.json', (data) => {
                const engineer = data.engineer;
                $("#info-engineer_company").val(engineer.company_name);
                $("#info-engineer_communications").val(engineer.info_engineer);
                $("#info-engineer_email").val(engineer.email);
                $("#info-engineer_supervisor").val(engineer.supervisor);
                $("#info-engineer_address").val(engineer.address);
                $("#info-engineer_communications_company").val(engineer.tel_company);
                $("#info-engineer_address_company").val(engineer.address_company);
            })
        }
    })

    $("#info-engineer_save").on('click', () => {
        const name_company = $("#info-engineer_company").val();
        const communication = $("#info-engineer_communications").val();
        const email = $("#info-engineer_email").val();
        const supervisor = $("#info-engineer_supervisor").val();
        const address = $("#info-engineer_address").val();
        const communication_company = $("#info-engineer_communications_company").val();
        const address_company = $("#info-engineer_address_company").val();

        alert(JSON.stringify({
            name_company,
            communication,
            email,
            supervisor,
            address,
            communication_company,
            address_company,
        }))
    })

    //Project
    $("#project_save").on('click', () => {
        const project_id = $("#project_id").val();
        const project_name = $("#project_name").val();
        const project_skills = $("#project_skills").val();
        const project_process = $("#project_process").val();
        const project_person = $("#project_person").val();
        const project_name_company = $("#project_name_company option:selected").text();
        const project_start_date = $("#project_start_date").val();
        const project_end_date = $("#project_end_date").val();

        alert(JSON.stringify({
            project_id,
            project_name,
            project_skills,
            project_process,
            project_person,
            project_name_company,
            project_start_date,
            project_end_date,
        }))
    })

    //Customer
    $("#customer_save").on('click', () => {
        const customer_name = $("#customer_name").val();
        const customer_address = $("#customer_address").val();
        const customer_department = $("#customer_department").val();
        const customer_supervisor = $("#customer_supervisor").val();
        const customer_email = $("#customer_email").val();
        const customer_phone = $("#customer_phone").val();
        const customer_address_pay = $("#customer_address_pay").val();
        const customer_department_pay = $("#customer_department_pay").val();
        const customer_payer = $("#customer_payer").val();
        const customer_tel_pay = $("#customer_tel_pay").val();
        const customer_mail_pay = $("#customer_mail_pay").val();
        

        alert(JSON.stringify({
            customer_name,
            customer_address,
            customer_department,
            customer_supervisor,
            customer_email,
            customer_phone,
            customer_address_pay,
            customer_department_pay,
            customer_payer,
            customer_tel_pay,
            customer_mail_pay,
        }))
    })

    $("#customer_search").on('click', () => {
        alert('Search')
    })

    //Collected
    $("#collected_save").on('click', () => {
        const collected_form = $("#collected_form").val();
        const collected_investment_1 = $("#collected_investment_1  option:selected").text();
        const collected_investment_2 = $("#collected_investment_2  option:selected").text();
        const collected_investment_3 = $("#collected_investment_3  option:selected").text();
        const collected_investment_4 = $("#collected_investment_4  option:selected").text();
        const collected_single_type = $("#collected_single_type option:selected").text();
        const collected_tax = $("#collected_tax option:selected").text();
        const collected_working_time = $("#collected_working_time").val();
        const collected_price_lack_of_time = $("#collected_price_lack_of_time").val();
        const collected_price_excessive_time = $("#collected_price_excessive_time").val();
        const collected_unit = $("#collected_unit").val();
        const collected_other = $("#collected_other").val();

        alert(JSON.stringify({
            collected_form,
            collected_investment_1,
            collected_investment_2,
            collected_investment_3,
            collected_investment_4,
            collected_single_type,
            collected_tax,
            collected_working_time,
            collected_price_lack_of_time,
            collected_price_excessive_time,
            collected_unit,
            collected_other,
        }))
    })

    //Cost
    $("#cost_save").on('click', () => {
        const cost_form = $("#cost_form").val();
        const cost_investment_1 = $("#cost_investment_1  option:selected").text();
        const cost_investment_2 = $("#cost_investment_2  option:selected").text();
        const cost_investment_3 = $("#cost_investment_3  option:selected").text();
        const cost_investment_4 = $("#collected_investment_4  option:selected").text();
        const cost_single_type = $("#cost_single_type option:selected").text();
        const cost_tax = $("#cost_tax option:selected").text();
        const cost_working_time = $("#cost_working_time").val();
        const cost_price_lack_of_time = $("#cost_price_lack_of_time").val();
        const cost_price_excessive_time = $("#cost_price_excessive_time").val();
        const cost_unit = $("#cost_unit").val();
        const cost_other = $("#cost_other").val();
        const cost_travel_expenses = $("#cost_travel_expenses").val();
        const cost_insurance = $("#cost_insurance").val();

        alert(JSON.stringify({
            cost_form,
            cost_investment_1,
            cost_investment_2,
            cost_investment_3,
            cost_investment_4,
            cost_single_type,
            cost_tax,
            cost_working_time,
            cost_price_lack_of_time,
            cost_price_excessive_time,
            cost_unit,
            cost_other,
            cost_travel_expenses,
            cost_insurance,
        }))
    })

    $("#menu_bar").on('click', () => {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    })
    
    $("#user_info").on('click', () => {
        $("#user_info_ul").css({
            "position": "fixed", 
            "inset": "0px -40px auto 350px",
            "margin": "0px",
            "transform": "translate(-61px, 37px)",
            "display": "block"
        })
    })

    $("#dropdown_menu").on('click', () => {
        var x = document.getElementById("dropdown_list");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    })

    $(document).on('click', function (e) {
        if ($(e.target).closest("#dropdown_menu").length === 0) {
            $("#dropdown_list").hide();
        }
        if ($(e.target).closest("#menu_bar").length === 0) {
            $("#myLinks").hide();
        }
        if ($(e.target).closest("#user_info").length === 0) {
            $("#user_info_ul").hide();
        }
    });

    $(window).on('scroll', () => {
        $("#myLinks").hide();
        $("#user_info_ul").hide();
    })

    $("#dropdown_list button").on('click', () => {
        $("#dropdown_list").css({"display": "none"})
    })

    

    function addDaysWRONG(date, days) {
        var result = new Date();
        result.setDate(date.getDate() + days);
        return result;
    }


});