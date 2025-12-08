# Requirements Document

## Introduction

This document outlines the requirements for a comprehensive website revamp, transforming the existing "Anyara Hills" property website into "Superior Residence" — a premium freehold landed homes development in Ayer Hitam, Johor. The revamp includes a new brand identity, animated logo introduction, restructured navigation, new content sections, floating action buttons, and removal of certain existing sections.

## Glossary

- **Superior Residence**: The new brand name for the property development website
- **Logo Animation**: An introductory animation sequence where the logo appears centered, then floats to the header position
- **Floater**: A fixed-position button that remains visible in the bottom-right corner during scrolling
- **Prelude Section**: The introductory content section describing the property's philosophy
- **Unveiling Section**: A full-screen animated reveal section with sequential fade-in elements
- **Sanctuary Cards**: Three hoverable cards showcasing property features with reveal animations
- **Header**: The top navigation bar containing logo and menu items
- **Hero Section**: The main landing visual with background image and overlay text

## Requirements

### Requirement 1: Logo Animation and Header Introduction

**User Story:** As a visitor, I want to see an elegant logo animation when the page loads, so that I experience a premium brand introduction.

#### Acceptance Criteria

1. WHEN the page initially loads THEN the System SHALL display only the "Superior Residence" logo centered on screen without showing the header navigation
2. WHEN 1 second has elapsed after page load THEN the System SHALL animate the logo floating upward to the top-center position of the header
3. WHEN the logo animation completes THEN the System SHALL fade in the header navigation items
4. WHEN the header becomes visible THEN the System SHALL display the hero section text with a fade-in animation
5. WHEN displaying the logo THEN the System SHALL render "Superior Residence" text in a premium, elegant typography style

### Requirement 2: Header Navigation Structure

**User Story:** As a visitor, I want clear navigation options, so that I can easily access different sections of the website.

#### Acceptance Criteria

1. WHEN the header is displayed THEN the System SHALL show navigation items in this order: Home | Prelude | Floor Plan | Site Plan | Location | Register | EN/中
2. WHEN a user clicks a navigation item THEN the System SHALL smooth-scroll to the corresponding section
3. WHEN a user clicks the language toggle THEN the System SHALL switch between English and Chinese translations
4. WHEN viewing on mobile devices THEN the System SHALL provide a hamburger menu with all navigation items

### Requirement 3: Hero Section Content

**User Story:** As a visitor, I want to see compelling hero content, so that I understand the property's value proposition immediately.

#### Acceptance Criteria

1. WHEN the hero section is displayed THEN the System SHALL show the text "A sanctuary of heart and homes." as the main headline
2. WHEN the hero section is displayed THEN the System SHALL show "Freehold Landed Homes" as the subtitle
3. WHEN the hero text appears THEN the System SHALL animate the text with a fade-in effect after the logo animation completes

### Requirement 4: Floating Action Buttons

**User Story:** As a visitor, I want quick access to registration and WhatsApp contact, so that I can easily inquire about the property.

#### Acceptance Criteria

1. WHILE scrolling the page THEN the System SHALL display two floating buttons fixed at the bottom-right corner
2. WHEN a user clicks the Form Registration floater THEN the System SHALL scroll to the registration form at the bottom of the website
3. WHEN a user clicks the WhatsApp floater THEN the System SHALL open WhatsApp with a predefined contact number
4. WHEN displaying floaters THEN the System SHALL show recognizable icons for Form and WhatsApp functions

### Requirement 5: Prelude Section Layout and Content

**User Story:** As a visitor, I want to read about the property's philosophy, so that I understand the development's vision and values.

#### Acceptance Criteria

1. WHEN the Prelude section is displayed THEN the System SHALL show text content on the left side occupying approximately 40% width
2. WHEN the Prelude section is displayed THEN the System SHALL show a video/image placeholder on the right side occupying approximately 60% width as a full-height element
3. WHEN the Prelude section is displayed THEN the System SHALL show the title "Prelude" followed by the specified philosophy text about family, nature, feng shui principles, and legacy
4. WHEN the Prelude section is displayed THEN the System SHALL have clear visual separation from adjacent sections without overlapping elements
5. WHEN video content is not yet available THEN the System SHALL display the existing concept image as a placeholder

### Requirement 6: Lush Greens Video Section

**User Story:** As a visitor, I want to see an immersive nature video, so that I can visualize the property's natural surroundings.

#### Acceptance Criteria

1. WHEN the Lush Greens section is displayed THEN the System SHALL show a full-screen video background
2. WHEN the Lush Greens section is displayed THEN the System SHALL overlay the text "Live amidst lush greens - find your sanctuary within"
3. WHEN video file is not yet available THEN the System SHALL use a placeholder image until lushgreens.mp4 is uploaded
4. WHEN the video plays THEN the System SHALL loop the video continuously without audio controls visible

### Requirement 7: Unveiling Animation Section

**User Story:** As a visitor, I want to see an elegant brand reveal, so that I experience the premium nature of the development.

#### Acceptance Criteria

1. WHEN the Unveiling section comes into view THEN the System SHALL display a full-screen background image
2. WHEN the Unveiling section animates THEN the System SHALL fade in "UNVEILING" text first
3. WHEN "UNVEILING" is visible THEN the System SHALL fade in a vertical decorative line
4. WHEN the line is visible THEN the System SHALL fade in "Superior Residence" text with a leaf/logo icon
5. WHEN all elements are visible THEN the System SHALL maintain the composition centered on screen

### Requirement 8: Sanctuary Cards Section

**User Story:** As a visitor, I want to explore property features interactively, so that I can learn about different aspects of the homes.

#### Acceptance Criteria

1. WHEN the Sanctuary Cards section is displayed THEN the System SHALL show the heading "A sanctuary of hearts and homes."
2. WHEN the section is displayed THEN the System SHALL show three cards with titles: "Family Haven", "Heritage Crafted", and "Prosperous Living"
3. WHEN a user hovers over "Family Haven" card THEN the System SHALL reveal Card1.png image and the family-focused description text
4. WHEN a user hovers over "Heritage Crafted" card THEN the System SHALL reveal Card2.png image and the heritage/feng shui description text
5. WHEN a user hovers over "Prosperous Living" card THEN the System SHALL reveal Card3.png image and the prosperity/harmony description text
6. WHEN cards are not hovered THEN the System SHALL display only the card titles in a preview state

### Requirement 9: Location Section Update

**User Story:** As a visitor, I want to understand the property's location context, so that I can assess its convenience and accessibility.

#### Acceptance Criteria

1. WHEN the Location section is displayed THEN the System SHALL show the heading "Nestled in Ayer Hitam, where comfort meets convenience."
2. WHEN the Location section is displayed THEN the System SHALL display the provided location map image as background
3. WHEN the Location section is displayed THEN the System SHALL remove the previous "25-minute drive from KLCC" messaging

### Requirement 10: Google Maps Integration

**User Story:** As a visitor, I want to see the exact location on a map, so that I can understand where the property is situated.

#### Acceptance Criteria

1. WHEN the Map section is displayed THEN the System SHALL show the heading "The charm of Superior Residences, a desired enclave in Ayer Hitam."
2. WHEN the Map section is displayed THEN the System SHALL embed a Google Map centered on "Taman Mekar Emas Ayer Hitam, Jalan Mekar Emas, Taman Mekar Emas, 86100 Ayer Hitam, Johor"
3. WHEN the map is displayed THEN the System SHALL allow users to interact with standard Google Maps controls

### Requirement 11: Section Removal

**User Story:** As a site administrator, I want certain sections removed, so that the website focuses on relevant content.

#### Acceptance Criteria

1. WHEN the website is rendered THEN the System SHALL NOT display the Lifestyle Hub section
2. WHEN the website is rendered THEN the System SHALL NOT display the Gallery section
3. WHEN navigation is rendered THEN the System SHALL NOT include links to removed sections

### Requirement 12: Brand Text Updates

**User Story:** As a visitor, I want consistent branding throughout the site, so that I have a cohesive experience.

#### Acceptance Criteria

1. WHEN any text references the old brand THEN the System SHALL display "Superior Residence" instead of "Anyara Hills"
2. WHEN the footer is displayed THEN the System SHALL show updated contact information and branding for Superior Residence
3. WHEN the registration form is displayed THEN the System SHALL reflect Superior Residence branding

### Requirement 13: Features Section Preservation

**User Story:** As a visitor, I want to see the property features, so that I understand the amenities and security offerings.

#### Acceptance Criteria

1. WHEN the Features section is displayed THEN the System SHALL maintain the existing feature icons and layout
2. WHEN the Features section is displayed THEN the System SHALL update any brand-specific text to Superior Residence

### Requirement 14: Services Section Removal

**User Story:** As a site administrator, I want the services section removed or updated, so that the content matches Superior Residence offerings.

#### Acceptance Criteria

1. WHEN the website is rendered THEN the System SHALL remove or hide the Bespoke Services section (butler, chauffeur, chef)
