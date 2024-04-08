let time9390120 = ['Flamengo', 0, 0 ] //nome, defesa, ataque
let time8133728 = ['Corinthians', 0, 0 ]

let id661906 = ['Leo Pereira', 'Zagueiro', time9390120, 60, 20] //nome, posição, time, defesa, ataque, 
let id420852 = ['Beto', 'Zagueiro',time9390120, 30, 15]
let id626241 = ['Arrascaeta', 'Meia',time9390120, 20, 40] //nome, posição, defesa, ataque, 
let id304542 = ['Gabriel Barbosa', 'Atacante', time9390120, 12, 60]

let id502879 = ['Caca', 'Zagueiro', time8133728, 40, 15] //nome, posição, defesa, ataque, 
let id429610 = ['Caetano', 'Zagueiro', time8133728, 36, 15]
let id784680 = ['Garro', 'Meia', time8133728, 30, 43] //nome, posição, defesa, ataque, 
let id389630 = ['Yuri Alberto', 'Atacante', time8133728, 12, 50]

function separarJogadores (atleta){
    let timeDoCabra = atleta[2] //flamengo
    timeDoCabra.push(atleta)
    console.log(timeDoCabra);
}

separarJogadores(id661906), separarJogadores(id420852), separarJogadores(id626241), separarJogadores(id304542)
separarJogadores(id502879), separarJogadores(id429610), separarJogadores(id784680), separarJogadores(id389630)

function somarDefesa(time) {
    tamanho = time.length
    cursor = tamanho -1
    let defesaAtleta = 0 
    for (c = cursor; 2 != cursor; cursor--) {
        atleta = time[cursor]
        defesaAtleta += atleta[3]
    }

    time[1] = defesaAtleta
    
    return time[1]
}

function somarAtaque(time) {
    tamanho = time.length
    cursor = tamanho -1
    let AtaqueAtleta = 0 
    for (c = cursor; 2 != cursor; cursor--) {
        atleta = time[cursor]
        AtaqueAtleta += atleta[4]
    }

    time[2] = AtaqueAtleta
    
    return time[2]
}

DefesaFlamengo = somarDefesa(time9390120)
AtaqueFlamengo = somarAtaque(time9390120)

DefesaCorinthians = somarDefesa(time8133728)
AtaqueCorinthians = somarAtaque(time8133728)

function jogar() {
    console.log(`time do ${time9390120[0]} D-${DefesaFlamengo}, A-${AtaqueFlamengo}`)
    console.log(`time do ${time8133728[0]} D-${DefesaCorinthians}, A-${AtaqueCorinthians}`)
    let d1 = DefesaFlamengo 
    let a1 = AtaqueFlamengo
    let d2 = DefesaCorinthians 
    let a2 = AtaqueCorinthians

    if (a1 + d1 > a2 + d2) {
        console.log(`o ${time9390120[0]} tem mais chances de vitoria`);
        if (a1 > d2) {
            console.log(`o ataque do ${time9390120[0]} segue pressionando`)
        }
    } else {
        console.log(`o ${time8133728[0]} tem mais chances de vitoria`);
        
        if (a2 > d1) {
            console.log(`o ataque do ${time8133728[0]} segue pressionando`)
        }
    } 
}

jogar()


/*
time1 = somarParam(time9390120)
console.log(time1);

time2 = somarParam(time8133728)
console.log(time2);

time9390120[1] =  id661906[2] + id420852[2] + id626241[2] + id304542[2] //defesa flamengo somada
time8133728[2] = id502879[3] + id429610[3] + id784680[3] + id389630[3] //defesa flamengo

console.log(`defesa fla ${time9390120[1]}`);
console.log(`ataque cor ${time8133728[2]}`);

function ataqueContraDefesa(dtime1, atime2) {
    if (atime2 > dtime1) {
        return console.log(`altas chances de gol pro ataque`);
    } else {
        return console.log('defesa controlando a partida');
    }
}

ataqueContraDefesa(time9390120[1], time8133728[2]);
*/