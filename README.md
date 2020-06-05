# KALCIFER SLIDERS

The slider template is simple and versatile. 
You can add as many slider blocks to a page as you like. You can also insert in each other without restrictions.
The template has five color schemes. You can change each pattern as you like, and you can add your own color scheme.

# How to use

#### The first way using jQuery:

To header:

```javascript
<link rel="stylesheet" href="css/style.css">
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
```

To body:

```javascript
<div class="slider"></div>
<script>
    $(function(){ $(".slider").load("slider.html"); });
</script>
```

#### The second way is to add markup to your document:

```html
<div class="kalcifer_slider blue">
     <p class="title">Title</p>
     <div class="desc">            
        <p>Text</p>
     </div>
     <p class="title">Title</p>
     <div class="desc">
         <p>Text</p>
     </div>
</div> 
```

## About color schemes

Color schemes for each slider can be set individually. To do this, you need to change the color class in the slider. There are the following color schemes: ``` blue, green, red, gray, yellow ```.

#### To change to one of the existing color schemes, you need to replace the slider wrapper class.

```html
<div class="kalcifer_slider blue">
    ...
</div> 
```

#### Також ви можете створити свою кольорову схему.

Create a color scheme file.

``` name.css ```

Import into the main color scheme.

``` @import "templates/name.css"; ``

Change the color scheme styles to the ones that suit you.

```css
.kalcifer_slider.blue > .title{
    border: 1px solid #5681bf;
    border-radius: 8px;
    background: #5681bf;
    color: #ffffff;
}

.kalcifer_slider.blue > .title:hover{
    background: #628cc9;
}

.kalcifer_slider.blue > .desc{
    border: 1px solid #5681bf;
    border-radius: 0px 0px 8px 8px;
    background: #ffffff;
    color: #111111;
}

.kalcifer_slider.blue > .title.active{
    border-radius: 8px 8px 0px 0px;
}

.kalcifer_slider.blue > .title.active:hover{
    background: #5681bf;
}
```

