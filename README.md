# Gerenciador de Tarefas (React)

[![CI](https://github.com/gilmarSantana/task-manager-react/actions/workflows/ci.yml/badge.svg)](https://github.com/gilmarSantana/task-manager-react/actions/workflows/ci.yml)

Projeto de **estudo** para praticar os fundamentos do React construindo um gerenciador de tarefas simples. O foco não é um produto final, e sim consolidar conceitos como componentes, estado, props, eventos e rotas, além de práticas de versionamento e CI com Git e GitHub.

## Funcionalidades

- Listar tarefas (a lista começa vazia na primeira visita).
- **Persistência no navegador:** as tarefas são salvas no `localStorage` e continuam lá depois de recarregar a página ou fechar o navegador.
- Adicionar uma tarefa com título e descrição (com validação de campos vazios).
- Marcar uma tarefa como concluída, registrando a data e a hora da conclusão.
- Excluir tarefas (tarefas já concluídas não podem ser excluídas).
- Ver os detalhes de uma tarefa em uma página separada (`/task`), com botão para voltar.

## O que foi estudado

| Assunto | Onde aparece |
| --- | --- |
| Componentes funcionais e JSX | `App.jsx`, `components/`, `pages/` |
| Estado com `useState` | `App.jsx` (lista de tarefas), `AddTasks.jsx` (campos do formulário) |
| Props e comunicação filho → pai (callbacks) | `onTaskClick`, `onDeleteTaskClick`, `onAddTaskClick`, `onSeeDetailsClick` |
| Validação de props com `PropTypes` | `AddTasks.jsx`, `Tasks.jsx` |
| Inputs controlados (`value` + `onChange`) | `AddTasks.jsx` |
| Renderização de listas com `map` e `key` | `Tasks.jsx` |
| Renderização condicional | Estilo e texto de tarefa concluída em `Tasks.jsx` |
| Atualização imutável de estado (`map`, `filter`, spread) | `App.jsx` |
| Efeitos colaterais com `useEffect` e array de dependências | `App.jsx` (salva as tarefas sempre que `tasks` muda) |
| `localStorage` com `getItem`/`setItem` | `App.jsx` |
| Serialização com `JSON.stringify` / `JSON.parse` | `App.jsx` (o `localStorage` só guarda strings) |
| Roteamento com React Router (`createBrowserRouter`, `RouterProvider`) | `main.jsx` |
| Hooks do router: `useNavigate` e `useSearchParams` | `App.jsx`, `TaskPage.jsx` |
| Passagem de dados entre páginas via query string | `/task?title=...&description=...` |
| Estilização com Tailwind CSS | Classes utilitárias em todos os componentes |
| Ícones com `lucide-react` | `Tasks.jsx`, `TaskPage.jsx` |
| IDs únicos com `uuid` | `App.jsx` |
| Lint com ESLint e correção de erros (`no-unused-vars`, `react/prop-types`) | `eslint.config.js` |
| Integração contínua com GitHub Actions | `.github/workflows/ci.yml` |
| Git: branches, Pull Requests, SemVer, tags e Releases | Seção "Versionamento e fluxo de trabalho" |

## Tecnologias

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM 6](https://reactrouter.com/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)
- [uuid](https://github.com/uuidjs/uuid)
- [prop-types](https://github.com/facebook/prop-types)
- ESLint
- [GitHub Actions](https://docs.github.com/actions) (CI)

## Estrutura

```
src/
├── main.jsx              # Ponto de entrada e definição das rotas
├── App.jsx               # Página principal: estado e regras das tarefas
├── components/
│   ├── AddTasks.jsx      # Formulário para adicionar tarefas
│   └── Tasks.jsx         # Lista de tarefas e ações (concluir, detalhes, excluir)
└── pages/
    └── TaskPage.jsx      # Página de detalhes da tarefa

.github/
└── workflows/
    └── ci.yml            # Pipeline de CI (lint + build)
```

## Como rodar

```bash
npm install
npm run dev
```

Outros scripts: `npm run build` (build de produção), `npm run preview` (visualiza o build) e `npm run lint`.

## Integração contínua (CI)

O workflow em `.github/workflows/ci.yml` roda no GitHub Actions a cada Pull Request para a `main` e a cada push na `main`:

1. `npm ci`: instala as dependências exatamente como estão no `package-lock.json`.
2. `npm run lint`: verifica erros e padrões de código.
3. `npm run build`: garante que o projeto compila.

Se algum passo falhar, o check fica vermelho no PR. Para evitar surpresas, rode `npm run lint` e `npm run build` localmente antes de abrir o PR.

## Versionamento e fluxo de trabalho

- **Branches:** a `main` é protegida e recebe mudanças apenas por Pull Request. Cada assunto tem sua branch (`feat/...`, `fix/...`, `docs/...`, `ci/...`).
- **Commits:** pequenos, um assunto por commit, no estilo Conventional Commits (`feat:`, `fix:`, `docs:`, `ci:`, `chore:`).
- **Versões:** seguem [SemVer](https://semver.org/lang/pt-BR/) e são geradas com `npm version`, que atualiza o `package.json` e cria a tag.
- **Releases:** cada marco é publicado na aba Releases do GitHub.

| Versão | O que trouxe |
| --- | --- |
| `v0.1.0` | Adicionar, concluir, excluir e ver detalhes de tarefas |
| `v0.2.0` | Persistência das tarefas no `localStorage` |

## Limitações conhecidas e próximos passos

Pontos que ficaram em aberto e são boas oportunidades de estudo:

- Ao concluir uma tarefa, a data é calculada na renderização do `App`, então pode ficar defasada. O ideal é gerar a data dentro do handler.
- O `useState(JSON.parse(localStorage.getItem("tasks")) || [])` lê o `localStorage` a cada renderização. O ideal é usar a inicialização preguiçosa (`useState(() => ...)`), que lê só na primeira vez.
- Se o JSON salvo estiver corrompido, o `JSON.parse` lança erro e quebra o app. Vale tratar com `try/catch`.
- Os dados ficam apenas no navegador do usuário. Para compartilhar entre dispositivos, o próximo passo seria uma API ou um backend.
- A página de detalhes lê título e descrição da URL. Uma alternativa é buscar a tarefa por `id` (rota `/task/:id`).
- Possíveis evoluções: editar tarefas, filtros (pendentes/concluídas), testes automatizados no CI, TypeScript, deploy automático e Dependabot.
