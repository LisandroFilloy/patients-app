# No use of thrid party libs nor UI libs except for
- spinner icon (react-icons).
- ORM (prisma).
- email sending (nodemailer).

# I chose supabase cloude for the image storage.


Further improvements:
- A search input.
- Authentication (JWT).
- Improved design.
- Country code select input in phone number field.
- Showing document photo in collapsed card is not a pattern I like .. I would rather show it after expanding, since it uses most of the size of the card (this way we could display much more cards per screen and display them in a different way, improving UI).
- Responsiveness for mobile.
- Button to remove patient.
- Being able to update patient fields.
- Cache the list of emails on the FE and add repeated email validation directly on the FE.
- Images are being saved in local storage at the moment they are drag and dropped as we generate the URL at that point. The image could be discarded - we should drop it from the storage if this happens (not covered yet).
- Document photo could be larger to see it's entire content (part of improving the design).
- Set a real SMTP server and perform some sort of action when users confirm thei email (add a new field in cards showing confirmation).
- Develop the product with the understanding that the client will want SMS notifications within two months: not sure how I would change my codebase because of this information. I think the code is totally extensible to support this.
