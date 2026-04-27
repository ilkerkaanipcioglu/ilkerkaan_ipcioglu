- **Sektörel Evrim:** Gayrimenkul sektörü; küreselleşme, şehirleşme ve liberalleşme ile birlikte sadece "konut" odaklı olmaktan çıkıp; AVM, otel, hava limanı, hastane ve ticari kompleksler (restoran zincirleri, mağaza zincirleri) gibi çok daha karmaşık ve büyük yatırımlı yapılara dönüşmüştür.
    
- **IT Çözümlerine Duyulan İhtiyaç:** Sektörün büyümesi; ana veri yönetimi (arsa, bina, alan), hukuki sözleşme takibi (kiralama/kiraya verme), alan optimizasyonu ve finansal raporlama gibi süreçlerin manuel takibini imkansız hale getirmiş, dijitalleşmeyi zorunlu kılmıştır.
    
- **Mevcut Sistemlerin Yetersizliği:** Birçok işletme farklı yazılımları bir arada kullanmakta (parçalı yapı), bu da yüksek maliyet, veri tutarsızlığı ve yönetim zorluklarına yol açmaktadır.
    
- **Entegre ERP ve SAP REFX'in Rolü:** Standart muhasebe modüllerinin (FI, SD vb.) gayrimenkul detaylarını yönetmekte yetersiz kaldığı noktada SAP REFX; mimari ve kullanım görünümlerini birleştiren, finansla tam entegre, uçtan uca bir çözüm sunarak verimliliği artırır.
	SAP'nin avantağı çok karmaşık süreçleri detayına kadar karşılayabilmesidir fakat bu sahada aynı zamanda bir dezavantaja dönüşmektedir. Birçok işletme kurulum (uyarlama) ve kullanımdaki kompleks yapıdan dolayı re-fx modülünü yalnızca kontratları tutan bir ana veri kaynaüı olarak kullanmaktadır.  Birçok veri girişi, hesaplama ve kayıt Z'li programlar geliştirmeler ile yapılmaktadır. 

## Bölüm 2: Ana Veri Nesneleri



### 2.1. SAP RE-FX’te Ana Veri Kavramı ve "RE-Nesneleri"
. Bu yapının ana bileşenleri şunlardır:

- Duran varlık grubu (Business Entity)**
bunu SAP AA'daki duran varlıklarla karıştırmamak gerekir ingilizcesi business entity'dir. 
    
- **Arsa/Arazi (Property/Land)**
    
- **Bina (Building)**
    
- **Kiralık Birimler (Rental Units)**
    

Bu nesneleri daha iyi kavramak için bir alışveriş merkezi senaryosunu düşünelim: Bir arsa üzerinde inşa edilen, otoparkı, katları ve bu katlar içinde bağımsız dükkanları olan bir AVM, sistemde bu hiyerarşik nesnelerle temsil edilir.

### 2.2. İkili Bakış Açısı: Mimari ve Kullanım Görünümü



1. **Mimari Görünüm (Architectural View):** Nesnenin fiziksel ve teknik yapısını temsil eder.
    
2. **Kullanım Görünümü (Usage View):** Nesnenin kiralama ve finansal süreçlerdeki rolünü temsil eder.
    

---

### 2.3. Mimari Görünüm (T-Code: REBDAO)

Mimari görünüm, bir gayrimenkulün gerçek fiziksel çerçevesini yansıtır. Bu görünüm sadece bilgi amaçlı değil, aynı zamanda teknik verilerin yönetim merkezidir.
Mimari görünümün bakımı zorunlu değildir ancak kullanım görünümünden önce tanımlanması, alan ölçümlerinin otomatik olarak kullanım görünümüne akmasını sağlar ve veri tutarlılığını artırır.

**Neden Mimari Görünüm Kullanmalıyız?**

- **CAD Entegrasyonu:** Dış mimari yazılımlarla (CAD) entegrasyon sağlayarak kat planlarını sisteme aktarmak için.
    
- **Teknik Detay İhtiyacı:** Binanın fiziksel yapısı hakkında (katlar, koridorlar, asansörler vb.) detaylı teknik bilgi tutulması gerekiyorsa.
    
- **Sık Değişen Kullanım Senaryoları:** Fiziksel yapı sabit kalırken kullanımın sürekli değiştiği durumlar için idealdir.
    
    - _Örnek:_ Bir katta 4 ayrı dükkan (mimari nesne) varsa ve ilerde bunlar birleştirilip tek bir mağaza olarak kiralanacaksa, mimari yapı değişmez ancak kiralık nesne sayısı güncellenir. Bu esneklik, raporlamada büyük avantaj sağlar.
        

**Mimari Görünümün Hiyerarşik Yapısı:**

Mimari görünümde şu nesneler tanımlanabilir:
![[Pasted image 20260414101352.png]]

- **Mahal (Locality):** Bölge veya yöre bilgisi.
    
- **Arsa (Land):** Arazi verileri.
    
- **Bina (Building):** Yapının kendisi.
    
- **Kat (Floor):** Binanın kat seviyeleri.
    
- **Bina Bölümü (Part of Building):** Binanın belirli kısımları.
    
- **Alan/Mekan (Space):** Ofis, depo, otopark yeri gibi spesifik alanlar ve bunların yüzölçümleri (Area).

### Kullanım Görünümü (Usage View)

Kullanım görünümü, SAP sisteminde **gerçek muhasebe kayıtlarının ve finansal işlemlerin** gerçekleştirildiği "muhasebe görünümü"dür. Gayrimenkul nesnelerinin sistemdeki finansal temsilini oluşturan tüm nesne tabanlı bilgilerin temelidir.

Kullanım görünümü hiyerarşisinde şu ana veri nesneleri oluşturulabilir:

- Duran varlık Grubu (Business Entity)**
    
- **Arsa/Arazi (Property)**
    
- **Bina (Building)**
    
- **Kiralık Nesne (Rental Object)**
    
    - Havuz Alanı (Pooled Space)
        
    - Kiralık Alan (Rental Space)
        
    - Kiralık Birim (Rental Unit)
        

Şimdi, kullanım görünümünün en üst öğesinden başlayarak bu unsurları daha detaylı inceleyelim.

---

Duran varlık grubu  (Business Entity) – İşlem Kodu: REBDBE

Kullanım görünümü hiyerarşisinin en üst öğesi **Duran varlık grubudur**'dir. Bir iş birimi genellikle; aynı ortak tesisleri/hizmetleri paylaşan ve aynı vergi düzenlemelerine tabi olan bir grup bina ve arsadan meydana gelir.

Duran valrık grubuna iş alanı ve/veya kar merkez. (segment) başlayabilirsiniz. 

- **Şirket Kodu Ataması:** Duran valrık Grubu, benzersiz bir şekilde tek bir **Şirket Koduna (Company Code)** atanır ve sistemdeki kullanım yapısını kurgulamanın başlangıç noktasıdır.
    
- **Kapsam:** Bir duran varlık grubu, kendi içerisinde o işletmeye ait sınırsız sayıda bina ve arsa barındırabilir.
    

**Sektörel Örnekler:**

- **Uluslararası Havalimanı:** Bir havalimanı; terminaller, duty-free alanları, otoparklar, kontrol kulesi, yakıt depoları ve pistler gibi birçok farklı yapıdan oluşur. Eğer SAP RE-FX kiralama ve alan yönetimi için kullanılıyorsa, tüm bu devasa yapı tek bir **duran varlık grubu olarak tanımlanabilir. 
    
- **Toplu Konut Kompleksi:** Bir kurumun çalışanları için inşa ettiği; binalar, yollar, sosyal tesisler ve havuzdan oluşan geniş bir yerleşim alanı, bakım ve kapasite yönetimi için tek bir iş birimi altında toplanır.
    
- **Alışveriş Merkezi:** Alışveriş Merkezi, SAP RE-FX içerisinde bir duran valık grubu olarka olarak taımlanabilir. Yada bir şehirde birden fazla alışveriş merkezimiz varsa şehir bir duran varlık grubu olarak taımlanabilir. 

* restoran zinciri - mağaza zinciiri: restoran veya mağaza zinciri için bir ülke duran varlık grubu olarak taımlamlanabilir yad aörneğin bir restoran zinciri hamburger ve pizza olarak  2 restoran zinciri varsa (tek şirket kodu altında) bunlar duran varlık grubu olarak taımlanabilir. böylelikle iş alanı- kar merkezi(segment9 olarak ayrıştırılabilir. *





