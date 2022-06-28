# cli-shorturl

A personalised CLI-based URL shortner using GitHub actions and Next.js

## Setup

> All registered URLs are stored in `urls.json`

### Add the environment variables to your `.bashrc` or `.zshrc`

```sh
export GITHUB_PAT=<GitHub Personal Access Token>
export BASE_URL=<Complete URL to the route which returns all registered URLs>
```

### Add the package to `PATH`

```sh
cd url-shortner
npm link
```

### Update your Git config in `.github/workflows/ci.yml`

```sh
git config --global user.email "<email>"
git config --global user.name "<name>"
```

## Getting started

### Adding a URL

```sh
shorturl add <name> <slug> <URL>
```

### Removing a URL

```sh
shorturl remove <name>
```

### Listing all registered URLs

```sh
shorturl list
```

### Checking a URL

```sh
shorturl check all <name> <slug>
```

### Checking for a particular URL field

```sh
shorturl check <name/slug> <value>
```
