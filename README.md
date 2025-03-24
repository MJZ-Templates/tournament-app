```
┌─────────────────────────────────────────────────────────┐
                 _              _               _
                | |            (_)             (_)
   __ _   _ __  | | __   __ _   _   _ __        _    ___
  / _` | | '__| | |/ /  / _` | | | | '_ \      | |  / _ \
 | (_| | | |    |   <  | (_| | | | | | | |  _  | | | (_) |
  \__,_| |_|    |_|\_\  \__,_| |_| |_| |_| (_) |_|  \___/


└─────────────────────────────────────────────────────────┘
```

### Make a Tournament Service Project
* This project is a tournament web application built with React, allowing users to enter topics, upload images, run tournaments through rounds, and view the results.
* It utilizes Local Storage to save user input and tournament data for persistence.

### 💻 Installation & Setup
1. Check URL and Port
   1. Move your mouse pointer over the [Preview] → [Running URL and Port] button in the menu bar and click the button.
   2. Check that domain is registered on the 3000 port.
   3. If not, register the domain.

2. Check Dependencies.
   1. Check that `node_modules` is installed.
   2. If not, `npm install` into terminal.

3. Run Project
   1. Click [npm run dev] button in the menu bar.
   2. Alternatively, run the `npm run dev` command directly into terminal.

### 📂 Folder Structure
```
.
├── node_modules
├── public
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── ImageUploader.jsx
│   │   └── Match.jsx
│   ├── pages
│   │   ├── HomePage.jsx
│   │   ├── CreateTournamentPage.jsx
│   │   ├── TournamentPage.jsx
│   │   └── ResultsPage.jsx
│   ├── utils
│   │   └── storage.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── README.md
└── package-lock.json

```

### 🔧 Tip & Guide
1. **Get URL and Port**
   - You can get the default URL/Port and add URL/Port on the top right.
   - Move your mouse pointer over the [Preview] → [Running URL and Port] button in the menu bar (no click needed).
2. **Command feature**
   - You can simply run your script using the shortcut icons on the top right.
   - Move your mouse pointer over the [Run] → [Add run command] button in the menu bar (no click needed).
3. **SSH Configuration**
   - This feature is only available for membership users.
   - You can SSH to the Arkain container from the outside via the [Menu]->[SSH Configuration] in menu bar.

### 💬 Support & Documentation
Visit [https://arkain.io](https://arkain.io) to support and learn more about using Arkain.
To watch some usage guides, visit [https://docs.arkain.io](https://docs.arkain.io)
