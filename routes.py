from flask import Blueprint, g, render_template
import secrets


main_bp = Blueprint("main", __name__, url_prefix="/")


@main_bp.route("/")
def sensors_basic():
    return render_template("sensors_basic.html")


@main_bp.before_request
def set_nonce():
    g.csp_nonce = secrets.token_urlsafe(16)


@main_bp.after_request
def apply_csp(response):
    response.headers["Content-Security-Policy"] = (
        f"default-src 'self'; "
        f"script-src 'self' 'nonce-{g.csp_nonce}'; "
        f"style-src 'self' https://fonts.googleapis.com; "
        f"font-src 'self' https://fonts.gstatic.com; "
        f"connect-src 'self' ws: wss: https:;"
    )
    return response


@main_bp.context_processor
def inject_nonce():
    return dict(csp_nonce=g.csp_nonce)
