
$('#btnDeleteModal').on('click', function() {  
                     
    var idProposta = $("#btnDeleteModal").val();
    var Data = { btndeletemodal:idProposta }; 
    
    $.ajax({
        dataType: 'json',  // what to expect back from the PHP script, if anything
        data: Data,                         
        type: 'post',
        url: 'executa.php', // point to server-side PHP script 
        success: function(php_script_response){
            if(php_script_response == "OK")
            {
                window.setTimeout('location.reload()', 10);
                //alert(php_script_response); // display response from the PHP script, if any
                alert('Registro Excluido!');
            }
        },
        error: function(){
            alert('Registro não pode ser excluido');
        }
     });
});
