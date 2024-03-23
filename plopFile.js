const config = (plop) => {
  plop.setGenerator("components", {
    description: "A component generator for the app",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/components/{{pascalCase name}}.jsx",
        templateFile: "templates/component.hbs",
      },
    ],
  });
};

module.exports = config;
