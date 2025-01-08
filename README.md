# Historical Artifacts Tracker

## Project Overview

The **Historical Artifacts Tracker** is a web application designed to manage and showcase information about historical artifacts like the Rosetta Stone and the Antikythera Mechanism. Users can explore detailed information, contribute their own artifact entries, and interact with the platform through likes and personalized content.

---

## Purpose

This project demonstrates:

- Efficient problem-solving and challenge tackling.
- Creativity and innovation in design.
- Full-stack development skills.
- Commitment to high-quality, responsive design.

---

## Live URL

[Visit the Live Website](https://historical-artifacts-f4424.web.app)

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

- **JWT-based Authentication** for secure access to private routes.
- Integrated **Google/GitHub Login** options.
- **Search Functionality** for artifact names.
- Optional **Animations** using libraries like Framer Motion.
- **Protected Routes** for adding, updating, or deleting artifacts.

---

## Technology Stack

### Frontend:
- **React**
- **Tailwind CSS** (or alternatives like Chakra UI, Mamba UI, or Flowbite)
- **SweetAlert** for notifications
- **Framer Motion** for optional animations

### Backend:
- **Node.js** with **Express**
- **MongoDB** for the database
- **Firebase Authentication** for the login system

---

## Deployment

### Hosting:
- **Client**: Hosted on Firebase (or Netlify with additional configurations)
- **Server**: Hosted on Vercel

### Guidelines:
- Ensure secure storage of Firebase and MongoDB credentials using environment variables.
- Configure domains for Firebase authentication.

---

## Pages & Routes

### Public Pages:
- **Home Page**
  - Banner/slider with 3 slides.
  - Featured artifacts section displaying the top 6 most-liked artifacts.
  - Additional meaningful sections for user engagement.
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
- Form pre-filled with artifact data for user convenience.
- Update operations that preserve like counts and user information.

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
- Fully responsive design across devices.

### Error Handling:
- Avoid CORS, 404, or 504 errors.
- Ensure no errors occur upon route reloads or navigation.

### Best Practices:
1. Work sequentially, tackling one task at a time.
2. Use AI tools (e.g., ChatGPT) to generate test data or tackle coding challenges.
3. Deploy server and client on the first day to identify and address issues early.

---

## Optional Enhancements

1. Add a spinner for data loading states.
2. Include unique and differentiating features to enhance the user experience.
3. Implement animations or transitions for a smoother UI.

---

## Submission Checklist

1. **Live Site Link**: Provide the live site link.
2. **Backend URL**: Include the server’s deployed URL.
3. **Testing**:
   - Verify all routes, private pages, and functionality.
   - Ensure no errors occur on refresh or navigation.

