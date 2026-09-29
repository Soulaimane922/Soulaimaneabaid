<?php
// msg.php : script qui reçoit les données des formulaires (method="post").
// Les noms $_POST['nom'], $_POST['email']... correspondent aux attributs name="" du HTML.
// htmlspecialchars() protège contre l'injection de code HTML/JS.
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = htmlspecialchars($_POST["nom"] ?? "");
    $email = htmlspecialchars($_POST["email"] ?? "");
    $message = htmlspecialchars($_POST["message"] ?? ($_POST["commentaire"] ?? ""));
    echo "<h1>Merci $nom !</h1><p>Votre message a bien été reçu (réponse envoyée à $email).</p><p>$message</p>";
    echo '<p><a href="index.html">Retour à l\'accueil</a></p>';
} else {
    http_response_code(405);
    echo "Méthode non autorisée.";
}
