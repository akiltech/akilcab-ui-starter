# AKILCAB Starters

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)

## Objectif

Le but de ce repository est d'offrir un boilerplate (starter) ainsi que des packages que seront communs aux projet AKILCAB

## Structure du repo

Ce projet est un monorepo structuré comme suit:

- un dossier `packages` contenant tous les packages npm

### Comment ouvrir un pull request (PR)

Pour contribuer au projet vous devez cloner le projet, ensuite créer une branche avec la commande suivante

```bash
git checkout -b <nom_de_la_branche>
```
NB: Vous devez créer la branche à partir de la branche principale

Faire un commit par la suite avant la commande suivante

```bash
git add . && git commit -m "message du commit"
```

Et pousser son code avec la commande suivante

Si le projet n'a pas été forké

```bash
git push origin <nom_de_la_branche>
```

Si le projet a été forké

```bash
git push upstream <nom_de_la_branche>
```