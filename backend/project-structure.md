```sh
backend/
│
├── .firebase/
├── public/
│   ├── index.html
│   ├── FITA_Logo.png
│   └── manifest.json
├── src/
│   ├── Components/
│   │   ├── Action Center/
│   │   ├── AdminManagement/
│   │   │   ├── Role Management/
│   │   │   │   ├── # application main files
│   │   │   ├── Admin User Management/
│   │   │   │   ├── # base user creation files
│   │   │   ├── Trainer User Management/
│   │   │   │   ├── # base trainer user creation files
│   │   ├── AllStudents/
│   │   ├── AppEnquiries/
│   │   ├── Batch Management/
│   │   ├── CommonFunctions/
│   │   ├── Content Management/
│   │   ├── Course Progress/
│   │   ├── Dashboard/
│   │   ├── Elements/
│   │   └── Formik/
│   │   └── Header/
│   │   └── HR Student Placement/
│   │   └── LeftNavbar/
│   │   └── LoginScreen/
│   │   └── Logs/
│   │   └── MainComponent/
│   │   └── Reports/
│   │   └── RightSideScreens/
│   │   └── Sample/
│   │   └── StudentManagement/
│   │   └── SubSections/
│   │   │   ├── # sub sections of all base files
│   │   └── UI_Modal/
│   ├── functions/
│   │   ├── admin/
│   │   └── config/
│   │   └── Error/
│   │   └── storage/
│   │   └── Student/
│   │   └── auth.ts
│   │   └── commonHelper.ts
│   │   └── crud.tsx
│   ├── Redux/
│   │   ├── Reducers/
│   │   └── Types/
│   │   └── Store.tsx
│   ├── Services/
│   │   ├── BulkMailDeletion.tsx
│   │   └── CommonFunctions.tsx
│   │   └── PrivateRoute.tsx
│   │   └── Supabase.tsx
│   ├── utils/
│   │   ├── config/
│   │   ├── functions/
│   │   └── json/
│   ├── Assets/
│   │   ├── dashboard/
│   ├── services/
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

### Components

## AdminManagement

Maintains the base role and user creation Components

### Role Management/
- Role creation under a role name by giving an access to specific tabs.

### User Management/
- User creation for login access and differentiated as a admin user, trainer user.

## SubSections

Page changes based on the sub actions when user clicks

## Configuration

Configuration Components for table level action creation and displaying existing actions

## Database

- handles the database creation and its further Submenu
- handles the database CRUD's and Components

## helper

- parrent Components holds all icons
- custom 404 pages
- related fields selector Components

## Submenu

- holds all the Submenu for 
    - Content Management
    - Action Center
    - HR Modules

## tables

- Common Table for all those current datas in DB can access through this tables.

## action

- handles the redux action and action types

## api 

- common parent code for api handling

## reducers

- redux reducers for users based on login

