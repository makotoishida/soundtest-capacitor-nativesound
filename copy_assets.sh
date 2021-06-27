npm run build && npx cap sync

# Copy sound files to Android project.
cp -R ./assets/sounds ./android/app/src/main/assets/
rm ./android/app/src/main/assets/sounds/*.mp3
rm ./android/app/src/main/assets/sounds/se*.ogg

# Copy sound files to iOS project
cp -R ./assets/sounds ./ios/App/App/
rm ./ios/App/App/sounds/*.ogg
rm ./ios/App/App/sounds/*.wav

echo "Sound files were copied successfully."