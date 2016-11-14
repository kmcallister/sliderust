# sliderust

sliderust is a barebones HTML slide deck library.  Its main distinguishing feature is that the slides will work in [Servo](https://github.com/servo/servo) today.<sup>‡</sup>

Check out the [live demo!](http://kmcallister.github.io/sliderust/)  Use the left and right arrow keys to navigate.

`slides.md` contains the example slides in Markdown format.  The script `build.sh` will convert them to HTML using `rustdoc`.

### Troubleshooting

* If `build.sh` fails to run `rustdoc`, make sure that Rust and Cargo are
  [installed](https://www.rust-lang.org/en-US/downloads.html)  `~/.cargo/bin`
  is in your PATH

* Slides may display incorrectly if you point Servo directly at `slides.html`
  on your filesystem. Instead, you can locally test changes by running `python
  -m SimpleHTTPServer` in the same directory as your generated slides, then
  pointing Servo at `0.0.0.0:8000/slides.html`


‡ In theory. Servo is a work-in-progress and may do anything it likes up to and including eating your laundry.
