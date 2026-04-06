#!/bin/bash
# Quick deployment script for GoDaddy
# Replace with your actual server details

SERVER="your-server@godaddy.com"
REMOTE_PATH="/var/www/html/"

echo "Uploading files to GoDaddy..."
scp -r /Users/sujaldas/Desktop/kasp/dist/* $SERVER:$REMOTE_PATH

echo "Deployment complete!"
