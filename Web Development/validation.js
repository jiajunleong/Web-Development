function validate()
{
var username=document.getElementById("getname").value;
var password=document.getElementById("getpass").value;
if(username=="admin"&& password=="Pa$$w0rd")
{
  alert("login successfully");
  window.open("https://jiajundeath.netlify.app/")
  return false;
}
else
{
  alert("login failed");
  location.href = "login.html";
}

}

document.getElementById("validation").onclick = function () {
location.href = "https://jiajundeath.netlify.app/";
};
