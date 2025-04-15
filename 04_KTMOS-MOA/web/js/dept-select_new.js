function setDeptCodePath($dept1Code, $dept2Code, $dept3Code, deptCodePath) {
    var isSet = false;
    try{
        if (!!deptCodePath && String(deptCodePath).length > 0) {
            const dept =  deptCodePath.split("/");
            if (null !== $dept1Code && dept.length > 0 && !!dept[0] && String(dept[0]).length > 0) {
                $dept1Code.val(String(dept[0]));
                isSet = true;
            }
            if (null !== $dept2Code && dept.length > 1 && !!dept[1] && String(dept[1]).length > 0) {
                $dept2Code.val(String(dept[1]));
                isSet = true;
            }
            if (null !== $dept3Code && dept.length > 2 && !!dept[2] && String(dept[2]).length > 0) {
                $dept3Code.val(String(dept[2]));
                isSet = true;
            }
        }
    } catch (e) {
        console.log(e);
    }
    return isSet;
}

function deptSelect($dept1Code, $dept2Code, $dept3Code, $dept1Disabled = false) {
    let selectDept1Code = new tui.SelectBox('#selectDept1Code', {
        placeholder: '지역',
        data: searchDeptInfoLevelList_new("1", "", "Y", "지역")
    });
    selectDept1Code.select($dept1Code.val());
    if ($dept1Disabled && !(!$dept1Code.val().toString() || $dept1Code.val().toString().length === 0 )) {
        selectDept1Code.disable();
    }
    let selectDept2Code = null;
    let selectDept3Code = null;

    if ($dept1Code.val()) {
        selectDept2Code = new tui.SelectBox('#selectDept2Code', {
            placeholder: '본부',
            data: searchDeptInfoLevelList_new("2", $dept1Code.val(), "Y", "본부")
        });
        selectDept2Code.select($dept2Code.val());
        if ($dept1Disabled && !(!$dept2Code.val().toString() || $dept2Code.val().toString().length === 0 )) {
            selectDept2Code.disable();
        }
    } else {
        selectDept2Code = new tui.SelectBox('#selectDept2Code', {placeholder: '본부', data: [{}]});
        selectDept2Code.disable();
    }

    if ($dept2Code.val()) {
        selectDept3Code = new tui.SelectBox('#selectDept3Code', {
            placeholder: '팀/파트',
            data: searchDeptInfoLevelList_new("3", $dept2Code.val(), "Y", "팀/파트")
        });
        selectDept3Code.select($dept3Code.val());
        if ($dept1Disabled && !(!$dept3Code.val().toString() || $dept3Code.val().toString().length === 0 )) {
            selectDept3Code.disable();
        }
    } else {
        selectDept3Code = new tui.SelectBox('#selectDept3Code', {placeholder: '팀/파트', data: [{}]});
        selectDept3Code.disable();
    }

    if ($dept1Disabled == true){
		selectDept1Code.disable();
	}


    document.getElementById("selectDept1Code").onclick = function () {
        selectDept1Code.off();
        selectDept1Code.on('change', function (ev) {
            $dept1Code.val(ev.curr.getValue());
            $dept2Code.val("");
            $dept3Code.val("");

            if ("" === ev.curr.getValue()) {
                selectDept2Code.deselect();
                selectDept2Code.disable();
                selectDept3Code.deselect();
                selectDept3Code.disable();
            } else {
                selectDept2Code.destroy();
                selectDept2Code = new tui.SelectBox('#selectDept2Code', {
                    placeholder: '본부',
                    data: searchDeptInfoLevelList_new("2", ev.curr.getValue(), "Y", "본부")
                });
                selectDept2Code.enable();
                selectDept2Code.deselect();
                selectDept3Code.deselect();
                selectDept3Code.disable();
            }
        });
    };

    document.getElementById("selectDept2Code").onclick = function () {
        selectDept2Code.off();
        selectDept2Code.on('change', function (ev) {
            $dept2Code.val(ev.curr.getValue());
            $dept3Code.val("");

            if ("" === ev.curr.getValue()) {
                selectDept3Code.deselect();
                selectDept3Code.disable();
            } else {
                selectDept3Code.destroy();
                selectDept3Code = new tui.SelectBox('#selectDept3Code', {
                    placeholder: '팀/파트',
                    data: searchDeptInfoLevelList_new("3", ev.curr.getValue(), "Y", "팀/파트")
                });
                selectDept3Code.enable();
                selectDept3Code.deselect();
            }
        });
    };

    document.getElementById("selectDept3Code").onclick = function () {
        selectDept3Code.off();
        selectDept3Code.on('change', function (ev) {
            $dept3Code.val(ev.curr.getValue());
        });
    };

}

function searchDeptInfoLevelList_new(searchDeptLevel, searchSupDeptCode, searchUseYn, searchDefaultValue) {
    let result = [];
    var deptName = "";
    var deptCode = "";
	if (searchDeptLevel == '3'){
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
	                // 파트를 추가로 등록함...

	                deptName = item.deptName;
	                deptCode = item.deptCode


		                $.ajax({
					        type: 'get',
					        url: '/dept/list/level',
					        async: false,
					        data: {
					            searchDeptLevel: 4,
					            searchSupDeptCode: deptCode,
					            searchUseYn: "Y",
					        },
					        complete: function () {
					        },
					        success: function (data, textStatus, jqXHR) {
					            $.each(data.data.contents, function(i, item2) {
									result.push(
					                    {
					                        label: deptName + '/' + item2.deptName,
					                        value: item2.deptCode
					                    }
					                )
					            });
					        },
					        error: function() {
					            alert("값을 가져오지 못했습니다.");
					        }
					    });

	            });
	        },
	        error: function() {
	            alert("값을 가져오지 못했습니다.");
	        }
	    });
	} else {
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
	}
    return result;
}