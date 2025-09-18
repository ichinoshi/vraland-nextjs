# Development Images Structure

This document outlines the required image structure for the VRA Land development pages.

## Directory Structure

```
public/images/developments/
├── hero-bg.jpg (Main developments page hero background)
├── fairfield/
│   ├── hero.jpg (Main hero image)
│   ├── exterior-1.jpg
│   ├── interior-1.jpg
│   ├── interior-2.jpg
│   ├── amenities-1.jpg
│   ├── masterplan.jpg
│   └── concept-1.jpg
├── sotera/
│   ├── hero.jpg
│   ├── township-aerial.jpg
│   ├── sotera-towers.jpg
│   ├── sotera-hotel.jpg
│   ├── sotera-mall.jpg
│   ├── sotera-restaurant.jpg
│   ├── sotera-hills.jpg
│   └── concept-mixed-use.jpg
└── lazule/
    ├── hero.jpg
    ├── beach-resort.jpg
    ├── villa-interior.jpg
    ├── golf-course.jpg
    ├── spa-wellness.jpg
    ├── concept-tropical.jpg
    └── dining-oceanview.jpg
```

## Image Requirements

### General Guidelines
- **Format**: JPG or WebP preferred for performance
- **Quality**: High resolution (minimum 1920x1080 for hero images)
- **Aspect Ratios**:
  - Hero images: 16:9 or 21:9
  - Gallery images: 4:3 or 16:9
  - Portrait images: 3:4

### Specific Image Types

#### Hero Images
- **Size**: 2560x1440px or higher
- **Content**: Stunning exterior or aerial view of the development
- **Style**: Professional architectural photography

#### Exterior Images
- **Content**: Building facades, landscaping, entrance areas
- **Lighting**: Golden hour or blue hour preferred
- **Composition**: Show scale and context

#### Interior Images
- **Content**: Living spaces, kitchens, bedrooms, bathrooms
- **Style**: Staged and professionally lit
- **Focus**: Highlight premium finishes and space flow

#### Amenities Images
- **Content**: Pools, gyms, lounges, recreational facilities
- **Style**: Lifestyle photography showing usage
- **Quality**: Bright, inviting, and aspirational

#### Master Plan Images
- **Content**: Site plans, aerial views, development layout
- **Format**: Can include architectural drawings or 3D renderings
- **Clarity**: Must be easily readable and professional

#### Concept Images
- **Content**: Architectural concepts, design philosophy visualization
- **Style**: Can include sketches, 3D renders, or mood boards
- **Purpose**: Communicate design vision and principles

## Fallback Images

If specific images are not available, the system will gracefully fallback to:
1. Hero image for missing gallery images
2. First available image in the category
3. Placeholder architectural imagery

## Adding New Developments

When adding new developments:

1. Create a new folder in `/public/images/developments/[development-id]/`
2. Add the required images following the naming convention
3. Update the `developmentsData.ts` file with the new development data
4. Ensure all image paths match the data structure

## Performance Considerations

- Use Next.js Image optimization
- Implement lazy loading for gallery images
- Consider WebP format for better compression
- Optimize images before upload (recommended tools: TinyPNG, ImageOptim)

## Image Credits

Ensure all images have proper licensing and attribution if required. For stock photography, maintain a record of licenses and usage rights.
