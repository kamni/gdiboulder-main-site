gdiPage = {
  header: "GDI Boulder Materials",
  content: "pages/index.ect",
  chapterUrl: "http://www.girldevelopit.com/chapters/boulder",
  modules: [
    { title: "Introduction Git & GitHub", url: "https://github.com/etmoore/gdi-git-workshop" },
    { title: "Introduction to HTML & CSS", url: "http://gdiboulder.github.io/gdi-boulder-intro-html-css" },
    { title: "Intermediate HTML & CSS", url: "http://gdiboulder.github.io/gdi-boulder-intermediate-htmlcss" },
    { title: "Introduction to Javascript", url: "http://gdiboulder.github.io/gdi-intro-javascript" },
    { title: "Introduction to Programming Concepts", url: "http://gdiboulder.github.io/gdi-boulder-intro-programming-concepts" },
    { title: "Introduction to Bootstrap 3", url: "http://gdiboulder.github.io/gdi-boulder-intro-bootstrap" },
    { title: "Advanced CSS Tips & Techniques", url: "http://gdiboulder.github.io/gdi-boulder-advanced-css-techniques" },
    { title: "CSS3 Properties & Selectors", url: "http://gdiboulder.github.io/gdi-boulder-css3-properties"  },
    { title: "Introduction to Servers", url: "http://gdiboulder.github.io/gdi-boulder-servers-intro" },
    { title: "Introduction to Python", url: "http://gdiboulder.github.io/gdi-intro-python" },
    { title: "Introduction to Command Line", url: "http://bit.ly/clgdi" }
  ]
};
// bring in base variables, but don't override ones defined here
for (var attrname in gdiBase) {
  if (gdiPage[attrname] === undefined) {
    gdiPage[attrname] = gdiBase[attrname];
  }
}