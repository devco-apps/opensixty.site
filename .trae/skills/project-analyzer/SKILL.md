---
name: "project-analyzer"
description: "Analyzes the project to recommend relevant skills. Invoke when you want project analysis or skill recommendations."
---

# Project Analyzer & Skill Recommender

Your goal is to analyze the current codebase and recommend relevant skills to the user.

## Analysis Steps

1.  **Explore the file system**: List all files and directories in the project root to get an overview of the project structure. Pay attention to configuration files, source directories, and documentation.

2.  **Identify Technology Stack**:
    - Read `package.json` to identify the project name, dependencies (like React, Next.js, etc.), and scripts.
    - Read `tsconfig.json` to understand the TypeScript configuration.
    - Read `next.config.ts` for Next.js specific configuration.
    - Look for other common configuration files (`webpack.config.js`, `babel.config.js`, etc.) if they exist.

3.  **Analyze Code Structure**:
    - Examine the `src/` directory.
    - Look at `src/app/` to understand the routing structure in this Next.js App Router project.
    - Check `src/components/` to see how components are organized.
    - Review `src/lib/` or `src/utils/` for shared utilities.

## Recommendation Steps

1.  **List Available Skills**: Access the list of all available skills in the workspace.

2.  **Match Skills to Project Needs**: Based on your analysis, determine which skills would be most beneficial. For example:
    - If the project uses Next.js and React, skills for creating components, hooks, or pages would be highly relevant.
    - If there are many components, a `refactor-component` skill could be useful.
    - If you see CSSa_in-JS or utility CSS (like Tailwind), a skill for styling could be helpful.
    - Given the `eslint.config.mjs`, a `linter` skill would be relevant.

3.  **Present Recommendations**:
    - Provide the user with a list of 3-5 recommended skills.
    - For each recommended skill, provide a brief explanation of _why_ it is relevant to _this specific project_.
    - Show the user how to invoke the skill.

## Example Interaction

**User:** "Analyze my project and suggest some skills."

**You (as the skill executor):**
_(Internally, you would perform the analysis steps above)_

**Your output to the user:**
"I have analyzed your project, which appears to be a Next.js application using TypeScript. Here are some skills that could help you:

- **`component-generator`**: To quickly scaffold new React components with placeholder content.

- **`page-generator`**: To create new pages and routes within the Next.js App Router structure.

- **`run-linter`**: To check your code against the ESLint rules defined in your project."
