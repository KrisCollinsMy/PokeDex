<div align="center">
    <img src="./artwork/logo.png">
    <br>
    <strong> PokeDex </strong>
    <br>
    Live demo at <a href="https://poke-dex-blond.vercel.app/">https://poke-dex-blond.vercel.app/</a>
    <br>
    <img src="https://imgur.com/sFuLsYf">
    <br>
    <img src="https://imgur.com/z4dMYoG">
</div>

## Features

- Website features
  - Responsive
  - Search Pokemon by name
  - View 898 Pokemon information
  - Lazy loading pokemon images to increase page load speed
  - Lazy loading components
  - List virtualization/windowing PokemonList

## Getting Started

### Install

1. Clone the repo or download the [latest release](https://github.com/shaansubbaiah/Portfolio/releases)

```
git clone git@github.com:shaansubbaiah/Portfolio.git
```

2. Install dependencies

```bash
cd Portfolio

npm install
```

3. Run Portfolio

```bash
node portfolio.js
```

4. Set the Github token, edit the config and then build!

> See [Configuration](#configuration)

> A token can be created at https://github.com/settings/tokens/new

> Make sure you have selected atleast **public_repo**, **read:user** permissions while creating the token!

5. You can deploy the website to your github pages site (generally https://<your_username>.github.io) from Portfolio. OR Manually copy contents in `dist/` to your github pages repository.

6. Done

## Development

Portfolio now uses ViteJS which significantly improves over the previosuly existing development workflow.

The website files are in `src/`

To view the site with hot-reload on changes, run:

```bash
npm run dev
```

If there's data missing, you might have to build the site once so it writes the GitHub data to `./github-data.json`

## Building

Run Portfolio and select the build option.

Under the hood, Portfolio runs `vite build` which reads the config from `vite.config.js` and the build files are at `dist/`

## Configuration

**username**: String - your Github username

**repos**: Integer - number of repositories to display, **MAX 100**

**avatar**: String - path(local/remote) to an image for the avatar and favicon. If not specified, uses your GitHub avatar.

**linkedinURL**: String - your LinkedIn profile link. Set to _null_ in config.json to disable it / press <kbd>enter</kbd> while setting it up.

**twitterId**: String - your Twitter profile id. Set to _null_ in config.json to disable it / press <kbd>enter</kbd> while setting it up. (Portfolio will automatically get your Twitter ID if you have added it to your GitHub profile)

**gitlabId**: String - your GitLab profile id. Set to _null_ in config.json to disable it / press <kbd>enter</kbd> while setting it up.

**navLinks**: Object Array - adds navigation links at the top. **DON'T EXCEED 3**

    where,
    name: String - Text to display
    link: String - URL the text links to

**infoLinks**: Object Array - adds additional links in the information section.

    where,
    name: String - Text to display
    link: String - URL the text links to

**socialPreviewImage**: String - displays repo's social preview image in the card. To enable, set value = "enabled".

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Related

[Gitfolio](https://github.com/imfunniee/gitfolio)

[Dev Portfolio](https://github.com/RyanFitzgerald/devportfolio)

## License

[MIT](LICENSE) Copyright (c) 2023 Kris Collins
