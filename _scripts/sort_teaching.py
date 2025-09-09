import yaml
from collections import OrderedDict

def add_sort_order(input_file, output_file):
    """
    Reads a YAML file, adds a sort_order field to each entry, and
    writes the updated data to a new YAML file. The sort_order field is
    placed immediately after the 'when' field, and a blank line is added
    after each entry.

    The sort_order field is calculated based on the year and season
    in the 'when' field. For entries with multiple semesters, the
    sort_order is set to the most recent semester.

    Args:
        input_file (str): Path to the original YAML file.
        output_file (str): Path to the new YAML file.
    """
    season_map = {
        'Winter': 0.0,
        'Spring': 0.25,
        'Summer': 0.5,
        'Fall': 0.75
    }

    try:
        with open(input_file, 'r') as file:
            data = yaml.safe_load(file)
    except FileNotFoundError:
        print(f"Error: The file '{input_file}' was not found.")
        return
    except yaml.YAMLError as e:
        print(f"Error parsing YAML file: {e}")
        return

    if not isinstance(data, list):
        print("Error: The YAML file does not contain a list of entries.")
        return

    updated_data = []
    for entry in data:
        updated_entry = OrderedDict()
        
        # Calculate the sort_order value
        sort_order_value = None
        if 'when' in entry and isinstance(entry['when'], str):
            semesters = [s.strip() for s in entry['when'].split(',')]
            
            sort_values = []
            for semester in semesters:
                parts = semester.split()
                if len(parts) == 2:
                    season_str, year_str = parts[0], parts[1]
                    try:
                        year = int(year_str)
                        season_value = season_map.get(season_str)
                        if season_value is not None:
                            sort_values.append(year + season_value)
                        else:
                            print(f"Warning: Unknown season '{season_str}' in entry: {entry}")
                    except ValueError:
                        print(f"Warning: Could not parse year from '{year_str}' in entry: {entry}")

            if sort_values:
                sort_order_value = max(sort_values)
        
        # Rebuild the dictionary to control key order
        for key, value in entry.items():
            updated_entry[key] = value
            if key == 'when' and sort_order_value is not None:
                updated_entry['sort_order'] = sort_order_value
        
        updated_data.append(updated_entry)
        updated_data.append(None) # Add a blank line marker

    # Remove the final blank line marker at the end of the list
    if updated_data and updated_data[-1] is None:
        updated_data.pop()

    try:
        # Use a custom YAML dumper to handle OrderedDict and preserve order
        class OrderedDumper(yaml.Dumper):
            def represent_none(self, data):
                return self.represent_scalar('tag:yaml.org,2002:null', '')
        
        def dict_representer(dumper, data):
            return dumper.represent_mapping('tag:yaml.org,2002:map', data.items())
        
        OrderedDumper.add_representer(OrderedDict, dict_representer)

        with open(output_file, 'w') as file:
            yaml.dump(updated_data, file, Dumper=OrderedDumper, default_flow_style=False, allow_unicode=True)
        print(f"Successfully added 'sort_order' field and saved to '{output_file}'.")
    except IOError as e:
        print(f"Error writing to file '{output_file}': {e}")


# Example usage:
# Make sure your original YAML file is named 'teaching.yml'
# The script will create a new file named 'teaching_updated.yml'
add_sort_order('teaching.yml', 'teaching_updated.yml')
