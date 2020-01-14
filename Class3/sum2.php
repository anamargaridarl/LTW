<!DOCTYPE html>
<html lang="en-US">

<head>
    <title>Sum Numbers</title>    
    <meta charset="UTF-8">
</head>
  <body>
    <header>
    <h1>
        <?php

    include('templates/form2.html');
        function sum($num1,$num2)
        {
            echo $num1 + $num2;
        }

        $num1 = $_GET['num1'];
        $num2 = $_GET['num2'];
        sum($num1,$num2);
        ?>
        </h1>
    </header>
  </body>
</html>

