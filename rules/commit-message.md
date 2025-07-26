# Commit Message Guidelines

Well-written commit messages help your future self and teammates understand the "why" behind changes.

## Structure

Each commit message should include:

1. A short summary (max 72 chars)
2. An optional longer description
3. Structured footers for related metadata

## Examples

```
feat: add adaptive layout for profile screen

The new layout adjusts to screen size and respects accessibility settings.

Refs: #42
```

```
fix: prevent crash on nil URL in share sheet

Handles a rare edge case when a user tries to share before the URL loads.

Issue: GH-88
```

## Conventions

- Use [Conventional Commits](mdc:https:/www.conventionalcommits.org) (e.g., `feat:`, `fix:`, `chore:`).
- Use present tense ("add" not "added").
- Don’t include ticket number in the title — use footer instead.
- Capitalize the summary, no period at the end.
- Write descriptive bodies if the "why" isn’t obvious.
- Commit small and often.

## Recommended Tags

| Type     | When to use it                       |
|----------|--------------------------------------|
| feat     | New feature                          |
| fix      | Bug fix                              |
| chore    | Non-functional (e.g. cleanup)        |
| refactor | Code restructuring without behavior change |
| docs     | Documentation-only changes           |
| test     | Adding or fixing tests               |
