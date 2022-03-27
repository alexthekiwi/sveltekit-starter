# sveltekit-starter

This is an installation of svelte@next, designed to speed up new projects by reducing common boilerplate. This project has the following preconfigured:
- Tailwind CSS (with prettier plugin)
- Prisma
- Base layouts/folder structure
- Mailgun

## Installation
**To get started, do a find-and-replace for `sveltekit-starter`, replacing it with your app's name.**

Install project dependencies:
```bash
npm install
```

To get your database in sync (if using one with Prisma), edit your `schema.prisma` file and run:
```bash
npx prisma db push
```

## Developing
```bash
npm run dev
```

## Building
To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment

There's an `ecosystem.config.cjs` file for PM2 in the project root, which you can adjust the port number accordingly.
