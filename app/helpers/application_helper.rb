module ApplicationHelper

	class HTMLwithPygments < Redcarpet::Render::HTML
		def block_code(code, language)
			Pygments.highlight(code, lexer: language, options: {lineanchors: "line"})
		end
		def autolink(link, link_type)
      case link_type
      when :url then url_link(link)
      end
    end
    def url_link(link)
      if link.include?("https://www.youtube.com")
        youtube_link(link)
      else
        normal_link(link)
      end
    end
    def youtube_link(link)
      parameters_start = link.index('=')
      video_id = link[parameters_start + 1..-1]
      "<iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/#{video_id}?autoplay=0\" allowfullscreen></iframe>"
    end
    def normal_link(link)
      "<a href=\"#{link}\" target=\"_blank\">#{link}</a>"
    end
	end

	
	def markdown(content)
		renderer = HTMLwithPygments.new(hard_wrap: true, filter_html: true)
		options = {
			autolink: true,
			no_intra_emphasis: true,
			ugly: true,
			disable_indented_code_blocks: true,
			fenced_code_blocks: true,
			lax_html_blocks: true,
			strikethrough: true,
			superscript: true
		}
		Redcarpet::Markdown.new(renderer, options).render(content).html_safe
	end
end
