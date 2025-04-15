
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
                header: '변경기본정보',
                name: 'mergeColumn0',
                childNames: [
                    'update','nearmissPeriod','cname','cdate','unumber','category','eqtype','network','Operationtime'
                ]
            }
        ]
    },
    columns: [
        {
            header: '업데이트사유',
            name: 'update',
            align: 'center',
            width: '180',
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '업데이트디바이스',
            name: 'nearmissPeriod',
            align: 'center',
            width: '180'
        },
        {
            header: '변경자명',
            name: 'cname',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '변경일',
            name: 'cdate',
            align: 'center',
            width: '170',
            sortable: true
        },
        {
            header: '고유번호',
            name: 'unumber',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '장바카테고리',
            name: 'category',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '장비TYPE',
            name: 'eqtype',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '네트워크단',
            name: 'network',
            align: 'center',
            width: '210',
            sortable: true
        },
        {
            header: '운용팀',
            name: 'Operationtime',
            align: 'center',
            width: '255',
            sortable: true
        }
    ],
    data: [
        {
        update:'히스토리생성',
        nearmissPeriod: 'DB',  
        cname: '김재길',        
        cdate: '2020-08-21',          
        unumber:'00000029',    
        category: 'WIFI',
        eqtype: '',           
        network: '강원무선운용센터',                 
        Operationtime: '강원무선운용센터 영서엔지니어링팀'
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