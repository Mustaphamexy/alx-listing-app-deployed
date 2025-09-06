# Project Title: ALX Listing App.

A modern Airbnb clone listing page built with Next.js, TypeScript, and Tailwind CSS. This responsive app features property listings with images, pricing, and location filters for a seamless user experience.

## components/

* components/common/Card.tsx 
Contains a reusable Card component used to display property listings, including images, title, price, and location.

* components/common/Button.tsx
Contains a reusable Button component for actions like "Book Now" or "View Details", ensuring consistent UI behavior across the app.

## interfaces/

* interfaces/index.ts
Includes reusable type definitions such as CardProps and ButtonProps, which describe the expected props for UI components.

## constants/

* constants/index.ts
Centralizes important constants like API base URLs, configuration options, or commonly used text labels.

## public/assets/
* Place placeholder property images, logos, and icons here.

* These assets are publicly accessible and used directly in the UI with relative paths like /assets/image-name.jpg.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
