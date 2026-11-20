## Summary What changed, and why? ## Tests How did you prove it works? ## Security impact Does this touch input handling, authentication, secrets, dependencies, the pipeline, or infrastructure? If yes, explain. ## Dependencies changed Added, removed, or upgraded packages, and why. ## Rollback How do we undo this if it goes wrong? EOF 
cat > .github/CODEOWNERS <<'EOF'
# Default owner for everything
*                     @miholmestech
# High-risk paths (last match wins, so these come after the catch-all)
/.github/workflows/   @miholmestech
/src/                 @miholmestech
package-lock.json     @miholmestech
/.github/CODEOWNERS   @miholmestech
