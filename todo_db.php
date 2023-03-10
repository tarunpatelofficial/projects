<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "todo";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if (isset($_POST['tasks'])) {
        $tasks = $_POST['task-input'];
    } else {
        $tasks = "";
        // Handle the error here
    }

    $sql = "INSERT INTO `tasktable` (`Id`, `task-input`) VALUES ('0', '$tasks')";

    
    $rs = mysqli_query($conn, $sql);
    if(!$rs)
    {
        echo "Records Inserted";
    }  
    else {
        echo "Records did not Inserted";
    }       
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>TO DO LIST</title>
</head>
<body>
    <div class="container">
        <header>
           <h1>TO DO-LIST</h1> 
           <form action="todo_db.php" id="task-form">  
            <input type="text" id="task-input" placeholder="What are your tasks for today?">
            <input type="submit" id="task-submit" value="Add">
           </form>
        </header>

        <main>
            <section class="task-list">
                <div id="tasks">
                    <div id="datetime">
                        
                    </div>
                </div>

            </section>
        </main>
    </div>

    <div class="container">
    <input type="submit" value="Show" class="aftertable">
    </div>
    <script src="main.js"></script>
</body>
</html>
