gdiPage = {
  header: "GDI Boulder Materials",
  content: "pages/index.ect",
  chapterUrl: "http://www.girldevelopit.com/chapters/boulder",
  modules: [
    { title: "Introduction to HTML & CSS", url: "http://gdiboulder.github.io/gdi-boulder-intro-html-css", class: "module-css" },
    { title: "Intermediate HTML & CSS", url: "http://gdiboulder.github.io/gdi-boulder-intermediate-htmlcss", class: "module-css" },
    { title: "Advanced CSS Tips & Techniques", url: "http://gdiboulder.github.io/gdi-boulder-advanced-css-techniques", class: "module-css" },
    { title: "CSS3 Properties & Selectors", url: "http://gdiboulder.github.io/gdi-boulder-css3-properties", class: "module-css" },
    { title: "Introduction to Bootstrap 3", url: "http://gdiboulder.github.io/gdi-boulder-intro-bootstrap", class: "module-css" },
    { title: "Introduction to Programming Concepts", url: "http://gdiboulder.github.io/gdi-boulder-intro-programming-concepts", class: "module-programming" },
    { title: "Introduction to Python", url: "http://gdiboulder.github.io/gdi-intro-python", class: "module-programming" },
    { title: "Introduction to Javascript", url: "http://gdiboulder.github.io/gdi-intro-javascript", class: "module-programming" },
    { title: "Introduction Git & GitHub", url: "https://github.com/etmoore/gdi-git-workshop", class: "module-tools" },
    { title: "Introduction to Command Line", url: "http://bit.ly/clgdi", class: "module-tools" },
    { title: "Introduction to Servers", url: "http://gdiboulder.github.io/gdi-boulder-servers-intro", class: "module-tools" }
  ]
};
// bring in base variables, but don't override ones defined here
for (var attrname in gdiBase) {
  if (gdiPage[attrname] === undefined) {
    gdiPage[attrname] = gdiBase[attrname];
  }
}