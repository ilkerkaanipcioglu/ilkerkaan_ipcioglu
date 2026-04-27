# BÖLÜM 1: Mimari Yapı – Kullanım Görünümü vs. Mimari Görünüm

SAP RE-FX, gayrimenkul varlıklarını yönetirken bize "iki farklı gözlük" sunar. Bir gözlük parayı ve sözleşmeyi görürken, diğeri betonu, metrekareyi ve yerleşimi görür.

## 1.1 Kullanım Görünümü (Usage View)

Bu görünüm **zorunludur.** Sözleşmelerin bağlandığı, kiraların hesaplandığı ve muhasebe kayıtlarının (FI/CO) oluştuğu yer burasıdır.

- **İşletme Birimi (Business Entity):** Hiyerarşinin en üstüdür. Örneğin; "İstinyepark AVM" veya "Kadıköy Bölge Müdürlüğü".
    
- **Bina (Building):** Fiziksel yapıyı temsil eder. Bir AVM içindeki ana blok veya bir restoran binası.  
    Not: Hiyerarşide farklı şekilde de kullanılabilir, örneğin bir inşaat firmasının bir projesi gibi.
    
- **Kiralık Nesne (Rental Object):** Sözleşmeye konu olan en küçük birimdir. Mağaza alanı, depo veya ofis.

---

## 1.2 Mimari Görünüm (Architectural View)

Bu görünüm **opsiyoneldir**, ancak perakende devleri için vazgeçilmezdir. Gayrimenkulün fiziksel özelliklerini, teknik detaylarını ve geometrisini tanımlar.  
Not: Mimari görünüm kullanılmaz ise 3rd party bir yazılım ile takip edildiği olur.

- **Mimari Nesne (Architectural Object):** Katlar, odalar, otopark alanları, drive-thru hatları veya teknik odalar burada tanımlanır.
    
- **Neden Kullanılır?** AutoCAD veya GIS (Coğrafi Bilgi Sistemleri) entegrasyonu yapmak, mağaza içi teknik detayları (elektrik panosu, havalandırma kapasitesi vb.) takip etmek için kullanılır.

---

## 1.3 Karşılaştırma ve Entegrasyon

Aşağıdaki tablo, kullanım ve mimari görünüm arasındaki temel farkları özetlemektedir:

|**Özellik**|**Kullanım Görünümü (Usage View)**|**Mimari Görünüm (Architectural View)**|
|---|---|---|
|**Zorunluluk**|**Zorunlu** (Finansal kayıt için şart)|Opsiyonel (Teknik takip için tercih edilir)|
|**Odak Noktası**|Kira, Vergi, Sözleşme, Kar/Zarar|Kat planı, Metrekare, Teknik Kapasite|
|**Hiyerarşi**|BE -> Bina -> Kiralık Nesne|Yerleşke -> Bina -> Kat -> Oda|
|**Sektörel Örnek**|"Mağaza No: 104 - Aylık 50.000 TL"|"Zemin Kat - 120m2 - İtalyan Mermer Zemin"|

---

## 1.4 Senaryo Üzerinden Örnekleme

### 1.4.1 Mağaza Zinciri Şubesi (AVM İçi)

- **Kullanım Görünümü:** AVM yönetimi ile yapılan kiralama sözleşmesi (Lease-In) ve ödenen sabit kira + ciro payı.
    
- **Mimari Görünüm:** Mağazanın içindeki "Satış Alanı", "Depo Alanı" ve "Personel Odası" ayrımı. Bu alanlar mimari olarak bölünür ama tek bir "Kiralık Nesne"ye (Usage) bağlanır.

---

### 1.4.2 Restoran Zinciri (Drive-Thru)

- **Kullanım Görünümü:** Arsa sahibiyle yapılan kiralama sözleşmesi.
    
- **Mimari Görünüm:** Restoran binası, Drive-Thru şeridi, dış mekan oyun alanı ve otoparkın ayrı ayrı (mimari nesne olarak) tanımlanması. Bu sayede, mülk sahibiyle tek sözleşme yaparken, içerideki hangi alanın ne kadar verimli kullanıldığını teknik olarak raporlayabilirsiniz.

---

> **Kritik Not:** Mimari ve Kullanım görünümleri birbirine **bağlanabilir (Assignment)**. Bu sayede mimari görünümde yapılan bir m2 değişikliği (örneğin bir duvarın yıkılıp mağazanın genişletilmesi), otomatik olarak kullanım görünümündeki kiralama alanını güncelleyebilir.
