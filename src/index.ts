let mensaje:string = "Hola Mundo"

mensaje = "Chanchito" 

console.log(mensaje)

mensaje = "Chao mundo"
console.log(mensaje)

console.log(typeof[])

/**
 * tipos de JS
 * nomber
 * string
 * boolean
 * null
 * undefined
 * object
 * funtion
 * 
 * Tipos de TS
 * any  !! No usar
 * unknown
 * never 
 * arrays
 * tuplas
 * Enums
 * 
 * Tipos inferidos
 * 
 */

let extincionDinosaurios:number = 76_000_000
let dinosaurioFavorito:string = "T-REX"
let extintos:boolean = true

function chanchitoFeliz(config: any) {
    return config
}

let animales:string[] = ['chanchito','feliz','diego']
let nums: number[] = [1,2,3]
let checks:boolean[] = []
let nums2:Array<number> = []

// nums.map(x =>x.) // el autocompletado sugiere metdos del tipo de dato

let tupla:[number,string[]] = [1,['chanchito feliz','chanchito diego']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase
enum Talla {Chica = 's',Mediana = 'm',Grande = 'l',ExtraGrande = 'xl'}

const variable1 = Talla.Grande
console.log(variable1)

const enum loadingState {Idle,Loading, Success, Error }

const estado = loadingState.Success

type Direccion = {
    numero : number,
    calle : string,
    pais : string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona = {
    id:1,
    nombre:'Hola mundo',
    talla : Talla.Mediana,
    direccion : {
        numero : 1,
        calle : 'Siempore viva',
        pais : 'Chanchito landia'
    }
}

const arr: Persona[] = []

console.log(arr)
