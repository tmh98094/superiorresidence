# Google Sheets Contact Form Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Superior Residence - Contact Form Submissions"
4. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Price Range`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append a new row with the form data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.priceRange
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Name your project: "Superior Residence Contact Form"

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Contact Form Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [project name] (unsafe)**
9. Click **Allow**
10. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/...../exec`)

## Step 4: Update Your Website

1. Open `components/Contact.tsx`
2. Find this line (around line 18):
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your copied URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec';
   ```
4. Save the file

## Step 5: Test Your Form

1. Go to your website
2. Fill out the contact form
3. Click "REGISTER"
4. Check your Google Sheet - you should see a new row with the submission!

## Troubleshooting

### Form not submitting?
- Check browser console for errors (F12)
- Make sure the Google Script URL is correct
- Verify the script is deployed as "Anyone" can access

### Data not appearing in sheet?
- Check the Apps Script execution logs: **Extensions** → **Apps Script** → **Executions**
- Make sure column headers match exactly

### Need to update the script?
1. Make changes in Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the pencil icon ✏️
4. Change version to **New version**
5. Click **Deploy**

## Optional: Email Notifications

Want to receive emails when someone submits? Add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.priceRange
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: "your-email@example.com", // Change this to your email
      subject: "New Contact Form Submission - Superior Residence",
      body: `
New registration received:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Price Range: ${data.priceRange}
Time: ${data.timestamp}
      `
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Benefits

✅ **100% Free** - Unlimited submissions
✅ **Your Design** - Form looks exactly the same
✅ **Automatic Storage** - All data in Google Sheets
✅ **Easy Access** - View submissions anytime
✅ **Export Ready** - Download as Excel/CSV
✅ **Email Notifications** - Optional email alerts

## Support

If you need help, check:
- Google Apps Script logs: **Extensions** → **Apps Script** → **Executions**
- Browser console: Press F12 and check the Console tab
