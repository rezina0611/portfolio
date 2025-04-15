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
    minBodyHeight: 250,
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
            header: '분야',
            name: 'field',
            align: 'center',
            width: '235',
            sortable: true
            // formatter: function (rowData) {
            //     let url = '#';
            //     return '<button class="btn primary-darkcyan" type="button">무선</button>' + '&nbsp;&nbsp;' +
            //            '<button class="btn primary-green" type="button">유선</button>' + '&nbsp;&nbsp;' +
            //            '<button class="btn primary-saddlebrown" type="button">전원</button>';
            // }
        },
        {
            header: '업무명',
            name: 'jobname',
            align: 'center',
            width: '160',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '본부',
            name: 'headquarters',
            align: 'center',
            width: '160',
            sortable: true
        },
        {
            header: '업무생성자',
            name: 'Taskcreator',
            align: 'center',
            width: '160',
            sortable: true
        },
        {
            header: '시작일',
            name: 'strStartDate',
            align: 'center',
            width: '160',
            sortable: true
        },
        {
            header: '종료일',
            name: 'strEndDate',
            align: 'center',
            width: '160',
            sortable: true
        },
        {
            header: '대상',
            name: 'daesang',
            align: 'center',
            width: '120',
            sortable: true
        },
        {
            header: '상태',
            name: 'situation',
            align: 'center',
            width: '90',
            sortable: false
        },
        {
            header: '완료',
            name: 'complete',
            align: 'center',
            width: '90',
            sortable: false
        },
        {
            header: '미진행',
            name: 'progress',
            align: 'center',
            width: '90',
            sortable: false
        },
        {
            header: '불가',
            name: 'Impossible',
            align: 'center',
            width: '90',
            sortable: false
        }
    ],
    data: [
        {
        editBtn:'',
        field: '<button class="btn primary-darkcyan" type="button">무선</button>' + '&nbsp&nbsp' + 
               '<button class="btn primary-green" type="button">유선</button>' + '&nbsp&nbsp' + 
               '<button class="btn primary-saddlebrown" type="button">전원</button>',  
        jobname: '냉방기 조사',        
        headquarters: '충청본부',          
        Taskcreator:'홍길동',    
        strStartDate: '0000-00-00',
        strEndDate: '0000-00-00',
        daesang: '000',             
        situation: '진행중',                 
        complete: '00',
        progress: '00',
        Impossible: '00'
        },
        {
            editBtn:'',
            field: '<button class="btn primary-darkcyan" type="button">무선</button>',  
            jobname: '냉방기 조사',        
            headquarters: '충청본부',          
            Taskcreator:'홍길동',    
            strStartDate: '0000-00-00',
            strEndDate: '0000-00-00',
            daesang: '000',             
            situation: '완료',                 
            complete: '00',
            progress: '00',
            Impossible: '00'
        },
        {
            editBtn:'',
            field: '<button class="btn primary-green" type="button">유선</button>' + '&nbsp&nbsp' + 
                   '<button class="btn primary-saddlebrown" type="button">전원</button>',  
            jobname: '냉방기 조사',        
            headquarters: '충청본부',          
            Taskcreator:'홍길동',    
            strStartDate: '0000-00-00',
            strEndDate: '0000-00-00',
            daesang: '000',             
            situation: '업무종료',                 
            complete: '00',
            progress: '00',
            Impossible: '00'
        },
        {
            editBtn:'',
            field: '<button class="btn primary-green" type="button">유선</button>',
            jobname: '냉방기 조사',        
            headquarters: '충청본부',          
            Taskcreator:'홍길동',    
            strStartDate: '0000-00-00',
            strEndDate: '0000-00-00',
            daesang: '000',             
            situation: '진행중',                 
            complete: '00',
            progress: '00',
            Impossible: '00'
        },
        {
            editBtn:'',
            field: '<button class="btn primary-darkcyan" type="button">무선</button>'+ '&nbsp&nbsp' +
                   '<button class="btn primary-green" type="button">유선</button>',
            jobname: '냉방기 조사',        
            headquarters: '충청본부',          
            Taskcreator:'홍길동',    
            strStartDate: '0000-00-00',
            strEndDate: '0000-00-00',
            daesang: '000',             
            situation: '진행중',                 
            complete: '00',
            progress: '00',
            Impossible: '00'
        },
        {
            editBtn:'',
            field: '<button class="btn primary-darkcyan" type="button">무선</button>',
            jobname: '냉방기 조사',        
            headquarters: '충청본부',          
            Taskcreator:'홍길동',    
            strStartDate: '0000-00-00',
            strEndDate: '0000-00-00',
            daesang: '000',             
            situation: '진행중',                 
            complete: '00',
            progress: '00',
            Impossible: '00'
        },
        {
            editBtn:'',
            field: '<button class="btn primary-darkcyan" type="button">무선</button>' + '&nbsp&nbsp' + 
                   '<button class="btn primary-green" type="button">유선</button>' + '&nbsp&nbsp' + 
                   '<button class="btn primary-saddlebrown" type="button">전원</button>',  
            jobname: '냉방기 조사',        
            headquarters: '충청본부',          
            Taskcreator:'홍길동',    
            strStartDate: '0000-00-00',
            strEndDate: '0000-00-00',
            daesang: '000',             
            situation: '진행중',                 
            complete: '00',
            progress: '00',
            Impossible: '00'
        }
        
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