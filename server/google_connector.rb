require "google_drive"

class GoogleConnector
  def initialize key
    @key = key
  end
  
  def get_worksheet_by_title title
    session.spreadsheet_by_key(@key).worksheet_by_title(title)
  end

  def each_row_by_title title, &block
      get_worksheet(title).rows.drop(1).each do |row|
        yield row
      end
  end

  private

  def session
    @session ||= GoogleDrive.login(*google_info)
  end

  def google_info
    /(.+?):(.+)/.match(File.read("secret")) { |m| return m[1], m[2] }
  end
end
