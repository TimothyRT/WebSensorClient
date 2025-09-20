from flask import Blueprint, render_template


main_bp = Blueprint("main", __name__, url_prefix="/")


@main_bp.route("/")
def sensors_basic():
    return render_template("sensors_basic.html")


@main_bp.after_request
def apply_csp(response):
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        "connect-src 'self' ws: wss: https:;"
    )
    return response
