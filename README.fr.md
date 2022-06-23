# :purple_heart: Bienvenue sur le dépot de Meeet ! :people_hugging:
🚀 Version 0.1 ([English](https://github.com/axel-lgt/meeet-react-js/blob/main/README.md), [Français](https://github.com/axel-lgt/meeet-react-js/blob/main/README.fr.md))

<p align="center"><img src="https://i.ibb.co/FxBHxCt/meeet-cover.png" alt="meeet-cover" border="0" style="height: 400px"></p>

### :warning: Le projet est toujours en cours de développement, mais vous pouvez suivre mon progrès sous la branche DEV :warning:

Meeet est de loin le plus gros projet solo sur lequel j'ai travaillé. Meeet est une application de rencontre basée sur la geolocalisation qui permet aux utilisateurs de rencontrer des gens autours d'eux. Les utilisateurs peuvent voir les profils à travers une grille, le profil le plus proche étant le premier. De plus, les utilisateurs peuvent être filtrés d'après leur âge, genre et ceux qu'ils recherchent. Les utilisateurs peuvent voir les profils des autres utilisateurs contenant leurs photos, nom, âge, description, intérêts et des informations générales à leur propos. En fonction de l'intérêt que porte un utilisateur envers un autre, il peut soit l'ajouter à ses favoris, commencer une conversation avec ou alors le bloquer.

![Size](https://github-size-badge.herokuapp.com/axel-lgt/meeet-react-js.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)


## Wireframes et maquette
- Tous les wireframes ont été réalisés sur **Whimsical** et peuvent être vus [ici](https://whimsical.com/meeet-3xpTX1RbrbVnvWFQffmKMT)
- La maquette pour toutes les pages responsive a été créée sous **Figma** et peut être vue [ici](https://www.figma.com/file/Z57503RkDVJ9bARXgGefpe/Meeet?node-id=0%3A1)

## Task list
Le projet évolue de jour en jour. Afin de garder une trace des changements et de ce que je veux faire ensuite, j'ai créé une task list dans **Notion** qui peut être lue [ici](https://blue-tank-59c.notion.site/953d27358b7a4a98bcc2125afdb284c1?v=caf4412b88374c94a9fdda169cfbb759).

## Technologies
Afin de réaliser ce projet, j'ai utilisé les technologies suivantes (qui peuvent changer en suivant le développement):


### Front-end
- React
- React Redux Toolkits
- React Router
- HTML
- CSS
- SASS
- JavaScript
- React Leaflet (pour les cartes)

### Back-end
- Google Firebase Authentication
- Google Firestore

## Hiérarchie des fichiers


### Front-end
Tous les différents éléments des pages sont divisés en composants. En effet, chaque composant a son propre dossier, fichier JavaScript et fiche de style ce qui permet de faciliter la séparation des éléments. Les routes sont gérées avec React Router et sont différentes si utilisées dans une vue mobile ou une vue bureau. En effet, j'ai utilisé le rendement conditionnel grâce aux states pour rendre différentes routes afin de parvenir à la maquette que j'ai créée.

### Back-end
Au départ j'avais commencé à travailler sur une base de données PostgreSql avec pgAdmin 4 sous Node.js et Express. Cependant, vu que le projet allait devenir plus gros que ce dont j'avais prévu j'ai préféré passer mon temps sur le front-end. Pour résoudre ce problème, j'ai utilisé Google Firebase qui est une base de données noSQL et sans serveur. J'ai implémenté Firebase Authentication afin de créer les comptes utilisateurs et de gérer la continuité de la connexion. Ensuite, j'ai utilisé Firestore pour créer les différentes tables par rapport aux utilisateurs.

## Troubleshooting
Quand j'ai commencé à travailler sur ce projet excitant, j'ai pris soin de garder une trace de ce que je faisais et du progrès que je faisais. J'ai gardé le tout dans un [fichier Notion](https://blue-tank-59c.notion.site/Journal-ac0faee34e084ef1adf4b69592980d02). Veuillez noter que ce sont des notes brouillon pour la plupart en anglais et que certaines d'entre elles peuvent être obsolètes.

Merci d'avoir regardé mon travail, ce projet vaut beaucoup à mes yeux et j'ai hâte de vous montrer le projet fini !
