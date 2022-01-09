

function area() {
    let d = parseInt(document.getElementById("first").value);
    let e = parseInt(document.getElementById("second").value);
    let f = parseInt(document.getElementById("third").value);
    let s= (d+e+f)/2;
    let area = Math.sqrt(s*(s-d)*(s-e)*(s-f));
    console.log(area);
}


let c=64;
document.write(Math.sqrt(c))