import socket
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer


class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()

        if self.path == '/':
            with open('galaga_menu.html', 'rb') as file:
                response = file.read()
        elif self.path.startswith('/views/'):
            try:
                with open(f'{self.path[1:]}', 'rb') as file:
                    response = file.read()
            except FileNotFoundError:
                response = b'<h1>404 Not Found</h1>'
        else:
            response = b'<h1>404 Not Found</h1>'

        self.wfile.write(response)


def start_server():
    # Запускаем HTTP-сервер
    server_address = ('127.0.0.1', 3000)
    httpd = HTTPServer(server_address, RequestHandler)

    print('Working...')

    # Открытие страницы в браузере
    url = "http://127.0.0.1:3000/"
    webbrowser.open_new(url)

    # Запуск сервера
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()
        print('Server stopped.')


if __name__ == '__main__':
    start_server()
