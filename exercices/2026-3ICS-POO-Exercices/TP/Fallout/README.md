# Mise en place

1. Exécutez la commande suivante dans un prompt de commande Powershell :

```powershell
gradle init --type java-application --dsl kotlin --test-framework junit --use-defaults --package  "cpe.$($env:USERNAME)" --overwrite --project-name "Fallout"
```

2. Vous pouvez maintenant implémenter le TP.
3. Vérifiez que votre code compile et que les tests passent en exécutant la commande suivante :

```powershell
gradle run
```

Vous pouvez aussi utiliser votre IDE pour exécuter le programme.

L'énoncé du TP est disponible dans le dossier `docs/`.
