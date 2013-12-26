if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
  echo -e "Starting to update bower-anila\n"

  #copy data we're interested in to other place
  cp -R dist/assets/* bower-anila/

  #go to home and setup git
  cd $HOME
  git config --global user.email "bravocado.project@gmail.com"
  git config --global user.name "bravocado"

  #using token clone gh-pages branch
  git clone --quiet --branch=master https://${GH_TOKEN}@github.com/bravocado/bower-anila.git  master > /dev

  #go into diractory and copy data we're interested in to that directory
  cd bower-anila
  cp -Rf $HOME/bower-anila/* .

  #add, commit and push files
  git add -f .
  git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed to bower-anila"
  git push -fq origin master > /dev

  echo -e "Done magic with shit\n"
fi