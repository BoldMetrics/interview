const products = [
  {
    productID: 12345,
    name: "Classic T-Shirt",
    variants: [
      { size: 'Small', color: 'Red', inStock: true },
      { size: 'Small', color: 'Blue', inStock: false },
      { size: 'Medium', color: 'Green', inStock: true },
      { size: 'Medium', color: 'Yellow', inStock: false },
      { size: 'Large', color: 'Purple', inStock: true },
      { size: 'Large', color: 'Orange', inStock: false },
      { size: 's', color: 'Pink', inStock: true },
      { size: 'm', color: 'Brown', inStock: false },
      { size: 'l', color: 'Gray', inStock: true },
      { size: 'small', color: 'Black', inStock: false },
      { size: 'medium', color: 'White', inStock: true },
      { size: 'large', color: 'Navy', inStock: false },
      { size: 'Small', color: 'Teal', inStock: true },
      { size: 'Medium', color: 'Maroon', inStock: false },
      { size: 'Large', color: 'Olive', inStock: true },
      { size: 's', color: 'Coral', inStock: false },
      { size: 'm', color: 'Turquoise', inStock: true },
      { size: 'l', color: 'Lavender', inStock: false },
      { size: 'small', color: 'Gold', inStock: true },
      { size: 'medium', color: 'Silver', inStock: false },
      { size: 'large', color: 'Indigo', inStock: true },
      { size: 'Small', color: 'Crimson', inStock: false },
      { size: 'Medium', color: 'Lime', inStock: true },
      { size: 'Large', color: 'Magenta', inStock: false },
      { size: 's', color: 'Cyan', inStock: true },
      { size: 'm', color: 'Beige', inStock: false },
      { size: 'l', color: 'Plum', inStock: true },
      { size: 'small', color: 'Khaki', inStock: false },
      { size: 'medium', color: 'Salmon', inStock: true },
      { size: 'large', color: 'Charcoal', inStock: false },
      { size: 'Small', color: 'Aquamarine', inStock: true },
      { size: 'Medium', color: 'Fuchsia', inStock: false },
      { size: 'Large', color: 'Sienna', inStock: true },
      { size: 's', color: 'Periwinkle', inStock: false },
      { size: 'm', color: 'Mauve', inStock: true },
      { size: 'l', color: 'Tangerine', inStock: false },
      { size: 'small', color: 'Cerulean', inStock: true },
      { size: 'medium', color: 'Vermilion', inStock: false },
      { size: 'large', color: 'Chartreuse', inStock: true },
      { size: 'Small', color: 'Burgundy', inStock: false },
      { size: 'Medium', color: 'Taupe', inStock: true },
      { size: 'Large', color: 'Rust', inStock: false },
      { size: 's', color: 'Sapphire', inStock: true },
      { size: 'm', color: 'Emerald', inStock: false },
      { size: 'l', color: 'Ruby', inStock: true },
      { size: 'small', color: 'Amethyst', inStock: false },
      { size: 'medium', color: 'Topaz', inStock: true },
      { size: 'large', color: 'Pearl', inStock: false },
      { size: 'Small', color: 'Onyx', inStock: true },
      { size: 'Medium', color: 'Jade', inStock: false },
      { size: 'Large', color: 'Amber', inStock: true },
      { size: 's', color: 'Garnet', inStock: false },
      { size: 'm', color: 'Opal', inStock: true },
      { size: 'l', color: 'Peridot', inStock: false },
      { size: 'small', color: 'Turquoise', inStock: true },
      { size: 'medium', color: 'Malachite', inStock: false },
      { size: 'large', color: 'Lapis', inStock: true },
      { size: 'Small', color: 'Jasper', inStock: false },
      { size: 'Medium', color: 'Agate', inStock: true },
      { size: 'Large', color: 'Quartz', inStock: false },
      { size: 'XS', color: 'Mint', inStock: true },
      { size: 'XL', color: 'Cobalt', inStock: false },
      { size: 'XXL', color: 'Mustard', inStock: true },
      { size: 'xs', color: 'Lilac', inStock: false },
    ]
  },
  {
    productID: 67890,
    name: "V-Neck Shirt",
    variants: [
      { size: 'Medium', color: 'Blue', inStock: true },
      { size: 'Large', color: 'Red', inStock: false },
      { size: 'Small', color: 'Green', inStock: true },
      { size: 's', color: 'Yellow', inStock: false },
      { size: 'm', color: 'Purple', inStock: true },
      { size: 'l', color: 'Orange', inStock: false },
      { size: 'small', color: 'Pink', inStock: true },
      { size: 'medium', color: 'Brown', inStock: false },
      { size: 'large', color: 'Gray', inStock: true },
      { size: 'Small', color: 'Black', inStock: false },
      { size: 'Medium', color: 'White', inStock: true },
      { size: 'Large', color: 'Navy', inStock: false },
      { size: 's', color: 'Teal', inStock: true },
      { size: 'm', color: 'Maroon', inStock: false },
      { size: 'l', color: 'Olive', inStock: true },
      { size: 'small', color: 'Coral', inStock: false },
      { size: 'medium', color: 'Turquoise', inStock: true },
      { size: 'large', color: 'Lavender', inStock: false },
      { size: 'Small', color: 'Gold', inStock: true },
      { size: 'Medium', color: 'Silver', inStock: false },
      { size: 'Large', color: 'Indigo', inStock: true },
      { size: 's', color: 'Crimson', inStock: false },
      { size: 'm', color: 'Lime', inStock: true },
      { size: 'l', color: 'Magenta', inStock: false },
      { size: 'small', color: 'Cyan', inStock: true },
      { size: 'medium', color: 'Beige', inStock: false },
      { size: 'large', color: 'Plum', inStock: true },
      { size: 'Small', color: 'Khaki', inStock: false },
      { size: 'Medium', color: 'Salmon', inStock: true },
      { size: 'Large', color: 'Charcoal', inStock: false },
      { size: 's', color: 'Aquamarine', inStock: true },
      { size: 'm', color: 'Fuchsia', inStock: false },
      { size: 'l', color: 'Sienna', inStock: true },
      { size: 'small', color: 'Periwinkle', inStock: false },
      { size: 'medium', color: 'Mauve', inStock: true },
      { size: 'large', color: 'Tangerine', inStock: false },
      { size: 'Small', color: 'Cerulean', inStock: true },
      { size: 'Medium', color: 'Vermilion', inStock: false },
      { size: 'Large', color: 'Chartreuse', inStock: true },
      { size: 's', color: 'Burgundy', inStock: false },
      { size: 'm', color: 'Taupe', inStock: true },
      { size: 'l', color: 'Rust', inStock: false },
      { size: 'small', color: 'Sapphire', inStock: true },
      { size: 'medium', color: 'Emerald', inStock: false },
      { size: 'large', color: 'Ruby', inStock: true },
      { size: 'Small', color: 'Amethyst', inStock: false },
      { size: 'Medium', color: 'Topaz', inStock: true },
      { size: 'Large', color: 'Pearl', inStock: false },
      { size: 's', color: 'Onyx', inStock: true },
      { size: 'm', color: 'Jade', inStock: false },
      { size: 'l', color: 'Amber', inStock: true },
      { size: 'small', color: 'Garnet', inStock: false },
      { size: 'medium', color: 'Opal', inStock: true },
      { size: 'large', color: 'Peridot', inStock: false },
      { size: 'Small', color: 'Turquoise', inStock: true },
      { size: 'Medium', color: 'Malachite', inStock: false },
      { size: 'Large', color: 'Lapis', inStock: true },
      { size: 's', color: 'Jasper', inStock: false },
      { size: 'm', color: 'Agate', inStock: true },
      { size: 'l', color: 'Quartz', inStock: false },
      { size: 'XS', color: 'Slate', inStock: true },
      { size: 'XL', color: 'Terracotta', inStock: false },
      { size: 'XXL', color: 'Sage', inStock: true },
      { size: 'xs', color: 'Dusty Rose', inStock: false },
    ]
  },
  {
    productID: 24680,
    name: "Polo Shirt",
    variants: [
      { size: 'Large', color: 'Green', inStock: true },
      { size: 'Small', color: 'Blue', inStock: false },
      { size: 'Medium', color: 'Red', inStock: true },
      { size: 'l', color: 'Yellow', inStock: false },
      { size: 's', color: 'Purple', inStock: true },
      { size: 'm', color: 'Orange', inStock: false },
      { size: 'large', color: 'Pink', inStock: true },
      { size: 'small', color: 'Brown', inStock: false },
      { size: 'medium', color: 'Gray', inStock: true },
      { size: 'Large', color: 'Black', inStock: false },
      { size: 'Small', color: 'White', inStock: true },
      { size: 'Medium', color: 'Navy', inStock: false },
      { size: 'l', color: 'Teal', inStock: true },
      { size: 's', color: 'Maroon', inStock: false },
      { size: 'm', color: 'Olive', inStock: true },
      { size: 'large', color: 'Coral', inStock: false },
      { size: 'small', color: 'Turquoise', inStock: true },
      { size: 'medium', color: 'Lavender', inStock: false },
      { size: 'Large', color: 'Gold', inStock: true },
      { size: 'Small', color: 'Silver', inStock: false },
      { size: 'Medium', color: 'Indigo', inStock: true },
      { size: 'l', color: 'Crimson', inStock: false },
      { size: 's', color: 'Lime', inStock: true },
      { size: 'm', color: 'Magenta', inStock: false },
      { size: 'large', color: 'Cyan', inStock: true },
      { size: 'small', color: 'Beige', inStock: false },
      { size: 'medium', color: 'Plum', inStock: true },
      { size: 'Large', color: 'Khaki', inStock: false },
      { size: 'Small', color: 'Salmon', inStock: true },
      { size: 'Medium', color: 'Charcoal', inStock: false },
      { size: 'l', color: 'Aquamarine', inStock: true },
      { size: 's', color: 'Fuchsia', inStock: false },
      { size: 'm', color: 'Sienna', inStock: true },
      { size: 'large', color: 'Periwinkle', inStock: false },
      { size: 'small', color: 'Mauve', inStock: true },
      { size: 'medium', color: 'Tangerine', inStock: false },
      { size: 'Large', color: 'Cerulean', inStock: true },
      { size: 'Small', color: 'Vermilion', inStock: false },
      { size: 'Medium', color: 'Chartreuse', inStock: true },
      { size: 'l', color: 'Burgundy', inStock: false },
      { size: 's', color: 'Taupe', inStock: true },
      { size: 'm', color: 'Rust', inStock: false },
      { size: 'large', color: 'Sapphire', inStock: true },
      { size: 'small', color: 'Emerald', inStock: false },
      { size: 'medium', color: 'Ruby', inStock: true },
      { size: 'Large', color: 'Amethyst', inStock: false },
      { size: 'Small', color: 'Topaz', inStock: true },
      { size: 'Medium', color: 'Pearl', inStock: false },
      { size: 'l', color: 'Onyx', inStock: true },
      { size: 's', color: 'Jade', inStock: false },
      { size: 'm', color: 'Amber', inStock: true },
      { size: 'large', color: 'Garnet', inStock: false },
      { size: 'small', color: 'Opal', inStock: true },
      { size: 'medium', color: 'Peridot', inStock: false },
      { size: 'Large', color: 'Turquoise', inStock: true },
      { size: 'Small', color: 'Malachite', inStock: false },
      { size: 'Medium', color: 'Lapis', inStock: true },
      { size: 'l', color: 'Jasper', inStock: false },
      { size: 's', color: 'Agate', inStock: true },
      { size: 'm', color: 'Quartz', inStock: false },
      { size: 'XS', color: 'Ochre', inStock: true },
      { size: 'XL', color: 'Mahogany', inStock: false },
      { size: 'XXL', color: 'Seafoam', inStock: true },
      { size: 'xs', color: 'Mulberry', inStock: false },
    ]
  },
  {
    productID: 13579,
    name: "Henley Shirt",
    variants: [
      { size: 'Small', color: 'Red', inStock: true },
      { size: 'Small', color: 'Blue', inStock: false },
      { size: 'Medium', color: 'Green', inStock: true },
      { size: 'Medium', color: 'Yellow', inStock: false },
      { size: 'Large', color: 'Purple', inStock: true },
      { size: 'Large', color: 'Orange', inStock: false },
      { size: 's', color: 'Pink', inStock: true },
      { size: 'm', color: 'Brown', inStock: false },
      { size: 'l', color: 'Gray', inStock: true },
      { size: 'small', color: 'Black', inStock: false },
      { size: 'medium', color: 'White', inStock: true },
      { size: 'large', color: 'Navy', inStock: false },
      { size: 'Small', color: 'Teal', inStock: true },
      { size: 'Medium', color: 'Maroon', inStock: false },
      { size: 'Large', color: 'Olive', inStock: true },
      { size: 's', color: 'Coral', inStock: false },
      { size: 'm', color: 'Turquoise', inStock: true },
      { size: 'l', color: 'Lavender', inStock: false },
      { size: 'small', color: 'Gold', inStock: true },
      { size: 'medium', color: 'Silver', inStock: false },
      { size: 'large', color: 'Indigo', inStock: true },
      { size: 'Small', color: 'Crimson', inStock: false },
      { size: 'Medium', color: 'Lime', inStock: true },
      { size: 'Large', color: 'Magenta', inStock: false },
      { size: 's', color: 'Cyan', inStock: true },
      { size: 'm', color: 'Beige', inStock: false },
      { size: 'l', color: 'Plum', inStock: true },
      { size: 'small', color: 'Khaki', inStock: false },
      { size: 'medium', color: 'Salmon', inStock: true },
      { size: 'large', color: 'Charcoal', inStock: false },
      { size: 'Small', color: 'Aquamarine', inStock: true },
      { size: 'Medium', color: 'Fuchsia', inStock: false },
      { size: 'Large', color: 'Sienna', inStock: true },
      { size: 's', color: 'Periwinkle', inStock: false },
      { size: 'm', color: 'Mauve', inStock: true },
      { size: 'l', color: 'Tangerine', inStock: false },
      { size: 'small', color: 'Cerulean', inStock: true },
      { size: 'medium', color: 'Vermilion', inStock: false },
      { size: 'large', color: 'Chartreuse', inStock: true },
      { size: 'Small', color: 'Burgundy', inStock: false },
      { size: 'Medium', color: 'Taupe', inStock: true },
      { size: 'Large', color: 'Rust', inStock: false },
      { size: 's', color: 'Sapphire', inStock: true },
      { size: 'm', color: 'Emerald', inStock: false },
      { size: 'l', color: 'Ruby', inStock: true },
      { size: 'small', color: 'Amethyst', inStock: false },
      { size: 'medium', color: 'Topaz', inStock: true },
      { size: 'large', color: 'Pearl', inStock: false },
      { size: 'Small', color: 'Onyx', inStock: true },
      { size: 'Medium', color: 'Jade', inStock: false },
      { size: 'Large', color: 'Amber', inStock: true },
      { size: 's', color: 'Garnet', inStock: false },
      { size: 'm', color: 'Opal', inStock: true },
      { size: 'l', color: 'Peridot', inStock: false },
      { size: 'small', color: 'Turquoise', inStock: true },
      { size: 'medium', color: 'Malachite', inStock: false },
      { size: 'large', color: 'Lapis', inStock: true },
      { size: 'Small', color: 'Jasper', inStock: false },
      { size: 'Medium', color: 'Agate', inStock: true },
      { size: 'Large', color: 'Quartz', inStock: false },
    ]
  },
  {
    productID: 24681,
    name: "Tank Top",
    variants: [
      { size: 'Small', color: 'Red', inStock: true },
      { size: 'Small', color: 'Blue', inStock: false },
      { size: 'Medium', color: 'Green', inStock: true },
      { size: 'Medium', color: 'Yellow', inStock: false },
      { size: 'Large', color: 'Purple', inStock: true },
      { size: 'Large', color: 'Orange', inStock: false },
      { size: 's', color: 'Pink', inStock: true },
      { size: 'm', color: 'Brown', inStock: false },
      { size: 'l', color: 'Gray', inStock: true },
      { size: 'small', color: 'Black', inStock: false },
      { size: 'medium', color: 'White', inStock: true },
      { size: 'large', color: 'Navy', inStock: false },
      { size: 'Small', color: 'Teal', inStock: true },
      { size: 'Medium', color: 'Maroon', inStock: false },
      { size: 'Large', color: 'Olive', inStock: true },
      { size: 's', color: 'Coral', inStock: false },
      { size: 'm', color: 'Turquoise', inStock: true },
      { size: 'l', color: 'Lavender', inStock: false },
      { size: 'small', color: 'Gold', inStock: true },
      { size: 'medium', color: 'Silver', inStock: false },
      { size: 'large', color: 'Indigo', inStock: true },
      { size: 'Small', color: 'Crimson', inStock: false },
      { size: 'Medium', color: 'Lime', inStock: true },
      { size: 'Large', color: 'Magenta', inStock: false },
      { size: 's', color: 'Cyan', inStock: true },
      { size: 'm', color: 'Beige', inStock: false },
      { size: 'l', color: 'Plum', inStock: true },
      { size: 'small', color: 'Khaki', inStock: false },
      { size: 'medium', color: 'Salmon', inStock: true },
      { size: 'large', color: 'Charcoal', inStock: false },
      { size: 'Small', color: 'Aquamarine', inStock: true },
      { size: 'Medium', color: 'Fuchsia', inStock: false },
      { size: 'Large', color: 'Sienna', inStock: true },
      { size: 's', color: 'Periwinkle', inStock: false },
      { size: 'm', color: 'Mauve', inStock: true },
      { size: 'l', color: 'Tangerine', inStock: false },
      { size: 'small', color: 'Cerulean', inStock: true },
      { size: 'medium', color: 'Vermilion', inStock: false },
      { size: 'large', color: 'Chartreuse', inStock: true },
      { size: 'Small', color: 'Burgundy', inStock: false },
      { size: 'Medium', color: 'Taupe', inStock: true },
      { size: 'Large', color: 'Rust', inStock: false },
      { size: 's', color: 'Sapphire', inStock: true },
      { size: 'm', color: 'Emerald', inStock: false },
      { size: 'l', color: 'Ruby', inStock: true },
      { size: 'small', color: 'Amethyst', inStock: false },
      { size: 'medium', color: 'Topaz', inStock: true },
      { size: 'large', color: 'Pearl', inStock: false },
      { size: 'Small', color: 'Onyx', inStock: true },
      { size: 'Medium', color: 'Jade', inStock: false },
      { size: 'Large', color: 'Amber', inStock: true },
      { size: 's', color: 'Garnet', inStock: false },
      { size: 'm', color: 'Opal', inStock: true },
      { size: 'l', color: 'Peridot', inStock: false },
      { size: 'small', color: 'Turquoise', inStock: true },
      { size: 'medium', color: 'Malachite', inStock: false },
      { size: 'large', color: 'Lapis', inStock: true },
      { size: 'Small', color: 'Jasper', inStock: false },
      { size: 'Medium', color: 'Agate', inStock: true },
      { size: 'Large', color: 'Quartz', inStock: false },
    ]
  },
  {
    productID: 35792,
    name: "Button-Down Shirt",
    variants: [
      { size: 'Small', color: 'Red', inStock: true },
      { size: 'Small', color: 'Blue', inStock: false },
      { size: 'Medium', color: 'Green', inStock: true },
      { size: 'Medium', color: 'Yellow', inStock: false },
      { size: 'Large', color: 'Purple', inStock: true },
      { size: 'Large', color: 'Orange', inStock: false },
      { size: 's', color: 'Pink', inStock: true },
      { size: 'm', color: 'Brown', inStock: false },
      { size: 'l', color: 'Gray', inStock: true },
      { size: 'small', color: 'Black', inStock: false },
      { size: 'medium', color: 'White', inStock: true },
      { size: 'large', color: 'Navy', inStock: false },
      { size: 'Small', color: 'Teal', inStock: true },
      { size: 'Medium', color: 'Maroon', inStock: false },
      { size: 'Large', color: 'Olive', inStock: true },
      { size: 's', color: 'Coral', inStock: false },
      { size: 'm', color: 'Turquoise', inStock: true },
      { size: 'l', color: 'Lavender', inStock: false },
      { size: 'small', color: 'Gold', inStock: true },
      { size: 'medium', color: 'Silver', inStock: false },
      { size: 'large', color: 'Indigo', inStock: true },
      { size: 'Small', color: 'Crimson', inStock: false },
      { size: 'Medium', color: 'Lime', inStock: true },
      { size: 'Large', color: 'Magenta', inStock: false },
      { size: 's', color: 'Cyan', inStock: true },
      { size: 'm', color: 'Beige', inStock: false },
      { size: 'l', color: 'Plum', inStock: true },
      { size: 'small', color: 'Khaki', inStock: false },
      { size: 'medium', color: 'Salmon', inStock: true },
      { size: 'large', color: 'Charcoal', inStock: false },
      { size: 'Small', color: 'Aquamarine', inStock: true },
      { size: 'Medium', color: 'Fuchsia', inStock: false },
      { size: 'Large', color: 'Sienna', inStock: true },
      { size: 's', color: 'Periwinkle', inStock: false },
      { size: 'm', color: 'Mauve', inStock: true },
      { size: 'l', color: 'Tangerine', inStock: false },
      { size: 'small', color: 'Cerulean', inStock: true },
      { size: 'medium', color: 'Vermilion', inStock: false },
      { size: 'large', color: 'Chartreuse', inStock: true },
      { size: 'Small', color: 'Burgundy', inStock: false },
      { size: 'Medium', color: 'Taupe', inStock: true },
      { size: 'Large', color: 'Rust', inStock: false },
      { size: 's', color: 'Sapphire', inStock: true },
      { size: 'm', color: 'Emerald', inStock: false },
      { size: 'l', color: 'Ruby', inStock: true },
      { size: 'small', color: 'Amethyst', inStock: false },
      { size: 'medium', color: 'Topaz', inStock: true },
      { size: 'large', color: 'Pearl', inStock: false },
      { size: 'Small', color: 'Onyx', inStock: true },
      { size: 'Medium', color: 'Jade', inStock: false },
      { size: 'Large', color: 'Amber', inStock: true },
      { size: 's', color: 'Garnet', inStock: false },
      { size: 'm', color: 'Opal', inStock: true },
      { size: 'l', color: 'Peridot', inStock: false },
      { size: 'small', color: 'Turquoise', inStock: true },
      { size: 'medium', color: 'Malachite', inStock: false },
      { size: 'large', color: 'Lapis', inStock: true },
      { size: 'Small', color: 'Jasper', inStock: false },
      { size: 'Medium', color: 'Agate', inStock: true },
      { size: 'Large', color: 'Quartz', inStock: false },
    ]
  },
  {
    productID: 46803,
    name: "Turtleneck Shirt",
    variants: [
      { size: 'Small', color: 'Red', inStock: true },
      { size: 'Small', color: 'Blue', inStock: false },
      { size: 'Medium', color: 'Green', inStock: true },
      { size: 'Medium', color: 'Yellow', inStock: false },
      { size: 'Large', color: 'Purple', inStock: true },
      { size: 'Large', color: 'Orange', inStock: false },
      { size: 's', color: 'Pink', inStock: true },
      { size: 'm', color: 'Brown', inStock: false },
      { size: 'l', color: 'Gray', inStock: true },
      { size: 'small', color: 'Black', inStock: false },
      { size: 'medium', color: 'White', inStock: true },
      { size: 'large', color: 'Navy', inStock: false },
      { size: 'Small', color: 'Teal', inStock: true },
      { size: 'Medium', color: 'Maroon', inStock: false },
      { size: 'Large', color: 'Olive', inStock: true },
      { size: 's', color: 'Coral', inStock: false },
      { size: 'm', color: 'Turquoise', inStock: true },
      { size: 'l', color: 'Lavender', inStock: false },
      { size: 'small', color: 'Gold', inStock: true },
      { size: 'medium', color: 'Silver', inStock: false },
      { size: 'large', color: 'Indigo', inStock: true },
      { size: 'Small', color: 'Crimson', inStock: false },
      { size: 'Medium', color: 'Lime', inStock: true },
      { size: 'Large', color: 'Magenta', inStock: false },
      { size: 's', color: 'Cyan', inStock: true },
      { size: 'm', color: 'Beige', inStock: false },
      { size: 'l', color: 'Plum', inStock: true },
      { size: 'small', color: 'Khaki', inStock: false },
      { size: 'medium', color: 'Salmon', inStock: true },
      { size: 'large', color: 'Charcoal', inStock: false },
      { size: 'Small', color: 'Aquamarine', inStock: true },
      { size: 'Medium', color: 'Fuchsia', inStock: false },
      { size: 'Large', color: 'Sienna', inStock: true },
      { size: 's', color: 'Periwinkle', inStock: false },
      { size: 'm', color: 'Mauve', inStock: true },
      { size: 'l', color: 'Tangerine', inStock: false },
      { size: 'small', color: 'Cerulean', inStock: true },
      { size: 'medium', color: 'Vermilion', inStock: false },
      { size: 'large', color: 'Chartreuse', inStock: true },
      { size: 'Small', color: 'Burgundy', inStock: false },
      { size: 'Medium', color: 'Taupe', inStock: true },
      { size: 'Large', color: 'Rust', inStock: false },
      { size: 's', color: 'Sapphire', inStock: true },
      { size: 'm', color: 'Emerald', inStock: false },
      { size: 'l', color: 'Ruby', inStock: true },
      { size: 'small', color: 'Amethyst', inStock: false },
      { size: 'medium', color: 'Topaz', inStock: true },
      { size: 'large', color: 'Pearl', inStock: false },
      { size: 'Small', color: 'Onyx', inStock: true },
      { size: 'Medium', color: 'Jade', inStock: false },
      { size: 'Large', color: 'Amber', inStock: true },
      { size: 's', color: 'Garnet', inStock: false },
      { size: 'm', color: 'Opal', inStock: true },
      { size: 'l', color: 'Peridot', inStock: false },
      { size: 'small', color: 'Turquoise', inStock: true },
      { size: 'medium', color: 'Malachite', inStock: false },
      { size: 'large', color: 'Lapis', inStock: true },
      { size: 'Small', color: 'Jasper', inStock: false },
      { size: 'Medium', color: 'Agate', inStock: true },
      { size: 'Large', color: 'Quartz', inStock: false },
    ]
  }
];

const getProductById = (productId) => {
  return products.find(product => product.productID === productId);
};

const getProducts = () => {
  return products;
};

export { getProductById, getProducts };  





