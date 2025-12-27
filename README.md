# ISO Slovar

Slovenska terminologija UI in informacijske varnosti, usklajena z ISO 22989 / 27000.

## Struktura

```
iso-slovar/
├── src/
│   ├── terms.csv       ← uredi tukaj (Excel-friendly)
│   └── template.html   ← HTML predloga
├── dist/
│   └── index.html      ← generirano (objavi to)
├── build.js
└── package.json
```

## Uporaba

### Urejanje terminov

Uredi `src/terms.csv` — v Excelu ali kateremkoli urejevalniku.

Polja:
- `std` — standard (22989, 27000)
- `ref` — referenca (3.1.1, 3.2.4...)
- `cat` — kategorija (3.1 AI, 3.2 Data...)
- `en` — angleški termin
- `sl` — slovenski termin
- `def_sl` — slovenska definicija (tvoja formulacija)
- `notes` — opombe, pojasnila
- `see_also` — povezave (ločene z `|`)

### Generiranje

```bash
npm run build
```

Rezultat: `dist/index.html`

### Objava

Objavi `dist/index.html` na GitHub Pages ali kamorkoli.

## Licenca

Vsebina je avtorsko delo. Terminologija je usklajena z ISO standardi, definicije so lastna formulacija.
