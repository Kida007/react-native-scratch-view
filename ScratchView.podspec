require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

pre_install do |installer|
	installer.analysis_result.specifications.each do |s|
        if s.name== 'MCScratchImageView'
            s.swift_version = '4'
        end
    end
end

Pod::Spec.new do |s|
  s.name         = "ScratchView"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.authors       = { "Piyush Gupta" => "piyush.gupta111019@gmail.com" }
  s.homepage     = "https://github.com/kida007/react-native-scratchview"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "kida007" => "yourname@email.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/kida007/react-native-scratchview.git", :tag => "#{s.version}" }
  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency 'React'
  s.dependency 'Kingfisher', '~> 4.0'
  s.dependency 'MCScratchImageView'
  # ...
  # s.dependency "..."
end

