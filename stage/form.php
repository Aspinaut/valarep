<?php
try {
  $bdd = new PDO('mysql:host=localhost;dbname=learnphp;charset=utf8', 'sa', 'admin', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
} catch (\Exception $e) {
  die("Erreur " . $e->getMessage());
}
  $req = $bdd->prepare('INSERT INTO comment(content, author) VALUES(:content, :author)');
  $req->execute(array(
    'content' => $_POST['message'],
    'author' => $_POST['pseudo']
  ));

  header('Location: index.php');
?>
