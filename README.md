<h1 align="center">🧙‍♂️ Wizard Spell — Gerenciador de Magias para D&D</h1>

<p align="center">
  <em>Um projeto pessoal para facilitar o uso de magias em Dungeons & Dragons</em>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/built%20with-Next.js-black?logo=next.js" />
  <img alt="Supabase" src="https://img.shields.io/badge/database-Supabase-3ECF8E?logo=supabase&logoColor=white" />
  <img alt="Prisma" src="https://img.shields.io/badge/ORM-Prisma-3982CE?logo=prisma&logoColor=white" />
</p>

---

## ✨ Sobre o Projeto

**Wizard Spell** foi criado para tornar o gerenciamento de magias em _Dungeons & Dragons_ mais prático e intuitivo.  
Com uma interface leve e rápida, ele ajuda jogadores a:

- Consultar magias com descrições simplificadas
- Organizar magias preparadas por dia
- Acompanhar o uso de recursos mágicos com agilidade durante a sessão

> ⚠️ **Status:** Este projeto está atualmente em **pausa**, mas você pode explorá-lo, contribuir ou adaptá-lo para seus próprios jogos!

---

## ⚙️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** – Framework fullstack baseado em React, com suporte a renderização híbrida (estática, SSR) e APIs integradas.
- **[Supabase](https://supabase.com/)** – Plataforma backend open source que fornece autenticação, banco de dados PostgreSQL gerenciado e funcionalidades em tempo real.
- **[Prisma](https://www.prisma.io/)** – ORM moderno e tipado que facilita o mapeamento, migração e consulta de dados com foco em performance.

---

## 🚀 Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/petlou/w-spell.git
cd w-spell
```

### 2. Instale as dependências com PNPM

Certifique-se de ter o [PNPM](https://pnpm.io/installation#using-npm) instalado.

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local`.

```bash
cp .env.example .env.local
```

Preencha o arquivo .env.local com as informações do Supabase (ou outro banco de dados que você preferir).

### 4. Configure o banco com Prisma

Se estiver utilizando Supabase:

- Crie um novo projeto no Supabase.
- Crie o banco de dados e preencha a DATABASE_URL em seu arquivo `.env.local` com a Connection String.

### 5. Execute as migrations com Prisma

```bash
pnpm prisma migrate dev
```

### 6. Rode o projeto localmente

```bash
pnpm run dev
```

A aplicação estará disponível em: http://localhost:3000

# 🤝 Contribuições

Apesar do projeto estar pausado, contribuições, feedbacks e forks são super bem-vindos!
Se quiser adicionar novas funcionalidades, melhorar a UI ou apenas usar como base, fique à vontade.

# 📜 Licença

Este projeto foi desenvolvido para fins educacionais e uso pessoal. Sinta-se à vontade para estudar, utilizar e adaptar!
