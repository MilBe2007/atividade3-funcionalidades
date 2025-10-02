// divisibilidade.js

function ehDivisivel(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a % b === 0;
}
