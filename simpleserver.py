#!/usr/bin/env python

import http.server
import socketserver

directory = '.'
port = 8000

handler = http.server.SimpleHTTPRequestHandler
handler.directory = directory

with socketserver.TCPServer(("", port), handler) as httpd:
    print(f"Serving at http://127.0.0.1:{port}/index.html")
    httpd.serve_forever()
