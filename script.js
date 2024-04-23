function isPalindrome(str){
    // Remover espaços e caracteres especiais e converter para minúsculas
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Percorrer metade da string
    for (var i = 0; i < Math.floor(str.length / 2); i++) {
        // Comparar caracteres da primeira metade com os correspondentes na segunda metade
        if (str[i] !== str[str.length - 1 - i]) {
            return false; // Se houver diferença, não é um palíndromo
        }
    }
    
    return true; // Se todas as comparações forem iguais, é um palíndromo
}

function arrayMaxMin(arr){
    // Inicializando as variáveis para armazenar o máximo e o mínimo
    var max = arr[0];
    var min = arr[0];
    
    // Percorrendo o array para encontrar o máximo e o mínimo
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    // Retornando um novo array com o mínimo e o máximo encontrados
    return [min, max];
}

//Função Criada e Finalizada