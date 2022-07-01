# CN_mySQL_week8_38

<!-- CREATE -->

node src/app.js --add --title "Spiderman" --actor "Andrew Garfeild"
node src/app.js --add --title "Spiderman 2" --actor "Andrew Garfeild"
node src/app.js --add --title "The Shawshank Redemption" --actor "Tim Robbins"
node src/app.js --add --title "Schindler's List" --actor "Liam Neeson"
node src/app.js --add --title "Fight Club" --actor "Brad Pitt"
node src/app.js --add --title "The Silence of the Lambs" --actor "Anthony Hopkins"
node src/app.js --add --title "Alien" --actor "Sigourney Weaver"

<!-- READ -->

node src/app.js --list

<!-- UPDATE --> - this is not

node src/app.js --update "Fight Club" --actor "Edward Norton"
node src/app.js --update --title "Fight Club" --actor "Brad Pitt"

<!-- UPDATE 2 --> - this is currenty working

node src/app.js --update --newActor "Edward Norton" --oldTitle "Fight Club"

<!-- DELETE -->

node src/app.js --delete --title "Spiderman"
node src/app.js --delete --title "Spiderman 2"
