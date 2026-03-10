<?php
include("conexion.php");

$nombre = $_POST['Nombre'];
$correo = $_POST['Correo'];
$direccion = $_POST['Direccion'];
$contrasena = $_POST['Contrasena'];

$consulta = mysqli_query($conexion,
"INSERT INTO Cliente(nombreC, correo, direccion, contrasena) 
VALUES ('$nombre','$correo','$direccion','$contrasena')");

if($consulta){
    header("Location: IniciarS.html");
}else{
    echo "Error al realizar tu registro";
}

mysqli_close($conexion);
?>
