document.addEventListener("DOMContentLoaded", () => {
    const inputTexto = document.querySelector(".campo-texto");
    const botaoCriptografar = document.querySelector(".botao.criptografar");
    const botaoDescriptografar = document.querySelector(".botao.descriptografar");
    const botaoCopiar = document.querySelector(".botao.copiar");
    const resultadoTexto = document.querySelector(".resultado-texto");
    const descricao = document.querySelector(".descricao");
    const imagemRetangulo = document.querySelector(".imagem-retangulo");
    const mensagemVazia = document.querySelector(".mensagem-vazia");

    function criptografar(texto) {
        const chaves = {
            "e": "enter",
            "i": "imes",
            "a": "ai",
            "o": "ober",
            "u": "ufat"
        };

        return texto.replace(/[eioua]/g, match => chaves[match]);
    }

    function descriptografar(texto) {
        const chaves = {
            "enter": "e",
            "imes": "i",
            "ai": "a",
            "ober": "o",
            "ufat": "u"
        };

        return texto.replace(/enter|imes|ai|ober|ufat/g, match => chaves[match]);
    }

    function mostrarMensagem(mensagem) {
        imagemRetangulo.style.display = "none"; // Corrigido: remover imagem corretamente
        resultadoTexto.style.display = "block";
        resultadoTexto.value = mensagem;
        descricao.style.display = "none";
        mensagemVazia.style.display = "none";
        botaoCopiar.style.display = "block";
    }
    

    function mostrarMensagemVazia() {
        imagemRetangulo.style.display = "block";
        resultadoTexto.style.display = "none";
        descricao.style.display = "block";
        mensagemVazia.style.display = "block";
        botaoCopiar.style.display = "none";
        resultadoTexto.removeAttribute("readonly"); // Remover a propriedade readonly
    }

    botaoCriptografar.addEventListener("click", () => {
        const texto = inputTexto.value;
        if (texto.match(/^[a-z\s]+$/)) {
            const textoCriptografado = criptografar(texto);
            mostrarMensagem(textoCriptografado);
            inputTexto.value = "";
            inputTexto.placeholder = "Digite seu texto";

            // Alterar o background color do botão descriptografar
            botaoDescriptografar.style.backgroundColor = "#F3F5FC";
            botaoDescriptografar.style.color = "#0A3871";
        } else {
            alert("Por favor, insira apenas letras minúsculas e sem acentos.");
        }
    });

    botaoDescriptografar.addEventListener("click", () => {
        const texto = inputTexto.value;
        if (texto.match(/^[a-z\s]+$/)) {
            const textoDescriptografado = descriptografar(texto);
            if (textoDescriptografado) {
                mostrarMensagem(textoDescriptografado);
            } else {
                mostrarMensagemVazia();
            }
            // Limpar o campo de texto e restaurar o placeholder
            inputTexto.value = "";
            inputTexto.placeholder = "Digite seu texto";
        } else {
            alert("Por favor, insira apenas letras minúsculas e sem acentos.");
        }
    });
    

    botaoCopiar.addEventListener("click", () => {
        resultadoTexto.select();
        document.execCommand("copy");
        resultadoTexto.value = ""; // Limpar o resultado da criptografia
        resultadoTexto.placeholder = "Nenhuma mensagem"; // Definir o placeholder
    });
    

    // Mostrar a mensagem vazia e descrição quando o site carrega pela primeira vez
    mostrarMensagemVazia();
});
