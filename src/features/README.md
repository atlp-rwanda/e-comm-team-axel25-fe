# 🧩 FEATURES

This directory contains all the features of the application. Each feature is a folder with a `index.ts` file that exports the feature's reducer and a `components` folder that contains all the components of the feature.

Each separate feature should be a separate folder in this directory.

Examples of features are the `auth` feature, the `theme` feature, the `users` feature, the `products` feature, etc.

This is the recommended structure for a feature:

```text
src
└── features
    └── feature-name
        ├── components
        │   ├── Component1.tsx
        │   ├── Component2.tsx
        │   └── ...
        ├── index.ts
        └── types.ts
```
