# Gerenciador de Tarefas (React)

Projeto de **estudo** para praticar os fundamentos do React construindo um gerenciador de tarefas simples. O foco não é um produto final, e sim consolidar conceitos como componentes, estado, props, eventos e rotas.

## Funcionalidades

- Listar tarefas (a lista começa com duas tarefas de exemplo).
- Adicionar uma tarefa com título e descrição (com validação de campos vazios).
- Marcar uma tarefa como concluída, registrando a data e a hora da conclusão.
- Excluir tarefas (tarefas já concluídas não podem ser excluídas).
- Ver os detalhes de uma tarefa em uma página separada (`/task`), com botão para voltar.

## O que foi estudado

| Assunto | Onde aparece |
| --- | --- |
| Componentes funcionais e JSX | `App.jsx`, `components/`, `pages/` |
| Estado com `useState` | `App.jsx` (lista de tarefas), `AddTasks.jsx` (campos do formulário) |
| Props e comunicação filho → pai (callbacks) | `onTaskClick`, `onDeleteTaskClick`, `onAddTaskClick` |
| Inputs controlados (`value` + `onChange`) | `AddTasks.jsx` |
| Renderização de listas com `map` e `key` | `Tasks.jsx` |
| Renderização condicional | Estilo e texto de tarefa concluída em `Tasks.jsx` |
| Atualização imutável de estado (`map`, `filter`, spread) | `App.jsx` |
| Roteamento com React Router (`createBrowserRouter`, `RouterProvider`) | `main.jsx` |
| Hooks do router: `useNavigate` e `useSearchParams` | `Tasks.jsx`, `TaskPage.jsx` |
| Passagem de dados entre páginas via query string | `/task?title=...&description=...` |
| Estilização com Tailwind CSS | Classes utilitárias em todos os componentes |
| Ícones com `lucide-react` | `Tasks.jsx`, `TaskPage.jsx` |
| IDs únicos com `uuid` | `App.jsx` |

## Tecnologias

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM 6](https://reactrouter.com/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)
- [uuid](https://github.com/uuidjs/uuid)
- ESLint

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
```

## Como rodar

```bash
npm install
npm run dev
```

Outros scripts: `npm run build` (build de produção), `npm run preview` (visualiza o build) e `npm run lint`.

## Limitações conhecidas e próximos passos

Pontos que ficaram em aberto e são boas oportunidades de estudo:

- Em `onAddTaskClick`, o `id` recebe `v4` em vez de `v4()`, ou seja, a função em vez de um UUID. Todas as tarefas novas acabam com o mesmo `id`, o que quebra a marcação como concluída, a exclusão e o uso de `key`.
- Ao concluir uma tarefa, a data é calculada na renderização do `App`, então pode ficar defasada. O ideal é gerar a data dentro do handler.
- As tarefas ficam só em memória e se perdem ao recarregar a página. Próximo passo: persistir com `localStorage` (`useEffect`) ou uma API.
- A página de detalhes lê título e descrição da URL. Uma alternativa é buscar a tarefa por `id` (rota `/task/:id`).
- Possíveis evoluções: editar tarefas, filtros (pendentes/concluídas), testes e `PropTypes` ou TypeScript.
