function repetir(){
    let continuar = prompt("¿Desea volver al menú? \n1. Si \n2. No");
    return continuar;
}
function iva(subtotal){
    let iva=subtotal*.16;
    let total=subtotal+iva;
    return total;
}

function menu(){
    let continuar=1;
    let suma=0;
    do{
        let opcion= parseInt(prompt("Elige el producto que te interese del siguiente menú \n 1. Mesa de comedor  $3,000 \n 2. Escritorio  $1,500 \n 3. Cama individual  $3,000 \n 4. Cama matrimonial  $5,000 \n 5. Set de sillas  $3,000 \n 6. Set de bancos  $2,250 \n 7. Librero  $4,800 \n 8. Buro  $1,600"));
        switch(opcion){
            case 1:
                suma=suma+3000;
                continuar=repetir();
                break;
            case 2:
                suma=suma+1500;
                continuar=repetir();
                break;
            case 3:
                suma=suma+3000;
                continuar=repetir();
                break;
            case 4:
                suma=suma+5000;
                continuar=repetir();
            case 5:
                suma=suma+3000;
                continuar=repetir();
                break;
            case 6:
                suma=suma+2250;
                continuar=repetir();
                break;
            case 7:
                suma=suma+4800;
                continuar=repetir();
                break;
            case 8: 
                suma=suma+1600;
                continuar=repetir();
                break;
            default:
                prompt("Lo sentimos, esa opción no esta disponible, vuelva a ingresar una opción.");
                continuar=1;
                break;
        }
    }while(continuar==1);
    alert(`El subtotal de su compra es: ${suma}`);
    let total=iva(suma);
    alert("El total de su compra es: "+total);
}
function comentarios(){
    let nombre = prompt("Ingrese su nombre");
    let correo = prompt("Ingrese su correo");
    let comentario = prompt("Ingrese su comentario");   
    console.log(`${nombre}  \n${correo} \n${comentario}`)
    alert("Muchas gracias por sus comentarios, nos ayudan a seguir mejorando.")
}

let seguir;
do{
    let opcion = parseInt(prompt("Bienvenido a Atelier de Ideas \n Favor de elegir una opción \n 1. Cotización de muebles\n 2. Dudas y comentarios \n3. Salir"));
    switch(opcion){
        case 1:
            menu();
            seguir=repetir();
            break;
        case 2:
            comentarios();
            seguir=repetir();
            break;
        case 3:
            seguir=0;
            break;
        default:
            prompt("Lo sentimos, esa opción no esta disponible, vuelva a ingresar una opción.");
            break;
    }

}while(seguir==1);

