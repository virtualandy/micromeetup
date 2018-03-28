import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import List, { ListItem, ListItemText } from "material-ui/List";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import FlashOn from "material-ui-icons/FlashOn";
import { withStyles } from "material-ui/styles";
import withRoot from "../withRoot";
import namify from "../namegen";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 2
  }
});

function randomify(maxRandom) {
  let randomVillainIndex = Math.floor(Math.random() * (maxRandom-1)) + 1 
  return villains[randomVillainIndex];
}

class Index extends React.Component {
  state = {
    open: false,
    startupNames: [],
    name: "Microservices Cloud"
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  getNames = () => {
    let startupNames = namify(this.state.name);
    this.setState({
      startupNames: startupNames
    });
  };

  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { startupNames, name } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>
            <Typography variant="title" className={classes.title}>
              Startup Name Generator...for Villains
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={9}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name-simple">Ideas</InputLabel>
              <Input
                id="name-simple"
                value={name}
                onChange={this.handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="fab"
              color="primary"
              aria-label="add"
              className={classes.button}
              onClick={this.getNames}
            >
              <FlashOn />
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <List>
              {startupNames.map(eName => (
                <ListItem key={eName}>
                  <ListItemText primary={randomify(startupNames.length) + " " + eName} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        {/* <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>
        <Button variant="raised" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button> */}
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

let villains = [
    "Mephisto",
    "Thanos",
    "Amora",
    "Mandarin",
    "Akihiro",
    "Ultron",
    "Hela",
    "Veranke",
    "Burglar",
    "Nightmare",
    "Dormammu",
    "Arcade",
    "Blastaar",
    "Attuma",
    "Ulik",
    "Skurge",
    "Bastion",
    "Surtur",
    "Tyros",
    "Super-Adaptoid",
    "Man-Beast",
    "Kro",
    "Nebula",
    "Psycho-Man",
    "Seth",
    "Umar",
    "Satannish",
    "Thakorr",
    "Malekith",
    "Miek",
    "Mordred",
    "Eshu",
    "Belasco",
    "Blackheart",
    "Byrrah",
    "Yon-Rogg",
    "Barbarus",
    "Kiskillilla",
    "Ghaur",
    "Ananym",
    "Amphibius",
    "Khan",
    "Brainchild",
    "Meranno",
    "Deathwatch",
    "Peotor",
    "Ozymandias",
    "Romulus",
    "Igor",
    "Aireo",
    "Quicksand",
    "Mangog",
    "Morg",
    "Zzzax",
    "Adversary",
    "Bonebreaker",
    "Morlun",
    "Geirrodur",
    "Slaymaster",
    "Stellaris",
    "Gideon",
    "Fatale",
    "Delilah",
    "Miklho",
    "Ymir",
    "Chthon",
    "Ultimo",
    "Maelstrom",
    "Gaza",
    "Servo-Guards",
    "Reptyl",
    "Xemnu",
    "Amatsu-Mikaboshi",
    "Suwan",
    "Harokin",
    "Kaluu",
    "Stallior",
    "Shaitan",
    "Bloodscream",
    "Ikol",
    "Jormungand",
    "Yandroth",
    "Shuma-Gorath",
    "Deathurge",
    "Paibok",
    "Set",
    "Skullbuster",
    "Skreet",
    "Wong-Chu",
    "Zarek",
    "Typhon",
    "Lupo",
    "Roughouse",
    "T-Ray",
    "Cerberus",
    "Autolycus",
    "Nebulon",
    "Garm",
    "Tyrak",
    "Geatar",
    "Devos",
    "Temugin",
    "Ravenous",
    "Tundra",
    "Dreamqueen",
    "Chesbro",
    "Nakia",
    "Profile",
    "Dweller-in-Darkness",
    "Yagzan",
    "Nykonn",
    "Necromon",
    "Plague",
    "Manslaughter",
    "Mongoose",
    "Cyttorak",
    "Korath-Thak",
    "Pilgrim",
    "Titannus",
    "Angmo-Asan",
    "Maa-Gor",
    "Gor-Tok",
    "Tode",
    "Hellhounds",
    "Nenora",
    "Medea",
    "Semiramis",
    "Jolen",
    "Ero",
    "Eliphas",
    "Minn-Erva",
    "Degrayde",
    "Varnae",
    "Gilpetperdon",
    "Whiteout",
    "At-Lass",
    "Alkhema",
    "Gregor",
    "Xenith",
    "Vargas",
    "Azazel",
    "Anti-Cap",
    "Br\u00fcn",
    "Naga",
    "Thog",
    "Oblivion",
    "Hemingway",
    "Sack",
    "Consultant",
    "Pagon",
    "Zom",
    "Ikthon",
    "Cephalus",
    "Thoth-Amon",
    "Mercurio",
    "Wraarl",
    "Barrage",
    "Tusk",
    "Nakota",
    "Tyrant",
    "Vessel",
    "Kyknos",
    "Perrikus",
    "Dreamstalker",
    "Orini",
    "Fera",
    "Brynocki",
    "Gronk",
    "Phobius",
    "TESS-One",
    "Hard-Drive",
    "Spyne",
    "Dirtnap",
    "G\u00f6ndul",
    "Unit",
    "Ichisumi",
    "Kala",
    "Kaecilius",
    "Kroda",
    "Magrat",
    "Nebulo",
    "Glitternight",
    "Helio",
    "Gunthar",
    "Reiko",
    "Hardcore",
    "Russian",
    "Steinbeck",
    "Achelous",
    "Bowman",
    "Militant",
    "Krait",
    "Hellverine",
    "Mudbug",
    "Supergiant",
    "Spragg",
    "Zemu",
    "Comanche",
    "Taboo",
    "Zardeth",
    "Hawkshaw",
    "Snowblind",
    "Lifeforce",
    "Luminor",
    "Beemer",
    "Flaw",
    "Offset",
    "Kruun",
    "Hive",
    "Zadkiel",
    "Father",
    "Thori",
    "Hirohito",
    "Googam",
    "Goom",
    "Randau",
    "Dark-Crawler",
    "Moondark",
    "Piranha",
    "Slifer",
    "Kierrok",
    "Ahpuch",
    "Lavour",
    "MX39147",
    "Raunch",
    "Slash",
    "Grog",
    "Punchout",
    "Toko",
    "Trista",
    "Wipeout",
    "Juvan",
    "Artys-Gran",
    "Occulus",
    "Diabolique",
    "Pyllar",
    "Shathra",
    "Eurystheus",
    "Artume",
    "Hl\u00f6kk",
    "Dimitrios",
    "Shiklah",
    "Grottu",
    "Zzutak",
    "Jinku",
    "Dominus",
    "Kaanuub",
    "Turac",
    "Melf",
    "Arides",
    "Hecate",
    "Utgard-Loki",
    "Dherk",
    "Kirigi",
    "Volx",
    "Maraud",
    "Kariooq",
    "Urthona",
    "Crotus",
    "Shauna",
    "Chainsaw",
    "Jonin",
    "Dwarf",
    "Dylon-Cir",
    "Priapus",
    "Skeletron",
    "Advisor",
    "Lich",
    "Pagan",
    "Micah",
    "Citadel",
    "Argus",
    "Lobe",
    "Xarus",
    "Winsor",
    "Offer",
    "Droom",
    "Orrgo",
    "Rorgg",
    "Tri-Man",
    "Magnir",
    "Krimonn",
    "Super-Humanoid",
    "Igron",
    "Stoneface",
    "Bi-Beast",
    "Ningal",
    "Ninja",
    "Scimitar",
    "Dromedan",
    "Abd-el-Hazred",
    "Bel-Dann",
    "Avarrish",
    "Fashima",
    "Dragonrider",
    "Hoodwink",
    "Nidhogg",
    "Tolomaq",
    "Ani-Mator",
    "Roche",
    "Psynapse",
    "Crule",
    "Deadbolt",
    "Dread",
    "Lenz",
    "Protocol",
    "Rak",
    "Ator",
    "Spook",
    "Harper",
    "Vise",
    "Tokkots",
    "Revenant",
    "Leash",
    "Yith",
    "Zarina",
    "Hypernova",
    "Perro",
    "Serafina",
    "Tenebrous",
    "Warshot",
    "Cronus",
    "Plokta",
    "Verre",
    "Snot",
    "Azrael",
    "Kurrgo",
    "Molyb",
    "Laufey",
    "Precious",
    "Man-Monster",
    "Sligguth",
    "Allatou",
    "Varanus",
    "Bessie",
    "Sssesthugar",
    "Threkker",
    "Toy",
    "Tutinax",
    "Iguana",
    "Hyppokri",
    "Phaeder",
    "Puishannt",
    "Unnthinnk",
    "Ranark",
    "Zedrao",
    "Jakal",
    "Skunge",
    "Lomen",
    "Spyder",
    "Fool",
    "Kkallakku",
    "Vyrra",
    "Jutta",
    "Battletide",
    "Suma-Ket",
    "Bitmap",
    "Infomorph",
    "Wirehead",
    "Andros",
    "Bramer",
    "Nardi",
    "Skritch",
    "Olivier",
    "Tarakis",
    "Domina",
    "Coach",
    "Marshal",
    "Clay",
    "Trolls",
    "Blindspot",
    "Mallen",
    "Colony",
    "Devo",
    "Sega",
    "Deacon",
    "Burst",
    "Shadowstalker",
    "Adam",
    "Aradnea",
    "Nul",
    "Omegex",
    "Arkea",
    "Mysterion",
    "Kaa",
    "Pilai",
    "Sandu",
    "Blackie",
    "Shazana",
    "Adria",
    "Ixar",
    "Nebulos",
    "Bia",
    "Ducalon",
    "Enaros",
    "Klaatu",
    "Tuval",
    "Visis",
    "Jakar",
    "Kohbra",
    "Baphomet",
    "Thelius",
    "Snaykar",
    "Mentus",
    "Bartak",
    "Zaniac",
    "Raak",
    "Saturnine",
    "Gormuu",
    "Levan",
    "Predator",
    "Shagreen",
    "Grundroth",
    "Muramasa",
    "Zxaxz",
    "Conscience",
    "Tailgunner",
    "Shanzar",
    "Spore",
    "Molokai",
    "Reno",
    "Bacillus",
    "Birdy",
    "Hag",
    "Moonshade",
    "Troh-Maw",
    "Anti-Being",
    "Geometer",
    "Insidio",
    "Oscuram",
    "Socus",
    "Grimm",
    "Warfist",
    "Neut",
    "Targon",
    "Barone",
    "Enrakt",
    "Cudgel",
    "Manacle",
    "Mondo",
    "Nagala",
    "Higashi",
    "Saguri",
    "Ginniyeh",
    "Jillian",
    "Ophis",
    "Topher",
    "Yidrazil",
    "Kestrel",
    "Skornn",
    "Eradica",
    "Absynthe",
    "Kamar",
    "Bendigeidfran",
    "Ohyaku",
    "Zzxz",
    "Anti-Priest",
    "Warhead",
    "Evolutionary",
    "Mzee",
    "Remlik",
    "Shredder",
    "Termagaira",
    "Medusa",
    "Gorgolla",
    "Aggamon",
    "Skoll",
    "Umbu",
    "Andro",
    "Durok",
    "Mikas",
    "Trikon",
    "Lorvex",
    "Nephrus",
    "Preyy",
    "Ducharme",
    "Kragonn",
    "Drom",
    "Helleyes",
    "Jeremiah",
    "Cheshire",
    "Pro-Boscis",
    "Pro-Rata",
    "Ramsey",
    "Stygyro",
    "Empathoid",
    "Manticore",
    "Alberich",
    "Ytitnedion",
    "Ampzilla",
    "Grappler",
    "Lobros",
    "Jolena",
    "Torso",
    "Cataphrax",
    "Heatwave",
    "Jorro",
    "Modgud",
    "Timeshadow",
    "Kuryestan",
    "Nessus",
    "Ngh",
    "Voroshilov",
    "Xa",
    "Beauty",
    "Dreadface",
    "Shatterfist",
    "Truth",
    "Magpie",
    "Recoil",
    "Ssith",
    "Uncegila",
    "Wildrun",
    "Erynys",
    "Metarchus",
    "Tekagi",
    "Ancestor",
    "F.A.C.A.D.E.",
    "Jamil",
    "Malachi",
    "Psiphon",
    "Skar",
    "Spoiler",
    "Ever",
    "Manowar",
    "Rex",
    "Conundrum",
    "M-Plate",
    "Blunt",
    "Intelligentsia",
    "Krueger",
    "Thaiis",
    "Thais",
    "Una-Rogg",
    "Cilla",
    "Marduk",
    "Primo",
    "Rowkis",
    "Flores",
    "Morwen",
    "Buttview",
    "Aguja",
    "Fuego",
    "Godseye",
    "Aghanne",
    "Arath",
    "Krakos"]

export default withRoot(withStyles(styles)(Index));
