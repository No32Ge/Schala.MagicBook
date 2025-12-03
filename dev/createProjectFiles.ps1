# 项目根目录
$root = "D:\GeMyProject\lab\sch\Schala.MagicBook\dev"  # 改成你的实际路径

# 文件结构定义
$files = @(
    "index.html",
    "ComponentLoader.js",
    "styles.css",
    "components\app-root.html",
    "components\layout-header.html",
    "components\view-list.html",
    "components\view-empty.html",
    "components\comp-word-card.html",
    "components\comp-card-trans.html",
    "components\comp-card-sentence.html",
    "components\comp-card-note.html",
    "components\ui-modal.html",
    "components\ui-form.html",
    "components\raw-footer.html"
)

foreach ($file in $files) {
    $fullPath = Join-Path $root $file
    $folder = Split-Path $fullPath

    # 创建文件夹（如果不存在）
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "创建文件夹: $folder"
    }

    # 创建文件（如果不存在）
    if (!(Test-Path $fullPath)) {
        New-Item -ItemType File -Path $fullPath -Force | Out-Null
        Write-Host "创建文件: $fullPath"
    } else {
        Write-Host "文件已存在，跳过: $fullPath"
    }
}
