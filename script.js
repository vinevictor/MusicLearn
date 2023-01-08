var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Pessoa_Nome, _Pessoa_DataNascimento, _Autor_NomeArtistico, _Usuario_NomeDeUsuario, _Usuario_Senha, _Usuario_PlayLists, _Musica_NomeMusica, _Musica_Autor, _Musica_Duracao, _PlayList_Nome, _PlayList_DataDeCriacao, _PlayList_Musicas;
var Pessoa = /** @class */ (function () {
    function Pessoa(name, data) {
        _Pessoa_Nome.set(this, void 0);
        _Pessoa_DataNascimento.set(this, void 0);
        this.setNome(name);
        this.setDataNasc(data);
    }
    Pessoa.prototype.setNome = function (name) {
        if (name.length > 55) {
            alert('O nome deve conter menos de 55 Caracteres, digite novamente.');
        }
        else {
            __classPrivateFieldSet(this, _Pessoa_Nome, name, "f");
        }
    };
    Pessoa.prototype.getNome = function () {
        return __classPrivateFieldGet(this, _Pessoa_Nome, "f");
    };
    Pessoa.prototype.setDataNasc = function (data) {
        __classPrivateFieldSet(this, _Pessoa_DataNascimento, data, "f");
    };
    Pessoa.prototype.getDataNasc = function () {
        return __classPrivateFieldGet(this, _Pessoa_DataNascimento, "f");
    };
    return Pessoa;
}());
_Pessoa_Nome = new WeakMap(), _Pessoa_DataNascimento = new WeakMap();
var Autor = /** @class */ (function (_super) {
    __extends(Autor, _super);
    function Autor(name, data, nameArt) {
        var _this = _super.call(this, name, data) || this;
        _Autor_NomeArtistico.set(_this, void 0);
        _this.setNomeArtistico(nameArt);
        return _this;
    }
    Autor.prototype.setNomeArtistico = function (nameArt) {
        __classPrivateFieldSet(this, _Autor_NomeArtistico, nameArt, "f");
    };
    Autor.prototype.getNomeArtistico = function () {
        return __classPrivateFieldGet(this, _Autor_NomeArtistico, "f");
    };
    return Autor;
}(Pessoa));
_Autor_NomeArtistico = new WeakMap();
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(name, data, nameUser, password) {
        var _this = _super.call(this, name, data) || this;
        _Usuario_NomeDeUsuario.set(_this, void 0);
        _Usuario_Senha.set(_this, void 0);
        _Usuario_PlayLists.set(_this, []);
        _this.caracteres = new RegExp(/\W/g);
        _this.numeros = new RegExp(/\d/g);
        _this.setNameUser(nameUser);
        _this.setSenha(password);
        return _this;
    }
    Usuario.prototype.setNameUser = function (nameUser) {
        if (this.caracteres.test(nameUser)) {
            alert('Nome de Usuario nao deve conter caracteres especias apenas underlines');
        }
        else
            __classPrivateFieldSet(this, _Usuario_NomeDeUsuario, nameUser, "f");
    };
    Usuario.prototype.getNameUser = function () {
        return __classPrivateFieldGet(this, _Usuario_NomeDeUsuario, "f");
    };
    Usuario.prototype.setSenha = function (password) {
        if (this.numeros.test(password) && this.caracteres.test(password)) {
            __classPrivateFieldSet(this, _Usuario_Senha, password, "f");
        }
        else
            alert('A senha deve conter ao menos um numero e um caracter especial');
    };
    Usuario.prototype.getSenha = function () {
        return __classPrivateFieldGet(this, _Usuario_Senha, "f");
    };
    Usuario.prototype.setPlayList = function (playList) {
        __classPrivateFieldGet(this, _Usuario_PlayLists, "f").push(playList);
    };
    return Usuario;
}(Pessoa));
_Usuario_NomeDeUsuario = new WeakMap(), _Usuario_Senha = new WeakMap(), _Usuario_PlayLists = new WeakMap();
var Musica = /** @class */ (function () {
    function Musica(name, autor, duracao) {
        _Musica_NomeMusica.set(this, void 0);
        _Musica_Autor.set(this, void 0);
        _Musica_Duracao.set(this, void 0);
        this.setNomeMusica(name);
        this.setAutor(autor);
        this.setDuracao(duracao);
    }
    Musica.prototype.setNomeMusica = function (name) {
        __classPrivateFieldSet(this, _Musica_NomeMusica, name, "f");
    };
    Musica.prototype.getNomeMusica = function () {
        return __classPrivateFieldGet(this, _Musica_NomeMusica, "f");
    };
    Musica.prototype.setAutor = function (autor) {
        __classPrivateFieldSet(this, _Musica_Autor, autor, "f");
    };
    Musica.prototype.getAutor = function () {
        return __classPrivateFieldGet(this, _Musica_Autor, "f");
    };
    Musica.prototype.setDuracao = function (duracao) {
        if (duracao > 10) {
            alert('a musica deve ter duracao menor que 10 minutos');
        }
        else
            __classPrivateFieldSet(this, _Musica_Duracao, duracao, "f");
    };
    Musica.prototype.getDuracao = function () {
        return __classPrivateFieldGet(this, _Musica_Duracao, "f");
    };
    return Musica;
}());
_Musica_NomeMusica = new WeakMap(), _Musica_Autor = new WeakMap(), _Musica_Duracao = new WeakMap();
var PlayList = /** @class */ (function () {
    function PlayList(name, dataDeCriacao) {
        _PlayList_Nome.set(this, void 0);
        _PlayList_DataDeCriacao.set(this, void 0);
        _PlayList_Musicas.set(this, []);
        this.setNome(name);
        this.setDataDeCriacao(dataDeCriacao);
    }
    PlayList.prototype.setNome = function (name) {
        __classPrivateFieldSet(this, _PlayList_Nome, name, "f");
    };
    PlayList.prototype.getNome = function () {
        return __classPrivateFieldGet(this, _PlayList_Nome, "f");
    };
    PlayList.prototype.setDataDeCriacao = function (dataDeCriacao) {
        __classPrivateFieldSet(this, _PlayList_DataDeCriacao, dataDeCriacao, "f");
    };
    PlayList.prototype.getDataDeCriacao = function () {
        return __classPrivateFieldGet(this, _PlayList_DataDeCriacao, "f");
    };
    PlayList.prototype.setMusica = function (musica) {
        var allowed = 0;
        __classPrivateFieldGet(this, _PlayList_Musicas, "f").forEach(function (x) {
            if (x.getNomeMusica() == musica.getNomeMusica()) {
                allowed++;
            }
        });
        if (allowed == 1) {
            alert("Musica ja existe na playlist: ".concat(this.getNome()));
        }
        else {
            __classPrivateFieldGet(this, _PlayList_Musicas, "f").push(musica);
            console.log("Musica adicionada a playlist: ".concat(this.getNome()));
        }
    };
    PlayList.prototype.getMusicas = function () {
        __classPrivateFieldGet(this, _PlayList_Musicas, "f").forEach(function (x) { return console.log("Musica: ".concat(x.getNomeMusica())); });
    };
    return PlayList;
}());
_PlayList_Nome = new WeakMap(), _PlayList_DataDeCriacao = new WeakMap(), _PlayList_Musicas = new WeakMap();
