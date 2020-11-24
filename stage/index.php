<!DOCTYPE html>
<?php session_start() ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php echo $_SESSION['name']; ?>
    <?php include("header.php"); ?>
    <form class="" action="index.php" method="post">
      <input type="text" name="name" placeholder="Insert your name here">
      <?php $_SESSION['name'] = "BOb"; ?>
      <input type="submit" value="Envoyer !">
    </form>
    <?php include("footer.php"); ?>
  </body>
</html>
