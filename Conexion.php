<?php
//Declaración de variables para conexión
$usuario = "root";
$password = ""; 
$servidor = "localhost";
$baseDeDatos = "tiendadeportes";

//Conexión del servidor 
$conexion = mysqli_connect($servidor, $usuario, $password) or die ( "No se puede conectar al servidor, revisa la contraseña o usuario");

//Conexión a la base de datos 
$bd =mysqli_select_db($conexion, $baseDeDatos) or die ("No se establecio el acceso a la base de datos");
?>

