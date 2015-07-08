Vagrant.configure("2") do |config|
  
  config.vm.define "app" do |v|
    v.vm.provider "docker" do |d|
      d.build_dir = "./"
      d.cmd = ["npm", "start"]
      d.remains_running = false
      d.ports = ["80:80"]
      d.ports = ["443:443"]
    end
  end
  
end