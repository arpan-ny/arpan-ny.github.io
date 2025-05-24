// src/custom.d.ts or src/types/assets.d.ts

// This declaration tells TypeScript that any import ending with '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'
// will be treated as a module that exports a string (the URL path to the image).
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}

// You can add similar declarations for other asset types if you encounter errors (e.g., for .css, .scss, .json if not handled by default)
/*
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
*/