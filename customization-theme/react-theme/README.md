# Customization Theme
Here you can see how to customize your keycloak theme
## Inject React

https://react.dev/learn/add-react-to-an-existing-project

``` sh
npm install react react-dom
```

## modify template.ftl

``` html
<head>
    <#-- Add react cdn js -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</head>

<body class="${properties.kcBodyClass!}">
    <#-- react root node -->
<nav id="navigation"></nav>
```
