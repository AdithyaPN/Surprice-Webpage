# 💕 Romantic Surprise Website

A beautiful, emotional single-page website to surprise your special someone.

## ✨ Features

- **Hero Section** - Full-screen gradient background with animated title
- **Countdown Timer** - Counts down to your special date (wedding, anniversary, etc.)
- **Heartfelt Message** - Section for your personal love letter
- **Photo Gallery** - Grid layout with hover effects and lightbox
- **Our Story Timeline** - Beautiful milestone timeline of your relationship
- **Surprise Button** - Reveals a hidden message with heart burst animation
- **Background Music** - Play/pause control for romantic instrumental
- **Floating Hearts** - Subtle heart animations throughout the page
- **Sparkle Effects** - Click anywhere for sparkle effects
- **Fully Responsive** - Works beautifully on mobile devices

## 🛠️ How to Customize

### 1. Edit the Special Date (Countdown Timer)
Open `script.js` and find this line at the top:
```javascript
const SPECIAL_DATE = new Date('December 25, 2026 00:00:00');
```
Change it to your wedding day or special date.

### 2. Edit Your Names
In `index.html`, find the footer section:
```html
<span class="name">Your Name</span>
<span class="ampersand">&</span>
<span class="name">Their Name</span>
```

### 3. Edit the Heartfelt Message
In `index.html`, find the `message-section` and edit the paragraphs:
```html
<p class="message-text">
    <!-- Your message here -->
</p>
```

### 4. Replace Photos
In `index.html`, find the `gallery-grid` section and replace the image URLs:
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Description">
```
You can use local images by placing them in the same folder:
```html
<img src="photo1.jpg" alt="Our First Date">
```

### 5. Edit Timeline Milestones
In `index.html`, find the `timeline` section and edit each milestone:
```html
<div class="timeline-item">
    <div class="timeline-date">Your Date</div>
    <div class="timeline-content">
        <h3>Your Milestone Title</h3>
        <p>Your milestone description...</p>
    </div>
</div>
```

### 6. Edit the Surprise Message
In `index.html`, find the `surprise-content` section and edit the promise text.

### 7. Add Your Own Music
Replace the audio source in `index.html`:
```html
<audio id="bgMusic" loop>
    <source src="your-romantic-song.mp3" type="audio/mpeg">
</audio>
```
Place your MP3 file in the same folder as the HTML file.

## 🎨 Customizing Colors

Open `styles.css` and edit the CSS variables at the top:
```css
:root {
    --romantic-pink: #ff6b9d;
    --romantic-rose: #c44569;
    --gold: #d4af37;
    /* ... other colors */
}
```

## 📱 Viewing the Website

Simply open `index.html` in any web browser. No server required!

For the best experience:
1. Use a modern browser (Chrome, Firefox, Safari, Edge)
2. Allow audio playback when prompted
3. View on both desktop and mobile to see responsive design

## 💝 Tips for Maximum Impact

1. **Replace all placeholder images** with real photos of you two
2. **Write from the heart** - personal messages are the most touching
3. **Choose meaningful dates** for the timeline
4. **Select a special song** that means something to both of you
5. **Test the countdown** to make sure it's counting to the right date
6. **Preview on mobile** since they might view it on their phone

## 📁 File Structure

```
romantic-surprise/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Animations and interactivity
└── README.md       # This file
```

## ❤️ Made with Love

This website was created to help you express your love in a beautiful, memorable way. Wishing you both a lifetime of happiness!
