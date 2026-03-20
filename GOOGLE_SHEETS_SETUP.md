# How to Link Your Google Sheet

There are two ways to connect your Google Sheet to your website. **Method 1 (Published CSV) is recommended** as it's simpler and doesn't require an API key.

---

## Method 1: Published CSV (Recommended - No API Key Needed)

This is the easiest method. You'll publish your Google Sheet as a CSV file that your website can read.

### Step-by-Step Instructions:

1. **Open your Google Sheet** in your browser
   - Make sure your sheet has headers in the first row
   - Headers can be: `Name of Production`, `Name of Character`, `Position`, `Location`, `Date`, `Time`, `Link to Site`, `Title`
   - All fields are optional - include only the columns you need

2. **Publish the Sheet**
   - Click **File** → **Share** → **Publish to web**
   - In the dialog that opens:
     - **Link** tab should be selected
     - **Entire document** or select a specific sheet
     - **Web page** dropdown → change to **Comma-separated values (.csv)**
   - Click **Publish**
   - Click **OK** to confirm

3. **Copy the Published Link**
   - You'll see a URL that looks like:
     ```
     https://docs.google.com/spreadsheets/d/1ABC123xyz.../export?format=csv&gid=0
     ```
   - Copy this entire URL

4. **Use it in Your Code**
   ```tsx
   import { useGoogleSheetPublished } from "@/hooks/useGoogleSheetPublished";
   
   const MyComponent = () => {
     const { data, isLoading, error } = useGoogleSheetPublished({
       sheetUrl: "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0"
     });
     
     // Use data, isLoading, error as needed
   };
   ```

### Example Google Sheet Format:

| Name of Production | Name of Character | Position | Location | Date | Time | Link to Site | Title |
|-------------------|-------------------|----------|----------|------|------|--------------|-------|
| Hamlet | Ophelia | Lead | Broadway | 2024-03-15 | 7:00 PM | https://example.com | Spring Production |
| Macbeth | Lady Macbeth | Supporting | Off-Broadway | 2024-04-20 | 8:00 PM | https://example.com | Summer Show |

**Note:** Column names are case-insensitive and flexible. The hook will automatically match:
- "Name of Production" or "Production" → `nameOfProduction`
- "Name of Character" or "Character" → `nameOfCharacter`
- "Link to Site" or "Link" or "Site" → `linkToSite`
- etc.

---

## Method 2: Google Sheets API (Requires API Key)

This method gives you more control but requires setting up a Google API key.

### Step-by-Step Instructions:

1. **Get Your Sheet ID**
   - Open your Google Sheet
   - Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the `SHEET_ID_HERE` part (the long string of letters, numbers, and dashes)

2. **Create a Google API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project (or select an existing one)
   - Enable the **Google Sheets API**:
     - Go to **APIs & Services** → **Library**
     - Search for "Google Sheets API"
     - Click **Enable**
   - Create an API Key:
     - Go to **APIs & Services** → **Credentials**
     - Click **Create Credentials** → **API Key**
     - Copy your API key
   - **Important:** Restrict your API key:
     - Click on the API key you just created
     - Under **API restrictions**, select **Restrict key**
     - Choose **Google Sheets API**
     - Under **Application restrictions**, you can restrict by HTTP referrer (your website domain)

3. **Make Your Sheet Publicly Viewable** (if using a public API key)
   - In your Google Sheet, click **Share**
   - Click **Change to anyone with the link**
   - Set permission to **Viewer**
   - Click **Done**

4. **Use it in Your Code**
   ```tsx
   import { useGoogleSheet } from "@/hooks/useGoogleSheet";
   
   const MyComponent = () => {
     const { data, isLoading, error } = useGoogleSheet({
       sheetId: "1ABC123xyz...", // Your sheet ID from the URL
       apiKey: "AIzaSy...", // Your API key
       range: "Sheet1!A1:H1000" // Optional: specify range (default: Sheet1!A1:Z1000)
     });
     
     // Use data, isLoading, error as needed
   };
   ```

---

## Quick Start Example

Here's a complete example you can copy and modify:

```tsx
import { useGoogleSheetPublished } from "@/hooks/useGoogleSheetPublished";

const ProductionsList = () => {
  // Replace this URL with your published Google Sheet CSV URL
  const { data, isLoading, error } = useGoogleSheetPublished({
    sheetUrl: "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0"
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No data found</div>;

  return (
    <div>
      {data.map((production, index) => (
        <div key={index}>
          <h3>{production.title || production.nameOfProduction}</h3>
          {production.nameOfCharacter && <p>Character: {production.nameOfCharacter}</p>}
          {production.location && <p>Location: {production.location}</p>}
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
};
```

---

## Troubleshooting

**Problem:** "Failed to fetch Google Sheet" error
- **Solution:** Make sure your sheet is published (Method 1) or publicly viewable (Method 2)

**Problem:** Data is empty
- **Solution:** Check that your sheet has data rows (not just headers) and that column names match expected fields

**Problem:** API key errors (Method 2)
- **Solution:** Make sure the Google Sheets API is enabled in your Google Cloud project

**Problem:** CORS errors
- **Solution:** Use Method 1 (Published CSV) - it doesn't have CORS restrictions

---

## Security Note

- **Method 1 (Published CSV):** Your sheet data will be publicly accessible to anyone with the link. Only use this for non-sensitive data.
- **Method 2 (API Key):** Never commit your API key to version control. Use environment variables:
  ```tsx
   apiKey: import.meta.env.VITE_GOOGLE_SHEETS_API_KEY
  ```
  And add `.env` to your `.gitignore` file.

