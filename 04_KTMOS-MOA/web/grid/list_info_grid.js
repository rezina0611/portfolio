
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

    header : {
        height: 80,
        complexColumns: [
            {
                header: '상태',
                name: 'mergeColumn0',
                childNames: [
                    'title'
                    , 'nearmissPeriod'
                ]
            },
            {
                header: '장비정보',
                name: 'mergeColumn1',
                childNames: ['code', 'gugsa', 'inettie', 'bussName', 'ip','Category','ktNetworkCorps'
                ]
            }
        ]
    },
    columns: [
        {
            header: '처리상태',
            name: 'title',
            align: 'center',
            width: '150',
        },
        {
            header: '처리메시지',
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
            name: 'gugsa',
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
            name: 'inettie',
            align: 'center',
            width: '180',
            sortable: true
        },
        {
            header: '모국명',
            name: 'bussName',
            align: 'center',
            width: '180',
            sortable: true
        },
        {
            header: 'KT운용팀',
            name: 'ip',
            align: 'center',
            width: '180',
            sortable: true
        },
        {
            header: '본부',
            name: 'Category',
            align: 'center',
            width: '200',
            sortable: true
        },
        {
            header: '팀/파트',
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