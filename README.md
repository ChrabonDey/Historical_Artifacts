# Historical Artifacts Tracker

## Project Overview

The **Historical Artifacts Tracker** is a web application designed to manage and showcase information about historical artifacts such as the Rosetta Stone and the Antikythera Mechanism. Users can explore detailed information, contribute their own artifact entries, and interact with the platform through likes and personalized content.

---

## Purpose

This project demonstrates:

- Efficient problem-solving and challenge tackling
- Creativity and innovation in design
- Full-stack development skills
- Commitment to high-quality, responsive design

---

## Live URL

[Visit the Live Website](`https://historical-artifacts-f4424.web.app/`)
---

## Key Features

### Core Functionality:

1. **User Interaction**
   - View details of various artifacts.
   - Like artifacts and track personal contributions.

2. **Artifact Management**
   - Add artifacts with detailed attributes such as discovery date, location, and more.
   - Update and delete user-added artifacts securely.

3. **Dynamic Content**
   - Display top-liked artifacts on the homepage.
   - Dynamic page titles and meaningful toast notifications.

4. **Responsive Design**
   - Fully optimized for mobile, tablet, and desktop devices.

### Additional Features:

- JWT-based authentication for secure access to private routes.
- Integrated Google/GitHub login options.
- Search functionality for artifact names.
- Animations using libraries like Framer Motion (optional).
- Protected routes for adding, updating, or deleting artifacts.

---

## Technology Stack

### Frontend:
- **React**
- **Tailwind CSS** (or alternatives like Chakra UI, Mamba UI, or Flowbite)
- **SweetAlert** for notifications
- **Framer Motion** (optional animations)

### Backend:
- **Node.js** with **Express**
- **MongoDB** for database
- **Firebase Authentication** for login system

---

## Deployment

### Hosting:
- **Client**: Hosted on Firebase (or Netlify with additional configurations).
- **Server**: Hosted on Vercel.

### Guidelines:
- Ensure secure storage of Firebase and MongoDB credentials using environment variables.
- Configure domains for Firebase authentication.

---

## Pages & Routes

### Public Pages:
- **Home Page**
  - Banner/Slider with 3 slides.
  - Featured artifacts section with top 6 most-liked artifacts.
  - Additional meaningful sections.
- **Login & Register Pages**
  - Email/password-based authentication with password requirements.
  - Google or GitHub login options.

### Private Routes:
- **Add Artifact**: Form for adding new artifacts.
- **My Artifacts**: View, update, or delete personal entries.
- **Liked Artifacts**: View artifacts liked by the user.
- **Artifact Details**: View comprehensive artifact information and toggle likes.

---

## CRUD Operations

### Add Artifact:
- Form with fields for artifact details.
- Success notifications upon submission.

### Update Artifact:
- Form pre-filled with artifact data.
- Update operations preserving like counts and user info.

### Delete Artifact:
- Confirmation prompt before deletion.
- Redirection to the All Artifacts page upon success.

---

## Development Guidelines

### Commit Requirements:
- **Frontend**: At least 15 meaningful commits.
- **Backend**: At least 8 meaningful commits.

### UI/UX:
- Eye-pleasing color contrast.
- Proper alignment and spacing.
- Fully responsive design.

### Error Handling:
- Avoid CORS, 404, or 504 errors.
- No errors upon reloading routes.

### Best Practices:
1. Work sequentially, tackling one task at a time.
2. Use ChatGPT for generating test data or tackling coding challenges.
3. Deploy server and client on the first day to identify issues early.

---

## Optional Enhancements

1. Add a spinner for data loading states.
2. Include unique, differentiating features.
3. Implement animations or transitions for enhanced user experience.

---

## Submission Checklist

1. **Live Site Link**: Add the live site link.


3. **Testing**:
   - Verify all routes, private pages, and functionality.
   - Ensure no errors occur on refresh or navigation.

---

Enjoy showcasing your creativity and skills with this exciting project!

