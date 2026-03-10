<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDeDatos = "TiendaDeportes";

$conexion = mysqli_connect($servidor, $usuario, $password, $baseDeDatos);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>

