class Project < ActiveRecord::Base
	extend FriendlyId
	friendly_id :title, use: :slugged

	has_attached_file :image, styles: { medium: "900x900>", thumb: "600x600>" }, default_url: "/images/missing.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
