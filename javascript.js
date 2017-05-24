var NotasEstudiantes= new Array();
function GuardarDato(){
	var datocodigo= document.getElementById("codigo").value;
	var datonombre=document.getElementById("nombre").value;
	var datonota=document.getElementById("nota").value;
	var datoEstudiante={codigo:datocodigo,nombre:datonombre,nota:datonota};
	NotasEstudiantes.push(datoEstudiante);
	document.getElementById("codigo").value="";
	document.getElementById("nombre").value="";
	document.getElementById("nota").value="";
	mostrarTabla();
}

function mostrarTabla(){

	var cantidadDatos=NotasEstudiantes.length;
	if (cantidadDatos==0) {
		alert("No hay Datos para mostrar.Registre uno o mas estudiantes");
	} else {
		var cell = document.getElementById("cuerpoTabla");
		if ( cell.hasChildNodes() ){
			while ( cell.childNodes.length >= 1 ){
			cell.removeChild( cell.firstChild );
			}
		}	
		
		for (var i =0; i<cantidadDatos; i++) {
			var nuevaFila=document.createElement("tr");
			var FilaCodigo=document.createElement("td");
			var FilaNombre=document.createElement("td");
			var FilaNota=document.createElement("td");
			var textoCodigo=document.createTextNode(NotasEstudiantes[i].codigo);
			var textoNombre=document.createTextNode(NotasEstudiantes[i].nombre);
			var textoNota=document.createTextNode(NotasEstudiantes[i].nota);
			FilaCodigo.appendChild(textoCodigo);
			FilaNombre.appendChild(textoNombre);
			FilaNota.appendChild(textoNota);
			nuevaFila.appendChild(FilaCodigo);
			nuevaFila.appendChild(FilaNombre);
			nuevaFila.appendChild(FilaNota);
			cell.appendChild(nuevaFila);
		}
	}
}
function BuscarPromedio(){
	var b;
	var suma=0;
	var resultado;
	var cantidadDatos=NotasEstudiantes.length;
	for (var i =0; i<cantidadDatos; i++) {

		suma+=Number(NotasEstudiantes[i].nota);
		console.log(suma);
	}
	resultado=suma/Number(cantidadDatos);
	alert("La nota promedio es: "+ resultado);
}
function NotaMayor(){
	var valor0=0;
	var codigo1;
	var nombre1;
	var i;
	var cantidadDatos=NotasEstudiantes.length;
	for (var i =0; i<cantidadDatos; i++) {
		if(Number(NotasEstudiantes[i].nota)>valor0){
			codigo1= NotasEstudiantes[i].codigo;
			nombre1= NotasEstudiantes[i].nombre;
			valor0= NotasEstudiantes[i].nota;
			console.log(valor0);
		}
	}
	alert("La calificacion mas alta es de: "+ nombre1+ " con codigo nro: "+codigo1+ " con la nota de: "+ valor0 +".");  
}
function NotaMenor(){
	var v0=100;
	var c1;
	var n1;
	var x;
	var cantidadDatos=NotasEstudiantes.length;
	for (var i =0; i<cantidadDatos; i++) {
		if(Number(NotasEstudiantes[i].nota)<v0){
			c1= NotasEstudiantes[i].codigo;
			n1= NotasEstudiantes[i].nombre;
			v0= NotasEstudiantes[i].nota;
			console.log(v0);
		}
	}
	alert("La calificacion mas baja es de: "+n1+ " con codigo nro: "+c1+ " con la nota de: "+ v0 +".");
}












