## tailwindcss border sketch
This is my first NPM package EVER; it's a small plugin that adds Border Sketch Style to tailwindcss


Example:

![example]( example.png "Logo Title Text 1")

Demo : [ATM Blog](http://atmonshi.sa)

## Installation

NPM:
`npm i tailwindcss-border-sketch`

Yarn:
`yarn add tailwindcss-border-sketch`


## How to Use

In your Tailwindcss config file add the pligin to the `plugins` array
```
plugins: [
    require('tailwindcss-border-sketch')(),
]
``` 

Then if you re-run your build suite, all the classes are available to use.

## Usage:

```html
<lable>Small :</lable>
<div class="border-sketchy-sm bg-white p-6 m-8 shadow hover:border-sketchy-lg hover:shadow-lg transition duration-700 ease-in-out ">
    border-sketchy-sm hover:border-sketchy-lg
</div>

<lable>Medium :</lable>
<div class="border-sketchy-md bg-white p-6 m-8 shadow hover:border-sketchy-lg hover:shadow-lg transition duration-700 ease-in-out ">
    border-sketchy-md hover:border-sketchy-sm
</div>

<lable>Large :</lable>
<div class="border-sketchy-lg bg-white p-6 m-8 shadow hover:border-sketchy-sm hover:shadow-lg transition duration-700 ease-in-out ">
    border-sketchy-lg hover:border-sketchy-md
</div>
```
