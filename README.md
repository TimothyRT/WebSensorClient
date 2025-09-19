# WebSensorClient (proof-of-concept Tugas Akhir)

## DOMCloud deployment recipe

```yaml
features:
  - 'python 3.11.4'
  - mysql
  - ssl
  - 'ssl always'
source: 'https://github.com/TimothyRT/WebSensorClient'
nginx:
  root: public_html/app/static
  passenger:
    enabled: 'on'
    app_env: development
    app_root: public_html
    app_type: python
    startup_file: __main__.py
    python: .pyenv/shims/python
    env_var_list:
      - PYTHONDONTWRITEBYTECODE=1
commands:
  - 'pip install -r requirements.txt'
  - 'echo "application = app" >> __main__.py'
```