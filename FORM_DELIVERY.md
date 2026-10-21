# Inquiry delivery

The homepage and `/contact` link to the four-step questionnaire at `/inquire`, implemented in `components/ContactForm.vue`. Submissions are sent to `endlessphotobooths@gmail.com` using FormSubmit. JavaScript powers step navigation, validation, review, and the confirmation screen. Without JavaScript, a direct email link is provided.

Answers remain in memory when moving Back, Continue, or Edit, including browser Back and Forward within the questionnaire. Refreshing or leaving the questionnaire resets the answers; personal information is not saved in browser storage or added to the URL. Only the step number is added to the URL. Optional steps can be skipped without erasing entered answers; invalid entered values must be corrected before final submission.

Experience CTAs pass a known offering slug in the URL. The questionnaire displays the selected experience and includes its name in the delivered email, preserving it through step navigation.

## Activate before launch

1. Submit a clearly marked test inquiry from the deployed website.
2. Open the activation email from FormSubmit in `endlessphotobooths@gmail.com` (check spam) and activate the form. An activation response is treated as an unsuccessful submission in the website, so visitors are not told their inquiry was delivered.
3. Submit another test and verify the inbox receives all 11 fields, with the visitor email available for replies. Test the inquiry links from both `/` and `/contact` on the production domain.

The form uses FormSubmit's honeypot and default spam protection. No API key is stored in the browser. Only Full Name and Email are required; the remaining fields are optional. An inline success means the service accepted the request, not that inbox arrival has been verified.

Service documentation: https://formsubmit.co/documentation and https://formsubmit.co/help
