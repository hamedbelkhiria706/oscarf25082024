import * as c from "qr-image";
import * as n from "fs";
n.readFile("liens.txt", "utf-8", (e, d) => {
  if (e) {
    console.log(e);
  } else {
    const n1 = Array.from(d.split("\n"));

    n1.map((f) => {
      console.log(f);
      f = f.trim();
      var qr_svg = c.image(f, { type: "png" });
      n.writeFile(
        "j_aime_qr" + f.replace(".", "_") + ".png",
        "utf-8",
        () => {}
      );
      qr_svg.pipe(
        n.createWriteStream("j_aime_qr" + f.replace(".", "_") + ".png")
      );
    });
  }
});
