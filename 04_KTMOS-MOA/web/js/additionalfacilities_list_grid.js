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
            initParams: {"startDate": fromDateVal, "endDate": toDateVal, "deviceCategory": deviceCategoryVal}}
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
            header: '장비ID',
            name: 'deviceId',
            align: 'center',
            width: '150',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '장비명',
            name: 'deviceName',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '장비카테고리',
            name: 'deviceCategory',
            align: 'center',
            width: '150',
            sortable: true,
            formatter: function (rowData) {
                if(rowData.value == 'REPEATER'){
	                return '중계기';
				}else{
					return rowData.value;
				}
            }
        },
        {
            header: '장비Type',
            name: 'deviceType',
            align: 'center',
            width: '100',
            sortable: true
        },
        {
            header: '점검일시',
            name: 'inspectionDate',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '점검자명',
            name: 'inspectionUserName',
            align: 'center',
            width: '100',
            sortable: true
        },
        {
            header: '시/도',
            name: 'sido',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '시/군/구',
            name: 'sigungu',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '읍면동',
            name: 'eubmyundong',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '번지',
            name: 'bungi',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '상세주소',
            name: 'addressDetail',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '점검번호(key용)',
            name: 'inspectionNo',
            sortable: false,
            visible: false
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
    if (ev.columnName == 'deviceId' && ev.targetType == 'cell') {
		// 검색창과 무관하기에 팝업 호출 형태를 변경함... (파라메터를 그리드에 해당하는걸로 전달하기 위해...)
		let inspectionNo = ev.instance.getValue(ev.rowKey, 'inspectionNo', true);
		let url = '/additionalfacilities/edit/'+inspectionNo;
		window.open(url, "detailViewer", "");
    }
});