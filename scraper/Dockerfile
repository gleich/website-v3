FROM golang:1.19.3

COPY . /app

WORKDIR /app

RUN go build .

CMD ["./scraper"]