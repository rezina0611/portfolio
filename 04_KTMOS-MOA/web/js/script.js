$.fn.rowspan = function(colIdx, isStats) {       
    return this.each(function(){      
        var that;     
        $('tr', this).each(function(row) {      
            $('th:eq('+colIdx+')', this).filter(':visible').each(function(col) {
                  
                if ($(this).html() == $(that).html() && (!isStats || isStats && $(this).prev().html() == $(that).prev().html())) {            
                    rowspan = $(that).attr("rowspan") || 1;
                    rowspan = Number(rowspan)+1;
  
                    $(that).attr("rowspan",rowspan);
                      
                    // do your action for the colspan cell here            
                    $(this).hide();
                      
                    //$(this).remove(); 
                    // do your action for the old cell here
                      
                } else {            
                    that = this;         
                }          
                  
                // set the that if not already set
                that = (that == null) ? this : that;      
            });     
        });    
    });  
}

$.fn.rowspan_td = function(colIdx, isStats) {
    return this.each(function(){      
        var that;     
        $('tr', this).each(function(row) {      
            $('td:eq('+colIdx+')', this).filter(':visible').each(function(col) {
                  
                if ($(this).html() == $(that).html() && (!isStats || isStats && $(this).prev().html() == $(that).prev().html())) {            
                    rowspan = $(that).attr("rowspan") || 1;
                    rowspan = Number(rowspan)+1;
  
                    $(that).attr("rowspan",rowspan);
                      
                    // do your action for the colspan cell here            
                    $(this).hide();
                      
                    //$(this).remove(); 
                    // do your action for the old cell here
                      
                } else {            
                    that = this;         
                }          
                  
                // set the that if not already set
                that = (that == null) ? this : that;      
            });     
        });    
    });  
}


$.fn.rowspan_th = function(colIdx, isStats) {
    return this.each(function(){      
        var that;     
        $('tr', this).each(function(row) {      
            $('th:eq('+colIdx+')', this).filter(':visible').each(function(col) {
                  
                if ($(this).html() == $(that).html() && (!isStats || isStats && $(this).prev().html() == $(that).prev().html())) {            
                    rowspan = $(that).attr("rowspan") || 1;
                    rowspan = Number(rowspan)+1;
  
                    $(that).attr("rowspan",rowspan);
                      
                    // do your action for the colspan cell here            
                    $(this).hide();
                      
                    //$(this).remove(); 
                    // do your action for the old cell here
                      
                } else {            
                    that = this;         
                }          
                  
                // set the that if not already set
                that = (that == null) ? this : that;      
            });     
        });    
    });  
}

/* 
 * 
 * 같은 값이 있는 행을 병합함
 * 
 * 사용법 : $('#테이블 ID').colspan (0);
 * 
 */   
$.fn.colspan = function(rowIdx) {
    return this.each(function(){
        
        var that;
        $('tr', this).filter(":eq("+rowIdx+")").each(function(row) {
            $(this).find('th').filter(':visible').each(function(col) {
                if ($(this).html() == $(that).html()) {
                    colspan = $(that).attr("colSpan") || 1;
                    colspan = Number(colspan)+1;
                    
                    $(that).attr("colSpan",colspan);
                    $(this).hide(); // .remove();
                } else {
                    that = this;
                }
                
                // set the that if not already set
                that = (that == null) ? this : that;
                
            });
        });
    });
}

function escapeRegExp(stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

String.prototype.format = function()
{
   var content = this;
   for (var i=0; i < arguments.length; i++)
   {
	   var stringToGoIntoTheRegex = escapeRegExp("{"+i+"}");
        var replacement = new RegExp(stringToGoIntoTheRegex, "gi");
        
        content = content.replace(replacement, arguments[i]);  
   }
   return content;
};

/*
 * Html ' or " 문자 변환
 */
function fn_html_replace(strValue) {
	strValue = strValue.replace(/\"/g,"&quot;");
	strValue = strValue.replace(/\'/g,"&#39;");
	
	return strValue;
}

function fn_chk_char(obj) {
	if ((event.keyCode < 48) || (event.keyCode > 57))
		event.returnValue = false;
}

function fn_chk_enter(act) {
	if ((event.keyCode == 13)) {
		loading_mask.open();
		act.submit();
	}
}

function fn_enter_nuberper_page(obj, act) {
	if ((event.keyCode == 13)) {
		act.submit();
	}
	if ((event.keyCode < 48) || (event.keyCode > 57))
		event.returnValue = false;
}

function fn_chk_char_enter(obj, act) {
	if ((event.keyCode == 13)) {
		loading_mask.open();
		act.submit();
	}
	if ((event.keyCode < 48) || (event.keyCode > 57))
		event.returnValue = false;
}

function fn_comma(comma_rstr) {
	var nocomma = comma_rstr.value.replace(/,/gi, '');
	var b = '';
	var i = 0;
	for (var k = (nocomma.length - 1); k >= 0; k--) {
		var a = nocomma.charAt(k);
		if (k == 0 && a == 0) {
			comma_rstr.value = '';
			return;
		} else {
			if (i != 0 && i % 3 == 0) {
				b = a + "," + b;
			} else {
				b = a + b;
			}
			i++;
		}
	}
	comma_rstr.value = b;
	return;
}

function comma(x) {
	var txtNumber = '' + x;
	var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
	var arrNumber = txtNumber.split('.');
	arrNumber[0] += '.';
	do {
		arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
	} while (rxSplit.test(arrNumber[0]));
	if (arrNumber.length > 1)
		return arrNumber.join('');
	else
		return arrNumber[0].split('.')[0];
}

/**
 * sz 는 String Size로서 제한할 문자 byte수,id는 해당 input박스의 id이다.				
 * @param sz
 * @param id
 */
function displayBytes(sz, id, message) {
	var e_index = 0;
	if (id.value.getByte() > sz) // 제한량을 넘겼을시.
	{
		if (event.keyCode != '8') // 백스페이스는 지우기작업시 바이트 체크하지 않기 위해서
		{
			var chkdgsoweg = (sz / 2); // 한글은 2byte,영문은 1byte이다.
			
			alert(message.format(chkdgsoweg, sz));
		}
		// sz자 까지 만든다.
		id.value = fn_input_size(id.value, sz);
	}
}

/**
 * 
 * str은 inputbox에 입력된 문자열이고,lengths는 제한할 문자수 이다.
 */
function fn_input_size(str,lengths){
      var len = 0;
      var newStr = '';
  
      for (var i=0;i<str.length; i++) 
      {
        var n = str.charCodeAt(i); // charCodeAt : String개체에서 지정한 인덱스에 있는 문자의
									// unicode값을 나타내는 수를 리턴한다.
        // 값의 범위는 0과 65535사이이여 첫 128 unicode값은 ascii문자set과 일치한다.지정한 인덱스에 문자가 없다면
		// NaN을 리턴한다.
        
       var nv = str.charAt(i); // charAt : string 개체로부터 지정한 위치에 있는 문자를 꺼낸다.

       if (escape(nv).length > 4) 
        	len += 2; // 한글이면 2byte로 계산한다.
        else len ++; 
        
        if (len>lengths) break; // 제한 문자수를 넘길경우.
        else newStr = newStr + nv;
      }
      return newStr;
}
