# This works for Next.js projects currently
# Put this in your root folder of your project and run it using PowerShell

# Use the current directory as the project directory
$project_dir = Get-Location

# Use a fixed name for the output file in the current directory
$output_file = Join-Path $project_dir "code_context.txt"

# Check if the output file exists and remove it if it does
if (Test-Path $output_file) {
    Remove-Item $output_file
}

# List of directories to look for within the 'src' directory
$directories = @("src/components", "src/pages", "src/app", "src/api", "src/styles", "src/utils", "src/hooks", "src/constants", "src/services", "src/types")

# List of file types to ignore
$ignore_files = @("*.ico", "*.png", "*.jpg", "*.jpeg", "*.gif", "*.svg")

# Function to read files and append their content
function Read-Files($dir) {
    Get-ChildItem -Path $dir -Recurse | ForEach-Object {
        if ($_ -is [System.IO.DirectoryInfo]) {
            # If entry is a directory, call this function recursively
            Read-Files $_.FullName
        } elseif ($_ -is [System.IO.FileInfo]) {
            # Check if the file type should be ignored
            $should_ignore = $false
            foreach ($ignore_pattern in $ignore_files) {
                if ($_.Name -like $ignore_pattern) {
                    $should_ignore = $true
                    break
                }
            }

            # If the file type should not be ignored, append its relative path and content to the output file
            if (-not $should_ignore) {
                $relative_path = $_.FullName.Substring($project_dir.Length + 1)
                Write-Output "Processing file: $relative_path"
                Add-Content -Path $output_file -Value "// File: $relative_path"
                Get-Content -Path $_.FullName | Add-Content -Path $output_file
                Add-Content -Path $output_file -Value ""
            }
        }
    }
}

# Call the function for each specified directory in the project directory
foreach ($dir in $directories) {
    $full_dir = Join-Path $project_dir $dir
    if (Test-Path $full_dir) {
        Write-Output "Entering directory: $full_dir"
        Read-Files $full_dir
    } else {
        Write-Output "Directory not found: $full_dir"
    }
}

# Output the path of the generated file for confirmation
Write-Output "The file code_context.txt has been generated at: $output_file"