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
document.getElementById("Sum").onclick = function (){
   let sum = "let num 1 = 10; <br> let num 2 =  5; <br> let sum = num 1 + num 2;"
   let asum = "15"
   document.getElementById("input").innerHTML = sum;
   document.getElementById("output").innerHTML = asum;
}

document.getElementById("Substract").onclick = function (){
    let sub = "let num 1 = 10; <br> let num 2 =  5; <br> let sub = num 1 - num 2;"
    let asub = "5"
    document.getElementById("input").innerHTML = sub;
    document.getElementById("output").innerHTML = asub;
 }
 document.getElementById("Multiply").onclick = function (){
    let mul = "let num 1 = 10; <br> let num 2 =  5; <br> let  = num 1 * num 2;"
    let amul = "50"
    document.getElementById("input").innerHTML = mul;
    document.getElementById("output").innerHTML = amul;
}
document.getElementById("Divide").onclick = function (){
    let div = "let num 1 = 10; <br> let num 2 =  5; <br> let  = num 1 / num 2;"
    let adiv = "2"
    document.getElementById("input").innerHTML = div;
    document.getElementById("output").innerHTML = adiv;
}
document.getElementById("Calculate").onclick = function (){
    let cal = "let some Calculation = 36 / 6 * 3 + 2**4 - 3(3 + 5)"
    let acal = "26"
    document.getElementById("input").innerHTML = cal;
    document.getElementById("output").innerHTML = acal;
}
document.getElementById("clear-statement-btn").onclick = function (){
    document.getElementById("input").innerHTML = ""
    }
    document.getElementById("output-btn").onclick = function (){
        document.getElementById("output").innerHTML = ""
    }