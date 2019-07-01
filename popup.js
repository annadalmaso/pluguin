function loadUrls(){
//busca as urls da area e carrega
var urls = document.getElementById('urls').value.split('\n');
 
    for(var i=0; i<urls.length; i++){

      cleanUrl = urls[i].replace(/\s/g, '');

      if(cleanUrl != '') {
         chrome.tabs.create({"url": cleanUrl, "selected": false}); 
      }
     
      else {
         document.getElementById('urls').innerHTML = "No value specified";
      }
    }
}
function saveUrls(){
//busca as urls e salva no chrome
var urls = document.getElementById('urls').value.split('\n');
    
var urlsContainer = "";

for (i=0; i<urls.length; i++) {

  if(urls[i] != ' ') {
     
     urlsContainer += urls[i] + '\n';
     localStorage['urls'] = urlsContainer;

  }
}
}

document.addEventListener('DOMContentLoaded', function () {


  
  // carrega todo link colocado dentro da caixa quando o botão é clicado
  document.getElementById('button').addEventListener('click', loadUrls);
  
  // salva todos os links quando clica no botao
  document.getElementById('button').addEventListener('click', saveUrls);
    
    // recarrega as paginas
    var urls = localStorage['urls'];
    if (!urls) {
      return;
    }
    document.getElementById('urls').value = urls;


});