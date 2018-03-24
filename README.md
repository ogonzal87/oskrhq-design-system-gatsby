# **Welcome**
This is a Design System + supporting tools created for Designers and Developers' joy. The system makes use of a CSS architecture based on a shared anatomy (Color, Typography, Space, Depth, and Motion), and a variety of Presentational Components written in React built from this shared anatomy. The system also has a UI Kit with available Sketch Symbols matching these React Components so Designers and Developers are always in sync.  😎  

# **Consuming the System**
Changes are your product has its own Brand Identity and styles that will not match what I went for. To take advantage of the architecture and the components but change the style values to reflact your Brand Identity, the only think you need to do is chnage the values in the `1-base` folder under `src > scss` for the ones that reflect your brand. As you change the base color palette for example, you will see that the UI will start reflecting your own personality.

#### **Not using React?**
I got you. Although you will not be able to take advantage of the react Components, you can still make use of the Shared Anatomy of Styles using SASS and customize it to your needs. If that is the case, the only folder you care about is the `scss` under the `src` folder. In the `1-base` folder, you will find what you need. 

#### **Are you a Designer?**
You are not lost, feel free to dig through the code but you will be more interested in the UI Kit which mirrors this repo code. You can find it [here](https://github.com/ogonzal87/oskrhq-uikit-mobile-app).

# FAQ's

### What is a Design System?
My definition is as follows: 
> (noun): A product made of living guidelines that communicates a unified set of UX and design decisions which promotes harmony across various media outputs.

### Why should I use a Design System?
If you are here, you already know why. 🤓

### What if the element/component I need is not in the UI Kit?
You can create your own components using the base Anatomy which provides some really useful utility sass functions, mixins and classes.  

### Supporting Material
1) Part I: [The Anatomy of all Interfaces](https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf)
2) Part II: [Crafting a New Visual Language](https://medium.muz.li/crafting-a-new-visual-language-912d3ac8df43)
2) Part III: [A Dictionary for a Design Language](https://blog.prototypr.io/a-dictionary-for-a-design-language-3afae1579586)