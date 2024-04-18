
const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
var contC = 0;
const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
	if (document.getElementById("link").value === "") {
		alert("El campo debe de estar lleno");
	}else{
		e.preventDefault();
		QR.makeCode(formulario.link.value);
		if (contC === 0) {
			var newButton = document.createElement("button");
			newButton.innerHTML = "Descargar";	
			newButton.setAttribute("id", "compartir");
			newButton.setAttribute("class", "btn");
			var buttonContainer = document.getElementById("buttonContainer");
			buttonContainer.appendChild(newButton);
			newButton.addEventListener("click", descargarQRCode);
			contC++;
		}
	}
});


document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
	document.getElementById("link").value = "";
	document.getElementById("contenedorQR").innerHTML = "";
	document.getElementById("buttonContainer").innerHTML = "";
	contC == 0;
	location.reload();

}


// Función para generar el código QR y proporcionar un enlace de descarga
function descargarQRCode() {
	console.log("ando");
	var divContenido = document.getElementById('contenedorQR');
        
	html2canvas(divContenido).then(function(canvas) {
		var enlaceDescarga = document.createElement('a');
		enlaceDescarga.href = canvas.toDataURL("image/png");
		enlaceDescarga.download = 'contenido.png';
		enlaceDescarga.click();
	});
	swal ( "Descargado" ,  "Gracias!" ,  "success" )
  }
  



