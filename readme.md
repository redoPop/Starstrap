# Starstrap

A Bootstrap for [Anki](http://ankisrs.net/) card templates.

![](http://i.imgur.com/u0JCeeN.png)

This is very much a **work in progress**, but the gist of it is that you can copy & paste `dist/styling.css` into your Anki card templates' shared _Styling_ field. It provides a _very_ basic but robust grid system that's designed specifically for use with Anki desktop (tested on Mac only so far) and AnkiMobile (iOS).

## Grid system

The grid system allows you to divide your card templates evenly, vertically and horizontally.

Vertical divisions are called "rows" and are given a `row` class.

Horizontal divisions are called "cols" and are given a `col` class. Cols should only ever be placed _directly inside_ rows.

    <div class="row">
      <div class="col">
        (Content)
      </div>
    </div>

### Row and column sizing

By default, rows and cols will automatically spread their widths/heights evenly according to their content and the dimensions of the card face.

You can also add the class `big` to a row to have it take up twice the amount of its default space.

Example:

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

The above grid consists of two rows: the first takes up one third of the card's height, and the second row takes up the remaining two thirds of the card's height. The second row is also divided horizontally into two cols; each col takes up half the card's width.

## Other components

### Ribbons

Ribbons contain contextual information about a card, e.g. for decks that contain multiple note types.

    <header class="ribbon">My Card</header>

## Colors

### Card colors

Distinct background colors are included for cards 1-6, using the classes Anki automatically adds (e.g., `card1`).

These colors can be overridden or removed either within your Styling field or from inside `source/styles/_colors.scss`

### Background colors

The `bg-tint` class can be applied to a col to give it a slightly lighter background. This can be helpful as a way to emphasize the vertical/horizontal separation of the grid.

## Examples

Here are some complete examples of Starstrap in use.

### Example 1:

Front template:

    <header class="ribbon">Kanji</header>

    <div class="row">
      <div class="col" style="font-size:60px;">
        {{Kanji}}
      </div>
    </div>

Back template:

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
