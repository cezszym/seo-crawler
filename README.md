# seo-crawler

#### Co to ?
Prosty crawler oparty na headless brower (**puppeteer js**)


#### Co robi ?
Sprawdza czy dana strona spełnia podstawowe zasady SEO


#### Jakie zasady sprawdza ?
W obecnej wersji brane pod uwagę są :
- **ilość znaków w tytule**
     > powinna być mniejsza niż 65
- **obecność description w metadanych**
- **obecność canonical w metadanych**
     > gdy występuje sprawdzana jest zgodność z url
- **paginacja**
     >sprawdzana jest obecność rel=prev / rel=next
- **występowanie tylko jednego h1**
- **obecność viewportu**

#### Jak używać crawlera ?
  1. pobierz biblioteke **puppeteer** do folderu
  2. w pliku index.js w tablicy **links** wpisz linki które chcesz sprawdzić
  3. uruchom kod (**node index.js**)
  4. w konsoli pojawi się raport opisujący jakie reguły spełnia każdy link
 

