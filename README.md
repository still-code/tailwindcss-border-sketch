<p align="center"><img src="https://banners.beyondco.de/Border%20Sketch.png?theme=light&packageManager=yarn+add&packageName=tailwindcss-border-sketch&pattern=jigsaw&style=style_1&description=border+sketch+for+tailwindcss&md=1&showWatermark=1&fontSize=100px&images=puzzle&widths=600&heights=650"/></p>

# tailwindcss border sketch
Simple plugin that adds Border Sketch Style to tailwindcss


## Example:

![example]( example.png "Logo Title Text 1")

## Demo:
[ATM Blog](http://atmonshi.sa)

## Installation

#### NPM:

```console
npm i tailwindcss-border-sketch
```

#### Yarn:

```console
yarn add tailwindcss-border-sketch
```


## Setup

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
