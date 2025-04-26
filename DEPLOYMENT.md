# Deployment Instructions

After building the project with:

```
npm run build
```

The production-ready files will be in the `build` folder.

You can serve these files using any static server. For example, to serve locally for testing, you can install the `serve` package globally:

```
npm install -g serve
serve -s build
```

This will start a local server and serve your app at http://localhost:5000.

For production deployment, upload the contents of the `build` folder to your web server or hosting service.

For more details, see the official Create React App deployment guide: https://facebook.github.io/create-react-app/docs/deployment
