# Starstrap

A Bootstrap for [Anki](http://ankisrs.net/) card templates.

![](http://i.imgur.com/u0JCeeN.png)

This is very much a **work in progress**, but the gist of it is that you can copy & paste `dist/styling.css` into your Anki card templates' shared _Styling_ field. It provides a _very_ basic but robust grid system that's designed specifically for use with Anki desktop (tested on Mac only so far) and AnkiMobile (iOS).

## Grid system

The grid system allows you to divide your cards evenly into halves and thirds, both vertically and horizontally.

Vertical divisions are called "rows" and are given a `row` class.

Horizontal divisions are called "cols" and are given a `col` class. Cols should only ever be placed _directly inside_ rows.

    <div class="row">
      <div class="col">
        (Content)
      </div>
    </div>

### Row and column sizing

Additional classes can be added to rows and cols to specify their size. Size classes are expressed as fractions following the pattern `{row|col}-{numerator}-{denominator}`.

For example, `row-1-2` would be a row that takes up half of the vertical space; `row-2-3` would be a row that takes up two thirds of the vertical space; `col-1-2` would be a col that takes up half of the horizontal space.

These classes should be paired _alongside_ the default `row`/`col` class.

Example:

    <div class="row row-1-3">
      <div class="col">
        (Content)
      </div>
    </div>

    <div class="row row-2-3">
      <div class="col col-1-2">
        (Content)
      </div>

      <div class="col col-1-2">
        (Content)
      </div>
    </div>

The above grid consists of two rows: the first takes up one third of the card's height, and the second row takes up the remaining two thirds of the card's height. The second row is also divided horizontally into two cols; each col takes up half the card's width.

## Other components

### Ribbons

The ribbon class should be used with a header element as the very fist thing inside a template. It is intended as a means of providing contextual information about a card when necessary, e.g. for decks that contain multiple note types.

    <header class="ribbon">My Card</header>

Ribbons should be used very sparingly.

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

    <div class="row row-1-2">
      <div class="col" style="font-size:60px;">
        {{Kanji}}
      </div>
    </div>

Back template:

    {{FrontSide}}

    <div class="row row-1-2">
      <div class="col col-1-2 bg-tint">
        ({{Meaning}})
      </div>

      <div class="col col-1-2 bg-tint">
        {{On'yomi}}
        <br>
        {{Kun'yomi}}
      </div>
    </div>
