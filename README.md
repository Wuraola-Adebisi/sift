# Sift

### Shopping without the rabbit hole.

Sift is an AI-powered product research and decision-support tool designed to help people make better purchasing decisions without opening twenty-seven tabs.

Instead of starting with filters, categories, and endless product lists, you describe what you're looking for in your own words. Sift interprets your requirements, identifies what matters, narrows the options, and explains the trade-offs between them.

> Tell Sift what you need. Get a shortlist worth considering.

## Overview

Product research is often less about finding products and more about figuring out which information actually matters.

Sift is built around that problem.

A typical Sift request might look like:

> "I need headphones for commuting. Good noise cancellation matters. Under $400. I don't care about gaming."

The intended Sift workflow is:

1. Understand the request
2. Extract the important requirements
3. Identify priorities and constraints
4. Research and compare relevant products
5. Return a focused shortlist
6. Explain why each option fits and what the trade-offs are

The goal is not to give users more options.

It is to give them fewer, better-considered options.

## Current MVP

The current version is a frontend MVP and does not yet connect to a live AI model or product-search API.

Instead, Sift currently uses a deterministic local research engine and curated demo data to model the intended product experience.

This allows the interface and decision-making workflow to be developed before connecting the production AI research layer.

The eventual AI layer is intended to handle:

- Natural-language requirement extraction
- Preference and constraint interpretation
- Product attribute extraction
- Requirement-to-product matching
- Comparison and trade-off analysis
- Recommendation reasoning
- Research synthesis

The current implementation should therefore be understood as a functional product prototype rather than a live shopping research service.

## Features

### Natural-language research

Users can describe what they need conversationally instead of filling out a long product filter form.

### Requirement extraction

Sift turns an unstructured request into useful research criteria such as:

- Budget
- Use case
- Primary priorities
- Secondary preferences
- Constraints
- Nice-to-haves

### Focused shortlists

Rather than returning a large catalogue, Sift presents a small number of options worth considering.

### Recommendation reasoning

Each result is accompanied by an explanation of why it fits the request and what the user gives up by choosing it.

### Trade-off comparison

Sift surfaces meaningful differences between products instead of simply displaying specifications.

### Example research sessions

The product includes example scenarios across different categories, demonstrating how the same research workflow can be applied to different types of purchases.

## Product categories

Sift is intentionally not limited to technology products.

The concept can be applied to a wide range of purchases, including:

- Jewelry
- Headphones
- Cameras
- Laptops
- Running shoes
- Home products
- Travel gear
- Gifts
- And other considered purchases

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Vercel

## Project Structure

```text
src/
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
│
├── data/
│   └── ...
│
├── pages/
│   ├── Home.tsx
│   ├── HowItWorks.tsx
│   ├── Examples.tsx
│   ├── Research.tsx
│   ├── About.tsx
│   ├── Privacy.tsx
│   └── Terms.tsx
│
├── App.tsx
├── index.css
└── main.tsx