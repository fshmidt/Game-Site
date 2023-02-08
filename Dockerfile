FROM golang:1.19-alpine3.17 AS builder

ENV GO111MODULE=on

RUN go version

COPY . /github.com/fshmidt/game-site/
WORKDIR /github.com/fshmidt/game-site/

RUN go mod download
RUN go install github.com/cespare/reflex@latest

RUN GOOS=linux go build -o ./.bin/site ./cmd/main.go ./cmd/data_sources.go  ./cmd/injection.go

FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /root/

COPY --from=0 /github.com/fshmidt/game-site/.bin/site .

EXPOSE 8080

CMD ["./site"]