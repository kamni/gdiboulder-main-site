gdiMatIndex = {
  title: "GDI Boulder Materials",
  colorClasses: ["pink", "blue", "green", "yellow", "red"],
  jsExtras: ["script/jquery.bpopup.min.js"],
  header: "GDI Boulder Materials",
  template: "pages/index.ect",
  baseModuleUrl: "http://gdiboulder.github.io/",
  modules: [
    { title: "Introduction to HTML & CSS", url: "gdi-boulder-intro-html-css" },
    { title: "Intermediate HTML & CSS", url: "gdi-boulder-intermediate-html-css" },
    { title: "Introduction to Javascript", url: "gdi-intro-javascript" },
    { title: "Introduction to Programming Concepts", url: "gdi-boulder-intro-programming-concepts" },
    { title: "Introduction to Bootstrap 3", url: "gdi-boulder-intro-bootstrap" },
    { title: "Advanced CSS Tips & Techniques", url: "gdi-boulder-advanced-css-techniques" },
    { title: "CSS3 Properties & Selectors", url: "gdi-boulder-css3-properties"  },
    { title: "Introduction to Servers", url: "gdi-boulder-servers-intro" },
    { title: "Introduction to Python", url: "gdi-intro-python" }
  ]
};
// bring in base variables, but don't override ones defined here
for (var attrname in gdiBase) {
  if (gdiMatIndex[attrname] === undefined) {
    gdiMatIndex[attrname] = gdiBase[attrname];
  }
}