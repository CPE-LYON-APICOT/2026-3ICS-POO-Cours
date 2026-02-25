# =============================================================================
# Generate.ps1 - Wrapper PowerShell pour render.R
# =============================================================================
# Usage:
#   .\Generate.ps1                                    # Tous les .rmd
#   .\Generate.ps1 .\TD\Seance1.Rmd                  # Fichier spécifique
#   gci "TD*.rmd" | .\Generate.ps1                   # Pipeline
#   gci -Recurse "*.rmd" | .\Generate.ps1            # Récursif pipeline
# =============================================================================

[CmdletBinding()]
param(
    [Parameter(ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true)]
    [Alias("FullName")]
    [string[]]$Path
)

begin {
    $allPaths = @()
}

process {
    foreach ($p in $Path) {
        if ($p -and (Test-Path $p)) {
            $allPaths += (Resolve-Path $p).Path
        }
        elseif ($p) {
            Write-Warning "Fichier introuvable: $p"
        }
    }
}

end {
    $scriptDir = $PSScriptRoot
    if (-not $scriptDir) {
        $scriptDir = Get-Location
    }

    Push-Location $scriptDir

    try {
        if ($allPaths.Count -gt 0) {
            Write-Host "=== Generate: $($allPaths.Count) fichier(s) ===" -ForegroundColor Cyan
            # Convertir en chemins relatifs par rapport au script dir
            [string[]]$relativePaths = @($allPaths | ForEach-Object {
                [System.IO.Path]::GetRelativePath($scriptDir, $_)
            })
            & Rscript render.R $relativePaths
        }
        else {
            Write-Host "=== Generate: tous les fichiers .rmd ===" -ForegroundColor Cyan
            & Rscript render.R
        }
    }
    finally {
        Pop-Location
    }
}
