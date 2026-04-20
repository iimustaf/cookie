function setCookie() {
  var Name = document.form.name.value;
  // Added SameSite=Lax for modern browser compatibility
  document.cookie = "username=" + Name + "; max-age=3600; path=/; SameSite=Lax";
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
