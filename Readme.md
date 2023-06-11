# Kata E2E Cypress

## Objectif
Le but de ce kata est, au travers de quelques exercices, de s'entrainer à l'écriture de test bout en bout (E2E) avec l'outil [Cypress](https://www.cypress.io/).

L'application web pour laquelle nous devons écrire des tests E2E est [Weather App](https://e2e-test-quest.github.io/weather-app/). 

Il s'agit d'une application simple qui affiche la météo pour quelques villes.

## Mise en place de votre environnement
1. [Télécharger ici](https://download.cypress.io/desktop), la version desktop de Cypress
2. Décompresser l'archive dans un répertoire que nous appellerons `CYPRESS_HOME`
3. Cloner ce dépôt Git au sein d'un répertoire que nous appellerons `KATA_HOME`
4. Lancer l'exécutable `Cypress.exe` du répertoire `CYPRESS_HOME`
5. Cliquer sur le bouton `Add project` et indiquer le répertoire `KATA_HOME`
6. Ensuite éxécuter le fichier de test `00-hello-world.cy.js`
7. Corriger le fichier de test pour qu'il s'exécute avec succès

## Exercices
1. **Homepage** : Vérifier que sur la page d'accueil, les éléments suivants sont visibles:
    - un titre `Weather App`
    - un bouton `Démarrer`

2. **Weather** : Vérifier que depuis la page d'accueil, lorsqu'on clique sur `Démarrer`, alors les éléments suivants sont visibles:
   - un texte `Nothing to display`
   - La liste des villes dans le volet de gauche `['Douala', 'Tunis', 'Limoges']`

3. **Filter** : Vérifier que depuis la page d'accueil, lorsqu'on clique sur `Démarrer`, puis qu'on saisit le texte `i` dans le champ de recherche et qu'on clique sur le bouton rechercher, alors les villes disponibles : `['Tunis', 'Limoges']`

4. **Pour aller plus loin** : Vous pouvez :
   - Refacto le code de vérification des villes disponibles
   - Mocker l'appel à l'url https://e2e-test-quest.github.io/weather-app/assets/data/mock.json pour changer la liste des villes disponibles
   - Créer une [commande Cypress](https://docs.cypress.io/api/cypress-api/custom-commands#docusaurus_skipToContent_fallback) pour la vérification des villes disponibles

## Liens utiles
   - [Cypress Assertions](https://docs.cypress.io/guides/references/assertions#Common-Assertions)
   - [Cypress Click Actions](https://docs.cypress.io/api/commands/click#docusaurus_skipToContent_fallback)
   - [Chai Assertions](https://docs.cypress.io/guides/references/assertions#Chai)