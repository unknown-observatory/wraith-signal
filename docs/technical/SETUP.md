# Development Setup

## Requirements

- Node.js 22+
- Git
- VS Code

## Clone

```bash
git clone https://github.com/unknown-observatory/wraith-signal.git
cd wraith-signal
```

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Windows / Codex Notes

On Windows, prefer the explicit npm command shim when running npm commands through Codex or PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run lint
```

Reason:

- Windows command resolution can pick an extensionless `npm` file before the real `npm.cmd` shim.
- In this environment, `C:\Windows\System32\npm` exists and shadows the real Node.js npm shim.
- Codex's Windows shell execution uses PowerShell, so explicitly calling `npm.cmd` avoids the ambiguity.
- `npm.cmd run build` may still need to run outside the Codex sandbox if Vite/Rolldown hits `spawn EPERM`.

This is an environment/tooling issue, not a project build issue.

## Notes

- The current app is a frontend-only Vite project.
- No backend setup exists yet.
- If backend or networking work starts, update this file before implementation continues.
