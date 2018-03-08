$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
 
 
 function validatePessoais()
 {
    for(i = 1; i <= 3; i++)
    {
        var inp = document.getElementById('uploadPessoais'+i);
        var input = document.getElementById('uploadPessoais'+i).value;
        
      validate(inp, input,'div_msgPessoais'+i);
    }
}
 
function validateHolerite()
{
    for(i = 1; i <= 3; i++)
    {
        var inp = document.getElementById('uploadHolerite'+i);
        var input = document.getElementById('uploadHolerite'+i).value;
      
        validate(inp, input,'div_msgHolerite'+i);
    }
}

function validateContratuais()
{
   for(i = 1; i <= 7; i++)
   {
       var inp = document.getElementById('uploadContratuais'+i);
       var input = document.getElementById('uploadContratuais'+i).value;
     
       validate(inp, input,'div_msgContratuais'+i);
   }
}

function validate(inp, input, div)
{
    // Valida se for vazio ou null
    if(inp.files.length == 0 && inp.files.length == '')
    {
        mostraMsg(div, 'Parece que você não enviou nenhum arquivo!');
    }
    // se foi enviado arquivo
    else
    { 
        // Valida se for maior que 20MB
        if(inp.files[0].size / 1024 < 20480)
        {
            var valid_extensions = /(.pdf|.bitmap|.jpeg|.jpg|.png)$/i;
            // Válida se for extensao valida
            if(valid_extensions.test(input))
            {
                mostraMsg(div, 'Arquivo enviado com sucesso!');
            }
            else
            {
                mostraMsg(div, 'Arquivo com formato inválida!');
            }
        }
        else
        {
            mostraMsg(div, 'Por favor, envie um arquivo menor que 20MB!');
        }
    }
}

function mostraMsg(div, msg)
{
    document.getElementById(div).innerHTML =
            "<br><span style='color: red;'><b>"+msg+"</b></span>";
}

function escondeMsg(param)
{
   document.getElementById(param).innerHTML = '';
}