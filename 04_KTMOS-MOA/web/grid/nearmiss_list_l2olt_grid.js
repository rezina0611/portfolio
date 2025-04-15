let today = new Date();
let startDates = today.setMonth(today.getMonth() - 12);

let picker = tui.DatePicker.createRangePicker({
	language: 'ko',
	format: 'yyyy-MM-dd',
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

picker.on('change:start', () => {
    if(picker.getEndDate() == null){
        picker.setEndDate(picker.getStartDate());
    }
});

let fromDateVal = $('#startDate').val();
let toDateVal = $('#endDate').val();

const dataSource = {
    api: {
        readData: {url: '/nearmiss/list/data', method: 'GET',
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

    header : {
        height: 80,
        complexColumns: [
            {
                header: '아차사고',
                name: 'mergeColumn0',
                childNames: [
                    'title'
                    , 'nearmissPeriod'
                ]
            },
            {
                header: '장비정보',
                name: 'mergeColumn1',
                childNames: ['uniqueNo', 'deviceUseYn', 'gugsa', 'inettie', 'deviceType', 'deviceName', 'bussName', 'ip','Category','ktNetworkCorps',
                    'ktOperationTeam', 'operationHeadoffice', 'operationCenter'
                ]
            }
        ]
    },
    columns: [
        {
            header: '내용',
            name: 'title',
            align: 'center',
            width: '150',
            formatter: function (val) {
                if(val.value){
                    if(val.value.length>10)
                        return val.value.substring(0, 10);
                    else
                        return val.value;
                }else{
                    return "";
                }
            }
        },
        {
            header: '설정기간',
            name: 'nearmissPeriod',
            align: 'center',
            width: '150'
        },
        {
            header: '장비폐기',
            name: 'deviceUseYn',
            align: 'center',
            width: '100',
            sortable: true,
            formatter: function (v) {
                switch (v.value) {
                    case "N":
                        return '폐기';
                    case "Y":
                        return '운용';
                    default:
                        return '운용';
                }
            }
        },
        {
            header: '국사',
            name: 'gugsa',
            align: 'center',
            width: '150',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: 'INET-TIE',
            name: 'inettie',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '사업자명',
            name: 'bussName',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: 'IP',
            name: 'ip',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '장비Category (장비구분)',
            name: 'Category',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '네트워크단',
            name: 'ktNetworkCorps',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '운용팀',
            name: 'ktOperationTeam',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '운용본부',
            name: 'operationHeadoffice',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '센터',
            name: 'operationCenter',
            align: 'center',
            width: '150',
            sortable: true
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
        let nearmissNo = ev.instance.getValue(ev.rowKey, 'nearmissNo', true);
        let uniqueNo = ev.instance.getValue(ev.rowKey, 'uniqueNo', true);
        let deviceCategory = ev.instance.getValue(ev.rowKey, 'deviceCategory', true);
        //console.log("ev click uniqueNo == "+uniqueNo);
        // let url = "/nearmiss/edit/"+uniqueNo+"/"+deviceCategory+"/"+nearmissNo;
        let url = "/nearmiss/edit/"+uniqueNo+"/"+deviceCategory;
        window.open(url, "detailViewer", "");
    }
});