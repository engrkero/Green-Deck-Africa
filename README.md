# GreenDeck Africa - React Website

This is a professional consulting website for GreenDeck Africa, built with React and Tailwind CSS. It features a modern design, smooth animations, and a fully functional contact form powered by EmailJS.

## Table of Contents

1.  [Project Structure](#project-structure)
2.  [Hosting Your React Application](#hosting-your-react-application)
3.  [Setting Up the SMTP Contact Form (EmailJS)](#setting-up-the-smtp-contact-form-emailjs)
4.  [Setting Up the Newsletter (Mailchimp)](#setting-up-the-newsletter-mailchimp)

---

### Project Structure

The project is organized into logical components and pages:

-   `public/`: Contains the main `index.html` file and any static assets.
-   `src/`: The main source code directory.
    -   `components/`: Reusable UI components like `Navbar`, `Footer`, `Preloader`, etc.
    -   `pages/`: Top-level page components like `Home`, `About`, `Services`, and `Contact`.
    -   `App.tsx`: The main application component that handles routing.
    -   `index.tsx`: The entry point of the React application.

---

### Hosting Your React Application

To deploy this website, you can use any modern static site hosting service. Netlify and Vercel are excellent free choices that are very easy to set up.

#### General Steps (for any hosting provider):

1.  **Build the Project**: First, you need to create a production-ready build of your application. This command compiles and optimizes your code into a `dist` (or `build`) folder.
    ```bash
    npm run build
    ```

2.  **Deploy the `dist` Folder**: The contents of the generated `dist` folder are what you need to deploy.

#### Deploying with Netlify (Recommended)

1.  **Sign Up**: Create a free account at [netlify.com](https://www.netlify.com/).
2.  **Drag and Drop**: Log in to your Netlify dashboard. Simply drag the `dist` folder from your project onto the Netlify dashboard's "Sites" page. Netlify will automatically upload and deploy your site.
3.  **Configure Domain**: Netlify will assign you a random URL (e.g., `random-name-12345.netlify.app`). You can customize this in `Site settings > Domain management`, or add your own custom domain.

#### Deploying with Vercel

1.  **Sign Up**: Create a free account at [vercel.com](https://www.vercel.com/).
2.  **Install Vercel CLI**: For the easiest deployment, install the Vercel CLI globally.
    ```bash
    npm install -g vercel
    ```
3.  **Deploy from Terminal**: Navigate to your project's root directory in your terminal and run the `vercel` command.
    ```bash
    vercel
    ```
    The CLI will guide you through a few simple questions (like project name and framework). It will automatically detect the correct settings, build your project, and deploy it.

---

### Setting Up the SMTP Contact Form (EmailJS)

The contact form is configured to use **EmailJS**, a service that allows you to send emails directly from your frontend code without needing a backend server.

To make it work, you need to create a free EmailJS account and link it to the contact form.

#### Step 1: Create an EmailJS Account

1.  Go to [www.emailjs.com](https://www.emailjs.com/) and sign up for a free account. The free plan is generous and perfect for most small to medium-sized websites.

#### Step 2: Add an Email Service

1.  In your EmailJS dashboard, go to **Email Services** and click **"Add New Service"**.
2.  Choose your email provider (e.g., **Gmail**, Outlook, etc.).
3.  Follow the instructions to connect your email account. EmailJS will securely send emails on your behalf from this account.
4.  After connecting, **copy the Service ID**. You will need it later.

#### Step 3: Create an Email Template (For Receiving Inquiries)

1.  Go to the **Email Templates** section in your dashboard and click **"Create New Template"**.
2.  This template defines the structure of the email you will receive. You can customize the subject and body. Use double curly braces `{{ }}` to insert variables from the form.
3.  Go to the "Code" tab in the template editor and paste the HTML code below. This will create a clean, organized email with all the form details.

    **Recommended EmailJS Template:**

    *   **Subject**: New Inquiry from {{name}} - {{subject}}

    *   **Body (HTML)**:
        ```html
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #27ae60;">New Inquiry from GreenDeck Africa Website</h2>
            <p>You have received a new message from your website contact form. Please see the details below.</p>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #f9f9f9;">
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Name:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">{{name}}</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email Address:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:{{email}}">{{email}}</a></td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Subject:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">{{subject}}</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Services of Interest:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">{{services}}</td>
                </tr>
            </table>
            <h3 style="color: #2c3e50; margin-top: 20px;">Message:</h3>
            <div style="padding: 15px; background-color: #f4f4f4; border-left: 4px solid #2ecc71;">
                <p style="margin: 0;">{{message}}</p>
            </div>
            <hr style="margin-top: 20px; border: 0; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #888;">This email was sent from the GreenDeck Africa contact form.</p>
        </div>
        ```
        **Important**: The variable names (`{{name}}`, `{{email}}`, etc.) **must exactly match** the `name` attributes of the input fields in the contact form. Our form is already set up correctly for this template.

4.  Save the template and **copy the Template ID**.

#### Step 4: (Optional) Create an Auto-Reply Template for Clients

To provide a better user experience, you can set up an automatic email that is sent back to the person who contacted you, confirming you received their message.

1.  In your EmailJS dashboard, go back to **Email Templates** and click **"Create New Template"** again.
2.  Go to the "Code" tab and paste the HTML code below for the auto-reply.

    **Recommended Auto-Reply Template:**

    *   **Subject**: Thank You for Contacting GreenDeck Africa!

    *   **Body (HTML)**:
        ```html
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eee;">
                <h1 style="color: #005826; font-size: 24px;">Message Received!</h1>
            </div>
            <div style="padding: 20px 0;">
                <p style="font-size: 16px; line-height: 1.6; color: #333;">
                    Hello {{name}},
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #333;">
                    Thank you for reaching out to GreenDeck Africa. We have successfully received your message regarding: <strong>"{{subject}}"</strong>.
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #333;">
                    Our team is reviewing your inquiry and will get back to you as soon as possible, typically within 1-2 business days.
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #333;">
                    We appreciate your interest in our services.
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #333; margin-top: 30px;">
                    Best Regards,<br>
                    The GreenDeck Africa Team
                </p>
            </div>
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
                <p>&copy; 2024 GreenDeck Africa. All Rights Reserved.</p>
                <p>This is an automated message. Please do not reply directly to this email.</p>
            </div>
        </div>
        ```
3.  **This is the most important step:** Go to the **Settings** tab for this new template.
4.  In the **"To Email"** field, you **must** enter the dynamic variable `{{email}}`. This tells EmailJS to send this email to the address the user entered in the form. Do not enter your own email here.
5.  Save the template and **copy its new Template ID**.

#### Step 5: Find Your Public Key

1.  In your EmailJS dashboard, navigate to the **Account** section from the sidebar.
2.  You will find your **Public Key** listed there. Copy it.

#### Step 6: Add Credentials to the Code

1.  Open the contact page file in your project: `src/pages/Contact.tsx`.
2.  Find the `handleSubmit` function. At the top of this function, you'll see placeholder variables for your EmailJS credentials.
3.  Replace the placeholder strings with the IDs you copied from your EmailJS dashboard.

    ```javascript
    // src/pages/Contact.tsx

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      // ...
      
      // --- PASTE YOUR EMAILJS CREDENTIALS HERE ---
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID'; // For emails to you
      const autoReplyTemplateID = 'YOUR_AUTO_REPLY_TEMPLATE_ID'; // For emails to the client
      const publicKey = 'YOUR_PUBLIC_KEY';
      // -----------------------------------------

      // ...
    };
    ```

That's it! After you re-deploy your application, your contact form will be fully functional, sending a notification to you and a confirmation to your client.

---

### Setting Up the Newsletter (Mailchimp)

The newsletter signup form in the footer is designed to work with **Mailchimp**. To make it functional, you need to connect it to your own Mailchimp account.

#### Step 1: Create a Mailchimp Account & Audience

1.  Go to [www.mailchimp.com](https://www.mailchimp.com/) and sign up for an account.
2.  Create an **Audience**. This is the list where your subscribers' email addresses will be stored. If you already have an account, you can use an existing audience.

#### Step 2: Get Your Form Action URL and Bot Field Name

1.  In your Mailchimp dashboard, navigate to the **Audience** you want to use.
2.  Click on **Signup forms** from the menu.
3.  Select **Embedded forms**.
4.  You will see some HTML code for a signup form. You don't need all of it, just two key pieces of information from the `<form>` tag:
    *   **Form Action URL**: Find the `<form>` tag and copy the entire URL from its `action` attribute. It will look something like `https://yourname.us1.list-manage.com/subscribe/post?u=...&id=...`.
    *   **Bot Protection Field Name**: Look for a hidden `<input>` tag inside a `div` with `style="position: absolute; left: -5000px;"`. Copy the value of the `name` attribute from this input. It will be a long string starting with `b_`.

#### Step 3: Add Credentials to the Code

1.  Open the footer component file in your project: `src/components/Footer.tsx`.
2.  At the top of the component, find the **Mailchimp Configuration** section.
3.  Paste the values you copied from Mailchimp into the corresponding variables:

    ```javascript
    // src/components/Footer.tsx

    // --- START: Mailchimp Configuration ---
    // See README.md for instructions on how to get these values from your Mailchimp account.
    // 1. Paste your Mailchimp form action URL here.
    const mailchimpActionUrl = 'PASTE_YOUR_FORM_ACTION_URL_HERE'; 
    // 2. Paste the name of the hidden input field for bot protection.
    const mailchimpBotProtectionName = 'PASTE_YOUR_BOT_FIELD_NAME_HERE';
    // --- END: Mailchimp Configuration ---
    ```

Once you save the file and re-deploy your application, the newsletter form in the footer will be fully functional. When a user submits their email, they will be taken to a Mailchimp confirmation page in a new tab.