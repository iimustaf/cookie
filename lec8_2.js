function setCookie()
{
  var Name=document.form.name.value;

  document.cookie = "Hello=" + Name + "; expires=Tue, 19 Jan 2030 12:00:00 UTC; path=/";
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
