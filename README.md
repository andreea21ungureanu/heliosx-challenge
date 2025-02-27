This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the tests with:

```bash
npm test
```

Currently there is one test in place for the Button component.

## Technical details

The project's goal is to ask a user a set of 5 questions that would determine if they are allergic to Genovian Pears.
The project is structured like a consultation, following similar patterns to the ones used by HeliosX's products.

### Stack

The application uses Next.js, Typescript, Tailwind CSS and Jest + RTL.

### How it works

1. Consultation page

- Navigating to [http://localhost:3000](http://localhost:3000) starts the Consultation flow via a button
- Once the consultation is started, a set of 5 question is displayed, one by one, that identify the user's allergy. Once a question has been answered, this remains visible on the screen.
- Once all the questions are answered, a submission button is displayed which redirects the user to the "Thank you" page and submits the data (console.log the data, our fake API).

2. "Thank you" page

- Once the consultation is completed, the user is redirected to this page. No further action can be taken
- Going back using the browser button starts a new consultation

### Components

As the app is fairly small, a lot of the logic is contained inside the page.

- A Button component was created as it was used for both starting and submitting the consultation
- We use the main layout to define the header and footer of the application

### Data handling

- As there is no API, the data is currently sent to a function which console.logs the information on the screen.
- While the user fills in the consultation the answers are being stored in local storage. Once the user submits the consultation, the local storage is emptied, so that no personal information is kept in the browser storage for too long.

### Mobile clients

The app is mobile client friendly because:

- The header image adjusts for smaller screens
- The footer is compacted into two rows
- During the consutation, the screen automatically scrolls to the most recent question via refs

### Testing

The Button component is tested using React Testing Library and Jest.

### Accessibility

- The button to start the consultation, the consultation form and the submission button can be tabbed into.

### Further steps

1. Instead of console.logging the data, we would use an API and post the information to a database
2. Add more accessibility specific data like aria labels
3. Comprehensive unit testing
4. Improved experience for mobile users, especially for the questions that are scrolled into view
5. Additional stylistic indicators for progress in the consultation (for example, a progress bar)
6. Separate boolean YES/NO buttons into an individual reusable component
