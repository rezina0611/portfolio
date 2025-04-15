let dateStart = new Date();
let startDays;
let role = $('#roleCode').val();

// 조회기간 시작일 구하기
startDays = getRoleSearchStartDate(role, dateStart, startDays);

let datepicker1 = new tui.DatePicker('#datepicker-wrapper1',
    {
        language: 'ko',
        date: startDays,
        input: {
            element: '#startDate',
            format: 'yyyy-MM-dd'
        }
    });

let datepicker2 = new tui.DatePicker('#datepicker-wrapper2',
    {
        language: 'ko',
        date: new Date(),
        input: {
            element: '#endDate',
            format: 'yyyy-MM-dd'
        }
    });

let fromDateVal = $('#startDate').val();
let toDateVal = $('#endDate').val();

const dataSource = {
    api: {
        readData: {
            url: '/stopwork/list/data', method: 'GET',
            initParams: {"startDate": fromDateVal, "endDate": toDateVal}
        }
    },
    initialRequest: false // 디폴트 값은 true, 아래 gridInit를 통해 호출
}


class TypeRenderer {
    constructor(props) {
        const el = document.createElement('div');

        this.el = el;
        this.render(props);
    }

    getElement() {
        return this.el;
    }

    render(props) {
        switch (props.value) {
            case "C":
                this.el.innerHTML = '재난,재해';
                break;
            case "W":
                this.el.innerHTML = '기상상태';
                break;
            case "S":
                this.el.innerHTML = '안전사고';
                break;
            default:
                this.el.innerHTML = '-';
        }
    }
}

class DateTimeRenderer {
    constructor(props) {
        const el = document.createElement('div');

        this.el = el;
        this.render(props);
    }

    getElement() {
        return this.el;
    }

    render(props) {
        if (props.value) {
            this.el.innerHTML = moment(new Date(props.value)).format('YYYY-MM-DD');
        } else {
            this.el.innerHTML = '-';
        }
    }
}

const stopworkGrid = new tui.Grid({
    el: document.getElementById('grid'),
    data: dataSource,
    scrollX: true,
    scrollY: true,
    bodyHeight: 'fitToParent',
    bodyWidth: 'fitToParent',
    width: '100%',
    minBodyHeight: 40,
    pageOptions: {perPage: 20},
    columnOptions: {
        resizable: true,
        minWidth: '150',
        width: 'auto'
    },
    columns: [
        {
            header: '고유키',
            name: 'stopWorkId',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true,
            hidden: true
        },
        {
            header: '고유번호',
            name: 'stopWorkUniqueNo',
            align: 'center',
            width: '0',
            minWidth: '160',
            sortable: true,
            formatter: function (rowData) {
                let url = '#';
                return '<a href="' + url + '">' + rowData.value + '</a>';
//                return '<a style="text-decoration: underline !important; color:#1baec5;">'+rowData.value+'</a>';
            }
        },
        {
            header: '등록유형',
            name: 'type',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true,
            renderer: {
                type: TypeRenderer
            }
        },
        {
            header: '장애유무',
            name: 'impairment',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true,
            formatter: function (rowData) {
                switch (String(rowData.value)) {
                    case "Y": {
                        return "유"
                    }
                    case "N": {
                        return "무"
                    }
                    default: {
                        return rowData.value
                    }
                }
            }
        },
        {
            header: '장비ID',
            name: 'deviceId',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true
        },
        {
            header: '장비명',
            name: 'deviceName',
            align: 'center',
            width: '0',
            minWidth: '160',
            sortable: true
        },
        {
            header: '시/도',
            name: 'sido',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true
        },
        {
            header: '시/군/구',
            name: 'sigungu',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true
        },
        {
            header: '읍/면/동',
            name: 'eubmyundong',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true
        },
        {
            header: '등록일시',
            name: 'createDate',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true
        },
        {
            header: '소속',
            name: 'createUserDeptNamePath',
            align: 'center',
            width: '0',
            minWidth: '160',
            sortable: true
        },
        {
            header: '등록자',
            name: 'createUserName',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true
        },
        {
            header: '확인자',
            name: 'confirmUserName',
            align: 'center',
            width: '0',
            minWidth: '0',
            sortable: true
        },
    ],
    onGridMounted: function () {
        console.log("onGridMounted");
        stopworkGrid.refreshLayout();
    },
    onGridUpdated: function (data) {
        let perPage = data.instance.store.data.pageOptions.perPage;
        let page = data.instance.store.data.pageOptions.page;
        $('#perPage').val(perPage);
        $('#page').val(page);
        $('#lblTotalCount').empty().html(data.instance.store.data.pageOptions.totalCount);
        stopworkGrid.refreshLayout();
    },
    onGridBeforeDestroy: function () {
        //console.log("onGridBeforeDestroy");
    }
});

stopworkGrid.on('click', (ev) => {
    let stopWorkId = ev.instance.getValue(ev.rowKey, 'stopWorkId', true);
    console.log('clicked', stopWorkId);
    if (ev.columnName == 'stopWorkUniqueNo' && ev.targetType == 'cell') {
        // $('#stopworkList').attr('action', '/stopwork/detail/view/' + stopWorkId);
        // $('#stopworkList').attr("target", "_blank");
        // $('#stopworkList').submit();
        let url = '/stopwork/detail/view/' + stopWorkId;
        window.open(url, "stopwork_detail");
    }
});