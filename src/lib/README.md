# 📚 LIB

This directory is a collection of all the external libraries used in the project.

We wrap the external libraries in a facade, so that we can easily change the library if we want to, without having to change the code in the rest of the project.

For example, we use the `react-router-dom` library to handle routing in the project, but we wrap it in a facade called `router`, so that we can easily change the library if we want to.

Or, we use the `react-query` library to handle data fetching in the project, but we wrap it in a facade called `query`, so that we can easily change the library if we want to.

Or, we use the `react-hook-form` library to handle forms in the project, but we wrap it in a facade called `form`, so that we can easily change the library if we want to.

Or, we use the `toastify` library to handle toasts in the project, but we wrap it in a facade called `toast`, so that we can easily change the library if we want to.
