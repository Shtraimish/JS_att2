class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched the all ${this.time} of ${this.title}`
    );
  }
}
// const batman = new Video("batman", "admin", 123);
// const superman = new Video("superman", "user", 456);

// batman.watch();
// superman.watch();

const library = [
  { title: "fdfdd", uploader: "asr", time: 0 },
  { title: "123", uploader: "SDFG", time: 0 },
  { title: "efg", uploader: "ggggg", time: 0 },
  { title: "eeeee", uploader: "kkkkkkkk", time: 0 },
  { title: "ff", uploader: "gggg", time: 0 },
];

const ebanoeGovno = library.map(
  (movie) => new Video(movie.title, movie.uploader, movie.time)
);
ebanoeGovno[ebanoeGovno.length-1].watch();
