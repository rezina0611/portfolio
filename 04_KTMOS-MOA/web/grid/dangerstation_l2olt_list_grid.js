
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
    columns: [
        {
            header: '위험국소번호',
            name: 'inspectionNo',
            align: 'center',
            width: '150',
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
            }
        },
        {
            header: '국사',
            name: 'gugsa',
            align: 'center',
            width: '150',
            sortable: true,
        },
        {
            header: 'INET-TIE',
            name: 'INET-TIE',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '사업자명',
            name: 'bussName',
            align: 'center',
            width: '120',
            sortable: true,
        },
        {
            header: 'IP',
            name: 'ip',
            align: 'center',
            width: '100',
            sortable: true
        },
        {
            header: '장비구분',
            name: 'Category',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '폐기여부',
            name: 'deviceUseYn',
            align: 'center',
            width: '150',
            sortable: true
        },
        {
            header: '점검일',
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
            sortable: false
        },
        {
            header: '시/도',
            name: 'sido',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '시/군/구',
            name: 'sigungu',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '읍/면/동',
            name: 'eubmyundong',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '위험도시급성',
            name: 'dangerUrgency',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '감전위험여부',
            name: 'electricShockDangerYn',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '위치구분',
            name: 'location',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '유형',
            name: 'type',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '위험요소',
            name: 'factor',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '개선사항',
            name: 'improvement',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '조치결과',
            name: 'statusCode',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '주관부서',
            name: 'mainDeptName',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '조치사항',
            name: 'measureItem',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '조치내역',
            name: 'measureContents',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '사진총계',
            name: 'totalImgCnt',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '조치전',
            name: 'beforeCnt',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '조치후',
            name: 'afterCnt',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '안전보고표지',
            name: 'safetStickerCnt',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '안전작업지시서',
            name: 'workOrderCnt',
            align: 'center',
            width: '150',
            sortable: false
        },
        {
            header: '안전작업절차서',
            name: 'workProcedureCnt',
            align: 'center',
            width: '150',
            sortable: false
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
        let inspectionNo = ev.instance.getValue(ev.rowKey, 'inspectionNo', true);
        let url = '/dangerstation/detail/' +inspectionNo;
        window.open(url, "dangerstationDetailViewer", "");
    }
});