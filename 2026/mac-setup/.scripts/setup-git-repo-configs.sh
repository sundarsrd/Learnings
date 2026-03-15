#!/bin/bash
# decision: keep git config settings at repository level local settings (not global)
# setup config from sundarsrd/learnings repo.
# https://pat@github.com/sundarsrd/Learnings.git
@echo "Setting up default git config for sundarsrd/learnings repo"
pushd /Users/sivdevas/work/code/git/sundarsrd/Learnings
git config user.name "sivaramasundar"
git config user.email "sivaramasundar@gmail.com"
@echo "Done setting up git config for sundarsrd/learnings repo"
git config --list 
popd 