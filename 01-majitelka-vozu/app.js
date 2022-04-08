// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
    znacka: 'Ford',
    barva: 'modra',
    rokVyroby: 2015,
    spz: '182 356',
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
auto.majitel = {};
auto.majitel.jmeno = 'Jana';
auto.majitel.prijimeni = 'Czechitas';

// Přepiš značku na Škoda
auto.znacka = 'Skoda';

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
let majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijimeni;
let znacka = auto.znacka;
let spz = auto.spz;