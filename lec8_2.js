function setCookie() {
  var Name = document.form.name.value;
  document.cookie = "username=" + Name + "; max-age=3600; path=/";
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
