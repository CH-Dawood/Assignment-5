document.getElementById("alertname").onclick = function (){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    alert("M.Dawood")
}
document.getElementById("Alert Number").onclick = function (){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    alert("1234567890")
}
document.getElementById("Variable Name").onclick = function (){
    let html = "<ul><li>A variable name cannot contain any spaces.</li> <li>A variable can only contain letters,numbers,doller sign and underscores.</li> <li>Though avariable name cannot be a javascript key word For Example: <code>userAlert</code>,<code>_fogBj</code> and<code>dav_123</code> are legal.</li>  <li>Capital letters are fine, But be careful. Variable name are case sensitive. A <code>bare</code> and <code>Bare</code></li>are considered to be different. If you assign string \"Floribundas\" to the variable <code>Bare</code>, and then ask Javascript for the value assign to <code>bare</code>, You will came up empty.  </ul>"
    document.getElementById("output").innerHTML = html;
}
document.getElementById("CamelCase").onclick = function (){
    let html = "<ul> <li><code>user</code></li> <li><code>userAlert</code></li> <li><code>userAlertTime</code></li> <li><code>userAlertTimeLimit</code></li> </ul>"
    document.getElementById("output").innerHTML = html;
}