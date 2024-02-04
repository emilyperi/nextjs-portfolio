# Making this Website

I often find when it comes to web development, its easier for me to learn how to use a tool (library, framework, etc.) than it is to understand what it actually is. For example, while I can say that Next.js is a framework similar to React's `create-react-app`, I find it more meaningful to talk about what I can do with it. Next.js compiles my JSX code into JavaScript. It imports the React.js library into my app. It routes my website to the pages I create, and renders them prior to serving them.

#### Creating An Image Component

Next.js has a lot of pre-built components. I originally used the `Image` component, because it's designed to optimize your images. However, I was running into problems with the CSS `position` of the image wrapper.

![screenshot of browser open to the website while under development](/images/website-making-sm.png)

You can see above that the image is layered on top of the nav bar, which has the style `position`.

In order to fix this problem, I decided to make my own, simpler `Image` component. The thing is, I'm not using a lot of large images. The size of the image I'm using on my home page is 335 KB. Still, I wanted to at least use some optimization in the component to plan ahead for the future.

What do I mean by optimization? In this case, I'm talking about the trade-off between the quality of an image and the time it takes to load. The devices people use to visit a webpage vary in screen size, screen resolution, and the amount of bandwidth at their disposal. The `srcset` attribute allows you to serve different sizes of the same image depending on what's best for the viewer. For example,

```html
 <img src='/myimage-sm.jpg' srcset='/myimage-sm.jpg 1x, /myimage-md.jpg 2x, /myimage-lg.jpg 3x'>
```

Instead of `1x`,`2x`, `3x`, `4x`, you can also use specific sizes such as `240w`, `300w`, `720w`, `960w` or whatever it is that you want to use. While I used srcset to when defining my `Image` component, I didn't end up making different sized versions of my profile photo, because it didn't seem worth it since the image will be small and more or less the same size on every screen.

#### Creating a Drop-Down Menu
One of the more interesting parts of development was using React's `useState` to create a drop-down menu for mobile devices.

```javascript
const [navOpen, setNavOpen] = useState(false);
const handleMenuClick = () => { setNavOpen(!navOpen); }
```

By default, `navOpen` is set to `false`, and when the hamburger menu button is clicked, the event handler toggles the value of `navOpen`.

This means that I could change the CSS of the drop-down html element depending on value of `navOpen`.


```jsx
<div className={ navOpen ? 'flex flex-col...' : 'hidden' }>
```

Cool!

#### Tailwind CSS Responsive Navigation Bar

One cool thing about Tailwind CSS is that it makes it easy to change the CSS at each screen breakpoints using class prefixes. For example, I wanted to have a "hamburger" menu for small to medium screens, and a text menu for large screens, I can use the prefix `lg`.


```jsx
<div className='hidden lg:block ...'>
    <a href='/'>Home</a>
</div>
```
This indicates that on default, the style is `display:hidden`, but on large screens (1024 px) and above, it's set to `block`. It's really useful for sizing content responsively as well.

#### Conclusion

Overall, these tools were pretty easy to implement for this project. Still, there is a lot more functionality to Next.js than was needed to make this website, and I think it's cool that it's flexible enough for a simple use case like this one, as well as for more complex project.



