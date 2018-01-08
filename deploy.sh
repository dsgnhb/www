sudo apt-get install -y lftp
ls
lftp -u $FTP_USER,$FTP_PASS $FTP_HOST -e "mirror -e -R  -p ./build/ / ; quit"