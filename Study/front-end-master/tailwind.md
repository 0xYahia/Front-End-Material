## Tailwind Config

```json
{
  "theme": {
    "extend": {
      "colors": {
        "primary": "#FF00FF",
        "secondary": "#00FF00"
      }
    }
    // colors(theme) {
    //   return {
    //     primary: {
    //       ...theme.colors.purple,
    //       DEFAULT: theme.colors.purple[500],
    //     },
    //   };
    // },
  }
}
```

**NOTE** &rarr; We can use @apply directive to apply the utility classes to the custom classes.

```css
@layer components {
  .btn {
    @apply px-4 py-2 bg-primary text-white;
  }
}
```

**NOTE** &rarr; We can use @layer directive to define set of classes in a single file.

```css
@layer components {
  .btn {
    @apply px-4 py-2 bg-primary text-white;
  }
}
```
