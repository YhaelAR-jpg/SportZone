<?php
include("conexion.php");

$nombre = $_POST['Nombre'];
$contrasena = $_POST['Contrasena'];

$consulta = mysqli_query($conexion, 
"SELECT * FROM Cliente WHERE nombreC='$nombre' AND contrasena='$contrasena'");

if(mysqli_num_rows($consulta) > 0){
    header("Location: Catalogo.html");
    exit();
}else{
    echo "Usuario o contraseña incorrectos";
}

mysqli_close($conexion);
?>
