src/
├── app/                          # Pages only
│   ├── dashboard/page.tsx
│   ├── user-management/page.tsx
│   ├── userdet/[userid]/page.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/                   # Reusable components
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.css
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.css
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   ├── SearchBar/
│   │   ├── SearchBar.tsx
│   │   └── SearchBar.css
│   └── Sidebar/
│       ├── Sidebar.tsx
│       └── Sidebar.css
│
├── services/                     # API & Business Logic
│   ├── apiClient.ts             # Axios/Fetch wrapper
│   ├── authService.ts           # Authentication logic
│   ├── userService.ts           # User API calls
│   └── dashboardService.ts      # Dashboard data fetching
│
├── types/                        # TypeScript types & interfaces
│   ├── user.ts
│   ├── dashboard.ts
│   └── api.ts
│
├── utils/                        # Helper functions
│   ├── formatDate.ts
│   ├── validation.ts
│   └── constants.ts
│
├── hooks/                        # Custom React hooks
│   ├── useAuth.ts
│   ├── useUser.ts
│   └── useFetch.ts
│
├── styles/                       # Global styles
│   ├── globals.css
│   ├── variables.css             # CSS variables
│   └── reset.css
│
└── context/                      # React Context (if needed)
    ├── AuthContext.tsx
    └── UserContext.tsx































This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
