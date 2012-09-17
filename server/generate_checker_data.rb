require_relative "google_connector.rb"

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
    connection = GoogleConnector.new("0AmvGiQY4WDYHdFhxdnI1R0lYY19WREFBX21KdHRlZ0E")
    File.open(filename, 'w') do |f|
      connection.get_worksheet(3).rows.drop(1).each do |row|
        f << Student.new(row)
      end
    end
  end

end

DataFromGoogle::generate_data(ARGV[0])
