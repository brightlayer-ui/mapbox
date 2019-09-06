#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color


echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./react-demo/node_modules/@pxblue/mapbox"
mkdir "./react-demo/node_modules/@pxblue/mapbox"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";
cp -r ./package.json ./react-demo/node_modules/@pxblue/mapbox/package.json
cp -r ./default.json ./react-demo/node_modules/@pxblue/mapbox
cp -r ./dark.json ./react-demo/node_modules/@pxblue/mapbox

echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BRED}Linking Components: ${NC}"
if [ ! -f ./react-demo/node_modules/@pxblue/mapbox/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -f ./react-demo/node_modules/@pxblue/mapbox/dark.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -f ./react-demo/node_modules/@pxblue/mapbox/default.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi

echo -e "${GRAY}Complete${NC}\r\n"