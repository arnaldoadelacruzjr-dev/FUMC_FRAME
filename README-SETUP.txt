FUMC SOH FRAME CREATOR - DEPLOYMENT NOTES

1. Upload the CONTENTS of this FUMC-FRAME folder to the ROOT of the GitHub repository FUMC_FRAME.
   The root should contain index.html, login.html, dashboard.html, frame.html, newframe.html, view.html,
   and the js/ and css/ folders.

2. GitHub Pages:
   Repository Settings > Pages > Deploy from a branch > main > /(root).

3. Firebase:
   Project: fumc-frame-creator-2026
   Web app config is in js/firebase-config.js.
   Enable Authentication > Email/Password.
   Add the admin account fumcsoh@admin.com in Authentication > Users.
   Add arnaldoadelacruzjr-dev.github.io to Authentication > Settings > Authorized domains.
   Firestore collection: frames.
   Apply the rules in firestore.rules from Firebase Console > Firestore Database > Rules.

4. Cloudinary:
   Cloud name: dgpdrr83v
   Unsigned upload preset: frame_upload

5. Test:
   - Open /FUMC_FRAME/ (should redirect to login.html)
   - Sign in to dashboard
   - Add a frame
   - Open View from dashboard
   - Copy the public frame link and test it in a private/incognito browser.

SECURITY:
- Never use public Firestore write rules such as allow read, write: if true.
- The public frame editor only needs read access to frames.
- Keep the admin password private.
