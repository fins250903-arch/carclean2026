param(
    [ValidateSet('ftps', 'sftp')]
    [string]$Protocol = 'ftps',

    [int]$Port = 0,

    [string]$ServerHost = $env:XSERVER_HOST,

    [string]$Username = $env:XSERVER_USER,

    [string]$Password = $env:XSERVER_PASSWORD,

    [string]$RemotePath = $env:XSERVER_REMOTE_PATH,

    [string]$SourceDir = (Join-Path $PSScriptRoot '..\out')
)

$ErrorActionPreference = 'Stop'

function Require-Value {
    param(
        [string]$Value,
        [string]$Name
    )

    if ([string]::IsNullOrWhiteSpace($Value)) {
        throw "$Name is required. Pass it as a parameter or environment variable."
    }
}

function To-PlainText {
    param([Security.SecureString]$SecureValue)

    $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($SecureValue)
    try {
        return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
    }
    finally {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
    }
}

if (-not (Get-Command curl.exe -ErrorAction SilentlyContinue)) {
    throw 'curl.exe was not found.'
}

if (-not (Test-Path $SourceDir)) {
    throw "Source directory was not found: $SourceDir"
}

Require-Value -Value $ServerHost -Name 'ServerHost'
Require-Value -Value $Username -Name 'Username'

if ([string]::IsNullOrWhiteSpace($Password)) {
    $securePassword = Read-Host 'Xserver password' -AsSecureString
    $Password = To-PlainText -SecureValue $securePassword
}

if ([string]::IsNullOrWhiteSpace($RemotePath)) {
    $RemotePath = Read-Host 'Remote path on Xserver (example: public_html or /home/account/example.com/public_html)'
}

Require-Value -Value $RemotePath -Name 'RemotePath'

$resolvedSource = (Resolve-Path $SourceDir).Path
$normalizedRemotePath = ($RemotePath -replace '\\', '/') -replace '^/+', ''
$auth = "$Username`:$Password"

$scheme = if ($Protocol -eq 'ftps') { 'ftp' } else { 'sftp' }

if ($Port -le 0) {
    $Port = if ($Protocol -eq 'ftps') { 21 } else { 22 }
}

$files = Get-ChildItem -Path $resolvedSource -File -Recurse | Sort-Object FullName

if ($files.Count -eq 0) {
    throw "No files found in $resolvedSource"
}

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($resolvedSource.Length).TrimStart('\') -replace '\\', '/'
    $remoteUrl = "${scheme}://$ServerHost`:$Port/$normalizedRemotePath/$relativePath"

    $curlArgs = @(
        '--fail',
        '--silent',
        '--show-error',
        '--user', $auth,
        '--upload-file', $file.FullName,
        '--ftp-create-dirs'
    )

    if ($Protocol -eq 'ftps') {
        $curlArgs += @('--ssl-reqd')
    }

    $curlArgs += $remoteUrl

    Write-Host "Uploading $relativePath"
    & curl.exe @curlArgs

    if ($LASTEXITCODE -ne 0) {
        throw "Upload failed: $relativePath"
    }
}

Write-Host 'Upload completed.'