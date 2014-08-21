# Instructions g�n�rales

Coder pour du web est parfois difficile, mais coder pour une t�l�vision ou des appareils mobiles exige des consid�rations de performance tr�s pointues. Gardez donc toujours � l�esprit l�optimisation dans la r�alisation des instructions et l�aspect multiplateforme. La majorit� des points seront sur ces deux �l�ments.

L�accessibilit� est �galement une consid�ration.

# Pr�paration

- Faites un clone local du repository � partir de GitHub:
git clone https://github.com/LVLStudio/LVL.WebExam.git
- Cr�ez-vous une branche locale de travail nomm�e `exam`:

	`cd LVL.WebExam

	`git branch exam

	`git checkout exam

- Committez vos changements dans cette branche.

- G�n�rez une patch nomm�e exam.patch contenant vos changements de la branche:

	`git format-patch master --stdout > exam.patch

- Finalement, envoyez-nous votre patch � job@lvlstudio.com pour que nous puissions constater votre magnifique travail! ;)

# T�ches

1. En dessous de 1024px de largeur, il est souhait� de cacher le menu par d�faut pour que le reste du contenu puisse prendre toute la largeur.
	1.	Le bouton de menu (actuellement cach�) doit apparaitre
	2.	Au clic sur le bouton, le panneau de menu doit alterner entre l��tat ouvert et l��tat ferm�, dans une animation de glissement qui pousse le restant du contenu vers la droite.

2.	Quelque chose ne va pas avec l�int�gration des assets graphiques. Corrigez les boutons de menu et play/stop et l�ic�ne de � extra � pour qu�ils s�affichent correctement (les hauteurs et largeurs en CSS sont correctement d�finies).

3.	Le web service http://examen.lvlnetworks.com/ retourne des blocs d�information JSON. Construire le module qui permettra de r�cup�rer et d�utiliser ces donn�es.

    1.	Chaque appel � l�API retourne des items pour les 10 prochaines secondes et les valeurs startTimestamp et endTimestamp.

4. Utiliser les donn�es r�cup�r�es � l��tape pr�c�dente pour remplir la liste d��l�ments #items.

    1. Basez-vous sur l��l�ment .item pour remplir la liste
    2. Inclure les �l�ments au rythme de leurs valeurs timestamp.
    3. Les nouveaux �l�ments doivent �tre ajout�s en haut de la liste.
    4. La liste ne doit pas contenir plus de 100 items � la fois. � ce point, les �l�ments � la fin doivent dispara�tre pour laisser la place aux nouveaux.

5. Au clic sur un item :

    1.	Le background devient alors gris (#444444) et le texte blanc (#ffffff).
    
6.	Sugg�rer quelques am�liorations d�accessibilit� � l�interface (sans les faire).

7.	L�application se veut �tre responsive, apportez d�autres am�liorations si vous en voyez.