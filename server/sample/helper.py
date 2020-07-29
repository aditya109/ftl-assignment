try:
    import json
    import configparser
except Exception as e:
    print = log.error
    print(e)

def get_config():
    CONFIG = {
        'SERVER-RESOURCES': {
            'json-file': None,
        },
    }
    config = configparser.ConfigParser()
    config.read("config.ini")
    CONFIG['SERVER-RESOURCES']['json-file'] = config['SERVER-RESOURCES']['json-file']
    return CONFIG


def json_provider():
    json_file_location = get_config()['SERVER-RESOURCES']['json-file']

    with open(json_file_location, 'r') as file:
        json_string = file.read()
        return json.loads(json_string)
