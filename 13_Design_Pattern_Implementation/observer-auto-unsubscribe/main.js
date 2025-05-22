const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');

// Buat subject
const berita = new Subject();

// Buat observers
const observerA = new ConcreteObserver("Observer A", berita);
const observerB = new ConcreteObserver("Observer B", berita);

// Daftarkan observer
berita.attach(observerA);
berita.attach(observerB);

// Kirim beberapa notifikasi
berita.notify("Berita ke-1: Node.js Observer Pattern");
berita.notify("Berita ke-2: Update Event");
berita.notify("Berita ke-3: Breaking News");
berita.notify("Berita ke-4: Final Update");
