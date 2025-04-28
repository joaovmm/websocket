import { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');

const textoEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento');
const botaoExcluir = document.getElementById('excluir-documento');

tituloDocumento.textContent = nomeDocumento || 'Documento sem nome';

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener('keyup', () => {
    emitirTextoEditor({
        texto: textoEditor.value,
        nomeDocumento
    });
});

function atualizarTextoEditor(texto) {
    textoEditor.value = texto;
}

botaoExcluir.addEventListener('click', () => {
    emitirExcluirDocumento(nomeDocumento);
    
});

function alertarERedirecionar(nome) {
    if (nome === nomeDocumento) {
      alert(`Documento ${nomeDocumento} excluído!`);
      window.location.href = '/';
    }
}

export { atualizarTextoEditor, alertarERedirecionar };