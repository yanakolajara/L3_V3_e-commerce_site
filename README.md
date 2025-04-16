# Project 2: Reverb Clone — Full Stack E-Commerce App

## Overview
In this 5-week project, you'll build a full-stack e-commerce platform inspired by Reverb.com. The goal is to deepen your experience working with React on the frontend and Java (Spring Boot) on the backend. You'll design, develop, and deploy a production-ready application — complete with user authentication, product listings, a shopping cart, and a simulated checkout flow.

> **Note:** If you are tackling the Java backend, and dont know how to get started, reference the materials provided in the curriculumn and also check out the java getting started readme!
> **Note:** If you're not yet ready to use Java, the Express backend option is available. Confirm with your instructor which path you're taking.

---

## Project Breakdown
This project is structured into weekly milestones. You will submit a PR at the end of each major phase and receive code review feedback from your instructor.

### Weekly Breakdown
- **Week 1:** ERD + wireframes, scaffold React + backend app, deploy a blank page
- **Week 2:** Implement authentication system (signup/login + navbar)
- **Week 3:** User profile page, create + display product listings
- **Week 4:** Edit/delete listings, add cart functionality
- **Week 5:** Simulate checkout, polish, and present

---

## Tech Stack
- **Frontend:** React, React Router, CSS (NO BOOTSTRAP, TAILWIND ETC)
- **Backend:** Java with Spring Boot (or Express.js)
- **Database:** PostgreSQL (via JPA/Hibernate or PGpromise for Express)
- **Deployment:** Vercel (frontend), Render or Railway (backend)

---

## Suggested Folder Structure
```
client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── index.jsx

server/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── Application.java
```

---

## Core Features to Implement
- User signup & login with session/token persistence
- Listings CRUD (only owners can update/delete their products)
- Dynamic navbar: changes based on auth state
- Add-to-cart & remove-from-cart functionality
- Simulate checkout with order confirmation screen

---

## PR Expectations
- Submit one PR per major milestone (minimum 5 total)
- Each PR should:
  - Be reviewedwith instructor
  - Have standup form filled out (fill it out as you go!)
  - Include a link to deployed frontend + backend
  - Contain a meaningful description of the work done
  - Follow good git hygiene (small, descriptive commits)

---

## UI Expectations
- Mobile-responsive layout
- Clean UI with intuitive flows (React Router)
- Clear error handling for login, signup, and forms

---

## Stretch Goal Ideas
- Cloud image upload (e.g., Cloudinary or Firebase)
- Real payment integration (e.g., Stripe test mode)
- Save order history in user profile
- Product search and filtering by category or keyword

---

## Final Submission Checklist
- [ ] App is deployed (frontend + backend)
- [ ] All core features implemented and working
- [ ] At least 5 PRs submitted and reviewed
- [ ] README includes screenshots, setup, and demo link

---

## Tips for Success
- Start with a clear ERD and user flow — update them weekly
- Plan features before coding them
- Ask for help during stand-ups if stuck
- Build iteratively — don’t wait until the last week to polish

---

## Instructor Notes
This is your opportunity to:
- Demonstrate full-stack engineering skills
- Build habits of shipping, reviewing, and refining code
- Craft something real that you can show to future employers

Good luck and have fun!