# Implementation Plan

- [x] 1. Set up Animation Context and Logo Intro Foundation





  - [x] 1.1 Create AnimationContext with state management for intro sequence


    - Create `AnimationContext.tsx` with introComplete, logoInHeader, showNavItems, showHeroText states
    - Export AnimationProvider and useAnimation hook
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  - [x] 1.2 Create LogoIntro component with centered logo display


    - Create `components/LogoIntro.tsx` with "Superior Residence" premium typography
    - Implement centered positioning with CSS animations
    - Add 1-second delay before triggering float animation
    - _Requirements: 1.1, 1.2, 1.5_
  - [x] 1.3 Implement logo float-to-header animation


    - Add CSS keyframe animation for logo movement from center to header position
    - Trigger AnimationContext state updates on animation completion
    - _Requirements: 1.2, 1.3_
  - [ ]* 1.4 Write unit tests for AnimationContext and LogoIntro
    - Test initial state values
    - Test state transitions
    - Test animation timing
    - _Requirements: 1.1, 1.2, 1.3_

- [x] 2. Update Navbar Component


  - [x] 2.1 Update navigation items to new structure


    - Change nav items to: Home | Prelude | Floor Plan | Site Plan | Location | Register | EN/中
    - Update href anchors to match new section IDs
    - _Requirements: 2.1, 2.2_
  - [x] 2.2 Update logo text to "Superior Residence"

    - Replace "ANYARA Hills" with "Superior Residence" in premium typography
    - Update logo SVG/icon if needed
    - _Requirements: 1.5, 12.1_

  - [x] 2.3 Integrate Navbar with AnimationContext
    - Hide navbar initially until logo animation completes
    - Fade in nav items after logo reaches header position
    - _Requirements: 1.3, 1.4_
  - [ ]* 2.4 Write unit tests for Navbar updates
    - Test navigation item order and content
    - Test visibility states based on animation context
    - _Requirements: 2.1, 2.3_

- [x] 3. Update Hero Section


  - [x] 3.1 Update hero text content


    - Change main headline to "A sanctuary of heart and homes."
    - Change subtitle to "Freehold Landed Homes"
    - _Requirements: 3.1, 3.2_

  - [x] 3.2 Integrate Hero with AnimationContext
    - Trigger hero text fade-in after navbar animation completes
    - Use AnimationContext showHeroText state
    - _Requirements: 3.3, 1.4_
  - [ ]* 3.3 Write unit tests for Hero updates
    - Test text content
    - Test animation trigger based on context
    - _Requirements: 3.1, 3.2, 3.3_

- [x] 4. Integrate Animation Flow in App.tsx





  - [x] 4.1 Wrap App with AnimationProvider

    - Add AnimationProvider to component tree
    - Ensure LogoIntro renders first and controls flow
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  - [x] 4.2 Coordinate animation sequence

    - LogoIntro → Navbar fade-in → Hero text fade-in
    - Test full animation flow
    - _Requirements: 1.2, 1.3, 1.4_

- [x] 5. Checkpoint - Verify animation sequence works

  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Create Floaters Component


  - [x] 6.1 Create Floaters component with fixed positioning


    - Create `components/Floaters.tsx` with two buttons
    - Position fixed at bottom-right corner
    - Style with appropriate icons (form and WhatsApp)
    - _Requirements: 4.1, 4.4_

  - [x] 6.2 Implement Form Registration floater functionality
    - Add click handler to scroll to contact section
    - Use smooth scroll behavior
    - _Requirements: 4.2_

  - [x] 6.3 Implement WhatsApp floater functionality
    - Add click handler to open WhatsApp link with predefined number
    - Use `https://wa.me/` URL format
    - _Requirements: 4.3_

  - [x] 6.4 Add Floaters to App.tsx
    - Render Floaters component in App
    - Ensure z-index keeps floaters above other content
    - _Requirements: 4.1_
  - [ ]* 6.5 Write property test for floater visibility
    - **Property 2: Floater Visibility During Scroll**
    - **Validates: Requirements 4.1**
    - _Requirements: 4.1_

- [x] 7. Update Prelude Section


  - [x] 7.1 Restructure Prelude layout to 40/60 split

    - Modify `components/Concept.tsx` (rename to Prelude.tsx)
    - Left side: 40% width for text content
    - Right side: 60% width for video/image
    - _Requirements: 5.1, 5.2_
  - [x] 7.2 Update Prelude text content

    - Update title to "Prelude"
    - Add new philosophy text about family, nature, feng shui, legacy
    - _Requirements: 5.3_

  - [x] 7.3 Add video placeholder support
    - Add video element with fallback to existing concept image
    - Prepare for future lushgreens.mp4 upload
    - _Requirements: 5.5_
  - [x] 7.4 Fix section boundaries and overlapping

    - Add clear visual separation from adjacent sections
    - Remove any overlapping elements
    - _Requirements: 5.4_
  - [ ]* 7.5 Write unit tests for Prelude layout
    - Test layout proportions
    - Test content presence
    - _Requirements: 5.1, 5.2, 5.3_

- [x] 8. Create Lush Greens Section


  - [x] 8.1 Create LushGreens component

    - Create `components/LushGreens.tsx` with full-screen video background
    - Add text overlay "Live amidst lush greens - find your sanctuary within"
    - _Requirements: 6.1, 6.2_

  - [x] 8.2 Implement video with fallback
    - Use placeholder image until lushgreens.mp4 is uploaded
    - Configure video to loop without visible controls
    - _Requirements: 6.3, 6.4_

  - [x] 8.3 Add LushGreens to App.tsx
    - Position after Prelude section
    - _Requirements: 6.1_
  - [ ]* 8.4 Write unit tests for LushGreens
    - Test video/fallback rendering
    - Test text overlay content
    - _Requirements: 6.1, 6.2, 6.3_

- [x] 9. Create Unveiling Section

  - [x] 9.1 Create Unveiling component structure

    - Create `components/Unveiling.tsx` with full-screen background
    - Add placeholder background image
    - _Requirements: 7.1_
  - [x] 9.2 Implement sequential fade-in animations

    - Fade in "UNVEILING" text first
    - Then fade in vertical decorative line
    - Then fade in leaf icon and "Superior Residence" text
    - Use Intersection Observer to trigger on scroll into view
    - _Requirements: 7.2, 7.3, 7.4_

  - [x] 9.3 Style centered composition
    - Center all elements vertically and horizontally
    - Match reference image styling
    - _Requirements: 7.5_

  - [x] 9.4 Add Unveiling to App.tsx
    - Position after LushGreens section
    - _Requirements: 7.1_
  - [ ]* 9.5 Write unit tests for Unveiling animations
    - Test animation sequence order
    - Test element visibility states
    - _Requirements: 7.2, 7.3, 7.4, 7.5_

- [x] 10. Checkpoint - Verify new sections render correctly

  - Ensure all tests pass, ask the user if questions arise.




- [ ] 11. Create Sanctuary Cards Section
  - [ ] 11.1 Create SanctuaryCards component structure
    - Create `components/SanctuaryCards.tsx` with heading and 3 cards

    - Add heading "A sanctuary of hearts and homes."
    - _Requirements: 8.1, 8.2_
  - [x] 11.2 Implement card hover interactions

    - Default state: show card titles only (Family Haven, Heritage Crafted, Prosperous Living)
    - Hover state: reveal Card1/2/3.png images and description text
    - _Requirements: 8.3, 8.4, 8.5, 8.6_
  - [ ] 11.3 Add card content and images
    - Family Haven: Card1.png + family-focused description
    - Heritage Crafted: Card2.png + heritage/feng shui description
    - Prosperous Living: Card3.png + prosperity/harmony description

    - _Requirements: 8.3, 8.4, 8.5_
  - [ ] 11.4 Add SanctuaryCards to App.tsx
    - Position after Unveiling section



    - _Requirements: 8.1_
  - [ ]* 11.5 Write unit tests for SanctuaryCards
    - Test card titles presence

    - Test hover state changes
    - _Requirements: 8.2, 8.3, 8.4, 8.5, 8.6_

- [ ] 12. Update Location Section
  - [ ] 12.1 Update Location heading and content
    - Change heading to "Nestled in Ayer Hitam, where comfort meets convenience."
    - Remove old "25-minute drive from KLCC" text



    - _Requirements: 9.1, 9.3_
  - [ ] 12.2 Update Location background image
    - Use provided location map image

    - Adjust styling for new image
    - _Requirements: 9.2_
  - [x]* 12.3 Write unit tests for Location updates

    - Test new heading content
    - Test old content removal
    - _Requirements: 9.1, 9.3_

- [ ] 13. Create Google Map Section
  - [x] 13.1 Create GoogleMapEmbed component



    - Create `components/GoogleMapEmbed.tsx` with heading and iframe
    - Add heading "The charm of Superior Residences, a desired enclave in Ayer Hitam."

    - _Requirements: 10.1_
  - [x] 13.2 Embed Google Map

    - Embed map centered on "Taman Mekar Emas Ayer Hitam, Jalan Mekar Emas, Taman Mekar Emas, 86100 Ayer Hitam, Johor"
    - Configure responsive iframe sizing

    - _Requirements: 10.2_
  - [ ] 13.3 Add GoogleMapEmbed to App.tsx
    - Position after Location section
    - _Requirements: 10.1_
  - [ ]* 13.4 Write unit tests for GoogleMapEmbed
    - Test heading content



    - Test iframe presence
    - _Requirements: 10.1, 10.2_

- [ ] 14. Remove Deprecated Sections
  - [x] 14.1 Remove LifestyleHub from App.tsx

    - Remove import and component usage
    - _Requirements: 11.1_
  - [ ] 14.2 Remove Gallery from App.tsx
    - Remove import and component usage

    - _Requirements: 11.2_
  - [ ] 14.3 Remove Services from App.tsx
    - Remove import and component usage

    - _Requirements: 14.1_
  - [ ] 14.4 Update navigation to remove links to deleted sections
    - Remove Gallery link from nav items
    - _Requirements: 11.3_



  - [ ]* 14.5 Write property test for removed sections
    - **Property 4: Removed Sections Absence**
    - **Validates: Requirements 11.1, 11.2, 14.1**


    - _Requirements: 11.1, 11.2, 14.1_

- [ ] 15. Update Branding Throughout
  - [ ] 15.1 Update translations.ts with new content
    - Replace all "Anyara Hills" references with "Superior Residence"
    - Add new translation keys for new sections
    - Update existing keys with new content
    - _Requirements: 12.1_
  - [ ] 15.2 Update Footer branding
    - Change company name and contact info to Superior Residence
    - Update address if needed
    - _Requirements: 12.2_
  - [ ] 15.3 Update Contact form branding
    - Ensure form reflects Superior Residence branding
    - _Requirements: 12.3_
  - [ ] 15.4 Update Features section text
    - Update any brand-specific text to Superior Residence
    - Keep existing icons and layout
    - _Requirements: 13.1, 13.2_
  - [ ]* 15.5 Write property test for brand consistency
    - **Property 3: Brand Name Consistency**
    - **Validates: Requirements 12.1**
    - _Requirements: 12.1_

- [ ] 16. Update App.tsx Section Order
  - [ ] 16.1 Reorganize component order in App.tsx
    - Order: LogoIntro → Navbar → Hero → Prelude → LushGreens → Unveiling → SanctuaryCards → Location → GoogleMapEmbed → Features → Contact → Footer → Floaters
    - Remove deleted components
    - _Requirements: All_

- [ ] 17. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ]* 18. Write property test for language toggle
  - **Property 1: Language Toggle Consistency**
  - **Validates: Requirements 2.3**
  - Test that toggling EN → 中 → EN restores original text
  - _Requirements: 2.3_
