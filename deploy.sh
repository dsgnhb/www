sudo apt-get install -y lftp
lftp -c "open -u $FTP_USER,$FTP_PASS $FTP_HOST; set ssl:verify-certificate no; mirror -R ~/build/ / "