# Portfólio — Ana Simões

Site de apresentação profissional e de serviços de criação de sites.
Feito em HTML, CSS e JavaScript puros, sem dependências e sem etapa de build.

## Estrutura

```
portfolio/
├── index.html      Conteúdo e textos de todas as seções
├── css/
│   └── style.css   Cores, tipografia, layout, animações e responsividade
└── js/
    └── main.js     Contatos, menu, animações e interações
```

## Como abrir

Abra o `index.html` no navegador. Não é preciso instalar nada.

## Onde alterar cada coisa

| O que | Onde |
|---|---|
| WhatsApp, e-mail e mensagem padrão | Bloco `CONTATO`, no início de `js/main.js` |
| Mensagem de cada serviço no WhatsApp | Atributo `data-wa` de cada link em `index.html` |
| Textos das seções | `index.html` |
| Cores e fontes | Variáveis em `:root`, no início de `css/style.css` |
| Ponto de quebra para celular e tablet | Regras `@media (max-width: 820px)` em `css/style.css` |

## Seções da página

1. Topo (título e chamada principal)
2. O problema
3. Sobre (experiência e formação)
4. Serviços e comparador design/código
5. Processo
6. Perguntas frequentes
7. Contato

## Trabalhar em outra máquina

```bash
git clone <endereço-do-repositório>
```

Depois de alterar os arquivos:

```bash
git add .
git commit -m "Descreva a alteração"
git push
```
