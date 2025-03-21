from flask import Flask, render_template, url_for, send_from_directory
import os

app = Flask(__name__, static_folder="static", template_folder="templates")


# Add a more specific route for CSS files
@app.route("/static/css/<path:filename>")
def serve_css(filename):
    return send_from_directory(os.path.join(app.root_path, "static", "css"), filename)


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
