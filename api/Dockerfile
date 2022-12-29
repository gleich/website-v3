FROM rust:latest

COPY . .

RUN cargo build --release

ENV RUST_LOG=debug

CMD ["target/release/api"]