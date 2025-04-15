let today = new Date();
let startDates;
let role = $('#roleCode').val();
startDates = today.setMonth(today.getMonth() - 12);

let datepicker1 = new tui.DatePicker('#datepicker-wrapper1', {
    date: startDates,
    language: 'ko',
    type: 'month',
    input: {
        element: '#startDate',
        format: 'yyyy-MM'
    }
});

let datepicker2 = new tui.DatePicker('#datepicker-wrapper2', {
    date: new Date(),
    language: 'ko',
    type: 'month',
    input: {
        element: '#endDate',
        format: 'yyyy-MM'
    }
});

let fromDateVal = $('#startDate').val();
let toDateVal = $('#endDate').val();
//let deviceCategoryVal = $('#deviceCategory').val();

const dataSource = {
    api: {
        readData: {url: '/onsite/list/data', method: 'GET',
            //initParams: {"startDate": fromDateVal, "endDate": toDateVal, "deviceCategory": deviceCategoryVal}}
            initParams: {"startDate": fromDateVal, "endDate": toDateVal}}
    },
    initialRequest: false // 디폴트 값은 true, 아래 gridInit를 통해 호출
}

const deviceGrid = new Grid({
    el: document.getElementById('grid'),
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
            header: '대표장비ID',
            name: 'deviceId',
            align: 'center',
            width: '150',
            sortable: true
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
            name: 'dept3name',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '업무시작일',
            name: 'strStartDate',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '업무종료일',
            name: 'strEndDate',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '대상',
            name: 'totalCnt',
            align: 'center',
            width: '100',
            sortable: false
        },
        {
            header: '완료',
            name: 'endCnt',
            align: 'center',
            width: '100',
            sortable: false
        },
        {
            header: '미진행',
            name: 'ingCntNonEndCnt',
            align: 'center',
            width: '100',
            sortable: false
        },
        {
            header: '불가',
            name: 'nokCnt',
            align: 'center',
            width: '100',
            sortable: false
        },
        {
            header: '진행률',
            name: 'ingPer',
            align: 'center',
            width: '100',
            sortable: false,
            formatter: function (rowData) {
               return rowData.value + '%';
            }
        }
    ],
    onGridMounted: function () {
        //console.log("onGridMounted");
    },
    onGridUpdated: function (data) {
        let perPage = data.instance.store.data.pageOptions.perPage;
        let page = data.instance.store.data.pageOptions.page;
        $('#perPage').val(perPage);
        $('#page').val(page);
        $('#lblTotalCount').empty().html(data.instance.store.data.pageOptions.totalCount);
        loading_mask.close();
    },
    onGridBeforeDestroy: function () {
        //console.log("onGridBeforeDestroy");
    }
});

deviceGrid.on('click', (ev) => {
    if (ev.columnName == 'onsiteName' && ev.targetType == 'cell') {
		// 검색창과 무관하기에 팝업 호출 형태를 변경함... (파라메터를 그리드에 해당하는걸로 전달하기 위해...)
		let onsiteNo = ev.instance.getValue(ev.rowKey, 'onsiteNo', true);
		let url = '/onsite/detaillist/' + onsiteNo;
		//window.open(url, "detailViewer", "");
		location.href=url;
		/*$('#deviceList').attr('action','/acceptcheck/edit/'+deviceId);
        $('#deviceList').submit();*/
    }

    if (ev.columnName == 'editBtn' && ev.targetType == 'cell') {
		let onsiteNo = ev.instance.getValue(ev.rowKey, 'onsiteNo', true);
		let url = '/onsite/masteredit/' + onsiteNo;
		location.href=url;

    }
});