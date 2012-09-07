require "google_drive"

# Logs in.
# You can also use OAuth. See document of
# GoogleDrive.login_with_oauth for details.
session = GoogleDrive.login("aleksandrsher@gmail.com", "G0Dsp#ll")

key = "0AmvGiQY4WDYHdFhxdnI1R0lYY19WREFBX21KdHRlZ0E"
ws = session.spreadsheet_by_key(key).worksheets[2]

p ws.rows[1]
