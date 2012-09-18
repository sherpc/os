require_relative "google_connector.rb"

def simplify data
  "'" + data.sub(/[0-9]:/, "")
end

def simplify_lab2 data
  data.sub(/[0-9]:0/, "").sub(/:00/, "")
end

connection = GoogleConnector.new("0AmvGiQY4WDYHdFhxdnI1R0lYY19WREFBX21KdHRlZ0E")
ws = connection.get_worksheet("Vars")
ws.rows.drop(1).each_with_index do |row, row_id|
  if row[1] != ''
    ws[row_id+2, 2] = simplify(row[1])
    ws[row_id+2, 3] = simplify_lab2(row[2])
    ws[row_id+2, 4] = simplify(row[3])
  end
end
#ws.save()
