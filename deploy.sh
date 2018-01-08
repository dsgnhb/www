sudo apt-get install -y lftp
lftp -u $FTP_USER,$FTP_PASS $FTP_HOST \ -e "mirror -e -R -x  -p ./build/ / ; quit"