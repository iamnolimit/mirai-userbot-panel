from flask import Flask, render_template, url_for

app = Flask(__name__, static_folder="static", template_folder="templates")

# Add a route specifically for static files to ensure they're accessible on Vercel
@app.route('/static/<path:filename>')
def static_files(filename):
    return app.send_static_file(filename)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
