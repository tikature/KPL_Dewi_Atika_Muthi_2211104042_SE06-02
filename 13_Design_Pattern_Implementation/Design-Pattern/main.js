const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');

// Inisialisasi subject
const subject = new Subject();

// Inisialisasi observer dengan referensi ke subject
const observer1 = new ConcreteObserver('Observer 1', subject);
const observer2 = new ConcreteObserver('Observer 2', subject);

// Tambahkan observer ke subject
subject.attach(observer1);
subject.attach(observer2);

// Kirim 4 notifikasi
subject.notify("Berita ke-1");
subject.notify("Berita ke-2");
subject.notify("Berita ke-3");
subject.notify("Berita ke-4");
