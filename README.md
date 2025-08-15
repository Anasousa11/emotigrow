# EmotiGrow

## Purpose

The purpose of EmotiGrow is to help users reflect on and track their daily moods, identify emotional trends, and receive encouragement or mental health resources based on how they feel. This mental health mood tracker supports users in maintaining their mental wellness through simple, interactive self-monitoring tools.

## Value to Users

- Enables users to log daily moods easily via emoji or slider input.
- Allows optional journal entries for deeper reflection.
- Displays motivational quotes and calming images tailored to the user's mood.
- Visualizes mood history and trends over time using charts.
- Provides access to curated mental health resources.
- Fully responsive and accessible across devices with strong keyboard navigation and color contrast.
- Stores data locally so users can revisit past entries anytime.

## Target Audience

Teens and adults interested in emotional wellness or mental self-reflection.

## Planning

I wanted to create a website where users can report their mood and type any thoughts or events in their life. The mood is set so the user can find patterns and behaviors. Analyzing those patterns can help to create plans on how to improve your mental health.

## Wireframes

![Screenshot_31-7-2025_112059_www canva com](https://github.com/user-attachments/assets/72039a9d-35b4-4bbd-bba0-5c85a72a89a8)


## Features

- Mood input (emoji or slider)
- Journal entries
- Form validation
- Mood history display
- LocalStorage for persistence
- Mood trend charts
- Motivational quotes via API
- Responsive design
- 404 fallback page

## Pages Overview

- **Home (index.html):** Mood input, journal entry, submit button, mood summary, motivational quotes.
- **Journal (journal.html):** View and filter past entries, mood trend chart.
- **404 Page (404.html):** Friendly error message and redirect link.

## User Stories

- I want to log how I'm feeling daily to reflect on my emotions.
- I want to choose my mood quickly via emojis or sliders.
- I want to write an optional journal entry about my day.
- ![Screenshot_14-8-2025_222737_127 0 0 1](https://github.com/user-attachments/assets/313e1dbd-948e-40df-bc18-ca1660a10a0e)

- I want to view my mood history to identify patterns.
- ![Screenshot_15-8-2025_10033_127 0 0 1](https://github.com/user-attachments/assets/7ca1623e-70fe-4420-984e-f3851ca1de60)

- I want the app to work well on phones and desktops.
- I want my data saved so it persists between visits.
- I want to be able to find mental health resources.
![Screenshot_15-8-2025_10427_127 0 0 1](https://github.com/user-attachments/assets/b4a2945b-e329-4e43-8105-4487e9c09b8d)


## Technologies Used

- **HTML5, CSS3** (Grid, Flexbox, media queries)
- **JavaScript** (DOM manipulation, LocalStorage, API calls)
- **dayjs** (for date handling)
- **Git & GitHub** (for version control)

## Deployment

Live App: [GitHub Pages](https://github.com/Anaousa11/emotigrow)

Clone the repo:
```bash
git clone https://github.com/Anaousa11/emotigrow.git
```
## Testing

- Form validation for mood selection and journal entries.
- Data persistence tested with `localStorage`.
- Responsive design checked on multiple device sizes.
![Screenshot_15-8-2025_104336_techsini com](https://github.com/user-attachments/assets/7e70bd56-db67-42dd-b02c-102c8179a936)

- Chart rendering and data updates tested.
- Navigation and accessibility checks (tab order, ARIA roles, color contrast).
- 404 page functionality tested.
- HTML passed W3C Validator, CSS passed jigsaw, JavaScript passed JS Validator.
![Screenshot_15-8-2025_101840_jigsaw w3 org](https://github.com/user-attachments/assets/e4471900-dd93-4637-af7b-70fac6d9a941)
![Screenshot_15-8-2025_105547_validator w3 org](https://github.com/user-attachments/assets/df638bfb-ff92-4122-9d9a-169d0dc3eff4)
![Screenshot_15-8-2025_104656_jsvalidator com](https://github.com/user-attachments/assets/0a43ab9d-d5bb-4e52-926b-418cb12e8a6e)

## External Code & Attribution

- [Chart.js](https://www.chartjs.org/) – for visualizing mood trends.
- [Day.js](https://day.js.org/) – for date formatting.
- Emoji icons – source used if applicable.
- Mental health resources – [Google Maps Places API](https://developers.google.com/maps/documentation/places/web-service/overview).

## Author

**Ana Samanda Dicha De Sousa**  
*Web Application Development – Level 5 Diploma*
