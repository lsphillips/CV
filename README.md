# The CV of Luke S. Phillips

The source code for the CV of Luke S. Phillips, which can be viewed here: https://www.lsphillips.com/

## Development

Node.js is required because NPM scripts are used to facilitate the build process.

### Building

To build a deployable site artifact:

```
npm run build
```

This will create a `site` directory containing the site.

### Running locally

To setup a seamless development environment:

```
npm run start
```

This will perform a build in memory and serve it using a local web server on port `1992`. It will watch all source files for changes, where the site will be rebuilt when such changes occur.

## Deployment

The site is hosted through GitHub Pages. The deployment is faciliated by the ["Build and Deploy" GitHub Action Workflow](.github/workflows/build-and-deploy.yml), where it will [perform a build](#building) and push the resulting site artifact to the `gh-pages` branch of this repository.

### DNS

The `lsphillips.com` apex domain has `A` records pointing to the following GitHub IP addresses:

  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

It also has a `CNAME` record pointing the `www` subdomain to `lsphillips.github.io`.

### Responses

| Location                          | Status Code | Description                                                                      |
| --------------------------------- | ----------- | -------------------------------------------------------------------------------- |
| `http://lsphillips.github.io/CV`  | `301`       | Redirects to `https://www.lsphillips.com`.                                       |
| `https://lsphillips.github.io/CV` | `301`       | Redirects to `https://www.lsphillips.com`.                                       |
| `http://lsphillips.com`           | `301`       | Redirects to `https://www.lsphillips.com`.                                       |
| `https://lsphillips.com`          | Failure     | SSL Error. Due to a [known issue](https://github.com/isaacs/github/issues/1675). |
| `http://www.lsphillips.com`       | `301`       | Redirects to `https://www.lsphillips.com`.                                       |
| `https://www.lsphillips.com`      | `200`       | Where we want to be.                                                             |
