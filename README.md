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
- [favicon](https://github.com/twitter/twemoji/blob/master/assets/svg/1f506.svg)

## Development Log

This project was developed using GitHub for version control. Halfway through, I had to switch laptops because of hardware issues, which meant creating a new repository. To keep everything transparent, I’ve included both repositories here so the full development journey can be seen:

### Old Repository (initial setup and early commits): [https://github.com/Anasousa11/project-2/tree/main/project-milestone-2]

### New Repository (continued development and final deployment): [https://github.com/Anasousa11/emotigrow]

## Timeline of Development
### Date	Repository	Commit / Milestone
![Screenshot_19-8-2025_95124_github com](https://github.com/user-attachments/assets/dff22df7-7397-452d-b314-8ca620b1dcdc)
![Screenshot_19-8-2025_9510_github com](https://github.com/user-attachments/assets/aef69d2f-b3cb-42dc-bfec-6806592aee02)


Partway through the project, I had to change laptops because my old one became unreliable. This is why the project history is split across two repositories.

### Old Laptop

The battery was broken, so the laptop would only work when plugged in and often shut down unexpectedly.

The keyboard was damaged with several missing keys, which made coding and writing commit messages very difficult.

Because of this, I decided to move development to a new machine.

**Evidence Screenshot:**


### New Laptop

Set up with Git, VS Code, and all dependencies reinstalled.

Project moved to a new GitHub repository where I continued development.

This allowed me to make consistent commits and push towards deployment without further disruption.

**Evidence Screenshot:**


Why This Is Included

I’ve added this section to explain the break in the GitHub history. By linking both repositories, it’s still possible to see the full development timeline from start to finish.

<img width="732" height="417" alt="11" src="https://github.com/user-attachments/assets/d14984a5-b3ef-49ab-9f6b-cc96cfd58a04" />
<img width="738" height="419" alt="10" src="https://github.com/user-attachments/assets/eab9d50a-8e0c-4b15-a45b-f32cc9a21be3" />
<img width="730" height="428" alt="9" src="https://github.com/user-attachments/assets/48ffc2b6-b624-489b-9d80-91e3f7688455" />
<img width="708" height="420" alt="8" src="https://github.com/user-attachments/assets/e654dfcb-a795-4ca1-a763-3e5c7096264a" />
<img width="722" height="422" alt="7" src="https://github.com/user-attachments/assets/e6040ae4-9b5a-4678-add9-83b80b63a655" />
<img width="718" height="438" alt="6" src="https://github.com/user-attachments/assets/3defd0c2-be2f-4b65-a7a4-87c9d3f88ff6" />
<img width="724" height="422" alt="5" src="https://github.com/user-attachments/assets/0256c81b-ad19-4414-839a-74ee3ee86752" />
<img width="727" height="269" alt="4" src="https://github.com/user-attachments/assets/71fa400b-3b4e-4faf-935e-dad0d053d8d7" />
<img width="732" height="269" alt="3" src="https://github.com/user-attachments/assets/f22a6187-b3bd-4ca9-98d1-702b6444e998" />
<img width="705" height="199" alt="2" src="https://github.com/user-attachments/assets/45061c1e-5135-4673-8c78-8475c9eb83f2" />
<img width="730" height="433" alt="13" src="https://github.com/user-attachments/assets/e27af081-28fe-43b9-8970-70ba1285ef96" />
<img width="721" height="411" alt="12" src="https://github.com/user-attachments/assets/07232e59-d50a-4830-a6c0-373f33e5d803" />


## Author

**Ana Samanda Dicha De Sousa**  
*Web Application Development – Level 5 Diploma*
