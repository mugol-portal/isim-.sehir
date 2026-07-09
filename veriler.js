// İsim-Şehir Oyunu — Kelime Veritabanı
// Her harf için her kategoride BİRDEN FAZLA seçenek var.
// Oyun her round'da rastgele birini seçer, böylece ipucu ve rakip cevapları hep aynı çıkmaz.

const database = {
    "A": {
        isim: ["Aylin", "Ahmet", "Ayşe", "Ali", "Aslı", "Arda", "Asya", "Alper"],
        sehir: ["Ankara", "Antalya", "Adana", "Adıyaman", "Afyon", "Aksaray", "Amasya", "Artvin"],
        hayvan: ["Aslan", "Ayı", "Ahtapot", "Antilop", "Arı", "Atmaca", "Alabalık"],
        bitki: ["Armut", "Akasya", "Ardıç", "Adaçayı", "Anason", "Ayçiçeği"],
        esya: ["Ayna", "Anahtar", "Ağ", "Alet", "Ateşleyici", "Askı"],
        ulke: ["Almanya", "Amerika", "Arjantin", "Avustralya", "Avusturya", "Azerbaycan"]
    },
    "B": {
        isim: ["Burak", "Berkay", "Buse", "Betül", "Barış", "Berrak", "Bilge", "Bahar"],
        sehir: ["Bursa", "Balıkesir", "Batman", "Bartın", "Bayburt", "Bilecik", "Bingöl", "Bolu"],
        hayvan: ["Balık", "Baykuş", "Bukalemun", "Bizon", "Boğa", "Balina", "Böcek"],
        bitki: ["Biber", "Badem", "Böğürtlen", "Buğday", "Begonvil", "Bambu"],
        esya: ["Bavul", "Bardak", "Bilgisayar", "Battaniye", "Bıçak", "Bisiklet"],
        ulke: ["Belçika", "Brezilya", "Bulgaristan", "Bosna Hersek", "Bahreyn", "Barbados"]
    },
    "C": {
        isim: ["Cem", "Ceren", "Canan", "Caner", "Cansu", "Cemre", "Cihan"],
        sehir: ["Ceyhan", "Cizre", "Çorlu"],
        hayvan: ["Ceylan", "Civciv", "Cırcır Böceği"],
        bitki: ["Ceviz", "Cam Güzeli"],
        esya: ["Ceket", "Cetvel", "Cüzdan", "Cep Telefonu"],
        ulke: ["Cezayir", "Cibuti", "Cırıt"]
    },
    "Ç": {
        isim: ["Çağla", "Çınar", "Çiğdem", "Çağatay"],
        sehir: ["Çanakkale", "Çankırı", "Çorum", "Çankaya"],
        hayvan: ["Çakal", "Çita", "Çekirge", "Çaylak"],
        bitki: ["Çilek", "Çam", "Çınar Ağacı", "Çuha Çiçeği"],
        esya: ["Çanta", "Çatal", "Çekiç", "Çamaşır Makinesi"],
        ulke: ["Çad", "Çekya", "Çin"]
    },
    "D": {
        isim: ["Deniz", "Duygu", "Doğan", "Derya", "Dila", "Devrim"],
        sehir: ["Denizli", "Diyarbakır", "Düzce", "Düzköy"],
        hayvan: ["Deve", "Domuz", "Dinozor", "Deniz Kaplumbağası"],
        bitki: ["Dereotu", "Defne", "Domates", "Duttu"],
        esya: ["Defter", "Direksiyon", "Dolap", "Duvar Saati"],
        ulke: ["Danimarka", "Dominik Cumhuriyeti"]
    },
    "E": {
        isim: ["Elif", "Emre", "Eda", "Ege", "Ecrin", "Enes"],
        sehir: ["Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir"],
        hayvan: ["Eşek", "Ejderha", "Engerek", "Elephant Balığı"],
        bitki: ["Elma", "Erik", "Enginar", "Ebegümeci"],
        esya: ["Eldiven", "Elektrikli Süpürge", "Ecza Kutusu"],
        ulke: ["Estonya", "Ekvador", "Endonezya", "Etiyopya"]
    },
    "F": {
        isim: ["Fatih", "Feyza", "Furkan", "Filiz", "Fırat"],
        sehir: ["Fethiye", "Fatsa"],
        hayvan: ["Fil", "Flamingo", "Fare", "Foto Balığı"],
        bitki: ["Fesleğen", "Fındık", "Frenk Üzümü"],
        esya: ["Fincan", "Fener", "Fırça", "Fotoğraf Makinesi"],
        ulke: ["Fransa", "Finlandiya", "Filipinler"]
    },
    "G": {
        isim: ["Gamze", "Gökhan", "Gizem", "Görkem", "Gül"],
        sehir: ["Giresun", "Gaziantep", "Gümüşhane"],
        hayvan: ["Geyik", "Gergedan", "Guguk Kuşu", "Gelincik Hayvanı"],
        bitki: ["Gül", "Gelincik", "Greyfurt", "Göknar"],
        esya: ["Gözlük", "Gitar", "Güneş Kremi"],
        ulke: ["Gürcistan", "Guatemala", "Gana", "Güney Kore"]
    },
    "H": {
        isim: ["Hakan", "Hazal", "Hüseyin", "Hilal", "Hasan"],
        sehir: ["Hatay", "Hakkari"],
        hayvan: ["Horoz", "Hamster", "Havuç Kurdu", "Halep Karıncası"],
        bitki: ["Havuç", "Hindiba", "Hercai Menekşe"],
        esya: ["Halı", "Havlu", "Harita", "Hesap Makinesi"],
        ulke: ["Hırvatistan", "Hollanda", "Honduras", "Hindistan"]
    },
    "I": {
        isim: ["Irmak", "Işık"],
        sehir: ["Iğdır"],
        hayvan: ["Istakoz", "Iguana"],
        bitki: ["Ispanak", "Isırgan Otu"],
        esya: ["Izgara"],
        ulke: ["Irak", "İzlanda"]
    },
    "İ": {
        isim: ["İrem", "İpek", "İbrahim", "İlayda"],
        sehir: ["İstanbul", "İzmir", "İzmit", "İnegöl"],
        hayvan: ["İnek", "İguana", "İpek Böceği"],
        bitki: ["İncir", "İğde"],
        esya: ["İplik", "İğne", "İp"],
        ulke: ["İngiltere", "İtalya", "İsveç", "İsviçre", "İspanya", "İsrail", "İran"]
    },
    "K": {
        isim: ["Kemal", "Kerem", "Kübra", "Kaan", "Kayra"],
        sehir: ["Kars", "Kayseri", "Kastamonu", "Kırşehir", "Kütahya", "Konya"],
        hayvan: ["Köpek", "Kedi", "Kartal", "Kaplumbağa", "Kelebek", "Kurbağa"],
        bitki: ["Kiraz", "Karanfil", "Kavun", "Kabak"],
        esya: ["Kalem", "Kitap", "Kaşık", "Kupa", "Klavye"],
        ulke: ["Kanada", "Kolombiya", "Kenya", "Katar", "Kazakistan"]
    },
    "L": {
        isim: ["Lale", "Levent", "Leyla", "Lokman"],
        sehir: ["Lüleburgaz"],
        hayvan: ["Leopar", "Lama", "Lahana Böceği"],
        bitki: ["Limon", "Lale", "Lavanta"],
        esya: ["Lamba", "Laptop", "Lastik"],
        ulke: ["Libya", "Litvanya", "Lübnan", "Letonya", "Lüksemburg"]
    },
    "M": {
        isim: ["Murat", "Merve", "Mehmet", "Melis", "Mert"],
        sehir: ["Manisa", "Mersin", "Muğla", "Mardin", "Malatya"],
        hayvan: ["Maymun", "Martı", "Midye", "Manda"],
        bitki: ["Muz", "Mantar", "Menekşe", "Mısır"],
        esya: ["Masa", "Mikrofon", "Makas", "Mont"],
        ulke: ["Mısır", "Meksika", "Malezya", "Monako"]
    },
    "N": {
        isim: ["Nalan", "Nisa", "Nazlı", "Necati"],
        sehir: ["Niğde", "Nevşehir"],
        hayvan: ["Nandu", "Nesli Tükenen Kelebek"],
        bitki: ["Nane", "Nergis"],
        esya: ["Nal", "Not Defteri"],
        ulke: ["Nepal", "Norveç", "Nijerya", "Yeni Zelanda"]
    },
    "O": {
        isim: ["Okan", "Onur", "Oya", "Ozan"],
        sehir: ["Ordu", "Osmaniye"],
        hayvan: ["Orangutan", "Ördek", "Oyster (İstiridye)"],
        bitki: ["Ot", "Orkide"],
        esya: ["Oje", "Ocak", "Oyuncak"],
        ulke: ["Oman"]
    },
    "Ö": {
        isim: ["Ömer", "Özge", "Öznur"],
        sehir: ["Ödemiş"],
        hayvan: ["Ördek", "Öküz"],
        bitki: ["Öksüzotu"],
        esya: ["Önlük", "Örtü"],
        ulke: ["Özbekistan"]
    },
    "P": {
        isim: ["Pınar", "Poyraz", "Perihan"],
        sehir: ["Pendik"],
        hayvan: ["Penguen", "Papağan", "Panda", "Piton"],
        bitki: ["Pırasa", "Patates", "Portakal"],
        esya: ["Perde", "Palto", "Pusula"],
        ulke: ["Polonya", "Portekiz", "Peru", "Pakistan"]
    },
    "R": {
        isim: ["Rüya", "Recep", "Rabia"],
        sehir: ["Rize"],
        hayvan: ["Rakun", "Ren Geyiği"],
        bitki: ["Roka", "Rezene"],
        esya: ["Radyo", "Raf"],
        ulke: ["Romanya", "Rusya"]
    },
    "S": {
        isim: ["Selin", "Serkan", "Sude", "Serhat"],
        sehir: ["Sivas", "Samsun", "Sakarya", "Siirt", "Sinop"],
        hayvan: ["Sincap", "Serçe", "Su Aygırı", "Sırtlan"],
        bitki: ["Soğan", "Salatalık", "Selvi"],
        esya: ["Süpürge", "Sandalye", "Saat", "Sırt Çantası"],
        ulke: ["Suriye", "Suudi Arabistan", "Slovakya", "Slovenya", "Singapur"]
    },
    "Ş": {
        isim: ["Şeyma", "Şevval", "Şahin"],
        sehir: ["Şanlıurfa", "Şırnak"],
        hayvan: ["Şempanze", "Şahin"],
        bitki: ["Şeftali", "Şeker Pancarı"],
        esya: ["Şemsiye", "Şarj Aleti"],
        ulke: ["Şili"]
    },
    "T": {
        isim: ["Turgut", "Tuğçe", "Tolga", "Tarık"],
        sehir: ["Trabzon", "Tokat", "Tekirdağ", "Tunceli"],
        hayvan: ["Tavşan", "Tilki", "Timsah", "Tavuk"],
        bitki: ["Turp", "Tarçın", "Tere"],
        esya: ["Tarak", "Termos", "Tencere"],
        ulke: ["Türkiye", "Tayland", "Tunus", "Türkmenistan"]
    },
    "U": {
        isim: ["Ufuk", "Umut", "Utku"],
        sehir: ["Uşak"],
        hayvan: ["Uskumru", "Uğur Böceği"],
        bitki: ["Un", "Uçhan Otu"],
        esya: ["Uçurtma", "Ütü"],
        ulke: ["Ukrayna", "Uganda", "Umman"]
    },
    "Ü": {
        isim: ["Ülkü", "Ümit"],
        sehir: ["Ünye"],
        hayvan: ["Üveyik", "Ürkek Kaplumbağa"],
        bitki: ["Üzüm"],
        esya: ["Ütü", "Üzengi"],
        ulke: ["Ürdün", "Ürdün Krallığı"]
    },
    "V": {
        isim: ["Veli", "Volkan", "Vildan"],
        sehir: ["Van"],
        hayvan: ["Varan", "Vaşak"],
        bitki: ["Vişne"],
        esya: ["Vazo", "Valiz"],
        ulke: ["Venezuela", "Vietnam"]
    },
    "Y": {
        isim: ["Yusuf", "Yasemin", "Yiğit", "Yağmur"],
        sehir: ["Yalova"],
        hayvan: ["Yılan", "Yunus", "Yarasa", "Yaban Ördeği"],
        bitki: ["Yulaf", "Yasemin"],
        esya: ["Yelek", "Yastık", "Yorgan"],
        ulke: ["Yunanistan", "Yemen"]
    },
    "Z": {
        isim: ["Zehra", "Zeynep", "Zafer"],
        sehir: ["Zonguldak"],
        hayvan: ["Zebra", "Zürafa"],
        bitki: ["Zencefil", "Zeytin"],
        esya: ["Zil", "Zımba"],
        ulke: ["Zambiya", "Zimbabve"]
    }
};

// Bir harf + kategori için veri havuzundan rastgele bir cevap döndürür.
// database dizi (yeni format) veya tekil metin (eski format) olsa da çalışır.
function pickAnswer(letter, category) {
    const entry = database[letter] ? database[letter][category] : null;
    if (!entry) return "";
    if (Array.isArray(entry)) {
        return entry[Math.floor(Math.random() * entry.length)];
    }
    return entry;
}
