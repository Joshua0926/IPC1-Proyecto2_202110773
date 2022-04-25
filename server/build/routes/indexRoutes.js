"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuarios = [
    {
        email: "user1",
        password: "123"
    },
    {
        email: "user2",
        password: "456"
    },
    {
        email: "user3",
        password: "789"
    }
];
const Blastoise = [
    {
        numero: "9",
        nombre: "Blastoise",
        tipo: "Agua",
        ataque: "Hidro Bomba",
        foto: "https://projectpokemon.org/images/normal-sprite/blastoise.gif"
    }
];
const Feraligatr = [
    {
        numero: "160",
        nombre: "Feraligatr",
        tipo: "Agua",
        ataque: "Hidro Triturar",
        foto: "https://projectpokemon.org/images/normal-sprite/feraligatr.gif"
    }
];
const Empoleon = [
    {
        numero: "395",
        nombre: "Empoleon",
        tipo: "Agua",
        ataque: "Hidro Estallido",
        foto: "https://projectpokemon.org/images/normal-sprite/empoleon.gif"
    }
];
const Floatzel = [
    {
        numero: "419",
        nombre: "Floatzel",
        tipo: "Agua",
        ataque: "Acua Jet",
        foto: "https://projectpokemon.org/images/normal-sprite/floatzel.gif"
    }
];
const Greninja = [
    {
        numero: "658",
        nombre: "Greninja",
        tipo: "Agua",
        ataque: "Shuriken Danzante",
        foto: "https://projectpokemon.org/images/normal-sprite/greninja.gif"
    }
];
const Charizard = [
    {
        numero: "6",
        nombre: "Charizard",
        tipo: "Fuego",
        ataque: "Giro Fuego",
        foto: "https://projectpokemon.org/images/normal-sprite/charizard.gif"
    }
];
const Arcanine = [
    {
        numero: "59",
        nombre: "Arcanine",
        tipo: "Fuego",
        ataque: "Aliento Igneo",
        foto: "https://projectpokemon.org/images/normal-sprite/arcanine.gif"
    }
];
const Blaziken = [
    {
        numero: "257",
        nombre: "Blaziken",
        tipo: "Fuego",
        ataque: "Patada Explosiva",
        foto: "https://projectpokemon.org/images/shiny-sprite/blaziken-f.gif"
    }
];
const Talonflame = [
    {
        numero: "663",
        nombre: "Talonflame",
        tipo: "Fuego",
        ataque: "Incusrsion Ignea",
        foto: "https://projectpokemon.org/images/normal-sprite/talonflame.gif"
    }
];
const Incineroar = [
    {
        numero: "727",
        nombre: "Incineroar",
        tipo: "Fuego",
        ataque: "Sacudida Ignea",
        foto: "https://projectpokemon.org/images/normal-sprite/incineroar.gif"
    }
];
const Venusaur = [
    {
        numero: "3",
        nombre: "Venusaur",
        tipo: "Planta",
        ataque: "Rayo Solar",
        foto: "https://projectpokemon.org/images/normal-sprite/venusaur.gif"
    }
];
const Shiftry = [
    {
        numero: "275",
        nombre: "Shiftry",
        tipo: "Planta",
        ataque: "Tornado Ventilador",
        foto: "https://projectpokemon.org/images/normal-sprite/shiftry.gif"
    }
];
const Serperior = [
    {
        numero: "497",
        nombre: "Serperior",
        tipo: "Planta",
        ataque: "Ciclon Hojas",
        foto: "https://projectpokemon.org/images/normal-sprite/serperior.gif"
    }
];
const Decidueye = [
    {
        numero: "724",
        nombre: "Decidueye",
        tipo: "Planta",
        ataque: "Flecha Dividida",
        foto: "https://projectpokemon.org/images/normal-sprite/decidueye.gif"
    }
];
const Sceptile = [
    {
        numero: "254",
        nombre: "Sceptile",
        tipo: "Planta",
        ataque: "Vendaval de Hojas",
        foto: "https://projectpokemon.org/images/normal-sprite/sceptile.gif"
    }
];
const Agua = [
    {
        numero: "9",
        nombre: "Blastoise",
        tipo: "Agua",
        ataque: "Hidro Bomba",
        foto: "https://projectpokemon.org/images/normal-sprite/blastoise.gif"
    },
    {
        numero: "160",
        nombre: "Feraligatr",
        tipo: "Agua",
        ataque: "Hidro Triturar",
        foto: "https://projectpokemon.org/images/normal-sprite/feraligatr.gif"
    },
    {
        numero: "395",
        nombre: "Empoleon",
        tipo: "Agua",
        ataque: "Hidro Estallido",
        foto: "https://projectpokemon.org/images/normal-sprite/empoleon.gif"
    },
    {
        numero: "419",
        nombre: "Floatzel",
        tipo: "Agua",
        ataque: "Acua Jet",
        foto: "https://projectpokemon.org/images/normal-sprite/floatzel.gif"
    },
    {
        numero: "658",
        nombre: "Greninja",
        tipo: "Agua",
        ataque: "Shuriken Danzante",
        foto: "https://projectpokemon.org/images/normal-sprite/greninja.gif"
    }
];
const Fuego = [
    {
        numero: "6",
        nombre: "Charizard",
        tipo: "Fuego",
        ataque: "Giro Fuego",
        foto: "https://projectpokemon.org/images/normal-sprite/charizard.gif"
    },
    {
        numero: "59",
        nombre: "Arcanine",
        tipo: "Fuego",
        ataque: "Aliento Igneo",
        foto: "https://projectpokemon.org/images/normal-sprite/arcanine.gif"
    },
    {
        numero: "257",
        nombre: "Blaziken",
        tipo: "Fuego",
        ataque: "Patada Explosiva",
        foto: "https://projectpokemon.org/images/shiny-sprite/blaziken-f.gif"
    },
    {
        numero: "663",
        nombre: "Talonflame",
        tipo: "Fuego",
        ataque: "Incusrsion Ignea",
        foto: "https://projectpokemon.org/images/normal-sprite/talonflame.gif"
    },
    {
        numero: "727",
        nombre: "Incineroar",
        tipo: "Fuego",
        ataque: "Sacudida Ignea",
        foto: "https://projectpokemon.org/images/normal-sprite/incineroar.gif"
    }
];
const Planta = [
    {
        numero: "3",
        nombre: "Venusaur",
        tipo: "Planta",
        ataque: "Rayo Solar",
        foto: "https://projectpokemon.org/images/normal-sprite/venusaur.gif"
    },
    {
        numero: "254",
        nombre: "Sceptile",
        tipo: "Planta",
        ataque: "Vendaval de Hojas",
        foto: "https://projectpokemon.org/images/normal-sprite/sceptile.gif"
    },
    {
        numero: "275",
        nombre: "Shiftry",
        tipo: "Planta",
        ataque: "Tornado Ventilador",
        foto: "https://projectpokemon.org/images/normal-sprite/shiftry.gif"
    },
    {
        numero: "497",
        nombre: "Serperior",
        tipo: "Planta",
        ataque: "Ciclon Hojas",
        foto: "https://projectpokemon.org/images/normal-sprite/serperior.gif"
    },
    {
        numero: "724",
        nombre: "Decidueye",
        tipo: "Planta",
        ataque: "Flecha Dividida",
        foto: "https://projectpokemon.org/images/normal-sprite/decidueye.gif"
    }
];
const todosPokemon = [
    {
        numero: "9",
        nombre: "Blastoise",
        tipo: "Agua",
        ataque: "Hidro Bomba",
        foto: "https://projectpokemon.org/images/normal-sprite/blastoise.gif"
    },
    {
        numero: "160",
        nombre: "Feraligatr",
        tipo: "Agua",
        ataque: "Hidro Triturar",
        foto: "https://projectpokemon.org/images/normal-sprite/feraligatr.gif"
    },
    {
        numero: "395",
        nombre: "Empoleon",
        tipo: "Agua",
        ataque: "Hidro Estallido",
        foto: "https://projectpokemon.org/images/normal-sprite/empoleon.gif"
    },
    {
        numero: "419",
        nombre: "Floatzel",
        tipo: "Agua",
        ataque: "Acua Jet",
        foto: "https://projectpokemon.org/images/normal-sprite/floatzel.gif"
    },
    {
        numero: "658",
        nombre: "Greninja",
        tipo: "Agua",
        ataque: "Shuriken Danzante",
        foto: "https://projectpokemon.org/images/normal-sprite/greninja.gif"
    },
    {
        numero: "6",
        nombre: "Charizard",
        tipo: "Fuego",
        ataque: "Giro Fuego",
        foto: "https://projectpokemon.org/images/normal-sprite/charizard.gif"
    },
    {
        numero: "59",
        nombre: "Arcanine",
        tipo: "Fuego",
        ataque: "Aliento Igneo",
        foto: "https://projectpokemon.org/images/normal-sprite/arcanine.gif"
    },
    {
        numero: "257",
        nombre: "Blaziken",
        tipo: "Fuego",
        ataque: "Patada Explosiva",
        foto: "https://projectpokemon.org/images/shiny-sprite/blaziken-f.gif"
    },
    {
        numero: "663",
        nombre: "Talonflame",
        tipo: "Fuego",
        ataque: "Incusrsion Ignea",
        foto: "https://projectpokemon.org/images/normal-sprite/talonflame.gif"
    },
    {
        numero: "727",
        nombre: "Incineroar",
        tipo: "Fuego",
        ataque: "Sacudida Ignea",
        foto: "https://projectpokemon.org/images/normal-sprite/incineroar.gif"
    },
    {
        numero: "3",
        nombre: "Venusaur",
        tipo: "Planta",
        ataque: "Rayo Solar",
        foto: "https://projectpokemon.org/images/normal-sprite/venusaur.gif"
    },
    {
        numero: "254",
        nombre: "Sceptile",
        tipo: "Planta",
        ataque: "Vendaval de Hojas",
        foto: "https://projectpokemon.org/images/normal-sprite/sceptile.gif"
    },
    {
        numero: "275",
        nombre: "Shiftry",
        tipo: "Planta",
        ataque: "Tornado Ventilador",
        foto: "https://projectpokemon.org/images/normal-sprite/shiftry.gif"
    },
    {
        numero: "497",
        nombre: "Serperior",
        tipo: "Planta",
        ataque: "Ciclon Hojas",
        foto: "https://projectpokemon.org/images/normal-sprite/serperior.gif"
    },
    {
        numero: "724",
        nombre: "Decidueye",
        tipo: "Planta",
        ataque: "Flecha Dividida",
        foto: "https://projectpokemon.org/images/normal-sprite/decidueye.gif"
    }
];
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/pokeTodos', (req, res) => {
            res.send(todosPokemon);
        });
        this.router.get('/pokeTodos/9', (req, res) => {
            res.send(Blastoise);
        });
        this.router.get('/pokeTodos/160', (req, res) => {
            res.send(Feraligatr);
        });
        this.router.get('/pokeTodos/395', (req, res) => {
            res.send(Empoleon);
        });
        this.router.get('/pokeTodos/419', (req, res) => {
            res.send(Floatzel);
        });
        this.router.get('/pokeTodos/658', (req, res) => {
            res.send(Greninja);
        });
        this.router.get('/pokeTodos/6', (req, res) => {
            res.send(Charizard);
        });
        this.router.get('/pokeTodos/59', (req, res) => {
            res.send(Arcanine);
        });
        this.router.get('/pokeTodos/257', (req, res) => {
            res.send(Blaziken);
        });
        this.router.get('/pokeTodos/663', (req, res) => {
            res.send(Talonflame);
        });
        this.router.get('/pokeTodos/727', (req, res) => {
            res.send(Incineroar);
        });
        this.router.get('/pokeTodos/3', (req, res) => {
            res.send(Venusaur);
        });
        this.router.get('/pokeTodos/254', (req, res) => {
            res.send(Sceptile);
        });
        this.router.get('/pokeTodos/275', (req, res) => {
            res.send(Shiftry);
        });
        this.router.get('/pokeTodos/497', (req, res) => {
            res.send(Serperior);
        });
        this.router.get('/pokeTodos/724', (req, res) => {
            res.send(Decidueye);
        });
        this.router.get('/pokeTodos/Blastoise', (req, res) => {
            res.send(Blastoise);
        });
        this.router.get('/pokeTodos/Feraligatr', (req, res) => {
            res.send(Feraligatr);
        });
        this.router.get('/pokeTodos/Empoleon', (req, res) => {
            res.send(Empoleon);
        });
        this.router.get('/pokeTodos/Floatzel', (req, res) => {
            res.send(Floatzel);
        });
        this.router.get('/pokeTodos/Greninja', (req, res) => {
            res.send(Greninja);
        });
        this.router.get('/pokeTodos/Charizard', (req, res) => {
            res.send(Charizard);
        });
        this.router.get('/pokeTodos/Arcanine', (req, res) => {
            res.send(Arcanine);
        });
        this.router.get('/pokeTodos/Blaziken', (req, res) => {
            res.send(Blaziken);
        });
        this.router.get('/pokeTodos/Talonflame', (req, res) => {
            res.send(Talonflame);
        });
        this.router.get('/pokeTodos/Incineroar', (req, res) => {
            res.send(Incineroar);
        });
        this.router.get('/pokeTodos/Venusaur', (req, res) => {
            res.send(Venusaur);
        });
        this.router.get('/pokeTodos/Sceptile', (req, res) => {
            res.send(Sceptile);
        });
        this.router.get('/pokeTodos/Shiftry', (req, res) => {
            res.send(Shiftry);
        });
        this.router.get('/pokeTodos/Serperior', (req, res) => {
            res.send(Serperior);
        });
        this.router.get('/pokeTodos/Decidueye', (req, res) => {
            res.send(Decidueye);
        });
        this.router.get('/pokeTodos/Agua', (req, res) => {
            res.send(Agua);
        });
        this.router.get('/pokeTodos/Fuego', (req, res) => {
            res.send(Fuego);
        });
        this.router.get('/pokeTodos/Planta', (req, res) => {
            res.send(Planta);
        });
        this.router.get('/pokeNumero/:numero', (req, res) => {
            const poke = this.obtenerPokemonPorNumero(req.params.numero);
            res.send(poke);
        });
        this.router.get('/pokeNombre/:nombre', (req, res) => {
            const poke = this.obtenerPokemonPorNombre(req.params.nombre);
            res.send(poke);
        });
        this.router.get('/pokeTipo/:tipo', (req, res) => {
            const poke = this.obtenerPokemonPorTipo(req.params.tipo);
            res.send(poke);
        });
        this.router.get('/Users', (req, res) => {
            res.send(Usuarios);
        });
    }
    obtenerPokemonPorNumero(numero) {
        return todosPokemon.find(dato => dato.numero == numero);
    }
    obtenerPokemonPorNombre(nombre) {
        return todosPokemon.find(dato => dato.nombre == nombre);
    }
    obtenerPokemonPorTipo(tipo) {
        var tipoPokemon;
        tipoPokemon.push(todosPokemon.find(dato => dato.tipo == tipo));
        return tipoPokemon;
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
