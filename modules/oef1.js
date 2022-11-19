function Person(fN, lN, stN, hNr, pC, state) {
  this.voornaam = fN;
  this.familienaam = lN;
  this.straat = stN;
  this.huisnummer = hNr;
  this.postcode = pC;
  this.gemeente = state;
}

const persoon1 = new Person(
  "Pieter",
  "Vanleemput",
  "Posteloenstraat",
  22,
  3000,
  "Leuven"
);
console.log(persoon1);

function adresregel() {
  let;
  // length   22!
  return `----------------------
|${fN}. ${lN}|
|${stN}${hNR}|
|${pC}${state}|
    ----------------------`;
}
