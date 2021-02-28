## Error: ENOSPC: System limit for number of file watchers reached

## Solution 1(For VSCode):

```json
{
  //   "emmet.includeLanguages": {
  //     "javascript": "javascriptreact"
  //   },
  //   "editor.formatOnSave": true,
  //   "editor.formatOnPaste": true,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
}
```

## Solution 2 (LinuX/Mac):

1. `sudo vim /etc/sysctl.conf`
2. Add this line

   `fs.inotify.max_user_watches=524288`

3. restart PC & Run `npm start` or `yarn start`

4. Solved :smile:
