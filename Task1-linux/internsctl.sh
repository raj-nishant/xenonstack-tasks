#!/bin/bash

# Function for displaying help/usage information
display_help() {
    echo "Usage: internsctl <command> [<options>] [<arguments>]"
    echo "Commands:"
    echo "  cpu getinfo              - Get CPU information"
    echo "  memory getinfo           - Get memory information"
    echo "  user create <username>   - Create a new user"
    echo "  user list                - List all regular users"
    echo "  user list --sudo-only    - List users with sudo permissions"
    echo "  file getinfo <file-name> - Get information about a file"
    echo "Options:"
    echo "  --size, -s               - Print file size"
    echo "  --permissions, -p        - Print file permissions"
    echo "  --owner, -o              - Print file owner"
    echo "  --last-modified, -m      - Print last modified time"
    echo "  --help                   - Display help information"
    echo "  --version                - Display command version"
}

# Function for displaying version information
display_version() {
    echo "internsctl v0.1.0"
}

# Function for creating a new user
create_user() {
    if [ -z "$1" ]; then
        echo "Error: Missing username. Please provide a username."
        exit 1
    fi

    # Command to create a new user with provided username
    sudo useradd "$1" -m -s /bin/bash
    echo "User '$1' created successfully."
}

# Function for listing all regular users or users with sudo permissions
list_users() {
    if [[ "$1" == "--sudo-only" ]]; then
        # Command to list users with sudo permissions
        grep -Po '^sudo.+:\K[^:]+' /etc/group
    else
        # Command to list all regular users
        getent passwd | awk -F: '!/nologin|false/ {print $1}'
    fi
}

# Function for file information retrieval
get_file_info() {
    file_name="$1"
    case "$2" in
        "--size" | "-s" )
            # Command to get file size
            stat -c "%s" "$file_name"
            ;;
        "--permissions" | "-p" )
            # Command to get file permissions
            stat -c "%A" "$file_name"
            ;;
        "--owner" | "-o" )
            # Command to get file owner
            stat -c "%U" "$file_name"
            ;;
        "--last-modified" | "-m" )
            # Command to get last modified time
            stat -c "%y" "$file_name"
            ;;
        * )
            echo "Error: Invalid option. Please use valid options."
            exit 1
            ;;
    esac
}

# Main script logic
case "$1" in
    "cpu" )
        case "$2" in
            "getinfo" ) lscpu ;;
            * ) display_help ;;
        esac
        ;;
    "memory" )
        case "$2" in
            "getinfo" ) free ;;
            * ) display_help ;;
        esac
        ;;
    "user" )
        case "$2" in
            "create" ) create_user "$3" ;;
            "list" ) list_users "$3" ;;
            * ) display_help ;;
        esac
        ;;
    "file" )
        case "$2" in
            "getinfo" ) get_file_info "$3" "$4" ;;
            * ) display_help ;;
        esac
        ;;
    "--help" | * ) display_help ;;
    "--version" ) display_version ;;
esac
