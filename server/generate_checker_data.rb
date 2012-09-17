require 'json'
require "google_drive"

class Student < Hash
  def initialize row
    self["name"] = row[0]
    self["name_en"] = row[1]
    self["email"] = row[2]
    self["group"] = row[3]
  end

  def to_s
    self.reduce("") { |r, s| r + s[1] + "\t" } + "\n"
  end
end

module DataFromGoogle
  def self.generate_data filename
    File.open(filename, 'w') do |f|
      get_worksheet.rows.drop(1).each do |row|
        f << Student.new(row)
      end
    end
  end

  private

  def self.get_worksheet
    session = GoogleDrive.login("aleksandrsher@gmail.com", "G0Dsp#ll")
    key = "0AmvGiQY4WDYHdFhxdnI1R0lYY19WREFBX21KdHRlZ0E"
    ws = session.spreadsheet_by_key(key).worksheets[3]
  end
end

DataFromGoogle::generate_data(ARGV[0])
