(English version follows)
# Instructions générales

Coder pour du web est parfois difficile, mais coder pour une télévision ou des appareils mobiles exige des considérations de performance très pointues. Gardez donc toujours à l’esprit l’optimisation dans la réalisation des instructions et l’aspect multiplateforme.

# À considérer

-	L’accessibilité
-	Maintenabilité
-	Qualité du code
-	Soucis des performances
-	Gestion d’erreur
-	Portabilité

# Préparation

- Faites un clone local du repository à partir de GitHub:
git clone https://github.com/LVLStudio/LVL.WebExam.git
- Créez-vous une branche locale de travail nommée `exam`:

    `cd LVL.WebExam`

    `git branch exam`

    `git checkout exam`

- Committez vos changements dans cette branche.

- Générez une patch nommée exam.patch contenant vos changements de la branche:

	`git format-patch master --stdout > exam.patch`

- Finalement, envoyez-nous votre patch à job@lvlstudio.com pour que nous puissions constater votre magnifique travail! ;)

# Tâches

1. En dessous de 1024px de largeur, il est souhaité de cacher le menu par défaut pour que le reste du contenu puisse prendre toute la largeur.
	1.	Le bouton de menu (actuellement caché) doit apparaitre
	2.	Au clic sur le bouton, le panneau de menu doit alterner entre l’état ouvert et l’état fermé, dans une animation de glissement qui pousse le restant du contenu vers la droite.

2.	Quelque chose ne va pas avec l’intégration des assets graphiques. Corrigez les boutons de menu et play/stop et l’icône de « extra » pour qu’ils s’affichent correctement (les hauteurs et largeurs en CSS sont correctement définies).

3.	Le web service http://examen.lvlnetworks.com/ retourne des blocs d’information JSON. Construire le module qui permettra de récupérer et d’utiliser ces données.

    1.	Chaque appel à l’API retourne des items pour les 10 prochaines secondes et les valeurs startTimestamp et endTimestamp.
    2.	La liste doit être tenue à jour, assurez-vous de répéter l’appel aux API en conséquence.

4. Utiliser les données récupérées à l’étape précédente pour remplir la liste d’éléments #items.

    1. Basez-vous sur l’élément `.item` pour remplir la liste
    2. Inclure les éléments au fur et à mesure que leurs valeurs timestamp est passée.
    3. Les nouveaux éléments doivent être ajoutés en haut de la liste.
    4. La liste ne doit pas contenir plus de 100 items à la fois. À ce point, les éléments à la fin doivent disparaître pour laisser la place aux nouveaux.

5. Au clic sur un item :

    1.	Le background devient alors gris (`#444444`) et le texte blanc (`#ffffff`).
    
6.	L’intégration comporte diverses erreurs d’accessibilité, corrigez-les!

7.	L’application se veut être responsive, apportez d’autres améliorations si vous en voyez.

------------------------------------------

# General Instructions

Coding for the web is sometimes difficult, but coding for television sets or mobile devices requires strict performance considerations. To that effect, please always keep two things in mind when carrying out the following instructions: optimisation, and the multi-platform nature of the product. The majority of the following points will require consideration of these two elements.

# To be considered

-	Respecting instructions 
-	Performance 
-	Portability
-	Code quality
-	Error handling
-	Maintainability
-	Accessibility

# Preparation
-	From GitHub, make a local clone of the repository:
git clone https://github.com/LVLStudio/LVL.WebExam.git
-	Create a local work branch named exam:

    `cd LVL.WebExam`

    `git branch exam`

    `git checkout exam`

-   Commit your changes in this branch.

-   Generate a patch named exam.patch containing your branch changes:

    `git format-patch master --stdout > exam.patch`

-   Finally, send us your patch at job@lvlstudio.com so that we can marvel at your work! ;)

# Tasks

1. When smaller than 1024px width, the menu should be hidden by default so that the content can take up the rest of the space.
    1. The menu button (currently hidden) has to appear.
    2. When the button is clicked, the menu panel must alternate between its open and closed states, in a sliding animation that pushes the rest of the content to the right. 

2. Something is wrong with the integration of the graphical assets. Fix the Menu and Play/Stop buttons, as well as the “extra” icon, so that they display correctly (the height and width are correctly defined in CSS.) 

3. The web service http://examen.lvlnetworks.com/ returns JSON data. Build a module that will retrieve and use this data.

    1. Each call to the API returns items for the next 10 seconds, as well as the startTimestamp and endTimestamp values.
    2. The list must be kept up to date, ensure that you repeat the call to the API to keep the data flowing.

4. Use the data retrieved in the previous step to fill the #items list.

    1. Use the .item element to fill the list.
    2. Each element must be included when their timestamp value is passed.
    3. The new elements must be added at the top of the list.
    4. The list must not contain more than 100 items at a time. At that point, elements at the end of the list must disappear to leave room for new ones. 

5. On clicking an item:

    1. The background turns grey (#444444) and the text turns white (#ffffff).

6. The integration includes some accessibility error and bad practices. Correct them.

7. The application must be fully responsive. Make additional fixes if required.
