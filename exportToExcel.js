function tableToExcel(table, name) {
        var uri = 'data:application/vnd.ms-excel;base64,',
            template =
            '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
            base64 = function(s) {
                return window.btoa(unescape(encodeURIComponent(s)))
            },
            format = function(s, c) {
                return s.replace(/{(\w+)}/g, function(m, p) {
                    return c[p];
                })
            }
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML
        }
        console.log(ctx, base64(format(template, ctx)));
        // window.location.href = uri + base64(format(template, ctx));
        document.getElementById("dlink").href = uri + base64(format(template, ctx));
        var d = new Date();
        var n = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + "_" + d.getHours() + d.getMinutes() + d
            .getSeconds();
        document.getElementById("dlink").download = name + " " + n + ".xls";
        document.getElementById("dlink").click();

    }
