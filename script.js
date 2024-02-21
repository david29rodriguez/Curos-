  function enableEncryptButton() {
            const inputText = document.getElementById('inputText').value;
            const regex = /[A-ZÁÉÍÓÚÜÑ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
            const encryptButton = document.getElementById('encryptButton');
            if (regex.test(inputText)) {
                alert('Por favor, ingrese solo letras minúsculas y sin caracteres especiales.');
                encryptButton.disabled = true;
            } else {
                encryptButton.disabled = inputText.trim() === '';
            }
        }

        function encryptText() {
            const inputText = document.getElementById('inputText').value.trim().toLowerCase();
            const outputText = document.getElementById('outputText');

            const encryptedText = inputText
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');

            outputText.value = encryptedText;
            document.getElementById('decryptButton').disabled = false;
            document.getElementById('copyButton').disabled = false;
        }

        function decryptText() {
            const outputText = document.getElementById('outputText').value.trim().toLowerCase();
            const decryptedText = outputText
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');

            document.getElementById('inputText').value = decryptedText;
        }

        function copyText() {
            const outputText = document.getElementById('outputText');
            outputText.select();
            outputText.setSelectionRange(0, 99999); 
            document.execCommand('copy');
            alert('Texto encriptado copiado');
        }