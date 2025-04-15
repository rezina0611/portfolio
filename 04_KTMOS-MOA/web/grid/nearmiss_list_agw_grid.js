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
                childNames: ['uniqueNo', 'deviceUseYn', 'gugsa', 'deviceCategory', 'deviceType', 'deviceName', 'mgid', 'ip','type','ktNetworkCorps',
                    'ktOperationTeam', 'operationHeadoffice', 'operationCenter'
                ]
            }
        ]
    },
    columns: [
        // {
        //     header: '아차사고번호',
        //     name: 'nearmissNo',
        //     align: 'center',
        //     width: '150',
        //     hidden:true,
        //     sortable: true
        // },
        // {
        //     header: '고유번호',
        //     name: 'uniqueNo',
        //     align: 'center',
        //     width: '150',
        //     hidden:true,
        //     sortable: true
        // },
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
        // {
        //     header: '장비Category',
        //     name: 'deviceCategory',
        //     align: 'center',
        //     width: '150',
        //     sortable: true,
        //     hidden: true,
        // },
        // {
        //     header: '장비Type',
        //     name: 'deviceType',
        //     align: 'center',
        //     width: '150',
        //     sortable: true,
        //     hidden: true,
        // },
        {
            header: '장비명',
            name: 'deviceName',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: 'MGID',
            name: 'mgid',
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
            header: '설치유형',
            name: 'type',
            align: 'center',
            width: '150',
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