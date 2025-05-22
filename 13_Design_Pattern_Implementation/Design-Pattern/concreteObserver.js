const Observer = require('./observer');

class ConcreteObserver extends Observer {
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;       // Simpan referensi subject
        this.notificationCount = 0;   // Hitung jumlah notifikasi
    }

    update(data) {
        this.notificationCount++;
        console.log(`${this.name} menerima data: ${data}`);

        if (this.notificationCount >= 3) {
            console.log(`${this.name} berhenti berlangganan setelah 3 notifikasi.`);
            this.subject.detach(this);
        }
    }
}

module.exports = ConcreteObserver;
