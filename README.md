# ShopCraft — E-commerce Frontend Minor Project

A responsive e-commerce frontend built for **Web Development – Week 05 Minor Project: E-commerce Frontend with Redux/Context**.

## Tech stack
- React.js + Vite
- Redux Toolkit + React Redux
- React Router
- Lucide React icons
- CSS responsive design
- Static product data
- Local Storage persistence for cart, wishlist and dark mode

## Required project features implemented
- Home page with attractive landing hero
- Featured products
- Navigation and search
- Product listing grid
- Product image, name, price, category and rating
- Product details page with image, description and add-to-cart
- Shopping cart: add/remove/increase/decrease/total/items
- Redux Toolkit store, slices, actions, reducers and selectors
- Search by product name
- Category filter
- Price/rating sorting
- Responsive mobile/tablet/desktop layout
- Loading/error-ready architecture
- Reusable components and clean folder structure

## Bonus features
- Wishlist
- Dark mode
- Persistent cart with Local Storage
- Login/Register-style authentication UI
- Sorting

## Folder structure
```text
shopcraft-minor-project/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HelpButton.jsx
│   │   ├── Loading.jsx
│   │   └── ProductCard.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   └── Login.jsx
│   ├── store/
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │   ├── wishlistSlice.js
│   │   └── uiSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Run locally

Install Node.js (LTS), then:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Build for deployment

```bash
npm run build
```

The production files will be generated in `dist/`.

## Netlify deployment

1. Push this project to GitHub.
2. In Netlify choose **Add new project → Import an existing project**.
3. Select the GitHub repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy.

For a React Router SPA, add a file named `_redirects` inside `public/` with:

```text
/* /index.html 200
```

This prevents refreshes on `/shop`, `/cart`, `/product/1`, etc. from returning 404.

## Academic mapping

The implementation demonstrates functional components, reusable components, props, state management, hooks, conditional rendering, React Router and event handling. Redux Toolkit demonstrates store configuration, slices, actions, reducers, dispatch and selectors.

The project follows the supplied Minor Project 05 brief and uses static JSON-style product data, one of the allowed data sources.
