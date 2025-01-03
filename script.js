function removerEspacos() {
    // Pega o texto do textarea
    const textoEntrada = document.getElementById('inputText').value;

    // Remove espaços desnecessários dentro de cada linha, inclusive em linhas vazias
    const textoFormatado = textoEntrada
        .split('\n')                      // Separa o texto por linhas
        .map(linha => linha.replace(/\s+/g, ' ').trim())  // Remove espaços extras dentro da linha e no início/fim
        .filter(linha => linha.length > 0)               // Remove linhas que ficaram vazias
        .join('\n');                      // Junta as linhas com quebra de linha

    // Atualiza o campo de saída
    document.getElementById('outputText').value = textoFormatado;
}
