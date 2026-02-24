<?php
include('conexion.php');

/*Variables del formulario*/
$nombre = $_POST['Nombre'];
$correo =$_POST['Correo'];
$direccion = $_POST['Direccion'];
$contrasena = $_POST['Contrasena'];


$consulta = mysqli_query($conexion,
"insert into cliente(nombreC, correo, direccion, contrasena) values ('$nombre',
'$correo','$direccion','$contrasena')");
if (!$consulta) {
    echo "Error al realizar tu registro";
}else{
    require ("IniciarS.html");

}
mysqli_close($conexion);
?>
