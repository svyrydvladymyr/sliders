# KALCIFER SLIDERS

The slider template is simple and versatile. 
You can add as many slider blocks to a page as you like. You can also insert in each other without restrictions.
The template has five color schemes. You can change each pattern as you like, and you can add your own color scheme.

# How to use

### The first way using jQuery:

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

## The second way is to add markup to your document:

```html
<div class="kalcifer_slider">
     <p class="title blue">Title</p>
     <div class="desc blue">            
        <p>Text</p>
     </div>
     <p class="title blue">Title</p>
     <div class="desc blue">
         <p>Text</p>
     </div>
</div> 
```

Color schemes for each slider can be set individually. To do this, you need to change the color class in the slider. There are the following color schemes: ``` blue, green, red, gray, yellow ```.


