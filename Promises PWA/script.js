// Ejercicio 1: Promesas Encadenadas
function first() {
    let nrnd = new Promise((resolve, reject) => { 
    
        setTimeout(function () { 
            let numRdm = Math.floor(Math.random() * 100); 
            resolve(numRdm) 
            console.log('-----------Ejercicio 1-----------');
            console.log("Random: " + numRdm) 
        }, 2000) 
    });
    
    let n2 = new Promise((resolve, reject) => { 
        setTimeout(function () {
            nrnd.then((response => { 
                let num2 = response ** 2; resolve(num2)
                console.log("^2: " + num2) 
            })) 
        }, 3000) 
    });
    
    let nsqr = new Promise((resolve, reject) => { 
        setTimeout(function () { 
            n2.then((response => { 
                let numSqr = Math.sqrt(response); 
                resolve(numSqr);
                console.log("Squared: " + numSqr);
            })) 
        }, 4000) 
    });
}

//Ejercicio 2:  Promesa de Múltiples Solicitudes
function second() {
const urls = ['https://pokeapi.co/api/v2/pokemon/ditto', 'https://fakestoreapi.com/products/1', 'https://pokeapi.co/api/v2/pokemon/snorlax'];

function multiplesSolicitudes(urls) {
    const promesas = urls.map(url => {
        return fetch(url).then(response => response.json());
    });
    return Promise.all(promesas);
}

multiplesSolicitudes(urls).then(res => {
    console.log('-----------Ejercicio 2-----------');
    console.log('Resultado: ', res);
}).catch(e => {
    console.log('-----------Ejercicio 2-----------');
    console.error('Error: ', e);
});
}

//Ejercicio 3: Promesas Paralelas
function third() {
function executeAllPromises(funct) {
    return Promise.all(funct.map(func => func())).then(ress => {
        return ress;
    }).catch(e => {
        throw e;
    });
}
  
const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is the first result');
        }, 1000);
    });
};
  
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is the second result');
        }, 2000);
    });
};

const promesas = [promise1, promise2];

executeAllPromises(promesas).then(res => {
    console.log('-----------Ejercicio 3-----------');
    console.log(res);
    console.log('-----------Ejercicio 4-----------');
    }).catch(e => {
    console.error(erreor);
});
}

//Ejercicio 4: Promesas en Cadena con Retraso
function fourth() {
    function promisesDelay(n) {
        const promesas = [];
        
        for (let i = 1; i <= n; i++) {
          promesas.push(
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(`Promesa ${i} resuelta`);
                resolve(i);
              }, i * 1000);
            })
          );
        }
      
        return Promise.all(promesas).then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("TODAS las promesas se resolvieron");
                }, 1000);
            });
        });
    }
    
    promisesDelay(5).then((mensaje) => {
        console.log(mensaje);
    }).catch((error) => {
        console.error(error);
    });
}

//Ejercicio 5: Promesa con Cancelación
let flagStopPromise;

const runPromise = ()=>{
    setTimeout(()=>{
        if(flagStopPromise){
            stopPromise().then(result=>console.log(result))
        }else{
            new Promise((resolve)=>{
                resolve(console.log(`Promise resolved!`));
            })
        }
    },5000);
}   

const stopPromise = ()=>{
    flagStopPromise = true;
    new Promise((resolve,reject)=>{
        reject(`The promise was canceled :c`);
    })
}   


console.log('Ejercicio 5');
runPromise();stopPromise();

setTimeout(() => {
    first()
}, 5000);

setTimeout(() => {
    second()
}, 9000);
setTimeout(() => {
    third()
}, 11000);
setTimeout(() => {
    fourth()
}, 13000);

    
