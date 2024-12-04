```sh
frontend/
│
├── .firebase/
├── public/
│   ├── index.html
│   ├── FITA_Logo.png
│   └── manifest.json
├── src/
│   ├── Components/
│   │   ├── FreeCourseVideo/
│   │   ├── OtpScreen/
│   │   ├── Resources/
│   │   ├── TrainerModule/
│   │   ├── applyJob/
│   │   ├── beforeAssessment/
│   │   ├── courseMaterials/
│   │   ├── coursepage/
│   │   ├── elements/
│   │   ├── freeCourse/
│   │   └── homepage/
│   │   └── latestjob/
│   │   └── layout/
│   │   └── mobileNumber/
│   │   └── myProfile/
│   │   └── notification/
│   │   └── searchCourse/
│   │   └── signingoogle/
│   │   └── signupForm/
│   │   └── Protected.tsx
│   ├── functions/
│   │   ├── Error/
│   │   └── Storage/
│   │   └── Student/
│   │   └── config/
│   │   └── auth.ts
│   │   └── commonHelper.ts
│   │   └── crud.tsx
│   ├── Redux/
│   │   ├── store/
│   │   └── useReducer.tsx
│   ├── Services/
│   │   ├── CommonFunctions.tsx
│   │   └── OTP.tsx
│   │   └── Supabase.tsx
│   │   └── email.tsx
│   ├── images/
│   ├── content/
│   ├── App.css
│   ├── App.jsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

Below you'll find descriptions for each file from the above diagram.

# src

## Database

- handles the database creation and its further Submenu
- handles the database CRUD's and Components

## helper

- parrent Components holds all icons
- custom 404 pages
- related fields selector Components

## action

- handles the redux action and action types

## api 

- common parent code for api handling

## reducers

- redux reducers for users based on login

