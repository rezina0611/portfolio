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
var calMonthKo = new tui.DatePicker('#datepicker-month-ko', {
    date: startDates,
    language: 'ko',
    type: 'month',
    input: {
        element: '#datepicker-input-ko',
        format: 'yyyy-MM'
    }
});

var calMonthKo = new tui.DatePicker('#datepicker-month-ko2', {
    date: startDates,
    language: 'ko',
    type: 'month',
    input: {
        element: '#datepicker-input-ko2',
        format: 'yyyy-MM'
    }
});
let fromDateVal = $('#startDate').val();
let toDateVal = $('#endDate').val();
let deviceCategoryVal = $('#deviceCategory').val();

const dataSource = {
    api: {
        readData: {url: '/additionalfacilities/list/data', method: 'GET',
            initParams: {"startDate": fromDateVal, "endDate": toDateVal, "deviceCategory": deviceCategoryVal}}
    },
    initialRequest: false // 디폴트 값은 true, 아래 gridInit를 통해 호출
}

/*const dataSource = {
    api: {
        readData: {url: '/dangerstation/list/data', method: 'GET'}
    },
    initialRequest: false // 디폴트 값은 true, 아래 gridInit를 통해 호출
}*/

const deviceGrid = new Grid({
    el: document.getElementById('onsite'),  //onsite
    data: dataSource,
    scrollX: true,
    scrollY: true,
    width: '100%',
    minBodyHeight: 400,
    pageOptions: { perPage: 20},
    columnOptions: { resizable: true },
    columns: [
        {
            header: '등록일시',
            name: 'strWorkDate',
            align: 'center',
            width: '200',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '본부',
            name: 'dept2name',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '팀',
            name: 'dept3name',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '진행상태',
            name: 'statusNm',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '작업자',
            name: 'workerNm',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '위치코드',
            name: 'deviceId',
            align: 'center',
            width: '200',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '국사명',
            name: 'deviceName',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: 'WriteID',
            name: 'WriteID',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '모국명',
            name: 'h_name',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: 'KT운용팀',
            name: 'kt_team',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '국사등급',
            name: 'grade',
            align: 'center',
            width: '200',
            sortable: true
        }
    ]
});

deviceGrid.on('click', (ev) => {
    if (ev.columnName == 'deviceId' && ev.targetType == 'cell') {
        let inspectionNo = ev.instance.getValue(ev.rowKey, 'inspectionNo', true);
        let url = '/dangerstation/detail/' +inspectionNo;
        window.open(url, "dangerstationDetailViewer", "");
    }
});