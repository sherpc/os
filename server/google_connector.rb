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
    @session ||= GoogleDrive.login("aleksandrsher@gmail.com", "G0Dsp#ll")
  end
end
