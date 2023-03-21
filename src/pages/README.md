# 📜 PAGES

This directory contains our app's routes represented as pages.

That is, each page is a route in the app that can be accessed by the '/{page-name}' URL.

For example, the `Login` page is accessed by the `/login` URL.

The idea is that each page is a self-contained unit that contains all the logic and components needed to render the page.

That means that:

- no other page should import components from another page.
- no other page should import logic from another page.

Pages should be as independent as possible, and only contain the logic and components needed to render the page.
