
const dataSource = {
    api: {
        readData: {url: '/dangerstation/list/data', method: 'GET'}
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

    rowHeaders:['checkbox'],
    header : {
        height: 80,
        complexColumns: [
            {
                header: '장비정보',
                name: 'mergeColumn1',
                childNames: ['nearmissPeriod','code', 'WriteID', 'name1', 'name2', 'kt_w','kt_time','Operation','Operation_time','manager','ktNetworkCorps'
                ]
            }
        ]
    },
    columns: [
        
        {
            header: '국사폐기',
            name: 'nearmissPeriod',
            align: 'center',
            width: '150'
        },
        {
            header: '위치코드',
            name: 'code',
            align: 'center',
            width: '180',
            sortable: true
        },
        {
            header: 'WriteID',
            name: 'WriteID',
            align: 'center',
            width: '180',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '국사명',
            name: 'name1',
            align: 'center',
            width: '180',
            sortable: true
        },
        {
            header: '모국명',
            name: 'name2',
            align: 'center',
            width: '180',
            sortable: true
        },
        {
            header: 'KT네트워크단',
            name: 'kt_w',
            align: 'center',
            width: '180',
            sortable: true
        },
        {
            header: 'KT운용팀',
            name: 'kt_time',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '운용본부',
            name: 'Operation',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '운용팀',
            name: 'Operation_time',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '담당자',
            name: 'manager',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '국사등급',
            name: 'ktNetworkCorps',
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