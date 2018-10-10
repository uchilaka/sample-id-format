import "colors";
// Build sample data
const LF = "\n";
const CR = "\r";
const RS = " ";

const data = [
  // First row - separate processor
  [
    "@",
    LF,
    RS,
    CR,
    "ANSI  636000080002DL00410278ZV03190008DLDAQT64235789"
  ].join(""),
  // Everything else is delimited with LF
  "DCSSAMPLE",
  "DDEN",
  "DACMICHAEL",
  "DADFN",
  "DADJOHN",
  "DDGN",
  "DCUJR",
  "DCAD",
  "DCBK",
  "DAYBRO",
  "DAG2300 WEST BROAD STREET",
  "DAIRICHMOND",
  "DAJVA",
  "DAK232690000",
  "DCGUSA",
  "DDAM",
  "DDB06062008",
  // Last row
  ["ZVZVA01", CR].join("")
];

const PDF417 = data.join(LF);

console.log(
  "Barcode data (base64):".bgGreen.black,
  Buffer.from(PDF417, "utf8").toString("base64")
);
