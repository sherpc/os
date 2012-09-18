require_relative "google_connector.rb"
require "russian"

def translit name
  Russian.translit(name).sub(/ /, '-').downcase
end

connection = GoogleConnector.new("0AmvGiQY4WDYHdFhxdnI1R0lYY19WREFBX21KdHRlZ0E")
ws = connection.get_worksheet("Students")
ws.rows.drop(1).each_with_index do |row, row_id|
  if row[1] == ''
    ws[row_id+2, 2] = translit(row[0])
  end
end
#ws.save()
