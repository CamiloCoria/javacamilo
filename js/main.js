let nombre = prompt("Ingrese su nombre")
let apellido = prompt("igrese su apellido")
let dni =parseInt(prompt("ingrese su dni"))
console.log ("bienvenido. "+ nombre +", "+ apellido +" DNI:"+ dni + ". espero que tenga un buen dia" )

let continuar = true
let saldo = 50000
while( continuar){
    let menu = parseInt(prompt("ingrese 1- para ver tu cuenta, 2- para extraer dinero, 3- para ingresar dinero"))

        switch(menu){
            case 1:
                alert("total de la cuenta $"+ saldo )
               break
            case 2: 
                console.log("cuanto desea extraer")
                let resto = parseInt(prompt("ingrese el monto "))
                if (resto > saldo)
                    alert("sando insuficinete")
                else{
                    saldo = saldo - resto
                    console.log("perfecto, tu saldo actual es de: $"+saldo)
                }
            case 3: 
                console.log("¿cuanto dinero desea ingresar?")
                let suma =parseInt(prompt("¿cuanto desea ongresar?"))
                saldo = saldo + suma
                console.log ("felictaciones, ingresaste $" + suma)
                break
            default:
                console.log("opcion incorrecta")
                break
    }
    let confirmacion = prompt("¿desea realizar otra accion? (si/no) ").toLowerCase()
    if(confirmacion=="no"){
        continuar = false
        console.log("gracias por su visita "+nombre+", retire la tarjeta. tu saldo actual es de "+ saldo)
    }
}