
var pageCount = 10; 	//페이지 표현수

RealGridCommonUtil = {
	setProvider: function () {
		var provider = new RealGrid.LocalDataProvider(false);
		return provider;
	},
	setGridView: function (gridId, provider) {
		var container = document.getElementById(gridId);
		var gridView = new RealGrid.GridView(container);
		gridView.setDataSource(provider);
		//상태바 안보이게
		gridView.stateBar.visible = false;
		//체크바 안보이게
		gridView.checkBar.visible = false;
		//인디케이터 안보이게
		gridView.rowIndicator.visible = false;
		//footer 안보이게
		gridView.footer.visible = false;
		//수정불가
		gridView.editOptions.editable = false;
		//정렬불가
		gridView.sortingOptions.enabled = false;
        
        // 2022-10-17 스타일 추가
        //헤더의 높이 설정 방법
        gridView.header.height = 44;
        //행 높이 설정하기
        gridView.displayOptions.rowHeight = 44;
		
		return gridView;
	},
	setColumnsSort: function (searchFormId, columns, prefix) {
		var headerStr = "";
		var sortfieldStr = "";
		
		if(prefix == null || prefix == undefined){
			prefix = "";
	    }
		
		for(var i=0; i < columns.length; i++){
			
	      headerStr = columns[i].header;
	      sortFieldStr = columns[i].sortField;
	      fieldNameStr = columns[i].fieldName;
	      
	      if(prefix != "" && fieldNameStr.length > 0) {
		     fieldNameStr = prefix+fieldNameStr.substr(0, 1).toUpperCase()+fieldNameStr.substr(1, fieldNameStr.length);
	      } 
	      
	      headerObj = {
		               text:headerStr,
		               template: '${headerText} <span id="'+fieldNameStr+'_"'+' class="tui-grid-btn-sorting" onclick="RealGridCommonUtil.columnsSortSubmit(\''+searchFormId+'\',\''+fieldNameStr+'\',\''+sortFieldStr+'\',\''+prefix+'\')"></span>',
		    	       values:{ 
							  "headerText":headerStr
					          }	,
					   styleName: "multi-line-css"
					  }; 
					  
		  columns[i].header = headerObj;
	    }
	    
	    return columns;
    },
    columnsSortToggle: function (columnId, sortOrder) {
		if(sortOrder == "") {
			//정렬없음
		} else if(sortOrder == "DESC") {
			//오름차순
			$("#"+columnId+"_").addClass("tui-grid-btn-sorting-up");
		} else if(sortOrder == "ASC") {
			//내림차순
			$("#"+columnId+"_").addClass("tui-grid-btn-sorting-down");
		}
	},
    columnsSortSubmit: function (searchFormId, columnId, sortField, prefix) {
	    var sortFieldId = "sortField";
	    var sortColumnIdId = "sortColumnId";
	    var sortOrderId = "sortOrder";
	    
	    if(prefix == null || prefix == undefined){
			prefix = "";
	    }
	    
        if(prefix != "") {
	           var sortFieldId = prefix+"SortField";
			   var sortColumnIdId = prefix+"SortColumnId";
			   var sortOrderId = prefix+"SortOrder";
        } 
        
		var classStr = $("#"+columnId+"_").attr("class");
		if(classStr == "tui-grid-btn-sorting") {
		    //오름차순
	        $("#"+sortFieldId).val(sortField);
	        $("#"+sortColumnIdId).val(columnId);
	        $("#"+sortOrderId).val("DESC");
	      
	        $("#"+searchFormId).submit();
		} else if(classStr == "tui-grid-btn-sorting tui-grid-btn-sorting-up") {
		    //내림차순
	        $("#"+sortFieldId).val(sortField);
	        $("#"+sortColumnIdId).val(columnId);
	        $("#"+sortOrderId).val("ASC");
	      
	        $("#"+searchFormId).submit();
		} else if(classStr == "tui-grid-btn-sorting tui-grid-btn-sorting-down") {
			//정렬없음
	        $("#"+sortFieldId).val("");
	        $("#"+sortColumnIdId).val(columnId);
	        $("#"+sortOrderId).val("");
	        
	        $("#"+searchFormId).submit();
		}
	},
    loadData: function (gridView, provider, option, page, perPage, prefix) {
	  
		//기본 주소
		if(option.url == null || option.url == undefined){
			option.url = "#";
	    }
	    
	    //기본 메소드
	    if(option.method == null || option.method == undefined){
			option.method = "get";
	    }
	    
	    //기본 데이타
	    if(option.data == null || option.data == undefined){
			option.data = {};
	    }
	    
	    //기본 페이징 넣을 태그 ID
	    if(option.pagingId == null || option.pagingId == undefined){
			option.pagingId = "paging";
	    }
	    
	     //기본 page ID
	    if(option.pageId == null || option.pageId == undefined){
			option.pageId = "page";
	    }
	    
	    //기본 searchForm ID
	    if(option.searchFormId == null || option.searchFormId == undefined){
			option.searchFormId = "searchForm";
	    }
	    
	     //기본 totalCount ID
	    if(option.totalCountId == null || option.totalCountId == undefined){
			option.totalCountId = "totalCount";
	    }
	    
	     //기본 sortColumnId ID
	    if(option.sortColumnId == null || option.sortColumnId == undefined){
			option.sortColumnId = "sortColumnId";
	    }
	    
	    //기본 sortOrder ID
	    if(option.sortOrderId == null || option.sortOrderId == undefined){
			option.sortOrderId = "sortOrder";
	    }
	    
	    //기본 sortField ID
	    if(option.sortFieldId == null || option.sortFieldId == undefined){
			option.sortFieldId = "sortField";
	    }
	    
	    if(page != null && page != undefined) {
			option.data.page = page;
	    } else {
			//기본 페이지
		    option.data.page = 1;
		}
	    
	    if(perPage != null && perPage != undefined) {
			option.data.perPage = perPage;
	    } else {
		    //기본 페이지당 갯수
			option.data.perPage = 10;
	    }
	    
	    if(option.data.sortField == null || option.data.sortField == undefined) {
			option.data.sortField = $('#'+option.sortFieldId).val();
	    } 
	    
	    if(option.data.sortOrder == null || option.data.sortOrder == undefined) {
			option.data.sortOrder = $('#'+option.sortOrderId).val();
	    } 
	    
	    if(prefix == null || prefix == undefined){
			prefix = "";
	    }
	    
	    if(option.success == null || option.success == undefined) {
		   option.success = function (data) {
		     pagination = data.data.pagination;
	         provider.setRows(data.data.contents);
	         gridView.refresh();
	         $('#'+option.totalCountId).empty().html(pagination.totalCount);
	         RealGridCommonUtil.setPaging(gridView, provider, option, pagination.totalCount, pagination.page, option.data.perPage);
	       	 RealGridCommonUtil.columnsSortToggle($('#'+option.sortColumnId).val(), $('#'+option.sortOrderId).val());
	       }
		}
	    $.ajax({
	       url: option.url,
	       method: option.method,
	       data: option.data,
	       success: option.success,
	       error: function (xhl, status, error) {
					
	       }
	   })
   },
   
   setPaging: function (gridView, provider, option, totalCount, page,  perPage){
	  var fPerPage;
	  if(perPage != null && perPage != undefined) {
			fPerPage = perPage;
	  } else {
		    //기본 페이지당 갯수
			fPerPage = 10;
	  }
	  gridView.setPaging(true, fPerPage);
	  RealGridCommonUtil.paging(gridView, provider, option, totalCount, fPerPage, pageCount, page);
   },

 paging : function (gridView, provider, option, totalData, dataPerPage, pageCount, currentPage){
	  var totalPage = Math.ceil(totalData/dataPerPage);    // 총 페이지 수
	  var pageGroup = Math.ceil(currentPage/pageCount);    // 페이지 그룹
	  
	  var last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
	  if(last > totalPage) last = totalPage;
	  var first = last - (pageCount - 1) < 1 ? 1 : last - (pageCount - 1)   // 화면에 보여질 첫번째 페이지 번호
	  var next = currentPage+1;
	  var prev = currentPage-1;
	
	  var html = "";
	
	  if(prev == 0) {
	      html += "<a href=# id='first' class='disabled'><img src='"+contextPath+"/images/icon/ico_double_arrow_left.png' alt='첫 페이지'></a> ";
	      html += "<a href=# id='prev' class='disabled'><img src='"+contextPath+"/images/icon/ico_arrow_left.png' alt='이전 페이지'></a> ";
	  } else {
	      html += "<a href=# id='first'><img src='"+contextPath+"/images/icon/ico_double_arrow_left.png' alt='첫 페이지'></a> ";
	      html += "<a href=# id='prev'><img src='"+contextPath+"/images/icon/ico_arrow_left.png' alt='이전 페이지'></a> ";         
	  }
	  html += "<div id='wrapper'><ul class='page-num'>";
	  for(var i=first; i <= last; i++){
	      html += "<li><a href='#'  id=" + i + ">" + i + "</a></li>";
	  }
	  
	  //데이타 없을경우
	  if(last < 1) {
		html += "<li><a href='#'  id=" + 1 + " class='disabled' >" + 1 + "</a></li>";
	  }
	  
	  html += "</ul></div>";
	  
	  if(last < totalPage) {
	      html += "<a href=# id='next'><img src='"+contextPath+"/images/icon/ico_arrow_right.png' alt='다음 페이지'></a>";
	      html += "<a href=# id='last'><img src='"+contextPath+"/images/icon/ico_double_arrow_right.png' alt='마지막 페이지'></a>";
	  } else {
	      html += "<a href=# id='next' class='disabled'><img src='"+contextPath+"/images/icon/ico_arrow_right.png' alt='다음 페이지'></a>";
	      html += "<a href=# id='last' class='disabled'><img src='"+contextPath+"/images/icon/ico_double_arrow_right.png' alt='마지막 페이지'></a>";
	  }
	  html += "";
	  
	  $("#"+option.pagingId).html(html);    // 페이지 목록 생성
	                  
	  $("#"+option.pagingId+" a#" + currentPage).addClass("active");    // 현재 페이지 표시

	   //데이타가 있을 경우
	  if(last > 1) {                                   
		  $("#"+option.pagingId+" a").click(function(event){
		      event.preventDefault();
		      
		      var $item = $(this);
		      var $id = $item.attr("id");
		      var selectedPage = $item.text();
		     
		      if($id == "first")   selectedPage = 1;
		      if($id == "next")    selectedPage = next > totalPage ? totalPage : next;
		      if($id == "prev")    selectedPage = prev < 1 ? 1 : prev;
		      if($id == "last")    selectedPage = totalPage;
			 
		      if($item.attr('class') != "active") {
				  $("#"+option.pageId).val(selectedPage);
			      $("#"+option.searchFormId).submit();
		      }
		      //RealGridCommonUtil.loadData (gridView, provider, option, selectedPage, dataPerPage);   
		  });
	  }
	}
};



