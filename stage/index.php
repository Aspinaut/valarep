<!DOCTYPE html>
<?php session_start() ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Bienvenue sur le chat</h1>
    <?php
    try {
      $bdd = new PDO('mysql:host=localhost;dbname=learnphp;charset=utf8', 'sa', 'admin', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    } catch (\Exception $e) {
      die("Erreur " . $e->getMessage());
    }

    ?>

    <form class="" action="form.php" method="post">
      <label for="pseudo">Pseudo : </label><input type="text" name="pseudo">
      <label for="message">Message : </label><textarea name="message" rows="8" cols="80" placeholder="Your message : "></textarea>
      <input type="submit" value="Submit">
    </form>
    <?php
      $req = $bdd->prepare('SELECT * FROM comment ORDER BY ID DESC LIMIT 0,5');
      $req->execute();
      while ($message = $req->fetch())
      {
        echo "
          <p><strong> ". htmlspecialchars($message['author']) . "</strong> : </p>
          <p>". htmlspecialchars($message['content']) . "</p>
        ";
      }
      $req->closeCursor();
    ?>
  </body>
</html>
