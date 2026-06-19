# VL Guinchos — Site Estático

Versão pura **HTML + CSS + JS**, sem Node, sem build, sem dependências.

## Estrutura
```
.
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── logo-vl.jpg
    ├── hero-truck.jpg
    ├── truck-1.jpg
    ├── truck-2.jpg
    └── truck-3.jpg
```

## Como usar
- **Local:** clique duas vezes em `index.html` ou rode `python3 -m http.server 8080` e abra `http://localhost:8080`.
- **GitHub Pages:** suba os arquivos para um repositório e ative Pages na branch principal (raiz `/`).
- **Netlify / Vercel / Hostinger / cPanel:** envie todos os arquivos para a raiz pública (`public_html` / `www`).

## Domínio próprio (vlguinchos.srv.br)
Aponte os registros DNS no Registro.br para o IP/host da hospedagem escolhida e configure SSL pelo painel do provedor.
