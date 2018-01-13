ls
lftp -u $FTP_USER,$FTP_PASS $FTP_HOST -e "mirror -e -R  -p ./build/ / ; quit"
sshpass -p '$SSH_PASS' scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -q -r ./build $SSH_USER@$SSH_HOST:/var/www/github
