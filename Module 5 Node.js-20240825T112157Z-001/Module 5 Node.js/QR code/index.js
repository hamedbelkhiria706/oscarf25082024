/* 
1. Utilisez le package Inquirer npm pour obtenir le lien de l'utilisateur.
2. Utilisez le package qr-image npm pour transformer l'URL saisi par l'utilisateur en une image de code QR.
3. Créez un fichier txt pour enregistrer le lien saisi par l'utilisateur à l'aide du module de node fs natif.
*/
import inquirer from "inquirer";
import * as c from "qr-image";
import * as n from "fs";
inquirer
  .prompt([
    {
      type: "input",
      name: "URL",
      message: "Quel est votre URL?",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);

    var qr = c;

    var qr_svg = qr.image(answers.URL, { type: "svg" });
    /* The line `n` is importing the native Node.js `fs` module, which is used for interacting with the
    file system. In this code snippet, `n` is being used to write the generated QR code image to a
    file and to append the user's URL input along with their answers to a text file named
    "lien1.txt". */

    qr_svg.pipe(n.createWriteStream("j_aime_qr.svg"));

    n.writeFile(
      "lien.txt",
      "\n" + JSON.stringify(answers) + "\n qr:\n",
      "utf8",
      (err) => {
        if (err) throw err;
        console.log(
          'Les réponses ont été ajoutées avec succès à la fin du fichier "lien.txt".'
        );
      }
    );
    qr_svg.pipe(n.createWriteStream("lien.txt", { flags: "a" }));
  });
