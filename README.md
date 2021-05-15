# Starstrap
Basic CSS for [Anki](http://ankisrs.net/) card layouts. Includes a simple "grid" system, card colors, and title ribbons.

## Install
Copy & paste this CSS into [the _Styling_ field of an Anki card Template](https://docs.ankiweb.net/templates/intro.html):
<!-- inject:css -->
```css
*{box-sizing:border-box}html{height:100%}#qa,.card{margin:0;min-height:100%}#qa>:empty{display:none}.card{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:20px;line-height:1.4;text-align:center}#qa,.card{display:-webkit-box;-webkit-box-flex:1;-webkit-box-orient:vertical}.col,.row{display:-webkit-box;-webkit-box-align:stretch;-webkit-box-flex:1;-webkit-box-pack:center}.col{-webkit-box-align:center;-webkit-box-orient:vertical;width:50%}.big{-webkit-box-flex:2}.col{padding:10px}.col~.col{margin-left:2px}.row~.row .col{margin-top:2px}.ribbon{background:rgba(50,50,50,.4);color:#fff;padding:0 3px;font-size:13px;font-weight:lighter;letter-spacing:.1ex;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:18px;width:100%;-webkit-box-flex:0}.bg-tint{background:rgba(255,255,255,.1)}.card1{background:#f15353}.card2{background:#f39c12}.card3{background:#2ecc71}.card4{background:#1b97ae}.card5{background:#e67e22}.card6{background:#1abc9c}
```
<!-- endinject -->

## Grid system
The simple grid system allows you to divide your card templates evenly, vertically and horizontally:

* Vertical divisions are called "rows" and are given a `row` class
* Horizontal divisions are called "cols" and are given a `col` class

Cols should always be placed inside rows, like so:
```html
<div class="row">
  <div class="col">
    (Content)
  </div>
</div>
```

### Row and column sizing
By default, rows and cols will spread to fill the card face evenly.

You can add the class `big` to a row to have it take up twice the amount of its default space. In the example below, the second row will take up ⅔ of the card face instead of half:
```html
<div class="row">
  <div class="col">
    (Content)
  </div>
</div>

<div class="row big">
  <div class="col">
    (Content)
  </div>

  <div class="col">
    (Content)
  </div>
</div>
```

## Colors

### Card colors
Distinct background colors are included for cards 1-6, using the classes that Anki automatically adds (e.g., `card1`).

These colors can be overridden or removed either within your Styling field or from inside `source/styles/_colors.scss`

### Background colors
The `bg-tint` class can be applied to a col to give it a slightly lighter background. This can be helpful as a way to emphasize the vertical/horizontal separation of the grid.

## Other components

### Ribbons
Ribbons contain contextual information about a card, e.g. for decks that contain multiple note types.

Example:
```html
<header class="ribbon">My Card</header>
```

## Examples
Here are some complete examples of Starstrap in use.

### Example 1:
Front template:
```html
<header class="ribbon">Kanji</header>

<div class="row">
  <div class="col" style="font-size:60px;">
    {{Kanji}}
  </div>
</div>
```

Back template:
```html
{{FrontSide}}

<div class="row">
  <div class="col bg-tint">
    ({{Meaning}})
  </div>

  <div class="col bg-tint">
    {{On'yomi}}
    <br>
    {{Kun'yomi}}
  </div>
</div>
```
