<?php
    require "bd_conectar.php";

    $nome = $_POST['nomedousuario'];
    $identificacao = $_POST['identificacaodousuario'];
    $data = $_POST['datanascimentodousuario'];
    $rg = $_POST['rgdousuario'];
    $tel = $_POST['teldousuario'];
    $endereco = $_POST['enderecodousuario'];
    $referencia = $_POST['referenciadousuario'];
    $relato = $_POST['relatodousuario'];
    
    $sql = mysqli_query($conexao,"INSERT INTO tbl_atendimento VALUES ('', '".$nome."', '".$identificacao."', '".$data."',
     '".$rg."', '".$tel."', '".$endereco."', '".$referencia."', '".$relato."')");

    require "bd_desconectar.php";

    require "atendimento.html";

    if($sql){
        echo '<script>alert("Suas informações foram enviadas com sucesso!");</script>';
    }else{
        echo '<script>alert("Veja se você inseriu as informações corretas!");</script>';
    }
?>
