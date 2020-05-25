#!/bin/bash

# 1) Build
npm run build

# 2) Publish
pushd artifact

	# Initialize the directory containing the CV as a GIT
	# repository.
	git init

	# Create a `gh-pages` branch; the contents of this branch
	# is what GitHub will publish.
	git checkout -b gh-pages

	# Stage the CV files for commit.
	git add .

	# Commit.
	git commit -m "The public CV of Luke S. Phillips."

	# Push.
	git push -f -q git@github.com:lsphillips/CV.git gh-pages

popd

# 3) Clean
rm -rf artifact
