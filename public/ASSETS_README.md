# New Creation - Assets Documentation

This document lists all the icons and images available in the New Creation project.

## Icons

### Main Icons (`/icons/`)
- `logo.svg` - Main application logo
- `user.svg` - User icon (outline)
- `user-fill.svg` - User icon (filled)
- `upload.svg` - Upload icon
- `star.svg` - Star rating icon
- `search-fill.svg` - Search icon (filled)
- `logout.svg` - Logout icon
- `heart.svg` - Heart/like icon
- `home.svg` - Home icon
- `clock.svg` - Clock/time icon
- `calendar.svg` - Calendar icon
- `book.svg` - Book icon
- `download.svg` - Download icon

### Admin Icons (`/icons/admin/`)
- `logo1.svg` - Admin logo variant 1
- `logo2.svg` - Admin logo variant 2
- `users.svg` - Users management icon
- `user.svg` - User management icon
- `trash.svg` - Delete/trash icon
- `logo.svg` - Admin logo
- `home.svg` - Admin home icon
- `edit.svg` - Edit icon
- `bookmark.svg` - Bookmark icon
- `book.svg` - Book management icon

### Book Icons (`/icons/books/`)
- `library.svg` - Library icon
- `reading.svg` - Reading icon
- `favorite.svg` - Favorite icon (outline)
- `favorite-fill.svg` - Favorite icon (filled)

### UI Icons (`/icons/ui/`)
- `plus.svg` - Plus/add icon
- `close.svg` - Close/X icon
- `check.svg` - Check mark icon
- `arrow-right.svg` - Right arrow icon
- `arrow-left.svg` - Left arrow icon
- `menu.svg` - Menu/hamburger icon
- `filter.svg` - Filter icon
- `sort.svg` - Sort icon
- `eye.svg` - Eye/view icon
- `eye-off.svg` - Eye-off/hide icon
- `settings.svg` - Settings icon

## Images

### Main Images (`/images/`)
- `auth-illustration1.jpg` - Authentication page illustration
- `auth-illustration.png` - Authentication page illustration (PNG)
- `pattern.webp` - Background pattern
- Various book cover images (JPG files)

### Backgrounds (`/images/backgrounds/`)
- `hero-pattern.svg` - Subtle background pattern for hero sections

### Illustrations (`/images/illustrations/`)
- `reading-bible.svg` - Christian-themed illustration of Bible reading
- `library-hero.svg` - Library hero illustration for main page
- `empty-state.svg` - Empty state illustration
- `loading.svg` - Loading animation

## Usage Guidelines

### Icons
- All icons are SVG format for scalability
- Use `currentColor` for dynamic color theming
- Standard size is 24x24px, but can be scaled as needed
- Icons support stroke-based styling

### Images
- Use WebP format when possible for better performance
- SVG illustrations are preferred for scalability
- Background patterns are designed to be tiled seamlessly

### Color Scheme
- Primary: `#F59E0B` (Amber/Gold)
- Secondary: `#1E293B` (Dark Navy)
- Background: `#F8FAFC` (Light Gray)
- Text: `#1E293B` (Dark)

## File Organization
```
public/
├── icons/
│   ├── admin/
│   ├── books/
│   └── ui/
├── images/
│   ├── backgrounds/
│   └── illustrations/
└── fonts/
```

## Adding New Assets

1. Place icons in appropriate subdirectory under `/icons/`
2. Place images in appropriate subdirectory under `/images/`
3. Update this documentation when adding new assets
4. Use consistent naming conventions (kebab-case)
5. Optimize SVG files for web use
6. Ensure proper accessibility attributes for icons 