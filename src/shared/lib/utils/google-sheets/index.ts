import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;

export async function addApplicationRow(data: {
  name: string;
  email: string;
  phone: string;
  position: string;
}) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toLocaleString("ru-RU"),
          data.name,
          data.email,
          data.phone,
          data.position,
        ],
      ],
    },
  });
}
