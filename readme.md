(English version follows)
# Instructions g�n�rales

Coder pour du web est parfois difficile, mais coder pour une t�l�vision ou des appareils mobiles exige des consid�rations de performance tr�s pointues. Gardez donc toujours � l�esprit l�optimisation dans la r�alisation des instructions et l�aspect multiplateforme.

# � consid�rer

-	L�accessibilit�
-	Maintenabilit�
-	Qualit� du code
-	Soucis des performances
-	Gestion d�erreur
-	Portabilit�

# Pr�paration

- Faites un clone local du repository � partir de GitHub:
git clone https://github.com/LVLStudio/LVL.WebExam.git
- Cr�ez-vous une branche locale de travail nomm�e `exam`:

    `cd LVL.WebExam`

    `git branch exam`

    `git checkout exam`

- Committez vos changements dans cette branche.

- G�n�rez une patch nomm�e exam.patch contenant vos changements de la branche:

	`git format-patch master --stdout > exam.patch`

- Finalement, envoyez-nous votre patch � job@lvlstudio.com pour que nous puissions constater votre magnifique travail! ;)

# T�ches

1. En dessous de 1024px de largeur, il est souhait� de cacher le menu par d�faut pour que le reste du contenu puisse prendre toute la largeur.
	1.	Le bouton de menu (actuellement cach�) doit apparaitre
	2.	Au clic sur le bouton, le panneau de menu doit alterner entre l��tat ouvert et l��tat ferm�, dans une animation de glissement qui pousse le restant du contenu vers la droite.

2.	Quelque chose ne va pas avec l�int�gration des assets graphiques. Corrigez les boutons de menu et play/stop et l�ic�ne de � extra � pour qu�ils s�affichent correctement (les hauteurs et largeurs en CSS sont correctement d�finies).

3.	Le web service http://examen.lvlnetworks.com/ retourne des blocs d�information JSON. Construire le module qui permettra de r�cup�rer et d�utiliser ces donn�es.

    1.	Chaque appel � l�API retourne des items pour les 10 prochaines secondes et les valeurs startTimestamp et endTimestamp.
    2.	La liste doit �tre tenue � jour, assurez-vous de r�p�ter l�appel aux API en cons�quence.

4. Utiliser les donn�es r�cup�r�es � l��tape pr�c�dente pour remplir la liste d��l�ments #items.

    1. Basez-vous sur l��l�ment `.item` pour remplir la liste
    2. Inclure les �l�ments au fur et � mesure que leurs valeurs timestamp est pass�e.
    3. Les nouveaux �l�ments doivent �tre ajout�s en haut de la liste.
    4. La liste ne doit pas contenir plus de 100 items � la fois. � ce point, les �l�ments � la fin doivent dispara�tre pour laisser la place aux nouveaux.

5. Au clic sur un item :

    1.	Le background devient alors gris (`#444444`) et le texte blanc (`#ffffff`).
    
6.	L�int�gration comporte diverses erreurs d�accessibilit�, corrigez-les!

7.	L�application se veut �tre responsive, apportez d�autres am�liorations si vous en voyez.

------------------------------------------

# General Instructions

Coding for the web is sometimes difficult, but coding for television sets or mobile devices requires strict performance considerations. To that effect, please always keep two things in mind when carrying out the following instructions: optimisation, and the multi-platform nature of the product. The majority of the following points will require consideration of these two elements.

# To be considered

-	Respect of instructions 
-	Performances 
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

2. Something is wrong with the integration of the graphical assets. Fix the Menu and Play/Stop buttons, as well as the �extra� icon, so that they display correctly (the height and width are correctly defined in CSS.) 

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
