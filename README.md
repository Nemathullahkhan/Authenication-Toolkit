# SecureAuth - Complete Authentication System

A comprehensive authentication system built with Next.js, featuring advanced security measures and user management capabilities using the next-auth library. This system is designed to provide a secure and prevent csrf attacks.

## Purpose: The aim of this project is to develop a robust authentication system using Next.js and next-auth library. The system will provide a secure and prevent csrf attacks. It is developed as a guide for developers to understand how to implement authentication in their Next.js applications.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

## Introduction
This project is a Next.js application that provides a robust authentication system using the next-auth library and Next.js. It offers a range of features for user authentication, including email/password authentication, OAuth integration, and two-factor authentication.
There are only 3 ways to implement the authentication system in Next.js:
1. Credenitals Provider with JWT and CSRF Protection
2. OAuth Providers
3. Using SSO Providers
In this project, I have implemented the first two methods. The third method is not implemented in this project.
## Technologies Used
- Next.js - A React framework for building server-side rendered and statically generated applications.
- next-auth - A flexible authentication library for Next.js applications.
- Prisma ORM - An ORM (Object-Relational Mapping) for Node.js and TypeScript. It simplifies database interactions.
- PostgreSQL - A powerful open-source relational database system.
- Shadcn UI - A UI library for Next.js applications.
- Tailwind CSS - A utility-first CSS framework for rapidly building custom designs.
- Typescript - A typed superset of JavaScript that compiles to plain JavaScript.
- Vercel (Deployment) - A cloud platform for deploying and hosting applications.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.
- A PostgreSQL database set up and running.
- A GitHub account (optional for OAuth integration).
- A Google account (optional for OAuth integration).
- A Vercel account (optional for deployment).
 

## Features

- 🔐 Authentication Methods
  - Email/Password Authentication
  - OAuth Integration (Google, GitHub)
  - Two-Factor Authentication (2FA)

- 👤 User Management
  - User Registration with Email Verification
  - Password Reset Functionality
  - User Profile Management
  - Role-Based Access Control (Admin/User)

- 🛡️ Security Features
  - JWT Session Management
  - Secure Password Hashing
  - Rate Limiting
  - Protected Routes
  - API Route Protection

## Project Structure

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
