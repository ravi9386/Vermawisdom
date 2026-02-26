#!/bin/bash

# Verma Speaks - Local Server Setup Script

echo "🚀 Starting Verma Speaks Blog Server..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "📍 Using Python 3 HTTP Server"
    echo "🌐 Open your browser and go to: http://localhost:8000"
    echo ""
    echo "✋ Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000

# Check if Node.js is available
elif command -v npx &> /dev/null; then
    echo "📍 Using Node.js HTTP Server"
    echo "🌐 Open your browser and go to: http://localhost:8000"
    echo ""
    echo "✋ Press Ctrl+C to stop the server"
    echo ""
    npx http-server

# Check for Ruby
elif command -v ruby &> /dev/null; then
    echo "📍 Using Ruby HTTP Server"
    echo "🌐 Open your browser and go to: http://localhost:8000"
    echo ""
    echo "✋ Press Ctrl+C to stop the server"
    echo ""
    ruby -run -ehttpd . -p8000

else
    echo "❌ Error: No suitable server found!"
    echo ""
    echo "Please install one of:"
    echo "  - Python 3: https://www.python.org/"
    echo "  - Node.js: https://nodejs.org/"
    echo "  - Ruby: https://www.ruby-lang.org/"
    exit 1
fi
