$(function () {
    Retrieve();
});

function Retrieve() {
    var dataArray = [];
    var URL = 'https://script.google.com/macros/s/AKfycbyXfHvDlbqLdIJXRyrDPjAgl8-FlSExCNWHusVmk-TA5vnoDmD6rTXxiNgPVsXVBb3O/exec';
    $.ajax({
        url: URL,
        type: 'POST',
        dataType: "json",
        error: function (xhr) {
            alert('發生錯誤！請重新再試一次～');
        },
        success: function (Jdata) {
            var Info = Jdata.data;
            for (i = 0; Info.length > i; i++) {
				Borrow = Info[i].Borrow;
				Teacher = Info[i].Teacher;
                BorrowTime = Info[i].BorrowTime;
                Subject = Info[i].Subject;
                Class = Info[i].Class;
                Equipment = Info[i].Equipment;
                Check = Info[i].Check;
                // 印出資料
                print();             
            };
            
            //  資料列印
            function print(){
                $("#table-data").append(
                    '<tr>' +
                        '<td class="w-10">' + Borrow + '</td>' +
                        '<td class="w-5">'  + Teacher + '</td>' +
                        '<td class="w-15">' + BorrowTime + '</td>' +
                        '<td class="w-5">'  + Subject + '</td>' +
                        '<td class="w-5">'  + Class + '</td>' +
                        '<td class="w-10">' + Equipment + '</td>' +
                        '<td class="w-15">' + Check + '</td>' +
                    '</tr>'
                );
            };
            // 會議室搜尋            
			$("#doaction").click(function(){
                select();
            });
			
			function select(){
                var result = "";
                $("#select").each(function () {
                    result = $(this).val() ;
                    search_table($("#date").val(), $("#select").val()); 
                    //search_table($("#select").val()); 
                });
            };
			
            function search_table(value1,value2){
                $('tbody tr').each(function(){
                    var found = 'false';
                    $(this).each(function(){
                        if($(this).text().toLowerCase().indexOf(value1.toLowerCase()) >= 0) {
							if($(this).text().toLowerCase().indexOf(value2.toLowerCase()) >= 0) {
								found = 'true';
							}
							//found = 'true';
                        }
                    });  
                    if(found == 'true')
                    {
                         $(this).show();
                    }
                    else
                    {
                         $(this).hide();
                    }
               }); 
			}  
        }  
    });
};



