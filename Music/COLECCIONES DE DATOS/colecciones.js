//declaracion de arrays
// let frutas = ["mango", "fresas","banano"]
// //mostrar datos
// document.write("Fruta: "+frutas[0]+"<br>")
// //recorrer datos de un array
// for (let i = 0; i < frutas.length; i++) {
//     document.write("Fruta --> "+frutas[i]+"<br>")
    
// }
// //declaracion de objetos
// let verduras = {
//     v1 : "Tomate",
//     v2 : "Cebolla",
//     v3 : "Zanahoria"
// }
// //mostrar los datos
// document.write("verduras "+verduras.v2+"<br>")
// //recorrer un objeto
// for(let clave in verduras){
//     document.write("verdura --> "+verduras[clave]+"<br>")
// }


// //sancocho de datos en arrays
// let sancocho = [
//     "texto",
//     true,
//     9890,
//     function(){
//         return "hola 👨"
//     },
//     ["sancocho 1",666,false],
//     {
//         s1 : "sancocho 2",
//         s2 : 777
//     }
// ]
// //mostrar datos
// document.write("dato: "+sancocho[0]+"<br>")
// document.write("dato: "+sancocho[1]+"<br>")
// document.write("dato: "+sancocho[2]+"<br>")
// document.write("dato: "+sancocho[3]()+"<br>")
// document.write("dato: "+sancocho[4][0]+"<br>")
// document.write("dato: "+sancocho[5].s1+"<br>")





// let sancocho2 = {
//     s1 :"texto",
//     s2:9098,
//     s3:false,
//     s4:function(){
//         return "hola"
// },
// s5:["sancocho 1",666,true],
// s6:{
//     ss1:"sancocho 2",
//     ss2: 646564
// }
// }

// document.write("dato: "+sancocho2.s1+"<br>")
// document.write("dato: "+sancocho2.s2+"<br>")
// document.write("dato: "+sancocho2.s3+"<br>")
// document.write("dato: "+sancocho2.s4()+"<br>")
// document.write("dato: "+sancocho2.s5[1]+"<br>")
// document.write("dato: "+sancocho2.s6.ss1+"<br>")


// let verduras = {
//     v1 : "Tomato",
//     "v2" : "Cebolla",
//     23: "zanahoria"
// }
// document.write("dato : "+verduras["v2"+"<br>"])



//metodos arrays

let frutas = ["sandia","mango","banano","uva"]
document.write("frutas: "+frutas+"<br>")
document.write("total frutas: "+frutas.length+"<br>")
//agrega dato posicion ultima
frutas.push("manzana")
document.write("frutas: "+frutas+"<br>")
document.write("total frutas: "+frutas.length+"<br>")
//borra ultimo dato
frutas.pop()
document.write("frutas: "+frutas+"<br>")
document.write("frutas: "+frutas.length+"<br>")
//elimina primer dato
frutas.shift()
document.write("frutas: "+frutas+"<br>")
document.write("frutas: "+frutas.length+"<br>")
//agrega dato posicion 0
frutas.unshift("kiwi")
document.write("frutas: "+frutas+"<br>")
document.write("frutas: "+frutas.length+"<br>")
//ciclo forEach
frutas.forEach(function(fruta,pos){
    document.write(fruta+" <--------> "+pos+"<br>")
})
// selecciona datos especificos
let frutasSeleccionadas = frutas.slice(0,1)
document.write("frutas seleccionadas: "+frutasSeleccionadas+"<br>")
//elimina o remplaza un dato de la lista
let frutaEliminada = frutas.splice(2,1,"pera")
document.write("frutas: "+frutas+"<br>")