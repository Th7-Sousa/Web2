
const sleep = (tempo) => {
    return new Promise(resolve => setTimeout(resolve, tempo)) // Promise com timeout definida
}
  
  const lista = [1, 2, 3, 4, 5]
  const task = async () => {
    for (const item of lista) {
      await sleep(2000);                       // chamada função com pausa do script
      console.log('opa! mais 2 segundos'); 
    }
  }

task();

// node .\atividade2\q1.js