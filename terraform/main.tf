terraform {
  required_providers {
    local = {
      source = "hashicorp/local"
    }
  }
}

resource "local_file" "readme" {
  filename = "README.txt"
  content  = var.project_name
}

resource "local_file" "app_folder" {
  filename = "app/.keep"
  content  = ""
}

resource "local_file" "logs_folder" {
  filename = "logs/.keep"
  content  = ""
}

resource "local_file" "info" {
  filename = "INFO.txt"
  content  = local_file.readme.content
}