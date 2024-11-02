# Documentation d'Installation de Proxmox VE 8.2

Ce guide détaille le processus d'installation de Proxmox VE 8.2 basé sur les captures d'écran fournies, adapté pour un élève de BTS SIO 2 (SISR). 

---

## 1. Écran de Bienvenue

![Écran de Bienvenue](1.png)

Lors du démarrage de l'installateur Proxmox VE 8.2, l'écran de bienvenue apparaît avec plusieurs options :

- **Install Proxmox VE (Graphical)** : Lance l'installation en mode graphique.
- **Install Proxmox VE (Terminal UI)** : Lance l'installation en mode terminal.
- **Advanced Options** : Options avancées pour la configuration.

---

## 2. Chargement de l'Installateur

![Chargement de l'Installateur](2.png)

L'installateur charge les fichiers système nécessaires et détecte le matériel. Pendant cette phase, plusieurs erreurs peuvent apparaître (ex. `intel_cstate`, `intel_tcc_cooling`) si certains modules ne sont pas compatibles avec le matériel actuel. Ces erreurs sont généralement sans impact pour la suite de l'installation.

---

## 3. Accord de Licence Utilisateur Final (EULA)

![EULA](3.png)

L'utilisateur doit accepter les termes de la licence pour continuer. Cet écran affiche l'EULA (End User License Agreement) de Proxmox VE, indiquant les droits et limites d'utilisation du logiciel.

- Cliquez sur **I agree** pour accepter les conditions.

---

## 4. Sélection du Disque d'Installation

![Sélection du Disque](4.png)

Cet écran permet de choisir le disque cible pour l'installation de Proxmox VE. Le programme d'installation formate le disque sélectionné, supprimant ainsi toutes les données existantes.

- **Vérifiez bien le disque sélectionné** avant de cliquer sur **Next**.

---

## 5. Configuration de la Localisation et du Fuseau Horaire

![Localisation et Fuseau Horaire](5.png)

Choisissez les paramètres régionaux pour optimiser les téléchargements et les mises à jour :

- **Country** : Sélectionnez le pays (France dans cet exemple).
- **Time Zone** : Fuseau horaire correspondant à votre localisation (Europe/Paris).
- **Keyboard Layout** : Disposition du clavier (French).

---

## 6. Définition du Mot de Passe Administrateur et Email

![Mot de Passe et Email](6.png)

Définissez un mot de passe sécurisé pour l'utilisateur root et ajoutez une adresse e-mail pour les notifications système.

- **Password** : Mot de passe root (minimum 8 caractères).
- **Email** : Adresse e-mail pour recevoir des alertes et notifications.

---

## 7. Configuration Réseau

![Configuration Réseau](7.png)

Paramétrez les informations réseau de Proxmox VE. Ces informations permettent d'accéder à l'interface de gestion du serveur.

- **Management Interface** : Interface réseau (ex. `ens33`).
- **Hostname (FQDN)** : Nom de domaine complet du serveur (ex. `m2l.local`).
- **IP Address (CIDR)** : Adresse IP du serveur et masque réseau (ex. `192.168.1.45/24`).
- **Gateway** : Passerelle réseau (ex. `192.168.1.199`).
- **DNS Server** : Serveur DNS (ex. `127.0.0.1` pour localhost).

---

## 8. Résumé des Paramètres

![Résumé des Paramètres](8.png)

Vérifiez les paramètres avant de lancer l'installation. L'installateur affichera un résumé des informations choisies, incluant :

| Option                | Valeur                   |
|-----------------------|--------------------------|
| Filesystem            | ext4                     |
| Disk(s)               | /dev/sda                 |
| Country               | France                   |
| Timezone              | Europe/Paris             |
| Keymap                | fr                       |
| Email                 | Groupe3E5@gmail.com      |
| Management Interface  | ens33                    |
| Hostname              | m2l                      |
| IP CIDR               | 192.168.1.45/24          |
| Gateway               | 192.168.1.199            |
| DNS                   | 127.0.0.1                |

- Cliquez sur **Install** pour lancer l'installation.

---

## 9. Plateforme de Virtualisation

![Plateforme de Virtualisation](9.png)

Pendant l'installation, Proxmox VE présente ses fonctionnalités de virtualisation :

- **Container Virtualization** : Virtualisation par conteneurs avec une perte de performance minimale.
- **Full Virtualization (KVM)** : Virtualisation complète compatible avec les OS Linux et Windows.
- **Enterprise Ready** : Plateforme prête pour les entreprises avec des options de gestion centralisée et de sauvegarde en ligne.

---

## 10. Journal d'Installation

![Journal d'Installation](10.png)

L'installation se poursuit avec la détection du matériel et les configurations réseau. Ce journal affiche les étapes effectuées en temps réel.

---

## 11. Écran de Connexion en Ligne de Commande

![Connexion en Ligne de Commande](11.png)

Après le redémarrage, Proxmox VE est accessible via un navigateur à l'adresse IP indiquée. Utilisez l'interface web pour configurer davantage le serveur.

- Adresse d'accès : `https://192.168.1.45:8006/`

---

## 12. Écran de Connexion à l'Interface Graphique

![Connexion Interface Graphique](12.png)

Écran de connexion de l'interface graphique de Proxmox VE. Entrez les informations de connexion pour accéder à la gestion du serveur.

- **User name** : Nom d'utilisateur (ex. `root`).
- **Password** : Mot de passe défini précédemment.
- **Realm** : Méthode d'authentification (ex. `Linux PAM standard authentication`).
- **Language** : Langue de l'interface.

---

**Fin de l'installation** : Proxmox VE est maintenant installé et prêt à être configuré pour la virtualisation.

---

### Remerciements
Document réalisé par un élève de **BTS SIO 2 - SISR**. Ce guide couvre toutes les étapes essentielles pour installer et configurer Proxmox VE sur un serveur.

---
