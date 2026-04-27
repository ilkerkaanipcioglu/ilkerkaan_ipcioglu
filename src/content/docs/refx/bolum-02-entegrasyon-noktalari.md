# BÖLÜM 2: Entegrasyon Noktaları – RE-FX'in Diğer Modüllerle "El Sıkışması"

RE-FX modülü, operasyonel bir veriyi finansal bir sonuca dönüştürmek için dört ana modül ile sürekli iletişim halindedir:

---

## 2.1 FI (Finansal Muhasebe) Entegrasyonu

RE-FX'te yapılan her periyodik kayıt (**RERAPP**), doğrudan FI modülünde bir borç veya alacak kaydı oluşturur. (İstisna olarak muhasebe kaydı atmayan raporlama amaçlı koşullar eklenebilir)

- **Kullanım:** Kira faturalarının otomatik kesilmesi, KDV hesaplamaları ve ödeme takibi.
    
- **Perakende Avantajı:** 3.000 dükkanın kirası tek bir tuşla hesaplanır ve kaydedilir.

---

## 2.2 CO (Maliyet Muhasebesi) Entegrasyonu

### 2.2.1 RE-FX Nesneleri Neden Birer "Masraf Taşıyıcısı"dır?

SAP sisteminde normalde masrafları **Masraf Yeri (Cost Center)**, **İçsel Sipariş (Internal Order)** veya **WBS Element (Proje)** üzerinde toplarsın. Ancak RE-FX modülünde, yarattığın her bir **İşletme Birimi (BE)**, **Bina** veya **Kiralık Nesne (RO)**, sistem tarafından otomatik olarak birer **"Dahili Kontrol Nesnesi" (Internal Controlling Object)** olarak kabul edilir.

---

### 2.2.2 Arka Planda Otomatik CO Nesnesi Oluşumu

Sen RE80 işlem kodunda bir mağaza (Kiralık Nesne) yarattığında, eğer uyarlamalar tam ise sistem arka planda bu nesneye özel bir **CO Account Assignment Object** oluşturur.

- **Doküman Notu:** RE-FX nesneleri "Independent Controlling Objects" olarak çalışabilir. Yani bir masrafı doğrudan bir mağazanın koduna (örneğin: `BE 1000 / RO 50`) borç verebilirsin.

---

### 2.2.3 Masraf ve Gelir Akışı (Postings)

RE-FX nesneleri hem **gideri** hem de **geliri** üzerinde taşıyabilir:

- **Giderler:** Elektrik faturası, tamirat masrafı veya temizlik gideri doğrudan "Kiralık Nesne" üzerine kaydedilir.
    
- **Gelirler:** Kiralama sözleşmesinden gelen kira geliri (Lease-Out durumunda) yine bu nesneye akar.
    
- **Sonuç:** Sistem, "Bu dükkan bana ne kadar harcattı, ne kadar kazandırdı?" sorusunun cevabını doğrudan RE nesnesi üzerinden verir.

---

### 2.2.4 Masraf Yerleri (Cost Center) ile İlişki

- **RE Nesnesi:** Operasyonel birimdir (Mağaza 104).
    
- **Masraf Yeri:** Organizasyonel birimdir (İstanbul Perakende Departmanı).
    
- **Entegrasyon:** RE nesnesine bir masraf gittiğinde, sistem bunu bağlı olduğu Masraf Yeri'ne de yansıtır.

---

### 2.2.5 Servis Giderleri ve Mahsuplaşma (Settlement)

- Ortak alan faturaları önce bir **Settlement Unit (SCS Unit)** üzerinde toplanır.
    
- Bu birim de bir CO nesnesidir.
    
- Daha sonra sistem, bu maliyeti metrekare oranına göre **Kiralık Nesnelere** dağıtır.

---

## 2.3 Senaryo: 3.000 Mağaza Örneği

1. **Giriş:** Muhasebe faturayı işlerken masraf objesi olarak **Kiralık Nesne** seçilir.
    
2. **CO Etkisi:** Masraf doğrudan ilgili mağazaya yazılır.
    
3. **Analiz:** En çok masraf çıkaran mağazalar RE-FX üzerinden analiz edilir.

---

> **Özet:** RE-FX nesneleri, CO modülü için birer "akıllı klasör" gibidir. İçine atılan her faturayı, sözleşme ve metrekare verileriyle birleştirerek anlamlı bir mali tabloya dönüştürürler.

---

## 2.4 CO Entegrasyonu: Sistemin "Karne"si

SAP RE-FX'in CO modülüyle olan ilişkisi, gayrimenkul nesnelerinin birer finansal veri taşıyıcısına dönüşmesini sağlar.

### 2.4.1 RE-FX Nesneleri: Dahili Kontrol Nesnesi

Her bir **İşletme Birimi**, **Bina** ve **Kiralık Nesne**, otomatik olarak bir **Account Assignment Object** olarak kabul edilir.

- **Nasıl Çalışır?** Mağaza oluşturulduğunda arka planda CO objesi oluşur ve tüm giderler bu objeye yazılır.
    
- **Organizasyonel Eşleşme:** Bu nesneler her zaman bir **Cost Center** veya **Profit Center** ile ilişkilidir.

---

### 2.4.2 Kullanım ve Stratejik Fayda

Bir mağazanın gerçek karlılığını ölçmek için kira giderlerinin ve operasyonel maliyetlerin doğru adrese akması gerekir.

- **Doğrudan Masraf Akışı:** Mağazanın aylık kira faturası (Lease-In) veya ortak alan giderleri, başka hiçbir manuel işleme gerek kalmadan doğrudan ilgili dükkanın "karnesine" işlenir.
    
- **Servis Giderleri Mahsuplaşması (SCS):** AVM yönetiminden gelen toplu elektrik veya güvenlik faturası, metrekare bazında dağıtıldığında her bir dükkanın kendi CO objesine paylaştırılır.

---

### 2.4.3 Perakende Avantajı: "Satış Verimliliği" (Sales Efficiency)

3.000 mağazalık bir kozmetik veya restoran zincirinde, sadece "hangisi çok ciro yapıyor?" sorusu yeterli değildir. Gerçek başarıyı ölçmek için **Sales Efficiency** (Satış Verimliliği) oranına bakılır.

- **Kira / Ciro Analizi:** CO entegrasyonu sayesinde, bir mağazanın cirosu (SD modülünden gelen veri) ile o mağazanın kira ve bakım maliyetini (RE-FX'ten gelen veri) aynı ekranda karşılaştırabilirsiniz.
    
- **Örnek Senaryo:** AVM içindeki bir mağazanız çok yüksek ciro yapıyor olabilir. Ancak RE-FX nesnesi üzerindeki "Kira Maliyeti / Metrekare" oranına baktığınızda, ödenen kiranın ciroyu yuttuğunu ve aslında caddede daha az ciro yapan başka bir mağazanızın çok daha karlı olduğunu "karne" (CO raporu) üzerinden net bir şekilde görebilirsiniz.

---

## 2.5 PM (Bakım ve Onarım) Entegrasyonu

Sistemin "ustasıdır". Mağazalarınızdaki teknik cihazlar (havalandırma, yürüyen merdiven, mutfak ekipmanları) birer **Ekipman** veya **Fonksiyonel Lokasyon** olarak tanımlanır.

- **Kullanım:** "Kadıköy Mağazası" için bir arıza kaydı açıldığında, sistem bu mağazanın kiralık nesnesine (Rental Object) bağlı tüm teknik geçmişi PM üzerinden önünüze getirir.
    
- **Perakende Avantajı:** Arızaların mülk sahibinin mi yoksa firmanın mı sorumluluğunda olduğu sözleşme maddesine göre PM modülünde kurgulanabilir.

---

## 2.6 AA (Duran Varlıklar) Entegrasyonu

Sistemin "demirbaş" takipçisidir. Özellikle **IFRS 16** ile birlikte kiralama sözleşmeleri artık birer "vade sonuna kadar kullanım hakkı" (Right-of-Use Asset) olarak görülür.

- **Kullanım:** RE-FX'te bir kira sözleşmesi başladığında, AA modülünde otomatik bir "Hak Kullanım Varlığı" kartı açılır ve her ay amortisman (itfa) hesaplaması yapılır.
    
- **Perakende Avantajı:** Bilançonuzun IFRS 16 uyumluluğu için kiralık mağazalarınız birer duran varlık gibi AA modülünde yönetilir.
