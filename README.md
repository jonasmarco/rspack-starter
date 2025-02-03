# Fillet - Rspack Starter 🚀🔥

## Setup

Install the dependencies:

```bash
yarn install
```

## Get Started

Start the dev server:

```bash
yarn run dev
```

Build the app for production:

```bash
yarn run build
```

## Code Inspector

O **Code Inspector** permite navegar e editar o código-fonte diretamente pela página:

1. Abra o console de desenvolvedor.
2. Pressione `Option + Shift` (Mac) ou `Alt + Shift` (Windows).
3. Passe o mouse sobre um elemento para destacar o DOM.
4. Clique em um elemento para abrir a IDE e posicionar o cursor no código correspondente.

## Using the Deployed Build as Library

Below is an example of how to use the library in your HTML file. The example demonstrates how to include the deployed JavaScript build and render the React application in a specified container.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Using MyLib</title>
  </head>
  <body>
    <div id="lib-root"></div>
    <script src="https://opensource.do.fillet.dev/front/rspack/final.js"></script>
    <script>
      MyLib.renderMyLib('lib-root');
    </script>
  </body>
</html>
```

### Steps to Use the Library

1. Include a Container:
   Add a `div` element with a unique id (e.g., `lib-root`) in your HTML where you want the React app to render.

2. Load the Library:
   Include the deployed library script in your HTML (ensure the URL matches the location where your build is hosted).

3. Render the App:
   After loading the script, call the MyLib.renderMyLib function and pass the id of your container. This function will mount the React application in that container.

---

> 2025 • https://fillet.com.br/ • FAÇA • FUCE • FORCE
