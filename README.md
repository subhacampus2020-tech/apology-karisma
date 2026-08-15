# **Apology Karisma** 💖✨

An interactive, aesthetic, and emotionally engaging **“Say Sorry” interactive website created for Karisma (Khushu, Khushbu, Khushi maa)** built with **React + Tailwind CSS**.

This application turns an apology into a memorable romantic experience combining personalized storytelling, memory photos, video playback, background romantic music, and playful interactions.

---

## 🌟 **Features**

* 💖 **Personalized for Karisma (Khushu)**: Tailored memory slides and Odia/Hinglish romantic messages.
* 🎵 **Background Music Player**: Floating audio toggle playing **"Tum Ho Toh"** (Movie: *Saiyaara*) across the entire experience.
* 🎥 **Video & Photo Slides**: Supports both high-quality photos (`Karisma-1`, `mehendi-sp`, `chudi-with-me`, `marriage-SP`, `mix-Karisma`) and looping video playback (`Happy-karisma.mp4`).
* 🎈 **Live Animated Background**: Floating heart, candy, teddy, and sparkle emojis.
* 😈 **Playful Runaway "No" Button**: The "No" button playfully dodges cursor/taps 5 times before disappearing, leaving only "Yes ❤️".
* 🎉 **Celebration Ending**: Animated victory screen with celebration visuals and replay functionality.
* 📱 **Fully Responsive**: Crafted for perfect viewing on mobile devices and desktop.

---

## 📖 **User Flow**

1. **Header & Navbar**: Personalized brand for `Karisma 💗` with love subtext.
2. **Story Cards**:
   * **Slide 1**: Intro message with `Karisma-1.jpeg`.
   * **Slide 2**: Mehendi memory card with hidden 'S'.
   * **Slide 3**: Red Bangles romantic card (`chudi-with-me.jpeg`).
   * **Slide 4**: Video playback card playing `Happy-karisma.mp4`.
   * **Slide 5**: Marriage memory card (`marriage-SP.jpeg`).
   * **Slide 6**: Commitment & US photo (`mix-Karisma.jpeg`).
3. **Interactive Apology Question**:
   * *"Abe twww PLEASE Au Ragani na PLEASEEEEE!, Mo Khushi maa? 🥺"*
4. **"No" Button Logic**: Moves randomly on click/hover for 5 attempts, then gracefully vanishes.
5. **"Yes" Celebration Screen**:
   * *"Mujhe pata tha tum zyada der naraz nahi reh sakti, Karisma! 💖"*
   * *"Ab bas smiles hi smiles, Mo Khushbu 🎉❤️"*

---

## 📂 **Project Structure**

```
apology-karisma/
│
├── public/
│   ├── song.mp3               # "Tum Ho Toh" (Saiyaara) background audio
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── images/            # Photos & Happy-karisma.mp4 video file
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Header navigation
│   │   ├── Frame.jsx           # Photo/Video memory card player
│   │   ├── BackgroundMusic.jsx # Floating music toggle player
│   │   ├── Question.jsx        # Interactive runaway No button card
│   │   ├── FinalScreen.jsx     # Celebration & replay screen
│   │   └── FloatingElements.jsx # Animated floating emojis
│   │
│   ├── data/
│   │   └── story.js            # Story data, texts & media imports
│   │
│   ├── App.jsx                 # Main application layout
│   ├── main.jsx
│   └── index.css               # Tailwind & floating keyframe animations
│
├── index.html
├── package.json
└── README.md
```

---

## 🚀 **How to Run Locally**

### **1. Prerequisites**
* Node.js ≥ 18
* npm

### **2. Installation**
```bash
git clone https://github.com/subhacampus2020-tech/Interactive-apology-website.git
cd Interactive-apology-website
npm install
```

### **3. Start Development Server**
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### **4. Build for Production**
```bash
npm run build
```

---

## 🎨 **Design System & Aesthetics**

* **Color Palette**: Apple-inspired pastel gradients (`from-pink-200 via-purple-200 to-pink-300`).
* **Card Design**: Soft glassmorphism (`backdrop-blur-xl bg-white/90`) with smooth rounded corners (`rounded-[3rem]`).
* **Typography**: Clean modern typography with playful emoji micro-interactions.
