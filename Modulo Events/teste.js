var events = require("events")
var eventEmitter = new events.EventEmitter()
eventEmitter.on("evento", ()=>{
    console.log("Happy new year!")
})

var tempo = 10
var timer = setInterval(()=>{
    console.log(tempo)
    tempo --
    if (tempo == 0) {
        eventEmitter.emit("evento")
        termina()
    }
}, 1000)

var termina = ()=>{
    clearInterval(timer)
}