require "google_drive"
require "e"

module JsonFromGoogle
  def self.all_marks
    data = []
    get_worksheet.rows.drop(1).each do |row|
      data << student_from(row)
    end
    data
  end

  def self.marks email
    get_worksheet.rows.drop(1).each do |row|
      return student_from(row) if row[2] == email
    end
    raise "Email #{email} not found!"
  end
  
  private

  def self.get_worksheet
    session = GoogleDrive.login("aleksandrsher@gmail.com", "G0Dsp#ll")
    key = "0AmvGiQY4WDYHdFhxdnI1R0lYY19WREFBX21KdHRlZ0E"
    ws = session.spreadsheet_by_key(key).worksheets[2]
  end

  def self.student_from row
    student = {}
    student["name"] = row[0]+" "+row[1]
    student["seminar"] = row[3]
    student["lab1"] = row[4]
    student["lab2"] = row[5]
    student["exam"] = row[6]
    student
  end
end

class App < E
  charset 'UTF-8'
  map '/'
  view_path 'views'
  engine :Haml

  def json email=nil
    if email.nil?
      return JsonFromGoogle::all_marks
    else
      return JsonFromGoogle::marks(email)
    end
  end
  
  def marks email
    render_partial
  end

end

App.run :server => :Thin, :Port => 3001
