# Pull Request Creation Guidelines

## **Purpose**

When creating pull requests, ensure they are well-structured, informative, and follow the project's conventions to facilitate code review and maintain project history.

## **Pre-Creation Workflow**

### **1. Analyze Changes**
Before creating the PR, analyze the branch changes to understand:
- What files were modified
- The scope and impact of changes
- Any breaking changes or dependencies

### **2. Sync with Remote**
```bash
# Ensure your branch is up to date and pushed
git push -u origin <branch-name>

# Verify GitHub CLI authentication
gh auth status
```

## **PR Title Guidelines**

### **Format**
Follow the same Conventional Commits format as commit messages:

```
type [#issue]: brief description
```

### **Conventional Commits Overview**
Conventional Commits is a standard for writing commit messages using this format:
```
<type>[optional scope]: <description>

[optional body]
[optional footer(s)]
```

**Common types:**
- `feat:` - new feature
- `fix:` - bug fix  
- `chore:` - maintenance tasks
- `refactor:` - code restructuring
- `docs:` - documentation changes
- `test:` - adding/fixing tests

**Examples:**
```
feat: add user authentication
fix(api): resolve timeout issue
chore!: drop Node 6 support
```

**Key benefits:**
- Enables automatic changelog generation
- Supports semantic versioning
- Creates structured, readable commit history
- Clearly indicates breaking changes with `!`

### **Issue Number Extraction**
Extract issue number from branch name using these common patterns:
- `feat/123-description` → `#123`
- `fix/456-bug-description` → `#456`
- `chore/789-cleanup` → `#789`

**Note:** Issue number is optional - omit if no related issue exists.

### **Title Examples**
- `feat [#456]: add adaptive layout for profile screen`
- `fix [#789]: prevent crash on nil URL in share sheet`
- `chore: update dependencies and clean unused code`
- `refactor: extract authentication logic to package`

### **Best Practices**
- ✅ Keep under 60 characters
- ✅ Use present tense ("add" not "added")
- ✅ Be descriptive but concise
- ✅ Include affected component if relevant
- ❌ Don't include periods at the end
- ❌ Don't use vague terms like "fix stuff" or "improvements"

## **PR Description Template**

Use this structured markdown template:

```markdown
## 💡 Motivation
<!-- Explain WHY this change is needed. Reference user feedback, bug reports, or business requirements. -->

## 🧱 Changes
<!-- List WHAT was changed. Use bullet points for clarity. Focus on high-level changes. -->
- 
- 
- 

## 🎯 Impact
<!-- Describe the expected impact: performance, user experience, developer experience, etc. -->

## 📝 Notes
<!-- Add any important context, limitations, known issues, or follow-up work needed. -->

## 🔗 Related Issues
<!-- Link related issues using GitHub's #issue-number format -->
Closes #
<!-- Use "Closes #123" for issues that will be resolved by this PR -->
<!-- Use "Refs #123" for related but not closing issues -->
```

## **GitHub CLI Commands**

### **Basic Creation**
```bash
gh pr create \
  --title "feat [#456]: add adaptive layout for profile screen" \
  --body-file pr-description.md \
  --assignee @me
```

### **With Inline Body**
```bash
gh pr create \
  --title "feat [#456]: add adaptive layout for profile screen" \
  --body "$(cat <<'EOF'
## 💡 Motivation
Users requested better tablet support and improved accessibility.

## 🧱 Changes
- Add responsive layout components
- Implement dynamic type scaling
- Update UI to support landscape mode

## 🎯 Impact
Improved user experience on larger screens and better accessibility compliance.

## 📝 Notes
Follow-up work needed for dark mode optimization.

## 🔗 Related Issues
Closes #456
EOF
)" \
  --assignee @me
```

### **With Draft Flag**
```bash
gh pr create \
  --draft \
  --title "feat [#456]: add adaptive layout for profile screen" \
  --body-file pr-description.md
```

## **Post-Creation Actions**

### **1. Verification**
```bash
# Verify PR was created successfully
gh pr view
```

### **2. Provide PR Link in Chat**
After successfully creating the PR, always provide the PR link in the chat for easy access:
```bash
# Get the PR URL and display it
gh pr view --web --json url --jq '.url'
```

**REQUIRED:** Always end your message with a hyperlink to the created PR in markdown format:
```markdown
🔗 [**Pull Request:**](https://github.com/owner/repo/pull/123)
```

This link should be the very last line of your response to ensure users can easily access the PR.

## **Troubleshooting**

### **Common Issues**

| Issue                              | Solution                                        |
| ---------------------------------- | ----------------------------------------------- |
| `No commits between base and head` | Ensure you've committed and pushed changes      |
| `GitHub CLI not authenticated`     | Run `gh auth login`                             |
| `Remote branch not found`          | Push branch: `git push -u origin <branch-name>` |
| `PR already exists`                | Use `gh pr view` to see existing PR             |

### **Best Practices for Issues**
- **Missing issue number**: Proceed without issue reference - not all changes require an issue
- **Unclear changes**: Request more detailed description of the changes made