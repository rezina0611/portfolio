/*
    format: "year", "month", "day", ""(빈 값은 기간제한 없음)
*/
const _rolePeriod = {
    "SU": {
        format: "",
        number: 0
    },
    "KU": {
        format: "month",
        number: 1
    },
    "AU": {
        format: "month",
        number: 6
    },
    "MU": {
        format: "month",
        number: 3
    },
    "FU": {
        format: "month",
        number: 1
    },
    "PU": {
        format: "month",
        number: 1
    },
};

// 조회기간 시작일 구하기
function getRoleSearchStartDate(role, today, startDates){
    let periodInfo = _rolePeriod[role];
    if(periodInfo == null) return today;

    if(periodInfo.format == "year"){
        startDates = today.setFullYear(today.getFullYear() -periodInfo.number);
    }
    else if(periodInfo.format == "month"){
        startDates = today.setMonth(today.getMonth() - periodInfo.number);
    }
    else if(periodInfo.format == "day"){
        startDates = today.setDate(today.getDate() - periodInfo.number);
    }
    else{
        startDates = today.setFullYear(today.getFullYear() - 1);
    }

    return startDates;
};

// 최대 조회기간 체크
function checkRoleSearchPeriod(role, fromDate, toDate){
    let periodInfo = _rolePeriod[role];
    if(periodInfo == null) periodInfo = {format: "day", number: 7};

    var formatString = "";
    if(periodInfo.format == 'year'){
        fromDate.setFullYear(fromDate.getFullYear() + periodInfo.number);
        formatString = "년";
    }
    else if(periodInfo.format == 'month'){
        fromDate.setMonth(fromDate.getMonth() + periodInfo.number);
        formatString = "개월";
    }
    else if(periodInfo.format == 'day'){
        fromDate.setDate(fromDate.getDate() + periodInfo.number);
        formatString = "일";
    }
    else{
        return true;
    }

    if(toDate > fromDate){
        alert("[조회기간](은)는 최대 [" + periodInfo.number + "]" + formatString + " 입니다.");
        return false;
    }

    return true;
};