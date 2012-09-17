require "google_drive"

class GoogleConnector
  def initialize key
    @key = key
  end
  
  def get_worksheet id
    session.spreadsheet_by_key(@key).worksheets[id]
  end

  private

  def session
    @session ||= GoogleDrive.login(*google_info)
  end

  def google_info
    /(.+?):(.+)/.match(File.read("secret")) { |m| return m[1], m[2] }
  end
end
