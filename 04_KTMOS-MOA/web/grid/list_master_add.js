let today = new Date();
let startDates;
let role = $('#roleCode').val();
/* FU,MU(권한자) : 7일로 변경, AU(권한자) : 3개월로 변경 */
if(role == 'AU'){
    startDates = today.setMonth(today.getMonth() - 3);
}else if(role == 'FU' || role == 'MU'){
    startDates = today.setDate(today.getDate() - 7);
}else{
    startDates = today.setMonth(today.getMonth() - 1);
}

let picker = tui.DatePicker.createRangePicker({
    language: 'ko',
    startpicker: {
        date: startDates,
        input: '#startDate',
        container: '#datepicker-wrapper1'
    },
    endpicker: {
        date: new Date(),
        input: '#endDate',
        container: '#datepicker-wrapper2'
    }
});

let fromDateVal = $('#startDate').val();
let toDateVal = $('#endDate').val();
let deviceCategoryVal = $('#deviceCategory').val();

const dataSource = {
    api: {
        readData: {url: '/additionalfacilities/list/data', method: 'GET',
            initParams: {"startDate": fromDateVal, "endDate": toDateVal, "deviceCategory": deviceCategoryVal}
        }
    },
    initialRequest: false // 디폴트 값은 true, 아래 gridInit를 통해 호출
}
