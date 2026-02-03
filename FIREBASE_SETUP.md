# Firebase Integration for Contact Form

This project now includes Firebase integration for storing and managing contact form submissions.

## 📋 Features

✅ **Store Submissions in Firestore** - All contact form submissions are automatically saved to Firebase Firestore  
✅ **Send Automated Emails** - Uses EmailJS to send confirmation emails to submitters  
✅ **Admin Dashboard** - View all submissions in one place  
✅ **Delete Submissions** - Manage submissions from the admin panel  
✅ **Email Replies** - Direct reply button in the admin dashboard  

## 🔧 Setup Instructions

### 1. Firebase Configuration (Already Done ✅)
The Firebase config is already set up in your Contact.jsx component with:
```javascript
{
  apiKey: "AIzaSyCSOdWZA5K2lGkk2cAeAkFPlOoxotD__S8",
  authDomain: "signuplogin-4664a.firebaseapp.com",
  projectId: "signuplogin-4664a",
  storageBucket: "signuplogin-4664a.firebasestorage.app",
  messagingSenderId: "598006304340",
  appId: "1:598006304340:web:f693c315e9a07c1b69a7c1",
  measurementId: "G-7Z8H3E3W5T"
}
```

### 2. Firestore Database Setup
You need to create a Firestore database in your Firebase project:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project "signuplogin-4664a"
3. Click on **Firestore Database** in the left menu
4. Click **Create Database**
5. Choose **Start in production mode**
6. Select your preferred location (usually closer to your users)
7. Click **Create**

### 3. Firestore Security Rules
Update your Firestore rules to allow submissions:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to create contact submissions
    match /contact_submissions/{document=**} {
      allow create;
      allow read, write: if request.auth != null;
    }
  }
}
```

**Steps:**
1. In Firestore, go to **Rules** tab
2. Replace the existing rules with the code above
3. Click **Publish**

### 4. EmailJS Setup (Already Done ✅)
Your EmailJS configuration is already set up with:
- Service ID: `service_2o6bsqg`
- Template ID: `template_9mqhamk`
- Public Key: `bW_88r4ZKcZ4a-_HV`

### 5. Admin Dashboard (Optional)
To view submissions, you can add the AdminDashboard component to your app:

```javascript
import AdminDashboard from './components/AdminDashboard';

// Add to your routing or a protected route
<AdminDashboard />
```

## 📝 How It Works

### When a user submits the form:

1. **Form Validation** - Checks if all fields are filled
2. **EmailJS Send** - Sends automated email to submitter
3. **Firebase Save** - Stores submission data in Firestore with timestamp
4. **Confirmation** - Shows success message to user
5. **Form Reset** - Clears the form for next submission

### Data Stored in Firestore:
```javascript
{
  name: "User Name",
  email: "user@example.com",
  message: "User's message",
  timestamp: serverTimestamp(),
  createdAt: "2/3/2026, 10:30:45 PM",
  isRead: false
}
```

## 🔍 Viewing Submissions

### Option 1: Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Click **Firestore Database**
4. You'll see `contact_submissions` collection with all submissions

### Option 2: AdminDashboard Component
Access the admin dashboard component you created to view submissions with a nice UI.

## 📧 Customization

### Change Email Recipient
In [Contact.jsx](src/components/Contact.jsx), line with `to_email`:
```javascript
to_email: "shreyasmahajan0306@gmail.com", // Change this to your email
```

### Custom Firestore Collection Name
If you want to use a different collection name, change:
```javascript
collection(db, "contact_submissions") // Change to your collection name
```

## 🚀 Deployment

The Firebase integration will work automatically on deployment:
1. Ensure Firebase config is included
2. Make sure Firestore database exists and rules are updated
3. EmailJS credentials are included in your component
4. Deploy as usual

## ⚠️ Security Notes

⚠️ **API Keys are exposed in frontend code** - This is acceptable for Firebase because:
- We use Firestore Security Rules to restrict access
- API keys are restricted to specific domains in Firebase Console

To restrict your API key:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. Go to APIs & Services → Credentials
4. Click on your API key
5. Under "Application restrictions", select "Website"
6. Add your domain under "Website restrictions"

## 🐛 Troubleshooting

### Submissions not saving?
- Check Firestore rules are correctly updated
- Open browser console (F12) and look for errors
- Verify Firestore database exists

### Emails not sending?
- Check EmailJS service ID, template ID, and public key
- Verify email template in EmailJS dashboard exists
- Check console for EmailJS errors

### Firebase not initialized?
- Ensure firebase package is installed: `pnpm install firebase`
- Check config values are correct

## 📦 Dependencies

Make sure these packages are installed:
```bash
pnpm install firebase @emailjs/browser
```

## 📞 Support

For Firebase issues: https://firebase.google.com/docs  
For EmailJS issues: https://www.emailjs.com/docs  

---

**Last Updated:** February 3, 2026
