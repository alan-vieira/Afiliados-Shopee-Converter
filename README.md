# 🛍️ Afiliados-Shopee-Converter – Extensão para Chrome

**Afiliados-Shopee-Converter** é uma extensão para o Google Chrome que captura automaticamente os links de produtos da Shopee abertos nas guias do navegador, converte-os para o formato de afiliado e permite que você salve todos os links convertidos em um arquivo `.txt`.

Ideal para quem trabalha com marketing de afiliados na Shopee!

---

## ✅ Funcionalidades

- 🔍 Captura todas as guias da Shopee abertas no navegador
- 🔗 Converte links do tipo:

```bash
https://shopee.com.br/product/loja_id/produto_id?...
```
Para:
```bash
https://affiliate.shopee.com.br/offer/product_offer/produto_id
```

- 💾 Permite salvar os links convertidos em `.txt` para uso posterior

---

## 🧰 Requisitos

- Google Chrome (qualquer versão com suporte a extensões)
- Sistema operacional Windows, Linux ou macOS

---

## 📥 Instalação Manual (Modo Desenvolvedor)

1. Baixe ou clone este repositório:

 ```bash
 git clone https://github.com/alan-vieira/Afiliados-Shopee-Converter.git
 ```
Ou baixe o .zip e extraia a pasta.

2. No Chrome, abra:

```bash
chrome://extensions
```

3. Ative o Modo do desenvolvedor no canto superior direito.
4. Clique em "Carregar sem compactação".
5. Selecione a pasta `Afiliados-Shopee-Converter`.

## 🚀 Como Usar

1. Abra várias guias de produtos da Shopee no Chrome.
2. Clique no ícone da extensão (🛒) na barra de ferramentas.
3. A extensão listará automaticamente os links afiliados correspondentes.
4. Clique em “Salvar em .txt” para baixar todos os links convertidos.

## 📁 Estrutura do Projeto

```bash
Afiliados-Shopee-Converter/
├── manifest.json      # Configurações da extensão (manifest V3)
├── popup.html         # Interface do popup
├── popup.js           # Script para capturar, converter e salvar links
└── icon.png           # Ícone da extensão (16x16)
```

## 🧠 Exemplo de Conversão

🔗 URL original:
```bush
https://shopee.com.br/product/408653169/22593915398?... 
```

✅ Link convertido:
```bush
https://affiliate.shopee.com.br/offer/product_offer/22593915398
```

## 🛠️ Tecnologias Utilizadas
- JavaScript
- HTML5 + CSS3
- Chrome Extensions API (Manifest V3)

## 📝 Licença
Este projeto está licenciado sob a Licença MIT.
Veja o arquivo LICENSE para mais detalhes.

## Autor

| [<img src="https://avatars.githubusercontent.com/alan-vieira" width=115><br><sub>Alan Vieira</sub>](https://github.com/alan-vieira) |
| :---: |

