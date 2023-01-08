class Pessoa {
  #Nome: string;
  #DataNascimento: string;

  constructor(name: string, data: string) {
    this.setNome(name);
    this.setDataNasc(data);
  }

  setNome(name: string): void {
    if(name.length > 55){
        alert('O nome deve conter menos de 55 Caracteres, digite novamente.')
    }else{
        this.#Nome = name;
    }
    
  }
  getNome(): string {
    return this.#Nome;
  }

  setDataNasc(data: string): void {
    this.#DataNascimento = data;
  }
  getDataNasc(): string {
    return this.#DataNascimento;
  }
}

class Autor extends Pessoa {
  #NomeArtistico: string;

  constructor(name: string, data: string, nameArt: string) {
    super(name, data);
    this.setNomeArtistico(nameArt);
  }

  setNomeArtistico(nameArt): void {
    this.#NomeArtistico = nameArt;
  }
  getNomeArtistico(): string {
    return this.#NomeArtistico;
  }
}

class Usuario extends Pessoa {
    #NomeDeUsuario: string;
    #Senha: string;
    #PlayLists: PlayList[] = [];

    caracteres: RegExp = new RegExp(/\W/g)
    numeros : RegExp = new RegExp(/\d/g)

    constructor(name: string, data: string, nameUser: string, password: string){
        super(name, data)
        this.setNameUser(nameUser)
        this.setSenha(password)
    }
    
    setNameUser(nameUser: string): void {
        if(this.caracteres.test(nameUser)){
            alert('Nome de Usuario nao deve conter caracteres especias apenas underlines')
        }else this.#NomeDeUsuario = nameUser

    }
    getNameUser(): string {
        return this.#NomeDeUsuario
    }
    
    setSenha(password: string): void {
        if(this.numeros.test(password) && this.caracteres.test(password)){
            this.#Senha = password
        }else alert('A senha deve conter ao menos um numero e um caracter especial')
        
        
    }

    getSenha(): string {
        return this.#Senha
    }

    setPlayList(playList : PlayList): void {
        this.#PlayLists.push(playList)
    }
}

class Musica{
    #NomeMusica: string
    #Autor: string
    #Duracao: number

    constructor(name: string, autor: string, duracao: number){
        this.setNomeMusica(name)
        this.setAutor(autor)
        this.setDuracao(duracao)
    }

    setNomeMusica(name: string): void {
        this.#NomeMusica = name    
    }
    getNomeMusica(): string{
        return this.#NomeMusica
    }

    setAutor(autor: string): void{
        this.#Autor = autor
    }
    getAutor(): string{
        return this.#Autor
    }

    setDuracao(duracao: number){
        if(duracao > 10){
        alert('a musica deve ter duracao menor que 10 minutos')
        }else this.#Duracao = duracao
    }

    getDuracao(): number{
        return this.#Duracao
    }
}

class PlayList{
    #Nome : string
    #DataDeCriacao : string
    #Musicas : Musica[] = []

    constructor(name: string, dataDeCriacao: string){
        this.setNome(name)
        this.setDataDeCriacao(dataDeCriacao);
    }

    setNome(name: string): void {
        this.#Nome = name
    }
    getNome(): string {
        return this.#Nome
    }

    setDataDeCriacao(dataDeCriacao: string): void {
        this.#DataDeCriacao = dataDeCriacao
    }
    getDataDeCriacao(): string {
        return this.#DataDeCriacao
    }

    setMusica(musica: Musica){
        let allowed : number = 0
        this.#Musicas.forEach(x => {
            if(x.getNomeMusica() == musica.getNomeMusica()){
                allowed++;
            }
                
    })
        if(allowed == 1){
            alert(`Musica ja existe na playlist: ${this.getNome()}`)
        }else {
            this.#Musicas.push(musica)
            console.log(`Musica adicionada a playlist: ${this.getNome()}`)
        }
    }
    getMusicas(): void { 
        this.#Musicas.forEach(x => console.log(`Musica: ${x.getNomeMusica()}`))
    }
}
