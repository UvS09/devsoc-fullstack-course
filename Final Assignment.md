
# Full-Stack Assignment: Smart Habit Tracker


Build a **Smart Habit Tracker** application that allows users to:

- Register and log in (simple auth, no JWT)
- Create, edit, archive, and delete habits
- Mark habits as completed on specific days
- View progress statistics for each habit
- Filter habits (active vs archived)

Tech stack:

- **Frontend:** Flutter  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  

---

# Functional Requirements

## 1. Simple User Authentication (No JWT)

#### `POST /api/auth/register`
Body:  
`{ name, email, password }`

- Hash password with bcrypt  
- Email must be unique  

#### `POST /api/auth/login`
Body:  
`{ email, password }`  

Response:  
```json
{
  "success": true,
  "userId": "<mongo-id>"
}
```

### Frontend behavior

- Store `userId` using `shared_preferences`
- If `userId` exists → skip login and go to habit list
- Logout → clear `userId`

---

## 2. Habit Management (CRUD)

### Habit model fields

- `title` (required)  
- `description` (optional)  
- `frequency`: `"daily"` or `"weekly"`  
- `status`: `"active"` or `"archived"`  
- `owner`: userId  
- `createdAt`, `updatedAt`  

### Endpoints

- `POST /api/habits`  
  - Create a new habit

- `GET /api/habits/:userId`  
  - Get all habits of that user  
  - Support `?status=active` or `?status=archived`

- `PUT /api/habits/:habitId`  
  - Edit an existing habit

- `DELETE /api/habits/:habitId`  
  - Delete a habit (only if it belongs to that user)

---

## 3. Habit Completion Tracking

Create a **HabitLog** model:

- `habitId`  
- `date` (e.g. `"2025-02-10"`)  
- `completed` (boolean)  

Endpoints:

- `POST /api/habits/:habitId/mark`  
  - Body: `{ date }`  
  - Create or update that day’s log

- `GET /api/habits/:habitId/logs`  
  - Return all logs for that habit

---

## 4. Simple Statistics 

- `GET /api/habits/:habitId/stats`  

Return something like:

```json
{
  "totalDaysTracked": 10,
  "daysCompleted": 7,
  "completionRate": 70
}
```
---

# Backend Structure

Required structure:

```
backend/
  app.js
  package.json
  /models
    User.js
    Habit.js
    HabitLog.js
  /routes
    authRoutes.js
    habitRoutes.js
  /middleware
    logger.js
    validateFields.js
  /config
    db.js
  .env.example
  /api-tests   # screenshots or collection export
```

- No controllers folder – put logic in routes.

---

## Middleware Requirements

You must implement and use:

1. **logger.js**
   - Logs method, URL, and time for each request.

2. **validateFields.js**
   - Example: on `POST /api/habits`, check required fields like `title` and `userId`.  
   - If missing, return HTTP 400 with an error message.

3. **Owner check middleware**
   - Before updating/deleting a habit:
     - Load the habit
     - Check `habit.owner === userId`  
     - If not, return 403.

---

# Frontend (Flutter) Requirements

### Screens

1. Splash / Auto-login screen  
2. Login screen  
3. Register screen  
4. Habit list screen  
   - Show all habits for logged-in user  
   - Filter: Active / Archived  
5. Add habit screen  
6. Edit habit screen  
7. Habit details screen  
   - Show habit info  
   - Show logs for that habit  
   - Button: “Mark today as done”  
   - Display stats from `/stats` endpoint  

### Behavior / Tech

- Use `http` or `dio` for API calls  
- Save and read `userId` via `shared_preferences`  
- Show loading indicators  
- Show error messages  
- Clean layout and UI

---

# API Testing

You must test **all** important endpoints using Postman / Thunder Client / REST Client:

- Register  
- Login  
- Create habit  
- Get habits  
- Update habit  
- Delete habit  
- Mark habit  
- Get logs  
- Get stats  

Save **screenshots or exported collection** in a separate `screenshots.md` file:

---

# Submission Guidelines

### Submission Date : 25th December 2025, EOD

## 1. GitHub Repository

Create **one repo**:

```
habit-tracker/
  backend/
  frontend/
```

### Backend folder

As described above.

### Frontend folder

Minimum structure:

```
frontend/
  pubspec.yaml
  /lib
    main.dart
    ...your screens / code...
```

---

## 2. Environment Variables

Include a **placeholder** file:

`backend/.env.example`

For example:

```env
MONGO_URL=your_mongo_url_here
PORT=3000
```

Do **not** upload your real `.env`.

---

## 3. What To Submit

Submit **only your GitHub repository link**.

- Repo must be public. If private, the link should be shared separately. 
- If the link doesn’t open or the repo is empty → **0 marks**.
- **Submit your assignment in the forms link by the due date:**
  **https://forms.gle/k8yTVnbTucFFtuTDA.**
---




