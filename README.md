# Qu'est-ce que ShortXanon ?
ShortXanon est un url-shortner opensource développé à l'aide de TypeScript, Express avec MongoDB comme SGBD pour le back-end.

## Comment fonctionne le projet ?
Il suffit de donner un lien (ex: `https://exemple.com/article/484846484-exemple`) et ShortXanon vous donne un lien plus court en retour.

## To do :
- Delete endpoint
- Front-end

## Endpoints de l'API :
| Endpoint | Méthode | Description | Paramètres |
| ---- | ---- | ---- | ---- |
| `/i/:access_id` | GET | Permet d'obtenir une url à partir d'un identifiant. | `access_id` |
| `/link` | POST | Permet de créer une nouvelle url. | `redirect_url` |
| `/link/:access_id` | DELETE | Permet de supprimer une url. | `secret_key` |
