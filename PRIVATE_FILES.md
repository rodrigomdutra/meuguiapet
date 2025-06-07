# Private Files Handling

This project contains certain files and directories that should not be published to GitHub:

- `/assets/` directory - Contains business definitions and internal strategy documents
- `/research/` directory - Contains competitive research and keyword analysis
- `project-case.md` - Contains detailed project overview and business case

## How these files are protected

1. **Git Ignore**: These files are listed in `.gitignore` to prevent them from being committed accidentally
2. **Git Attributes**: These files are marked as `linguist-vendored` in `.gitattributes` to exclude them from GitHub language statistics
3. **Pre-commit Hook**: A hook is installed to prevent accidental commits of these files

## For team members

These files should be shared through secure channels:

- Company shared drive
- Encrypted email
- Secure file sharing service (e.g., company Dropbox, etc.)

## Restoring private files to a new clone

If you're setting up a new environment and need these files:

1. Clone the repository
2. Contact the project lead to obtain the private files
3. Place them in the appropriate directories
4. These files will be automatically excluded from git operations

## In case you need to update ignored files

If you absolutely must commit changes to these files (not recommended):

```bash
git add -f assets/
git add -f research/
git add -f project-case.md
```

**Important**: Before doing this, consult with the team lead and consider if these files should be committed at all. 