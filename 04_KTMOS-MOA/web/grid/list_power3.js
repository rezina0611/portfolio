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

const deviceGrid = new Grid({
    el: document.getElementById('grid5'),  
    data: dataSource,
    scrollX: true,
    scrollY: true,
    width: '100%',
    minBodyHeight: 400,
    pageOptions: { perPage: 20},
    columnOptions: { resizable: true },
    columns: [
        {
            header: '수정',
            align: 'center',
            name: 'editBtn',
            width: '80',
            sortable: false,
            formatter: function (rowData) {
                let url = '#';
                return '<button class="btn primary-gra" type="button">수정</button>';
            }

        },
        {
            header: '업무명',
            name: 'onsiteName',
            align: 'center',
            width: '270',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '지역',
            name: 'dept1name',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '본부',
            name: 'dept2name',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '운용팀',
            name: 'team',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '대표장비ID',
            name: 'deviceId',
            align: 'center',
            width: '150',
            sortable: true
        },
        
        {
            header: '업무시작일',
            name: 'strStartDate',
            align: 'center',
            width: '125',
            sortable: true

        },
        {
            header: '업무종료일',
            name: 'strEndDate',
            align: 'center',
            width: '125',
            sortable: true

        },
        {
            header: '대상',
            name: 'totalCnt',
            align: 'center',
            width: '80',
            sortable: false
        },
        {
            header: '완료',
            name: 'endCnt',
            align: 'center',
            width: '80',
            sortable: false
        },
        {
            header: '진행중',
            name: 'ingCntNonEndCnt',
            align: 'center',
            width: '80',
            sortable: false
        },
        {
            header: '불가',
            name: 'nokCnt',
            align: 'center',
            width: '80',
            sortable: false
        },
        {
            header: '진행률',
            name: 'ingPer',
            align: 'center',
            width: '80',
            sortable: false,
            formatter: function (rowData) {
               return rowData.value + '%';
            }
        }
    ],
    data: [
        {
        editBtn:'수정',
        onsiteName: 'OOO 업무명',       //업무명
        dept1name: 'KT MOS 북부',       //지역
        dept2name: '경영총괄',          //본부
        team: '전체',                   //운용팀
        deviceId:'USKG004067',          //대표장비ID
        strStartDate: '2021-09-01',
        strEndDate: '2021-09-30',
        totalCnt: '5352',             
        endCnt: '1562',                 
        ingCntNonEndCnt: '3738',
        nokCnt: '7',
        ingPer: '29'
        },
        {
        editBtn:'수정',
        onsiteName: 'OOO 업무명',       //업무명
        dept1name: 'KT MOS 북부',       //지역
        dept2name: '경영총괄',          //본부
        team: '윤리경영실',                   //운용팀
        deviceId:'USKG004060',          //대표장비ID
        strStartDate: '2021-09-01',
        strEndDate: '2021-09-30',
        totalCnt: '1234',             
        endCnt: '1562',                 
        ingCntNonEndCnt: '700',
        nokCnt: '2',
        ingPer: '5'
        },
        {
        editBtn:'수정',
        onsiteName: 'OOO 업무명',       //업무명
        dept1name: 'KT MOS 북부',       //지역
        dept2name: '경영총괄',          //본부
        team: '경영기획팀',             //운용팀
        deviceId:'USKG004059',          //대표장비ID
        strStartDate: '2021-09-01',
        strEndDate: '2021-09-30',
        totalCnt: '1234',             
        endCnt: '1562',                 
        ingCntNonEndCnt: '700',
        nokCnt: '1',
        ingPer: '6'
        },
    ],

    onGridMounted: function () {
        //console.log("onGridMounted");
    },
    onGridUpdated: function (data) {
        //console.log("onGridUpdated");
        let perPage = data.instance.store.data.pageOptions.perPage;
        let page = data.instance.store.data.pageOptions.page;
        $perPage.val(perPage);
        $page.val(page);
        $lblTotalCount.empty().html(data.instance.store.data.pageOptions.totalCount);
        loading_mask.close();
    },
    onGridBeforeDestroy: function () {
        //console.log("onGridBeforeDestroy");
    }
});

deviceGrid.on('click', (ev) => {
    if (ev.columnName == 'deviceId' && ev.targetType == 'cell') {
        let inspectionNo = ev.instance.getValue(ev.rowKey, 'inspectionNo', true);
        let url = '/dangerstation/detail/' +inspectionNo;
        window.open(url, "dangerstationDetailViewer", "");
    }
});