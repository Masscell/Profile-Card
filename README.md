# Profile Card

A modern, responsive profile card component built with HTML, CSS, and JavaScript. Features a clean design with dark mode support, social media links, and a real-time epoch timestamp display.

## Features

- **Responsive Design** - Works seamlessly on mobile and desktop
- **Dark Mode Support** - Automatically adapts to system preferences
- **Live Epoch Timer** - Displays current time in milliseconds with smooth updates
- **Social Links** - Quick access to social media profiles
- **Accessible** - Built with semantic HTML and ARIA labels
- **Customizable** - Easy to modify colors, fonts, and content

## Project Structure

```
.
├── index.html          # Main HTML file with card markup
├── style.css           # Styles including responsive design and dark mode
├── app.js              # JavaScript for epoch time functionality
├── profile.jpg         # Profile picture (add your own)
└── README.md          # This file
```

## Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Steps

1. **Clone the repository** (or download the files):
   ```bash
   git clone https://github.com/yourusername/profile-card.git
   cd profile-card
   ```

2. **Add your profile picture**:
   - Replace or add a `profile.jpg` file in the project directory
   - Ensure the image is square (88x88px or larger) for best results

3. **Edit the profile content** (optional):
   - Open `index.html` in a text editor
   - Update the name, role, bio, and social links with your information

## Running Locally

### Option 1: Direct in Browser (Easiest)
Simply double-click the `index.html` file and it will open in your default browser.

### Option 2: Using a Local Server (Recommended)

Using Python 3:
```bash
python -m http.server 8000
```

Using Node.js with http-server:
```bash
# Install globally (first time only)
npm install -g http-server

# Run the server
http-server
```

Using VS Code Live Server:
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` and select "Open with Live Server"

Then visit `http://localhost:8000` (or the port shown in your terminal) in your browser.

## Customization

### Update Profile Information
Edit the following in `index.html`:
- **Name**: Change `<h2 data-testid="test-user-name">` text
- **Role/Location**: Update the `.role` paragraph
- **Bio**: Modify the bio text in the `<p data-testid="test-user-bio">`
- **Social Links**: Update the `href` attributes in the social media links

### Customize Colors
Edit color variables in `style.css` under the `:root` selector:
```css
:root {
  --color-background-primary: #ffffff;
  --color-text-primary: #1a1a18;
  /* ... other colors */
}
```

### Profile Picture
- Replace `profile.jpg` with your own image
- Recommended size: 88x88px or larger (square aspect ratio)
- Supported formats: JPG, PNG, WebP

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari, Chrome Mobile

## File Descriptions

### `index.html`
The main HTML file containing:
- Semantic markup with ARIA labels
- Profile card structure with sections for bio, social links, interests, and dislikes
- Real-time epoch time display element

### `style.css`
Complete styling including:
- CSS custom properties for theming
- Responsive grid layout (mobile and desktop)
- Dark mode media query
- Animations (pulse effect on live indicator)
- Focus states for accessibility

### `app.js`
JavaScript functionality:
- Updates epoch time every second
- Formats timestamp with proper datetime attributes
- Uses IIFE pattern for scope isolation

## Contributing

Feel free to fork this project and submit pull requests with improvements!

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue on GitHub.

---

