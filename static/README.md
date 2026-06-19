# VL Guinchos — Site Estático

Versão pura HTML + CSS + JS, **sem Node, sem build**. Basta abrir `index.html` no navegador ou subir a pasta inteira para qualquer hospedagem.

## Estrutura
```
static/
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

## Como publicar

### Opção 1 — GitHub Pages (grátis para repos públicos)
1. Crie um repositório no GitHub e suba **somente o conteúdo desta pasta `static/`** na raiz.
2. Em **Settings → Pages**, escolha branch `main` e pasta `/ (root)`.
3. Para o domínio `vlguinchos.srv.br`, crie um arquivo `CNAME` na raiz com o conteúdo `vlguinchos.srv.br` e configure no Registro.br os DNS:
   - `A` `@` → `185.199.108.153`
   - `A` `@` → `185.199.109.153`
   - `A` `@` → `185.199.110.153`
   - `A` `@` → `185.199.111.153`
   - `CNAME` `www` → `seu-usuario.github.io`

### Opção 2 — Hostinger / cPanel / qualquer hospedagem comum
Suba os arquivos via FTP/Gerenciador de Arquivos para a pasta `public_html/`.

### Opção 3 — Netlify / Vercel (grátis)
Arraste a pasta `static/` em https://app.netlify.com/drop. Pronto.

## Editar o telefone/WhatsApp
Procure por `5511915729387` em `index.html` e substitua pelo novo número.
