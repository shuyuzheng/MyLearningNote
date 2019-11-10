/* 
 + 1 or mor
 {n} repeat previous object n times
 */

var regex = /^(0[1-9]|[12]\d|3[01])(0\d|1[0-2])\d{2}[\-A]\d{3}[0-9A-Z]$/'

document.getElementById("clicker").onlick = function()
{
  if(regex.test(document.getElementById('ssn').value))
  {
    document.getElementById('result').innerHTML = "Valid";
  }
  else
  {
    document.getElementById('result').innerHTML = "Invalid";
  }
}
