Place your profile image here as `avatar.jpg` so the site shows your photo in the hero.

Recommended size: square image, ~800x800 or 600x600, optimized for web.

Example PowerShell command to move a downloaded image into the project (adjust filename):

```powershell
# From your Downloads folder (adjust filename and paths as needed)
Move-Item -Path "$env:USERPROFILE\Downloads\cedi-avatar.jpg" -Destination "C:\MALVAR NEW\src\assets\avatar.jpg"
```

If your project is on `D:` use the appropriate path, e.g.: `D:\Projects\MALVAR NEW\src\assets\avatar.jpg`.
