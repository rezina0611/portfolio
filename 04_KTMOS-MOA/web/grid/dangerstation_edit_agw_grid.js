
const dataSource = {
    api: {
        readData: {url: '/dangerstation/edit/list/data', method: 'GET'}
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
    rowHeaders: ['checkbox'],
    columns: [
        // {
        //     header: '위험국소번호',
        //     name: 'inspectionNo',
        //     hidden: true
        // },
        // {
        //     header: '최소번호체크',
        //     name: 'minRowChk',
        //     hidden: true
        // },
        {
            header: '위험국소조치 이력번호',
            name: 'inspectionMeasuresNo',
            align: 'center',
            width: '150',
        //    sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '확인자',
            name: 'measureUserName',
            align: 'center',
            width: '150'
        //    sortable: true
        },
        {
            header: '조치결과',
            name: 'measureStatusCode',
            align: 'center',
            width: '150'
        //    sortable: true

        },
        {
            header: '조치불가사유',
            name: 'reason',
            align: 'center',
            width: '230'
         //   sortable: true
        },
        {
            header: '조치구분',
            name: 'measureDateDiv',
            align: 'center',
            width: '150',
        //    sortable: true,
            formatter: function (rowData) {
               return fn_halfYear(rowData.value);
            }
        },
        {
            header: '조치일',
            name: 'measureDate',
            align: 'center',
            width: '150',
            formatter: function (rowData) {
                return fn_setYmd(rowData.value);
            }
        },
        {
            header: '조치사항',
            name: 'measureItem',
            align: 'center',
            width: '230'
       //     sortable: true
        },
        {
            header: '조치내역',
            name: 'measureContents',
            align: 'left',
            width: '230'
           // sortable: false
        },
        {
            header: '조치상세내역',
            name: 'measureDetail',
            align: 'left',
            width: '327'
            //       sortable: false
        }
    ],

    data: [
        {
            inspectionMeasuresNo:'71848',
            measureUserName: '이성훈', 
            measureStatusCode: '미완료',  
            reason: '-'
        }, 
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

        for(var i=0; i<deviceGrid.getRowCount(); i++){
            console.log("I = "+i+ ", "+ deviceGrid.getValue(i, 'minRowChk'));
            if(deviceGrid.getValue(i, 'minRowChk')){
                deviceGrid.disableRow(i, deviceGrid.getValue(i, 'minRowChk') );
                break;
            }
        }
    },
    onGridBeforeDestroy: function () {
        //console.log("onGridBeforeDestroy");
    }
});

const gridInit = function() {
    let $formValues = serializeFormToJson($('#dangerStationHistoryList'));
    deviceGrid.readData(1, $formValues, true);
}();

function fn_halfYear(value) {
    let result = "";
    if(value==null || value=='') {
        return "";
    }
    else {
        let year = value[0];
        let month = value[1];
        if(month<7) {
            result = year +"년 "+"상반기";
        }else{
            result = year +"년 "+"하반기";
        }
        return result;
    }
}

function fn_setYmd(value) {
    let result = "";
    if(value==null || value=='') {
        return "";
    }
    else {
        let year = value[0];
        let month = value[1];
        let date = value[2];
        if(month<10)
            month = "0"+month;
        if(date<10){
            date = "0"+date;
        }
        result = year +"-"+ month +"-"+date;
        return result;
    }
}