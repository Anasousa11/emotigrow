# EmotiGrow


## Purpose

EmotiGrow is designed to be your daily companion for tracking how you’re feeling emotionally. It helps you reflect on your moods, notice patterns over time, and connect with mental health resources tailored to your needs. It’s a simple, supportive tool to help you stay mindful and take care of your mental well-being.

## Value to Users

- Enables users to log daily moods easily by button.
- Allows optional journal entries for deeper reflection.
- Displays motivational quotes and calming images tailored to the user's mood.
- Visualizes mood history and trends over time using charts.
- Provides access to mental health resources.
- Fully responsive and accessible across devices with good color contrast.
- Stores data locally so users can revisit past entries anytime.

## Target Audience

Teens and adults interested in mental self-reflection and wellness.

## Planning

I wanted to create a website where users can report their mood and type any thoughts or events in their life. The mood is set so the user can find patterns and behaviors. Analyzing those patterns can help to create plans on how to improve your mental health.

## Wireframes

![Screenshot_31-7-2025_112059_www canva com](https://github.com/user-attachments/assets/72039a9d-35b4-4bbd-bba0-5c85a72a89a8)


## Features

- Mood input (emoji or button)
- Journal entries
- Form validation
- Mood history display
- LocalStorage 
- Mood trend charts
- Motivational quotes via API
- Responsive design
- 404 page

## Pages Overview

- **Home (index.html):** Mood input, journal entry, submit button, mood summary, motivational quotes.
- **Journal (journal.html):** View past entries and mood trend chart.
- **404 Page (404.html):** Friendly error message and redirect link.

## User Stories

- I want to log how I'm feeling daily to reflect on my emotions.
- I want to choose my mood quickly via emojis or button.
- I want to write an optional journal entry about my day.
 ![Screenshot_14-8-2025_222737_127 0 0 1](https://github.com/user-attachments/assets/313e1dbd-948e-40df-bc18-ca1660a10a0e)

- I want to view my mood history to identify patterns.
 ![Screenshot_15-8-2025_10033_127 0 0 1](https://github.com/user-attachments/assets/7ca1623e-70fe-4420-984e-f3851ca1de60)

- I want the app to work well on phones and desktops.
- I want my data saved so it persists between visits.
- I want to be able to find mental health resources.
![Screenshot_15-8-2025_10427_127 0 0 1](https://github.com/user-attachments/assets/eb40b032-2781-4dfa-beae-48ac22d6fb6c)

## Folder Pathway
emotigrow/
├── index.html           
├── journal.html         
├── 404.html             
├── css/
│   └── styles.css       
├── entry.js           
├── journal.js    
├── assets/
│   ├── images/          
│   └── favicon/           
├── README.md            
            


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

- The original wireframes included a plan to implement a Quote Generator API to provide users with inspirational or motivational quotes as part of the experience. However, during development, no suitable or reliable APIs were found, so this feature was not implemented.
- Form validation for mood selection and journal entries.
- Data tested with `localStorage` manually.
- **Responsive design checked on multiple device sizes.**
![Screenshot_15-8-2025_104336_techsini com](https://github.com/user-attachments/assets/7e70bd56-db67-42dd-b02c-102c8179a936)

- Chart rendering and data updates tested manually.
- Accessibility checks (tab order, ARIA roles, color contrast).
- 404 page functionality tested manually.
-  **HTML passed W3C Validator, CSS passed jigsaw, JavaScript passed JS Validator.**
![Screenshot_15-8-2025_101840_jigsaw w3 org](https://github.com/user-attachments/assets/e4471900-dd93-4637-af7b-70fac6d9a941)
![Screenshot_15-8-2025_105547_validator w3 org](https://github.com/user-attachments/assets/df638bfb-ff92-4122-9d9a-169d0dc3eff4)
![Screenshot_15-8-2025_104656_jsvalidator com](https://github.com/user-attachments/assets/0a43ab9d-d5bb-4e52-926b-418cb12e8a6e)

## External Code & Attribution


- [MDN: localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
- [MDN: DOM Manipulation Methods](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [Chart.js Pie Chart](https://www.chartjs.org/docs/latest/charts/doughnut.html)
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)
- [Google Places API – Text Search](https://developers.google.com/maps/documentation/places/web-service/search)
- [MDN: JavaScript Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN: Keyboard Events](https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event)
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Google Fonts](https://fonts.google.com/)*Edu VIC WA NT Hand Pre, Special Gothic Expanded One, Nunito, Quicksand*

## Author

**Ana Samanda Dicha De Sousa**  
*Web Application Development – Level 5 Diploma*
