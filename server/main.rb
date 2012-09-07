require "google_drive"

def get_json_from_google
  session = GoogleDrive.login("aleksandrsher@gmail.com", "G0Dsp#ll")
  key = "0AmvGiQY4WDYHdFhxdnI1R0lYY19WREFBX21KdHRlZ0E"
  ws = session.spreadsheet_by_key(key).worksheets[2]
  data = []
  ws.rows.drop(1).each do |row|
    student = {}
    student["name"] = row[0]+" "+row[1]
    student["seminar"] = row[2]
    student["lab1"] = row[3]
    student["lab2"] = row[4]
    student["exam"] = row[5]
    data << student
  end
  data
end

get_json_from_google
