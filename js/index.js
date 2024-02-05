function promedio(nota1, nota2, nota3, nota4, nota5){
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var nota4 = document.getElementById("nota4").value;
    var nota5 = document.getElementById("nota5").value;

    if (nota1 >= 10 && nota1 <=50 && nota2 >= 10 && nota2 <= 50 
        && nota3 >= 10 && nota3 <= 50 && nota4 >= 10 && nota4 <= 50 && nota5 >= 10 && nota5 <= 50){

        var promedio3notas = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3;
        var promedio55 = parseFloat(promedio3notas*0.55);
        var promedio30 = parseFloat(nota4 * 0.30);
        var promedio15 = parseFloat(nota5 * 0.15);
        
        var promediofinal = parseFloat((promedio55 +++ promedio30 +++ promedio15));

        document.getElementById("mensaje").innerHTML = "El promedio final es " +promediofinal.toFixed(1);
    }
    else{
        document.getElementById("error").innerHTML = "Algún dato fue ingresado incorrectamente o no ingresó todos los datos";
    }    
}




