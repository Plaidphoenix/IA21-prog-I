const readline = require('readline')
const { stdin: input, stdout: output } = require('process')
  const rl = readline.createInterface({ input, output })
 
  const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))

  async function main() {
    
  soma = 0
  count = 0
  num = ''
  
  while (true){
    num = await question ('insira o valor: ' + (count + 1) + ' (N) para parar realizar as medias: ')

    if (num.toUpperCase() == 'N') break
      soma += parseInt(num)
        count += 1
    }
  
    
   media = soma/count
  console.log('A media dos valores é: ', media)
  
  }
main()  
  
  
