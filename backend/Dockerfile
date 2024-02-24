FROM python:3.11.4

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

RUN     pip install --upgrade pip
COPY    requirements.txt requirements.txt
RUN     pip3 install -r requirements.txt

COPY . .

# COPY /python_settings/custom_libs/ /usr/local/lib/python3.11/site-packages/

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]