# Elevate Mídia +18

Site institucional da agência Elevate Mídia, com as modelos atuais por plataforma, as metas batidas e os contatos do responsável, Rodrigo Schnistler Millano.

Site estático: HTML, CSS e JavaScript puros, sem instalação e sem build.

## Estrutura

```
elevate-midia/
├── index.html            página completa (textos, números e contatos)
├── README.md             este arquivo
└── assets/
    ├── favicon.svg       ícone da aba do navegador
    ├── css/style.css     cores, fonte e layout
    └── js/main.js        botões "Copiar" do contato
```

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (por exemplo `elevate-midia`).
2. Envie **o conteúdo** desta pasta para a raiz do repositório. O arquivo `index.html` precisa ficar na raiz, junto com a pasta `assets`.
3. No repositório, abra **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e salve.
5. Aguarde cerca de 1 a 2 minutos. O endereço será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Como editar

### Números de modelos
Em `index.html`, procure a seção `id="numeros"`. Cada plataforma é uma linha com duas partes:

- o texto do número (por exemplo `530+`);
- o tamanho da barra, no atributo `style="--w: 100%"`.

A barra segue a escala da maior plataforma: `largura = valor ÷ maior valor × 100`. Hoje a maior é o XVideos, com 530, que fica em 100%. O Privacy, com 340, fica em 64,15%.

O total do topo (`1.550+`) é a soma das cinco plataformas e fica no bloco `class="total"`. Se mudar algum número, atualize o total também.

### Metas batidas
Em `index.html`, procure a seção `id="metas"`. Cada cartão tem o nome da plataforma (`goal-plat`), o valor grande (`goal-big`) e a descrição (`goal-desc`).

### Contatos
- **WhatsApp:** o número aparece em texto na seção `id="contato"` e dentro dos links `https://wa.me/5511937732151`. Use buscar e substituir para trocar `5511937732151` em todo o arquivo.
- **E-mail:** `elevatemidia0@gmail.com`, na seção `id="contato"`.
- **Instagram:** `@elevatemidiaschnistler`, na mesma seção, com o link do perfil.

### Cores e fonte
No início de `assets/css/style.css`, o bloco `:root` guarda todas as cores (`--red`, `--bg`, `--surface` e outras). Mudar um valor ali muda o site inteiro. A fonte é a Poppins, carregada do Google Fonts no `<head>` do `index.html`.

## Observações

- A fonte Poppins carrega pela internet. Sem conexão, o navegador usa uma fonte parecida.
- Os números são os informados pela Elevate Mídia. O rodapé traz o aviso de conteúdo para maiores de 18 anos e de marca independente, sem vínculo oficial com as plataformas.
