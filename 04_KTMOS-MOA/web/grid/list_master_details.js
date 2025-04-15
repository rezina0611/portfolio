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

const deviceGrid = new Grid({
    el: document.getElementById('grid'),  
    data: dataSource,
    scrollX: true,
    scrollY: true,
    width: '100%',
    minBodyHeight: 450,
    pageOptions: { perPage: 20},
    columnOptions: { resizable: true },
    columns: [
        {
            header: '상태',
            align: 'center',
            name: 'sangtae',
            width: '80',
            sortable: false
        },
        {
            header: '등록일시',
            name: 'Date',
            align: 'center',
            width: '160',
            sortable: false
        },
        {
            header: '분야',
            name: 'field',
            align: 'center',
            width: '100',
            sortable: false
            // formatter: function (rowData) {
            //     let url = '#';
            //     return '<button class="btn primary-darkcyan" type="button">무선</button>';
            // }
        },
        {
            header: '운용팀',
            name: 'Operationteam',
            align: 'center',
            width: '120',
            sortable: false
        },
        {
            header: '작업자',
            name: 'worker',
            align: 'center',
            width: '120',
            sortable: false
        },
        {
            header: '장비ID',
            name: 'id',
            align: 'center',
            width: '120',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '국소명',
            name: 'localname',
            align: 'center',
            width: '120',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '장비명',
            name: 'equipment',
            align: 'center',
            width: '120',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '사업자명',
            name: 'bussname',
            align: 'center',
            width: '120',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '위치코드',
            name: 'locationcode',
            align: 'center',
            width: '120',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '국사명',
            name: 'saname',
            align: 'center',
            width: '120',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '주소',
            name: 'address',
            align: 'center',
            width: '300',
            sortable: false
        }
    ],
    data: [
        {
        sangtae:'완료',
        Date: '0000-00-00 00:00:00',  
        field: '<button class="btn primary-darkcyan" type="button">무선</button>',        
        Operationteam: '충청본부',          
        worker:'홍길동',    
        id: 'KW00000',
        localname: '',
        equipment: '철원육단-K',             
        bussname: '',                 
        locationcode: '',
        saname: '',
        address: '충청남도 서산시 고북면 신정리 177-0 옥탑 '
        },
        {
        sangtae:'완료',
        Date: '0000-00-00 00:00:00',  
        field: '<button class="btn primary-darkcyan" type="button">무선</button>',        
        Operationteam: '충청본부',          
        worker:'홍길동',    
        id: 'KW00000',
        localname: '',
        equipment: '철원육단-K',             
        bussname: '',                 
        locationcode: 'K0000000',
        saname: '',
        address: '충청남도 서산시 고북면 신정리 177-0 옥탑 '
        },
        {
        sangtae:'완료',
        Date: '0000-00-00 00:00:00',  
        field: '<button class="btn primary-green" type="button">유선</button>',        
        Operationteam: '충청본부',          
        worker:'홍길동',    
        id: 'KW00000',
        localname: 'AAAA',
        equipment: '철원육단-K',             
        bussname: '',                 
        locationcode: '',
        saname: 'AAAA',
        address: '충청남도 서산시 고북면 신정리 177-0 옥탑 '
        },
        {
        sangtae:'완료',
        Date: '0000-00-00 00:00:00',  
        field: '<button class="btn primary-green" type="button">유선</button>',        
        Operationteam: '충청본부',          
        worker:'홍길동',    
        id: 'KW00000',
        localname: '',
        equipment: '철원육단-K',             
        bussname: '',                 
        locationcode: '',
        saname: '',
        address: '충청남도 서산시 고북면 신정리 177-0 옥탑 '
        },
        {
        sangtae:'완료',
        Date: '0000-00-00 00:00:00',  
        field: '<button class="btn primary-green" type="button">유선</button>',        
        Operationteam: '충청본부',          
        worker:'홍길동',    
        id: 'KW00000',
        localname: '',
        equipment: '',             
        bussname: 'AAAA',                 
        locationcode: '',
        saname: '',
        address: '충청남도 서산시 고북면 신정리 177-0 옥탑 '
        },
        {
        sangtae:'완료',
        Date: '0000-00-00 00:00:00',  
        field: '<button class="btn primary-darkcyan" type="button">무선</button>',        
        Operationteam: '충청본부',          
        worker:'홍길동',    
        id: 'KW00000',
        localname: '',
        equipment: '철원육단-K',             
        bussname: '',                 
        locationcode: 'K0000000',
        saname: '',
        address: '충청남도 서산시 고북면 신정리 177-0 옥탑 '
        },
        {
        sangtae:'완료',
        Date: '0000-00-00 00:00:00',  
        field: '<button class="btn primary-green" type="button">유선</button>',        
        Operationteam: '충청본부',          
        worker:'홍길동',    
        id: 'KW00000',
        localname: '',
        equipment: '',             
        bussname: 'AAAA',                 
        locationcode: '',
        saname: '',
        address: '충청남도 서산시 고북면 신정리 177-0 옥탑 '
        },
        {
        sangtae:'완료',
        Date: '0000-00-00 00:00:00',  
        field: '<button class="btn primary-green" type="button">유선</button>',        
        Operationteam: '충청본부',          
        worker:'홍길동',    
        id: 'KW00000',
        localname: 'AAAA',
        equipment: '철원육단-K',             
        bussname: '',                 
        locationcode: '',
        saname: 'AAAA',
        address: '충청남도 서산시 고북면 신정리 177-0 옥탑 '
        },
        {
        sangtae:'완료',
        Date: '0000-00-00 00:00:00',  
        field: '<button class="btn primary-saddlebrown" type="button">전원</button>',        
        Operationteam: '충청본부',          
        worker:'홍길동',    
        id: 'KW00000',
        localname: 'AAAA',
        equipment: '철원육단-K',             
        bussname: 'AAAA',                 
        locationcode: 'K0000000',
        saname: 'AAAA',
        address: '충청남도 서산시 고북면 신정리 177-0 옥탑 '
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