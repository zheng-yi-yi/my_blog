import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/mp/": "structure",
  "/angular/": [
    {
      text: "HTML",
      icon: "devicon:html5-wordmark",
      collapsible: true,
      prefix: "01_HTML/",
      children: "structure",
    },
    {
      text: "CSS",
      icon: "devicon:css3",
      collapsible: true,
      prefix: "02_CSS/",
      children: "structure",
    },
    {
      text: "JavaScript",
      icon: "devicon:javascript",
      collapsible: true,
      prefix: "03_JavaScript/",
      children: "structure",
    },
    {
      text: "Angular",
      icon: "logos:angular-icon",
      collapsible: true,
      prefix: "04_Angular/",
      children: "structure",
    },
  ],
  "/dotnet/": [
    {
      text: "C#",
      icon: "devicon:csharp",
      collapsible: true,
      prefix: "01_chsarp/",
      children: "structure",
    },
    {
      text: ".NET",
      icon: "skill-icons:dotnet",
      collapsible: true,
      prefix: "02_NET/",
      children: "structure",
    },
    {
      text: "ASP.NET Core",
      icon: "vscode-icons:file-type-asp",
      collapsible: true,
      prefix: "03_ASPNET/",
      children: "structure",
    },
    {
      text: "ABP",
      icon: "vscode-icons:file-type-asp",
      collapsible: true,
      prefix: "04_ABP/",
      children: "structure",
    },
  ],
});
