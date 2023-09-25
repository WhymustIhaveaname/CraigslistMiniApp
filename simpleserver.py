#!/usr/bin/env python

import http.server
import socketserver

directory = '.'
port = 8000

handler = http.server.SimpleHTTPRequestHandler
handler.directory = directory

with socketserver.TCPServer(("", port), handler) as httpd:
    print(f"Serving at port {port}")
    httpd.serve_forever()
