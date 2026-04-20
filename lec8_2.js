function setCookie()
{
  var Name=document.form.name.value;

  document.cookie ="Hello "+Name+";"+ "expires=Fri, 01 Dec 2023 12:00:00 UTC";
  window.alert("Cookie Done");
}
function getCookie()
{
    if(document.cookie.length!=0)
    {
    window.alert(document.cookie);
    }
    else
    {
    window.alert("Cookie not available");
    }
}