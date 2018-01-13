ls
lftp -u $FTP_USER,$FTP_PASS $FTP_HOST -e "mirror -e -R  -p ./build/ / ; quit"
sshpass -p '$SSH_PASS' scp -r ./build/ $SSH_USER@$SSH_HOST:/var/www/github