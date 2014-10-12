gdiboulder-main-site
====================

Girl Develop It Boulder's site, which contains class materials and examples...as well as photos of kittens, puppies, mountains, and french fries.

Developers
----------

This site is developed using the ECT javascript templating engine.  Here is what you need to do to create a new page:

1. Copy index.html and rename it to your new page name (`example.html`).
2. Create a new template in `/templates/pages` with the same name (`example.ect`)
3. Create a `/script/page` javascript file with the same name (`example.js`). The file should contain at a minimum:

    ```javascript
    gdiExample = {
      template: "pages/example.ect",
      // add any other variables that you want available to your template
    }
    ```

4. Look for the following lines in your html file and modify them:

    ```
    <!-- modify the following lines for other pages -->
    <title>GDI Boulder Materials</title>
    <script type="text/javascript" src="/script/page/index.js"></script>
    <!-- end modification -->
    ```

    ```
    <!-- Example modification -->
    <title>GDI Example</title>
    <script type="text/javascript" src="/script/page/example.js"></script>
    ```

5. Edit your new ect file. The ect file replaces the body without modifying the header or footer. You do not need add `<body>` tags.

**NOTE: There is also an `index-static.html` file that can be used in place of index.html and does not use ECT and is a straight html file**

Development Notes
-----------------
* Comon js libraries do not use a CDN, to make it easier to do local development. You may want to branch and modify this for server use
* Compiled CSS is included in the repository in addition to the SCSS files, to make it easier to statically host the files. If you need to make changes, please modify the SCSS and recompile the CSS instead of modifying the CSS directly
* ECT can be run server-side (see [ECT's usage section](http://ectjs.com/#usage)), but the current setup is client-side only. If you decide to run ECT on the server, you should modify your `.html` files to avoid client-side `render` statements
