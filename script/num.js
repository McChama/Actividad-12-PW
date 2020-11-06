function Validar(){
    var Inputs = document.getElementsByClassName("input");
     
    for(i=0;i<Inputs.length;i++){
        if(Inputs[i].value.length == 0){
            alert("Llena todos los espacios");
            return;
        }
    }
    return Calcular(Inputs);
}
function Calcular(Inputs){
    var N1 = parseFloat(Inputs[0].value);
    var N2 = parseFloat(Inputs[1].value);
    var N3 = parseFloat(Inputs[2].value);
    var May;

    May = Math.max(N1,N2,N3);

    document.getElementById("Mayor").innerHTML = ("El numero mayor es: "+May);

}
