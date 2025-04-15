/***
 * Form 요청값을 Serialize 해서 JSON 형식으로 반환
 * @param obj
 * @returns {{}}
 */
function serializeFormToJson(obj) {
    try {
        if(obj[0].tagName && obj[0].tagName.toUpperCase() === "FORM" ) {
            let arr = obj.serializeArray();
            if(arr){ obj = {};
                jQuery.each(arr, function() {
                    obj[this.name] = this.value; });
            }
        }
    } catch(e) {
        alert(e.message);
    } finally {}

    return obj;
}

/**
 * 조직 레벨, 상위코드, 사용여부, 기본값(placeHolder)를 받아서 리스트를 리턴
 * @param searchDeptLevel
 * @param searchSupDeptCode
 * @param searchUseYn
 * @param searchDefaultValue
 * @returns {[]}
 */
function searchDeptInfoLevelList(searchDeptLevel, searchSupDeptCode, searchUseYn, searchDefaultValue) {
    let result = [];

    $.ajax({
        type: 'get',
        url: '/dept/list/level',
        async: false,
        data: {
            searchDeptLevel: searchDeptLevel,
            searchSupDeptCode: searchSupDeptCode,
            searchUseYn: searchUseYn,
        },
        complete: function () {
        },
        success: function (data, textStatus, jqXHR) {
            result.push(
                {
                    label: searchDefaultValue,
                    value: ''
                }
            )
            $.each(data.data.contents, function(i, item) {
                result.push(
                    {
                        label: item.deptName,
                        value: item.deptCode
                    }
                )
            });
        },
        error: function() {
            alert("값을 가져오지 못했습니다.");
        }
    });

    return result;
}

/**
 * 센터 조회를 위해 Dept 코드, 사용여부, 기본값(placeHolder)를 받아서 리스트를 리턴
 * @param searchDeptCode
 * @param searchUseYn
 * @param searchDefaultValue
 * @returns {[]}
 */
function searchDeptCenterMappingLevelList(searchDeptCode, searchUseYn, searchDefaultValue) {
    let result = [];

    $.ajax({
        type: 'get',
        url: '/dept/list/level/center',
        async: false,
        data: {
            searchDeptCode: searchDeptCode,
            searchUseYn: searchUseYn,
        },
        complete: function () {
        },
        success: function (data, textStatus, jqXHR) {
            result.push(
                {
                    label: searchDefaultValue,
                    value: ''
                }
            )
            $.each(data.data.contents, function(i, item) {
                result.push(
                    {
                        label: item.center,
                        value: item.deptCode
                    }
                )
            });
        },
        error: function() {
            alert("값을 가져오지 못했습니다.");
        }
    });

    return result;
}

/**
 * 날자 형식에 맞춰서 리턴
 * @param date
 * @param format
 * @returns {*}
 */
function parseFormatDate(date, format) {
    const map = {
        yyyy: date.getFullYear(),
        MM: fillZero(2, (date.getMonth() + 1).toString()),
        dd: fillZero(2, date.getDate().toString()),
        HH: fillZero(2, date.getHours().toString()),
        mm: fillZero(2, date.getMinutes().toString()),
        ss: fillZero(2, date.getSeconds().toString())
    }

    function fillZero(width, str){
        return str.length >= width ? str : new Array(width-str.length + 1).join('0') + str;
    }

    return format.replace(/yyyy|MM|dd|HH|mm|ss/gi, matched => map[matched])
}

/**
 * UserId 유일여부 체크(유일: true, 중복: false)
 * @param id
 * @returns {boolean}
 */
function checkUserId(id) {
    let valid = false;
    $.ajax({
        type: 'get',
        url: '/users/write/data/idcheck',
        async: false,
        data: {
            id: id
        },
        success: function (data, textStatus, jqXHR) {
            valid = data.result;
        }
    });
    return valid;
}

/**
 * deptCode 유일여부 체크(유일: true, 중복: false)
 * @param deptNamePath
 * @returns {boolean}
 */
function checkDeptCode(deptCode) {
    let valid = false;
    $.ajax({
        type: 'get',
        url: '/dept/write/data/deptcodecheck',
        async: false,
        data: {
            deptCode: deptCode
        },
        success: function (data, textStatus, jqXHR) {
            valid = data.result;
        }
    });
    return valid;
}

/**
 * deptNamePath 유일여부 체크(유일: true, 중복: false)
 * @param deptNamePath
 * @returns {boolean}
 */
function checkDeptNamePath(deptNamePath) {
    let valid = false;
    $.ajax({
        type: 'get',
        url: '/dept/write/data/deptnamepathcheck',
        async: false,
        data: {
            deptNamePath: deptNamePath
        },
        success: function (data, textStatus, jqXHR) {
            valid = data.result;
        }
    });
    return valid;
}

/**
 * deptCenter의 deptCode 유일여부 체크(유일: true, 중복: false)
 * @param deptCode
 * @returns {boolean}
 */
function checkDeptCenter(deptCode) {
    let valid = false;
    $.ajax({
        type: 'get',
        url: '/dept/write/data/deptcentercheck',
        async: false,
        data: {
            deptCode: deptCode
        },
        success: function (data, textStatus, jqXHR) {
            valid = data.result;
        }
    });
    return valid;
}

/**
 * 공백이 있는지 여부 체크
 * @param value
 * @returns {boolean}
 */
function checkValidNonSpace(value) {
    let valid = true;

    try {
        if (/[\s]/g.test(value)) {
            valid = false;
        }
    } catch(e) {
        alert(e.message);
    } finally {}

    return valid;
}

/**
 * 숫자만 입력되었는지 여부 체크
 * @param value
 * @returns {boolean}
 */
function checkValidOnlyNumber(value) {
    let valid = true;

    try {
        if (/[^0-9]/g.test(value)) {
            valid = false;
        }
    } catch(e) {
        alert(e.message);
    } finally {}

    return valid;
}

/**
 * Http Response의 Content-disposition에 첨부된 파일 다운로드
 * 참고: https://gist.github.com/bierik/0baa0de30cc4ee6d3fbf8485c4d12bb8
 * @param url
 * @param loadingMask
 * @returns {*|jQuery}
 */
function contentDispositionFileDownload(url, loadingMask) {
    if (loadingMask) {loading_mask.open();}
    let loaded = $.Deferred();
    let request = new XMLHttpRequest();
    // setting the responseType has to be after the `request.open`
    // `arraybuffer` is necessary for Internet Explorer and Edge becuase they do not support `blob` as response type
    request.responseType = "arraybuffer";
    request.open('GET', url);
    request.onload = function () {
        loaded.resolve();
        let contentDisposition = this.getResponseHeader('content-disposition');
        let contentType = this.getResponseHeader('content-type');
        let filename = contentDisposition.match(/filename="(.+)"/)[1];
        let file = new Blob([this.response], { type: contentType });

        // For Internet Explorer and Edge
        if ('msSaveOrOpenBlob' in window.navigator) {
            window.navigator.msSaveOrOpenBlob(file, filename);
        } else { // For Firefox and Chrome
            // Bind blob on disk to ObjectURL
            let data = URL.createObjectURL(file);
            let a = document.createElement("a");
            a.style = "display: none";
            a.href = data;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            // For Firefox
            setTimeout(function(){
                document.body.removeChild(a);
                // Release resource on disk after triggering the download
                window.URL.revokeObjectURL(data);
            }, 100);
        }
    };
    request.onloadend = function() {
        loaded.resolve();
        if (loadingMask) {loading_mask.close();}
    };
    request.send();

    return loaded;
}