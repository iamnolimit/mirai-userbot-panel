// Documentation data
const docsData = [
  {
    title: "Server Commands",
    description: "Basic server management commands for administrators.",
    commands: {
      1: {
        command: "/start",
        commanddesc: "Start the server instance"
      },
      2: {
        command: "/stop",
        commanddesc: "Stop the server instance"
      },
      3: {
        command: "/restart",
        commanddesc: "Restart the server instance"
      },
      4: {
        command: "/status",
        commanddesc: "Check the current server status"
      }
    }
  },
  {
    title: "User Management",
    description: "Commands for managing user accounts and permissions.",
    commands: {
      1: {
        command: "/adduser [username]",
        commanddesc: "Add a new user to the system"
      },
      2: {
        command: "/deluser [username]",
        commanddesc: "Remove a user from the system"
      },
      3: {
        command: "/passwd [username]",
        commanddesc: "Change a user's password"
      },
      4: {
        command: "/grant [username] [permission]",
        commanddesc: "Grant specific permissions to a user"
      }
    }
  },
  {
    title: "File Operations",
    description: "Commands for file and directory management.",
    commands: {
      1: {
        command: "/ls [path]",
        commanddesc: "List files in specified directory"
      },
      2: {
        command: "/cp [source] [destination]",
        commanddesc: "Copy files or directories"
      },
      3: {
        command: "/mv [source] [destination]",
        commanddesc: "Move or rename files or directories"
      },
      4: {
        command: "/rm [path]",
        commanddesc: "Remove files or directories"
      }
    }
  },
  {
    title: "Network Tools",
    description: "Commands for network diagnostics and configuration.",
    commands: {
      1: {
        command: "/ping [host]",
        commanddesc: "Test connectivity to a specified host"
      },
      2: {
        command: "/ifconfig",
        commanddesc: "Display network interface configuration"
      },
      3: {
        command: "/nslookup [domain]",
        commanddesc: "Query DNS for domain information"
      },
      4: {
        command: "/firewall [action]",
        commanddesc: "Configure firewall settings"
      }
    }
  },
  {
    title: "Database Management",
    description: "Commands for database administration and queries.",
    commands: {
      1: {
        command: "/dbconnect [database]",
        commanddesc: "Connect to a specific database"
      },
      2: {
        command: "/dbbackup [database]",
        commanddesc: "Create a backup of a database"
      },
      3: {
        command: "/dbrestore [backup]",
        commanddesc: "Restore a database from backup"
      },
      4: {
        command: "/dbstatus",
        commanddesc: "Check database server status"
      }
    }
  },
  {
    title: "Security Controls",
    description: "Commands for security monitoring and management.",
    commands: {
      1: {
        command: "/audit [component]",
        commanddesc: "Run security audit on system component"
      },
      2: {
        command: "/encrypt [file]",
        commanddesc: "Encrypt a file or data stream"
      },
      3: {
        command: "/decrypt [file]",
        commanddesc: "Decrypt a previously encrypted file"
      },
      4: {
        command: "/secpolicy [action]",
        commanddesc: "View or modify security policies"
      }
    }
  },
  {
    title: "Monitoring Tools",
    description: "Commands for system monitoring and diagnostics.",
    commands: {
      1: {
        command: "/top",
        commanddesc: "Display system resource usage"
      },
      2: {
        command: "/logs [service]",
        commanddesc: "View logs for specified service"
      },
      3: {
        command: "/df",
        commanddesc: "Check disk space usage"
      },
      4: {
        command: "/alert [configure]",
        commanddesc: "Set up system alerts"
      }
    }
  },
  {
    title: "Backup & Recovery",
    description: "Commands for system backup and restoration.",
    commands: {
      1: {
        command: "/backup [scope]",
        commanddesc: "Create system or data backup"
      },
      2: {
        command: "/restore [backup]",
        commanddesc: "Restore from backup"
      },
      3: {
        command: "/schedule [task]",
        commanddesc: "Schedule automated backups"
      },
      4: {
        command: "/verify [backup]",
        commanddesc: "Verify backup integrity"
      }
    }
  },
  {
    title: "Application Management",
    description: "Commands for managing installed applications.",
    commands: {
      1: {
        command: "/applist",
        commanddesc: "List all installed applications"
      },
      2: {
        command: "/appinstall [package]",
        commanddesc: "Install a new application"
      },
      3: {
        command: "/appremove [package]",
        commanddesc: "Remove an installed application"
      },
      4: {
        command: "/appupdate [package]",
        commanddesc: "Update an installed application"
      }
    }
  },
  {
    title: "System Configuration",
    description: "Commands for modifying system configuration.",
    commands: {
      1: {
        command: "/sysconfig [component]",
        commanddesc: "View or modify system configuration"
      },
      2: {
        command: "/timezone [zone]",
        commanddesc: "Set system timezone"
      },
      3: {
        command: "/language [locale]",
        commanddesc: "Set system language"
      },
      4: {
        command: "/scheduler [task]",
        commanddesc: "Manage scheduled tasks"
      }
    }
  }
];
