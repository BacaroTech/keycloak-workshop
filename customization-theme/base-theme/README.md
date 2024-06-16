
ADD Tailwind

install tailwind
``` sh
    npm install tailwind tailwind-direction @tailwindcss/forms
```

init tailwind
``` sh
npx tailwindcss init
```

creation input output style files

create input.css file in /src/input.css
create asset folder in /login/resource/asset

create scripti in package.json
``` json
  "scripts": {
    "style": "npx tailwindcss -i ./src/input.css -o ./login/resources/assets/output.css --watch",
  },
```
if you change input/output style files name or folder's path, update script

run script
``` sh
npm run style
```
