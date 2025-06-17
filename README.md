# Van life

## Project Setup

### Prerequisites

- Node v16 or higher
- Yarn Berry (v2+)

### Project Overview

This section explains the configurations made during the setup of this project's tooling nad package management. If you want to jump straight to run the project, you skip this section and go to [Getting Started](#getting-started) section.

#### Yarn & PnP Configuration

- The project uses Yarn Berry (v2+) as the package manager. It can be set by running:

  ```bash
  yarn set version berry
  ```

- Configure Plug'n'Play (PnP)

  Yarn Plug'n'Play (generally referred to as Yarn PnP) is the default installation strategy in modern releases of Yarn. It can be swapped out for more traditional approaches (including `node_modules` installs, or `pnpm` style symlink-based approaches).

  In your `.yarnc.yml`, ensure the following configuration to enable PnP:

  ```yml
  nodeLinker: pnp
  ```

  This approach improves dependency resolution performance and removes the need for a `node_modules` folder.

> These configurations are committed to the repository, so running `yarn install` automatically applies the correct Yarn version and PnP setup without manual steps.

### Getting Started

1. Clone the repository

2. Install dependencies

   ```bash
   yarn install
   ```

   _This command will download all required packages and generate necessary Yarn [`Plug'n'Play`](https://yarnpkg.com/features/pnp) files._

3. Run the project

   ```bash
   yarn dev
   ```

### Considerations

- **Cache files are not committed:**

  This keeps the repository lightweight. You must run `yarn install` after switching branches or pulling updates to ensure dependecies and PnP files are synchronized with the current code.

- **Adding or updating dependencies:**  
  Run `yarn add <package>` or `yarn remove <package>`, then commit both `package.json` and the updated `yarn.lock` file.

- **Troubleshooting:**  
  If you ever encounter issues with dependency resolution, try deleting `.pnp.cjs` and running `yarn install` again.  
  Alternatively, clear Yarn cache with `yarn cache clean` and reinstall.

### Aditional Configuration

#### PnP Environment

`Yarn Berry` (v2+) introduced [`Plug'n'Play`](https://yarnpkg.com/features/pnp) as a new way to manage dependencies without the traditional `node_modules` folder. While this approach improves install speed and disk usage, it can cause issues with editor integrations, especially in VSCode.

VSCode and the JavaScript language service struggle to resolve modules properly in a PnP environment without additional configuration.

##### Why Does This Happen?

- Yarn PnP stores dependencies in zip archives and manages resolution virtually.
- VSCode relies on the TypeScript language service internally for JavaScript intellisense.
- Without TypeScript installed and configured with Yarn PnP SDKs, VSCode cannot fully understand the module resolution, leading to poor developer experience.
- The Yarn SDKs provide PnP-aware TypeScript tooling that enables VSCode to correctly resolve dependencies.

##### Solution Overview

To restore full VSCode support for JavaScript projects with Yarn PnP, **adding TypeScript as a dev dependency** and configuring Yarn SDKs is the recommended approach.

This setup does **not require converting your project to TypeScript**; it simply leverages TypeScript’s language service to improve JavaScript editing features.

1. Add TypeScript as a Dev Dependency

   ```bash
   yarn add -D typescript -E
   ```

2. Generate Yarn SDKs for VScode

   Run the following command to generate PnP-aware SDKs and configure VSCode settings:

   ```bash
   yarn dlx @yarnpkg/sdks vscode
   ```

   This will:

   - Create `.yarn/sdks/` folder containing TypeScript SDK files.
   - Update `.vscode/settings.json` to use the workspace TypeScript version with PnP support.

3. Select Workspace TypeScript Version in VSCode

   - Open any `.js` or `.ts` file in VSCode.
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
   - Type and select **"TypeScript: Select TypeScript Version"**.
   - In the prompt that appears, choose **"Use Workspace Version"** (usually suffixed with `-sdk`).

   This tells VSCode to use the PnP-aware TypeScript compiler installed in your project.

#### Linting & Formatting

The project relies on eslint and prettier for linting and formatting.

##### ESLint and Prettier Integration

1. Install dependencies and plugins

   ```bash
   yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
   ```

   > At the moment yarn presents issues with `eslint-plugin-prettier` current versions. A solution was downgrade it to a specific version.

   ```bash
   yarn add -D eslint-plugin-prettier@5.3.1 -E
   ```

2. EsLint Configuration

   It can be found into `eslint.config.js` file.

3. Prettier Configuration (optional)
   Into `.prettierc` file define the format rules:

   ```json
   {
     "singleQuote": true,
     "semi": true,
     "trailingComma": "es5"
   }
   ```

4. VSCode Linting Settings

   In `.vscode/settings.json`:

   ```json
   {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "eslint.validate": ["javascript", "javascriptreact"]
   }
   ```

   This ensures code is automatically formatted and linted on save
