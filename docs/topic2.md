# Topic 2 - CSS

[-> To index](../README.md#title)


![](https://thumbs.gfycat.com/FirstWarpedInganue-size_restricted.gif)

## Documentation

- https://developer.mozilla.org/en-US/docs/Learn/CSS
- [Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
- [CSS3 selectors sheet](https://www.w3.org/TR/selectors-3/)
- [Specificity](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Specificity)
- [Box-model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Box_model_recap)
- Learn about the Box Model (how the browser calculates boxes size): http://www.w3.org/TR/CSS21/box.html

# Exercises
 Use the next html file to do the exercies
  ```
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title></title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
      <header>
         This is a header
      </header>
        <nav>
           This is a nav
        </nav>

        <section>
          <header>
              Omg, another header
          </header>

          <article>
              This is an article
          </article>

          <footer>
              Footloose
          </footer>
        </section>

        <aside>
         This is a aside
        </aside>

      <footer>
         Footloose pt2
      </footer>
    </body>

  </html>
```


**1. Selectors and properties**
  - Learn why is a best-practice to use a reset stylesheet [here](https://meyerweb.com/eric/tools/css/reset/). Then include [normalize.css](http://necolas.github.io/normalize.css/) before linking your style.css.
  - Add background to the header, footer, aside and nav.
  - Add a global font definition (at html element) with a value of 14px, using a font-family you like.
  - Center the header and footer text.

**2. Specificity**

- Add the following classes to the document created in exercice 1:
    - To ```<header>``` add class .header
    - To ```<footer>``` add class .footer
    - To ```<section>``` add class .content
    - To ```<nav>``` add class .navigation
    - To ```<aside>``` add class .sidebar
 - Using the new added classes figure out how to override:
   - .header must have a font size of 46px
   - .footer must have a font size of 10px
   - .content must have a font size of 14px
   - .navigation must have a font size of 12px
   - .sidebar must have a font size of 10px
- If the class attribute finishes with r (example header, footer), the background must be magenta.
- How could you add weight to the global font definition to win over the classes added by point 3?
- Imagine there is a declaration like class=”oh-no-inline-styles” style=”background:red” and you need to change the background to green without changing the inline style. How could you accomplish this?

**3. Box-model**
- Use the playground provided above to change box-sizing
- Add padding of 140px to `.navigation`
- Add margin of 100px to `.sidebar`.
- Experiment with the box-model here by changing width / margin / padding / box-sizing http://dabblet.com/gist/2986528

**4. Layout**

Documentation
- https://adamschwartz.co/magic-of-css/chapters/2-layout/
- https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Box_model_recap#Box_display_types

4.A
- Now modify your CSS to reach something similar to the next layout (remove padding and margin of the box model exercice)

Image

4.B

Documentation
- Learn how to create your own layout system [Grid Systems](http://adamkaplan.me/grid/)
- Learn how to float elements [CSS Floats](http://alistapart.com/article/css-floats-101/)
- Learn about [CSS units](http://alistapart.com/article/love-the-boring-bits-of-css/)

Exercice:
- Using your own layout system, implement an HTML page based on the following mock-up (only desktop). 

IMAGE

