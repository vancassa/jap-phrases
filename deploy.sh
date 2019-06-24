set -e
# Any subsequent(*) commands which fail will cause the shell script to exit immediately
cd client
npm run build
cd ..
git add .
git commit -m "Deploy"
git push heroku master
echo "Done!"