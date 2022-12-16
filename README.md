# Gift Atlas - Making Holiday/Birthday gift shopping easier 🎁 

Is holiday shopping stressful? Not knowing what gifts to get people? That's the best part of of Gift Atlas 🎁.  The application is a dashboard where you can add those important to you, track their birthday and upcoming holiday, and track which gifts you'd like and have them send you gift ideas when you aren't sure!  

This app was built using React.js, React Router, JavaScript, HTML, SCSS, Axios and EmailJS

## Related

Here is the back end API for this project: 

[Gift Atlas - Node.js Back End](https://github.com/ash-river-jones/gift-atlas-server)

## Run Locally 

1. Once you have cloned this repository make sure to run `npm i` to install any dependancies you might be missing. 
2. Make sure you download [Gift Atlas - server](https://github.com/ash-river-jones/gift-atlas-server) and do the same. 
3. You will need an Service ID, Template ID and Public Key from EmailJS, which you can create [on their website](https://www.emailjs.com/).

## EmailJS Templates:
There are two email templates needed to be created to have the application functin properly:
Copy and paste the below into the "Budget" template that you have created:

Subject: 🎁 Someone using Gift Atlas has requested a gift from you! 

To Email: {{giftee_email}}

Reply To: {{user_email}}

From Name: Gift Atlas - Holiday Gift Tracker

Content: Hello {{giftee_name}},

{{user_name}}, who uses Gift Atlas for Holiday Gift Tracking, has requested a gift idea from you! 

Please go to the following link to submit a gift that you would like for the upcoming holiday! 

Message from {{user_name}}:

{{message}}

Click Here: {{client_link}}/{{user_id}}/{{giftee_id}}/add

{{user_name}} has set a budget suggestion for this gift of approximately ${{gift_budget}}.

Please be sure to include a link, colour preference or size (if applicable).

Learn more about Gift Atlas here: {{client_link}}

Best wishes,
Gift Atals team


Copy and paste the below into the "No Budget" template that you have created:

Subject: 🎁 Someone using Gift Atlas has requested a gift from you! 

To Email: {{giftee_email}}

Reply To: {{user_email}}

From Name: Gift Atlas - Holiday Gift Tracker

Content: Hello {{giftee_name}},

{{user_name}}, who uses Gift Atlas for Holiday Gift Tracking, has requested a gift idea from you! 

Please go to the following link to submit a gift that you would like for the upcoming holiday! 

Message from {{user_name}}:

{{message}}

Click Here: {{client_link}}/{{user_id}}/{{giftee_id}}/add

Please be sure to include a link, colour preference or size (if applicable).

Learn more about Gift Atlas here: {{client_link}}

Best wishes,
Gift Atals team

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.  

You will need to provide EmailJS Service ID, Public Key, Budget Template & No Budget Template.
#  EmailJS
`REACT_APP_emailjs_service_id`=`{YOUR EMAILJS SERVICE ID HERE}` <br />
`REACT_APP_emailjs_public_key`=`{YOUR EMAILJS PUBLIC KEY HERE}` <br />
`REACT_APP_emailjs_template_budget`=`{YOUR EMAILJS BUDGET TEMPLATE ID HERE}` <br />
`REACT_APP_TMDB_GENRE_DETAILS`=`{YOUR EMAILJS NO BUDGET TEMPLATE ID HERE}`
# api
`REACT_APP_SERVER_URL`=`{YOUR SERVER DEPLOYMENT HERE}` <br />
`REACT_APP_CLIENT_URL`=`{YOUR CLIENT DEPLOYMENT HERE}`

## Screenshot

![App Screenshot](https://github.com/ash-river-jones/gift-atlas-client/blob/e7f7971953373c209f017a5e941411ae8aa3baf2/src/data/screenshot.png?raw=true)

## Author

- [@ash-river-jones](https://github.com/ash-river-jones)
