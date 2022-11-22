<?php

  session_start();
  include_once('bd_conectar.php');

  $sql = "SELECT * FROM tbl_atendimento ORDER BY id DESC";
  
  $result = $conexao->query($sql);
  
  
    
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>BANCO DE DADOS</title>
  
  <link rel="shortcut icon" href="../assets/img/logo.png">
  <link rel="stylesheet" href="../assets/css/maicons.css">
  <link rel="stylesheet" href="../assets/css/bootstrap.css">
  <link rel="stylesheet" href="../assets/vendor/animate/animate.css">
  <link rel="stylesheet" href="../assets/css/theme.css">

</head>
<body>

<div>
  <table class="table">
    <thead>
      <tr>
        <h2>DEPARTAMENTO DE DADOS - TSP</h2>
        <th scope="col">ID</th>
        <th scope="col">NOME</th>
        <th scope="col">IDENTIFICAÇÃO</th>
        <th scope="col">DATA DE NASCIMENTO</th>
        <th scope="col">RG</th>
        <th scope="col">TELEFONE</th>
        <th scope="col">ENDEREÇO</th>
        <th scope="col">REFERÊNCIA</th>
        <th scope="col">RELATO</th>
   </tr>
   </thead>
    <tbody>
  <?php
      while($user_data = mysqli_fetch_assoc($result)){
           echo "<tr>";
           echo "<td>".$user_data['id']."</td>";
           echo "<td>".$user_data['nomedousuario']."</td>";
           echo "<td>".$user_data['identificacaodousuario']."</td>";
           echo "<td>".$user_data['datanascimentodousuario']."</td>";
           echo "<td>".$user_data['rgdousuario']."</td>";
           echo "<td>".$user_data['teldousuario']."</td>";
           echo "<td>".$user_data['enderecodousuario']."</td>";
           echo "<td>".$user_data['referenciadousuario']."</td>";
           echo "<td>".$user_data['relatodousuario']."</td>";
           echo "</tr>";
           }
 
  ?>
   </tbody>
  </table>
</div>
</body>
</html>
