# Topic 2 - CSS

## Description

Cascading Stylesheets — or CSS — is the first technology you should start learning after HTML. While HTML is used to define the structure and semantics of your content, CSS is used to style it and lay it out. For example, you can use CSS to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.

## Index

1. [Selectors and properties](#selectors-and-properties)
2. [Specifity](#specificity)
3. [Box model](#box-model)
4. [Layout](#layout)

## Exercises

For this and the next exercises use the [base template](./assets/index.html).

### Selectors and properties

#### Documentation

- [Introduction to CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
- [CSS3 selectors sheet](https://www.w3.org/TR/selectors-3/)
- [Reset style](https://meyerweb.com/eric/tools/css/reset/)
- [Normalize](http://necolas.github.io/normalize.css/)

1.A
- Learn why is a best-practice to use a reset stylesheet. Then, include the "normalize.css".
- Add background to the header, footer, aside and nav.
- Add a global font definition (at html element) with a value of 14px, using a font-family you like.
- Center the header and footer text.

### Specificity

#### Documentation

- [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Specificity)

2.A

Add the following classes to the template created in the exercies 1.

- To ```<header>``` add class .header
- To ```<footer>``` add class .footer
- To ```<section>``` add class .content
- To ```<nav>``` add class .navigation
- To ```<aside>``` add class .sidebar

2.B

Using the new added classes figure out how to override.

- .header must have a font size of 46px
- .footer must have a font size of 10px
- .content must have a font size of 14px
- .navigation must have a font size of 12px
- .sidebar must have a font size of 10px

2.C

Add the following rules the previous css created.

- If the class attribute finishes with r (example header, footer), the background must be magenta.
- How could you add weight to the global font definition to win over the classes added by point 3?
- Imagine there is a declaration like class=”oh-no-inline-styles” style=”background:red” and you need to change the background to green without changing the inline style. How could you accomplish this?

### Box model

#### Documentation

- [Introduction to box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Box_model_recap)
- [Box model calculation](http://www.w3.org/TR/CSS21/box.html)

3.A
- Use the playground provided above to change box-sizing
- Add padding of 140px to `.navigation`
- Add margin of 100px to `.sidebar`
- Experiment with the box-model [here](http://dabblet.com/gist/2986528) by changing width / margin / padding / box-sizing

### Layout

#### Documentation

- [Layout basics](https://adamschwartz.co/magic-of-css/chapters/2-layout/)
- [Other types of boxes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Box_model_recap#Box_display_types)

4.A

- Now modify your CSS to reach something similar to the next layout (remove padding and margin of the box model exercice)

4.B

Documentation
- Learn how to create your own layout system [Grid Systems](http://adamkaplan.me/grid/)
- Learn how to float elements [CSS Floats](http://alistapart.com/article/css-floats-101/)
- Learn about [CSS units](http://alistapart.com/article/love-the-boring-bits-of-css/)

Exercice:
- Using your own layout system, implement an HTML page based on the following mock-up (only desktop).

[<- To index](../README.md#title) - [Topic 3 - Javascript ->](./topic3.md)