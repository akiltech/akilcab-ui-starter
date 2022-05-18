# AKILCAB UI Starter

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)

## Objectif

Le but de ce repository est d'offrir un boilerplate (starter) ainsi que des packages que seront communs aux projet AKILCAB

## Installation

Apres avoir cloné le projet il faudra taper la commande suivante afin d'installer les dépendances

```bash
yarn install
```

puis exécuter

```bash
yarn husky install
```

pour activer husky.

NB: Vous devez exclusivement avoir la derniere version `lts` de NodeJs pour proceder à l'installation des dépendances
Pour switcher vers la version à choisir dans le projet tapé la commande suivante

```bash
nvm use
nvm install
```

## Faire un commit

Ce starter utilise commitizen pour nous aider à écrire des messages de commit conventionnel. Pour donc faire un commit, exécuter la commande suivante

```bash
yarn commit
ou
npm run commit
```
