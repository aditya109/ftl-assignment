import os
import configparser

dirname = os.getcwd()
filename = dirname + "\\resources\\TestJSON.json"

cfgfile = open("sample/config.ini", "w")
config = configparser.ConfigParser()
config.add_section('SERVER-RESOURCES')
config.set('SERVER-RESOURCES', 'json-file', filename)
config.write(cfgfile)
cfgfile.close()
