const docsData = [
        {
          "title": "Pengaturan Server",
          "description": "Panduan untuk mengatur server aplikasi",
          "commands": {
            "command1": {
              "command": "server start",
              "commanddesc": "Memulai server pada port default"
            },
            "command2": {
              "command": "server stop",
              "commanddesc": "Menghentikan server yang sedang berjalan"
            },
            "command3": {
              "command": "server restart",
              "commanddesc": "Memulai ulang server aplikasi"
            }
          }
        },
        {
          "title": "Manajemen Pengguna",
          "description": "Cara mengelola pengguna dalam sistem",
          "commands": {
            "command1": {
              "command": "user add [nama]",
              "commanddesc": "Menambahkan pengguna baru"
            },
            "command2": {
              "command": "user delete [id]",
              "commanddesc": "Menghapus pengguna berdasarkan ID"
            }
          }
        },
        {
          "title": "Konfigurasi Database",
          "description": "Pengaturan koneksi database",
          "commands": {
            "command1": {
              "command": "db connect [url]",
              "commanddesc": "Menghubungkan ke database"
            },
            "command2": {
              "command": "db backup",
              "commanddesc": "Membuat backup database"
            }
          }
        },
        {
          "title": "Pengelolaan File",
          "description": "Operasi untuk mengelola file dalam sistem",
          "commands": {
            "command1": {
              "command": "file upload [path]",
              "commanddesc": "Mengunggah file ke server"
            },
            "command2": {
              "command": "file list",
              "commanddesc": "Menampilkan daftar file"
            }
          }
        },
        {
          "title": "Monitoring",
          "description": "Memantau kinerja dan status aplikasi",
          "commands": {
            "command1": {
              "command": "monitor status",
              "commanddesc": "Melihat status server saat ini"
            },
            "command2": {
              "command": "monitor logs",
              "commanddesc": "Menampilkan log terbaru"
            }
          }
        },
        {
          "title": "Keamanan",
          "description": "Pengaturan keamanan sistem",
          "commands": {
            "command1": {
              "command": "security scan",
              "commanddesc": "Melakukan pemindaian keamanan"
            },
            "command2": {
              "command": "security update",
              "commanddesc": "Memperbarui modul keamanan"
            }
          }
        },
        {
          "title": "Backup & Restore",
          "description": "Prosedur backup dan pemulihan data",
          "commands": {
            "command1": {
              "command": "backup create",
              "commanddesc": "Membuat backup baru"
            },
            "command2": {
              "command": "backup restore [id]",
              "commanddesc": "Memulihkan data dari backup"
            }
          }
        },
        {
          "title": "API Integration",
          "description": "Cara mengintegrasikan dengan API eksternal",
          "commands": {
            "command1": {
              "command": "api connect [url]",
              "commanddesc": "Menghubungkan ke API eksternal"
            },
            "command2": {
              "command": "api test",
              "commanddesc": "Menguji koneksi API"
            }
          }
        },
        {
          "title": "Notifikasi",
          "description": "Pengaturan sistem notifikasi",
          "commands": {
            "command1": {
              "command": "notify send [pesan]",
              "commanddesc": "Mengirim notifikasi ke pengguna"
            },
            "command2": {
              "command": "notify settings",
              "commanddesc": "Mengatur preferensi notifikasi"
            }
          }
        },
        {
          "title": "Laporan",
          "description": "Membuat dan mengelola laporan",
          "commands": {
            "command1": {
              "command": "report generate [jenis]",
              "commanddesc": "Membuat laporan baru"
            },
            "command2": {
              "command": "report export [format]",
              "commanddesc": "Mengekspor laporan"
            }
          }
        }
      ];

export {docsData}
