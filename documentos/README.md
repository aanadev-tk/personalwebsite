# Documentos de atendimento

Modelos usados em cada projeto de site, do primeiro contato à entrega.

| Etapa | Documento | Para que serve |
|---|---|---|
| 1. Primeiro contato | [06-mensagens-modelo.md](06-mensagens-modelo.md) | Respostas prontas para WhatsApp e e-mail |
| 2. Conversa | [01-briefing.md](01-briefing.md) | Entender o negócio, o público e o objetivo do site |
| 3. Orçamento | [02-proposta-comercial.md](02-proposta-comercial.md) | Escopo, prazo, valor e formas de pagamento |
| 4. Fechamento | [03-contrato.md](03-contrato.md) | Formalizar o serviço, com a proposta como anexo |
| 5. Execução | [04-checklist-do-projeto.md](04-checklist-do-projeto.md) | Acompanhar cada etapa e registrar datas |
| 6. Entrega | [05-termo-de-entrega.md](05-termo-de-entrega.md) | Registrar o que foi entregue e iniciar a garantia |

## Como usar com um cliente novo

1. Crie uma pasta para o cliente dentro de `clientes/`, por exemplo `clientes/2026-001-padaria-aurora/`.
2. Copie para ela os modelos que for usar.
3. Preencha os campos entre colchetes, como `[NOME DO CLIENTE]`.
4. Para enviar ao cliente, exporte em PDF (veja abaixo).

A pasta `clientes/` está no `.gitignore`: os documentos preenchidos **ficam apenas no seu
computador e não vão para o GitHub**. Isso é importante porque o repositório é público e
esses arquivos têm dados pessoais (CPF, endereço, valores), protegidos pela LGPD.

Guarde uma cópia de segurança da pasta `clientes/` em outro lugar privado, como Google
Drive ou OneDrive.

## Numeração das propostas

Use o formato `AAAA-NNN`: ano e um número sequencial. Exemplo: `2026-001`, `2026-002`.
O mesmo número identifica a proposta, o contrato e a pasta do cliente.

## Como gerar o PDF

No VS Code, com a extensão **Markdown PDF** (autor yzane):

1. Abra o documento preenchido.
2. Aperte `Ctrl+Shift+P` e escolha **Markdown PDF: Export (pdf)**.
3. O PDF é salvo na mesma pasta.

Outra opção: abra a pré-visualização (`Ctrl+Shift+V`), copie o conteúdo e cole no Google
Docs ou no Word para ajustar a formatação.

## Assinatura do contrato

Para assinar sem imprimir, existem serviços de assinatura eletrônica, alguns gratuitos para
poucos documentos por mês. Para pessoa física, o assinador gov.br também é uma opção
gratuita para assinar documentos em PDF.

## Antes do primeiro uso

- **Revisão jurídica:** o contrato é um modelo de referência. Peça a um advogado que o revise
  pelo menos uma vez.
- **Dados da Ana:** preencha nome completo, CPF ou CNPJ e endereço no contrato e no termo de
  entrega da pasta do cliente, nunca nos modelos (que são públicos).
- **Formalização:** se for emitir nota fiscal, vale avaliar a abertura de um MEI. Consulte
  um contador ou o Portal do Empreendedor para confirmar se a atividade é permitida.
