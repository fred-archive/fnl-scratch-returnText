
const plays = [
    {
        playType: "run",
        gainLoss: "gain",
        playDist: "10",
        player1: "Gater",
        player2: "",
        result: "2nd",
        min: "10",
        sec: "7",
        quarter: "4th"
    }
]

export const resultText = () => {
    const { playType, gainLoss, playDist, result, player1, min, sec,  } = plays[0]
    
    if (result === '2nd'){
        return `${result} down: `
    } 
}

export const playText = () => {
    const { playType, gainLoss, playDist, result, player1, min, sec,  } = plays[0]
    
    //if run
    let play = `${playDist} yard ${playType} by ${player1}`

    return `${play}`
}

export const timeRem = () => {
    let seconds = ''
    const { min, sec  } = plays[0]

    if ( +sec < 10){
        seconds = `0${sec}`
    } else {
        seconds = sec
    }
    return ` (${min}:${seconds})`
}