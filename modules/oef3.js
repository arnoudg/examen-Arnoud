function Schilderij(naam, canvasgrootte, kostprijs) {
  this.naam = "";
  this.canvasgrootte = "";
  this.kostprijs = "";
}

Schilderij.prototype.grootte = function () {};

//

function Schilder(voornaam, achternaam, stijl, arts) {
  this.voornaam = "";
  this.achternaam = "";
  this.stijl = "";
  this.arts = "";
}

Schilder.prototype.addPainting = function () {};

Schilder.prototype.removePainting = function () {};

Schilder.prototype.getList = function () {};

Schilder.prototype.getTotalWidth = function () {};
