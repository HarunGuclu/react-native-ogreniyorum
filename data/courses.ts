import { Course, Badge } from '@/types';

export const courses: Course[] = [
  {
    id: 'react-native-temelleri',
    title: 'React Native Temelleri',
    description: 'React Native ile mobil uygulama geliştirmenin temel prensiplerini öğrenin.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    totalLessons: 15,
    completedLessons: 0,
    level: 'Başlangıç',
    duration: '8 saat',
    topics: [
      {
        id: 'giris',
        title: 'React Native\'e Giriş',
        description: 'React Native nedir ve neden kullanılır?',
        lessons: [
          {
            id: 'react-native-nedir',
            title: 'React Native Nedir?',
            content: `# React Native Nedir?

React Native, Facebook tarafından geliştirilen açık kaynaklı bir mobil uygulama geliştirme framework'üdür. React Native ile iOS ve Android platformları için native mobil uygulamalar geliştirebilirsiniz.

## Neden React Native?

- **Tek Kod Tabanı**: Hem iOS hem de Android için aynı kod tabanını kullanabilirsiniz.
- **Hızlı Geliştirme**: Hot Reloading özelliği sayesinde değişiklikleri anında görebilirsiniz.
- **Geniş Topluluk**: Büyük bir geliştirici topluluğu ve hazır kütüphaneler.
- **Native Performans**: JavaScript kodunuz native bileşenlere dönüştürülür.

## React Native vs Native Geliştirme

| React Native | Native Geliştirme |
|--------------|-------------------|
| Tek kod tabanı | Platform başına ayrı kod |
| JavaScript/TypeScript | Swift/Objective-C ve Java/Kotlin |
| Hızlı geliştirme | Daha uzun geliştirme süreci |
| Orta-yüksek performans | En yüksek performans |`,
            codeExamples: [
              {
                id: 'hello-world',
                title: 'İlk React Native Uygulaması',
                code: `import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Merhaba Dünya!</Text>
    </View>
  );
}`,
                description: 'Basit bir "Merhaba Dünya" uygulaması',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-react-native-nedir',
              questions: [
                {
                  id: 'q1',
                  text: 'React Native hangi şirket tarafından geliştirilmiştir?',
                  options: ['Google', 'Apple', 'Facebook', 'Microsoft'],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q2',
                  text: 'React Native ile hangi platformlar için uygulama geliştirebilirsiniz?',
                  options: ['Sadece iOS', 'Sadece Android', 'iOS ve Android', 'iOS, Android ve Windows'],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q3',
                  text: 'React Native uygulamaları hangi programlama dili ile yazılır?',
                  options: ['Swift', 'Java', 'JavaScript/TypeScript', 'C#'],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q4',
                  text: 'React Native\'in en önemli avantajlarından biri nedir?',
                  options: ['En yüksek performans', 'Tek kod tabanı ile çoklu platform desteği', 'Native API\'lere doğrudan erişim', 'Daha az bellek kullanımı'],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q5',
                  text: 'Hot Reloading özelliği ne işe yarar?',
                  options: ['Uygulamayı otomatik olarak yayınlar', 'Değişiklikleri anında görebilmenizi sağlar', 'Uygulamayı daha hızlı çalıştırır', 'Native kodları JavaScript\'e dönüştürür'],
                  correctOptionIndex: 1,
                },
              ],
            },
            completed: false,
            duration: '30 dakika',
          },
          {
            id: 'kurulum-ve-ortam',
            title: 'Kurulum ve Geliştirme Ortamı',
            content: `# Kurulum ve Geliştirme Ortamı

React Native uygulaması geliştirmek için gerekli araçları ve ortamı kuralım.

## Gereksinimler

- Node.js (en son LTS sürümü)
- npm veya yarn
- Bir kod editörü (VS Code önerilir)
- iOS için: macOS ve Xcode
- Android için: Android Studio ve JDK

## Expo ile Başlamak

Expo, React Native geliştirmeyi kolaylaştıran bir araç setidir. Başlangıç için Expo CLI kullanmak en kolay yoldur.

1. Expo CLI'yi yükleyin:

\`\`\`
npm install -g expo-cli
\`\`\`

2. Yeni bir proje oluşturun:

\`\`\`
expo init MerhabaDunya
\`\`\`

3. Projeyi başlatın:

\`\`\`
cd MerhabaDunya
npm start
\`\`\`

## React Native CLI ile Başlamak

Daha fazla özelleştirme için React Native CLI kullanabilirsiniz:

1. React Native CLI'yi yükleyin:

\`\`\`
npm install -g react-native-cli
\`\`\`

2. Yeni bir proje oluşturun:

\`\`\`
npx react-native init MerhabaDunya
\`\`\`

3. Projeyi başlatın:

\`\`\`
cd MerhabaDunya
npx react-native run-ios  # iOS için
npx react-native run-android  # Android için
\`\`\``,
            codeExamples: [
              {
                id: 'package-json',
                title: 'package.json Örneği',
                code: `{
  "name": "MerhabaDunya",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "react": "17.0.2",
    "react-native": "0.66.0"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@babel/runtime": "^7.12.5",
    "@react-native-community/eslint-config": "^2.0.0",
    "babel-jest": "^26.6.3",
    "eslint": "^7.32.0",
    "jest": "^26.6.3",
    "metro-react-native-babel-preset": "^0.66.2",
    "react-test-renderer": "17.0.2"
  },
  "jest": {
    "preset": "react-native"
  }
}`,
                description: 'Tipik bir React Native projesi package.json dosyası',
                language: 'javascript',
              },
            ],
            quiz: {
              id: 'quiz-kurulum',
              questions: [
                {
                  id: 'q1',
                  text: 'React Native uygulaması geliştirmek için hangi araç gerekli değildir?',
                  options: ['Node.js', 'Python', 'Kod editörü', 'npm veya yarn'],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'Expo nedir?',
                  options: [
                    'Bir kod editörü',
                    'React Native geliştirmeyi kolaylaştıran bir araç seti',
                    'Bir programlama dili',
                    'Bir veritabanı sistemi'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q3',
                  text: 'iOS için React Native geliştirmesi yapmak için hangi işletim sistemi gereklidir?',
                  options: ['Windows', 'Linux', 'macOS', 'Herhangi biri olabilir'],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q4',
                  text: 'Expo CLI ile React Native CLI arasındaki temel fark nedir?',
                  options: [
                    'Expo CLI daha hızlıdır',
                    'React Native CLI sadece Android için çalışır',
                    'Expo CLI başlangıç için daha kolaydır, React Native CLI daha fazla özelleştirme sunar',
                    'İkisi arasında fark yoktur'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q5',
                  text: 'React Native projesini başlatmak için hangi komut kullanılır?',
                  options: [
                    'npm run dev',
                    'npm start',
                    'react-native start',
                    'expo start'
                  ],
                  correctOptionIndex: 1,
                },
              ],
            },
            completed: false,
            duration: '45 dakika',
          },
          {
            id: 'react-native-mimarisi',
            title: 'React Native Mimarisi',
            content: `# React Native Mimarisi

React Native, JavaScript kodunuzu native bileşenlere dönüştüren bir köprü (bridge) mimarisi kullanır. Bu sayede JavaScript ile yazılan kodlar, native platformlarda çalışabilir.

## React Native Nasıl Çalışır?

React Native uygulaması üç ana thread üzerinde çalışır:

1. **Main Thread (Ana İş Parçacığı)**: Kullanıcı arayüzünü render eder ve kullanıcı etkileşimlerini işler.
2. **JavaScript Thread (JS İş Parçacığı)**: JavaScript kodunuzu çalıştırır.
3. **Shadow Thread (Gölge İş Parçacığı)**: Layout hesaplamalarını yapar.

## Bridge (Köprü) Mimarisi

JavaScript ve native taraf arasındaki iletişim, "bridge" adı verilen bir mekanizma üzerinden gerçekleşir. Bu köprü, JSON formatında serileştirilmiş mesajlar aracılığıyla çalışır.

## Yeni Mimari: Fabric ve TurboModules

React Native, performansı artırmak için yeni bir mimari üzerinde çalışıyor:

- **Fabric**: Yeni bir render sistemi
- **TurboModules**: Native modüller için yeni bir sistem
- **CodeGen**: Tip güvenli bir köprü için kod üreteci

Bu yeni mimari, daha az bellek kullanımı, daha hızlı başlatma süresi ve daha iyi performans sağlayacak.`,
            codeExamples: [
              {
                id: 'native-modules',
                title: 'Native Modül Örneği',
                code: `// iOS (Objective-C)
@implementation RCTCalendarModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end

// JavaScript
import { NativeModules } from 'react-native';
const { CalendarModule } = NativeModules;

CalendarModule.createCalendarEvent('Doğum Günü Partisi', 'İstanbul');`,
                description: 'Native modül oluşturma ve JavaScript\'ten çağırma',
                language: 'javascript',
              },
            ],
            quiz: {
              id: 'quiz-mimari',
              questions: [
                {
                  id: 'q1',
                  text: 'React Native\'de JavaScript ve native taraf arasındaki iletişim nasıl sağlanır?',
                  options: ['API çağrıları ile', 'Bridge (Köprü) mimarisi ile', 'WebSocket bağlantısı ile', 'HTTP istekleri ile'],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'React Native uygulaması kaç ana thread üzerinde çalışır?',
                  options: ['1', '2', '3', '4'],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q3',
                  text: 'Aşağıdakilerden hangisi React Native\'in yeni mimarisinin bir parçası değildir?',
                  options: ['Fabric', 'TurboModules', 'CodeGen', 'ReactDOM'],
                  correctOptionIndex: 3,
                },
                {
                  id: 'q4',
                  text: 'Shadow Thread (Gölge İş Parçacığı) ne işe yarar?',
                  options: ['JavaScript kodunu çalıştırır', 'Kullanıcı arayüzünü render eder', 'Layout hesaplamalarını yapar', 'Native API\'leri çağırır'],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q5',
                  text: 'Bridge mimarisi hangi format üzerinden iletişim kurar?',
                  options: ['XML', 'JSON', 'YAML', 'Binary'],
                  correctOptionIndex: 1,
                },
              ],
            },
            completed: false,
            duration: '40 dakika',
          },
        ],
      },
      {
        id: 'temel-bilesenler',
        title: 'Temel Bileşenler',
        description: 'React Native\'in temel bileşenlerini ve kullanımlarını öğrenin.',
        lessons: [
          {
            id: 'view-text',
            title: 'View ve Text Bileşenleri',
            content: `# View ve Text Bileşenleri

React Native'de en temel iki bileşen View ve Text'tir.

## View Bileşeni

View, React Native'de bir konteyner bileşenidir. HTML'deki div etiketine benzer. Diğer bileşenleri gruplamak, stillendirmek ve düzenlemek için kullanılır.

Özellikleri:
- Flex layout kullanır
- Stil özellikleri alabilir
- İç içe kullanılabilir
- Dokunma olaylarını yakalayabilir

## Text Bileşeni

Text, metin göstermek için kullanılan bileşendir. HTML'deki p, span gibi etiketlere benzer.

Özellikleri:
- Metin içeriği gösterir
- Stil özellikleri alabilir
- İç içe kullanılabilir (metin içinde farklı stiller)
- Dokunma olaylarını yakalayabilir

## Temel Kullanım

View ve Text bileşenlerini kullanarak basit bir arayüz oluşturalım:`,
            codeExamples: [
              {
                id: 'view-text-example',
                title: 'View ve Text Örneği',
                code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ViewTextExample() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Merhaba React Native</Text>
        <Text style={styles.paragraph}>
          Bu bir <Text style={styles.highlight}>View</Text> ve{' '}
          <Text style={styles.highlight}>Text</Text> bileşeni örneğidir.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#0066cc',
  },
});`,
                description: 'View ve Text bileşenlerinin temel kullanımı',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-view-text',
              questions: [
                {
                  id: 'q1',
                  text: 'View bileşeni neye benzer?',
                  options: ['HTML\'deki div', 'HTML\'deki span', 'HTML\'deki p', 'HTML\'deki img'],
                  correctOptionIndex: 0,
                },
                {
                  id: 'q2',
                  text: 'Text bileşeni içinde başka bir Text bileşeni kullanılabilir mi?',
                  options: ['Evet', 'Hayır', 'Sadece iOS\'ta', 'Sadece Android\'de'],
                  correctOptionIndex: 0,
                },
                {
                  id: 'q3',
                  text: 'View bileşeni hangi layout sistemini kullanır?',
                  options: ['Grid layout', 'Flex layout', 'Table layout', 'Block layout'],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q4',
                  text: 'Text bileşeninin dokunma olaylarını yakalama özelliği var mıdır?',
                  options: ['Evet', 'Hayır', 'Sadece iOS\'ta', 'Sadece özel bir wrapper ile'],
                  correctOptionIndex: 0,
                },
                {
                  id: 'q5',
                  text: 'View bileşeni içinde doğrudan metin içeriği kullanılabilir mi?',
                  options: ['Evet', 'Hayır, metin içeriği Text bileşeni içinde olmalıdır', 'Sadece iOS\'ta', 'Sadece kısa metinler için'],
                  correctOptionIndex: 1,
                },
              ],
            },
            completed: false,
            duration: '30 dakika',
          },
          {
            id: 'image-button',
            title: 'Image ve Button Bileşenleri',
            content: `# Image ve Button Bileşenleri

## Image Bileşeni

Image bileşeni, uygulamanızda resim göstermek için kullanılır. Yerel dosyalardan veya internet üzerinden resimleri yükleyebilirsiniz.

Özellikleri:
- source prop'u ile resim kaynağı belirtilir
- resizeMode ile resmin nasıl boyutlandırılacağı ayarlanır
- Stil özellikleri alabilir

## Button Bileşeni

Button bileşeni, kullanıcı etkileşimi için basit bir düğme sağlar. Platform'a özgü görünüm ve davranışa sahiptir.

Özellikleri:
- title prop'u ile düğme metni belirtilir
- onPress prop'u ile tıklama olayı yakalanır
- color prop'u ile renk ayarlanabilir
- disabled prop'u ile devre dışı bırakılabilir

## TouchableOpacity

Button'a alternatif olarak daha fazla özelleştirme için TouchableOpacity kullanabilirsiniz:

Özellikleri:
- Herhangi bir bileşeni sararak dokunulabilir yapabilir
- activeOpacity ile dokunma anındaki opaklık ayarlanabilir
- Daha fazla stil özelleştirmesi yapılabilir`,
            codeExamples: [
              {
                id: 'image-example',
                title: 'Image Kullanımı',
                code: `import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function ImageExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yerel Resim:</Text>
      <Image
        source={require('../assets/logo.png')}
        style={styles.localImage}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>Uzak Resim:</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.remoteImage}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  localImage: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  remoteImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});`,
                description: 'Yerel ve uzak resimlerin kullanımı',
                language: 'jsx',
              },
              {
                id: 'button-example',
                title: 'Button ve TouchableOpacity Kullanımı',
                code: `import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonExample() {
  const [count, setCount] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Sayaç: {count}</Text>
      
      <Button
        title="Standart Buton"
        onPress={() => setCount(count + 1)}
        color="#007AFF"
      />
      
      <View style={styles.spacer} />
      
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => setCount(count - 1)}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Özel Buton</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
  },
  spacer: {
    height: 20,
  },
  customButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`,
                description: 'Button ve TouchableOpacity kullanım örneği',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-image-button',
              questions: [
                {
                  id: 'q1',
                  text: 'Image bileşeninde resizeMode özelliği ne işe yarar?',
                  options: [
                    'Resmin boyutunu piksel olarak belirler',
                    'Resmin nasıl boyutlandırılacağını belirler',
                    'Resmin yüklenme hızını ayarlar',
                    'Resmin kalitesini belirler'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'TouchableOpacity\'nin Button\'a göre avantajı nedir?',
                  options: [
                    'Daha hızlı çalışır',
                    'Daha az bellek kullanır',
                    'Daha fazla özelleştirilebilir',
                    'Sadece iOS\'ta çalışır'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q3',
                  text: 'Uzak bir resmi Image bileşeninde göstermek için hangi prop kullanılır?',
                  options: [
                    'url',
                    'src',
                    'source',
                    'image'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q4',
                  text: 'Button bileşeninde tıklama olayını yakalamak için hangi prop kullanılır?',
                  options: [
                    'onClick',
                    'onPress',
                    'onTap',
                    'onTouch'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q5',
                  text: 'TouchableOpacity\'de activeOpacity prop\'u ne işe yarar?',
                  options: [
                    'Butonun aktif olup olmadığını belirler',
                    'Dokunma anındaki opaklık değerini ayarlar',
                    'Butonun görünürlüğünü kontrol eder',
                    'Animasyon hızını belirler'
                  ],
                  correctOptionIndex: 1,
                },
              ],
            },
            completed: false,
            duration: '45 dakika',
          },
          {
            id: 'scrollview-flatlist',
            title: 'ScrollView ve FlatList Bileşenleri',
            content: `# ScrollView ve FlatList Bileşenleri

## ScrollView Bileşeni

ScrollView, içeriğin ekrana sığmadığı durumlarda kaydırma işlevselliği sağlayan bir konteyner bileşenidir.

Özellikleri:
- Yatay veya dikey kaydırma sağlar
- İçeriğin tamamını bir kerede render eder
- Zoom ve pinch hareketlerini destekler
- Kaydırma olaylarını yakalayabilir

## FlatList Bileşeni

FlatList, büyük veri listeleri için optimize edilmiş bir liste bileşenidir. Sadece ekranda görünen öğeleri render eder.

Özellikleri:
- Büyük listeler için performans optimizasyonu
- Pull-to-refresh desteği
- Sonsuz kaydırma (infinite scrolling) desteği
- Bölüm başlıkları ve ayırıcılar eklenebilir

## Ne Zaman Hangisini Kullanmalı?

- **ScrollView**: İçeriğin tamamı önceden biliniyorsa ve çok büyük değilse
- **FlatList**: Büyük veri listeleri, dinamik içerik veya performans kritik ise`,
            codeExamples: [
              {
                id: 'scrollview-example',
                title: 'ScrollView Örneği',
                code: `import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function ScrollViewExample() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ScrollView Örneği</Text>
      
      {Array(20).fill(0).map((_, index) => (
        <View key={index} style={styles.box}>
          <Text style={styles.boxText}>Öğe {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 16,
  },
});`,
                description: 'Basit bir ScrollView örneği',
                language: 'jsx',
              },
              {
                id: 'flatlist-example',
                title: 'FlatList Örneği',
                code: `import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

export default function FlatListExample() {
  const data = Array(100).fill(0).map((_, index) => ({
    id: index.toString(),
    title: \`Öğe \${index + 1}\`,
  }));

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList Örneği</Text>
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => (
          <Text style={styles.header}>100 Öğelik Liste</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.footer}>Liste Sonu</Text>
        )}
        refreshing={false}
        onRefresh={() => console.log('Yenileniyor...')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#666',
  },
});`,
                description: 'FlatList ile büyük veri listesi örneği',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-scrollview-flatlist',
              questions: [
                {
                  id: 'q1',
                  text: 'ScrollView ve FlatList arasındaki temel fark nedir?',
                  options: [
                    'ScrollView sadece dikey kaydırma destekler, FlatList hem dikey hem yatay',
                    'FlatList sadece ekranda görünen öğeleri render eder, ScrollView tüm içeriği bir kerede render eder',
                    'ScrollView daha hızlıdır',
                    'FlatList sadece metin içeriği gösterebilir'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'Büyük veri listeleri için hangi bileşen daha uygundur?',
                  options: [
                    'ScrollView',
                    'FlatList',
                    'İkisi de aynı performansı gösterir',
                    'View'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q3',
                  text: 'FlatList\'te liste öğelerini render etmek için hangi prop kullanılır?',
                  options: [
                    'renderItems',
                    'renderItem',
                    'itemRenderer',
                    'component'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q4',
                  text: 'Pull-to-refresh özelliği için FlatList\'te hangi prop\'lar kullanılır?',
                  options: [
                    'pullToRefresh ve onPull',
                    'canRefresh ve onRefresh',
                    'refreshing ve onRefresh',
                    'refresh ve onPullDown'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q5',
                  text: 'FlatList\'te liste öğeleri arasına ayırıcı eklemek için hangi prop kullanılır?',
                  options: [
                    'separator',
                    'ItemSeparator',
                    'ItemSeparatorComponent',
                    'divider'
                  ],
                  correctOptionIndex: 2,
                },
              ],
            },
            completed: false,
            duration: '50 dakika',
          },
          {
            id: 'textinput-form',
            title: 'TextInput ve Form Bileşenleri',
            content: `# TextInput ve Form Bileşenleri

## TextInput Bileşeni

TextInput, kullanıcıdan metin girişi almak için kullanılan temel bileşendir.

Özellikleri:
- Farklı klavye tipleri (e-posta, numara, telefon vb.)
- Otomatik düzeltme ve otomatik büyük harf yapma
- Placeholder ve stil özellikleri
- Değer değişikliklerini yakalama

## Form Yönetimi

React Native'de özel bir form bileşeni yoktur. Form yönetimi için state kullanılır veya Formik, React Hook Form gibi kütüphaneler tercih edilebilir.

## Switch, Checkbox ve Radio

React Native'de Switch bileşeni vardır, ancak Checkbox ve Radio bileşenleri yoktur. Bunları TouchableOpacity ve custom bileşenlerle oluşturabilirsiniz.

## Picker (Dropdown)

Picker bileşeni, dropdown menü oluşturmak için kullanılır. iOS ve Android'de farklı görünümlere sahiptir.`,
            codeExamples: [
              {
                id: 'textinput-example',
                title: 'TextInput Örneği',
                code: `import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function TextInputExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Örneği</Text>
      
      <Text style={styles.label}>İsim:</Text>
      <TextInput
        style={styles.input}
        placeholder="İsminizi girin"
        value={name}
        onChangeText={setName}
      />
      
      <Text style={styles.label}>E-posta:</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta adresinizi girin"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <Text style={styles.label}>Şifre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Şifrenizi girin"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <View style={styles.preview}>
        <Text style={styles.previewTitle}>Form Verileri:</Text>
        <Text>İsim: {name}</Text>
        <Text>E-posta: {email}</Text>
        <Text>Şifre: {password.replace(/./g, '*')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  preview: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});`,
                description: 'TextInput ile basit bir form örneği',
                language: 'jsx',
              },
              {
                id: 'switch-example',
                title: 'Switch ve Custom Checkbox Örneği',
                code: `import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

export default function SwitchCheckboxExample() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleCheckbox = () => setIsChecked(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Switch ve Checkbox Örneği</Text>
      
      <View style={styles.option}>
        <Text style={styles.optionText}>Bildirimleri Etkinleştir</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      
      <TouchableOpacity style={styles.option} onPress={toggleCheckbox}>
        <Text style={styles.optionText}>Kullanım Koşullarını Kabul Ediyorum</Text>
        <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>
      
      <View style={styles.result}>
        <Text>Bildirimler: {isEnabled ? 'Açık' : 'Kapalı'}</Text>
        <Text>Kullanım Koşulları: {isChecked ? 'Kabul Edildi' : 'Kabul Edilmedi'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#4361EE',
    borderColor: '#4361EE',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
});`,
                description: 'Switch ve özel Checkbox bileşeni örneği',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-textinput-form',
              questions: [
                {
                  id: 'q1',
                  text: 'TextInput\'ta şifre girişi için hangi prop kullanılır?',
                  options: [
                    'password',
                    'isPassword',
                    'secureTextEntry',
                    'passwordMode'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q2',
                  text: 'E-posta girişi için hangi klavye tipi kullanılır?',
                  options: [
                    'email',
                    'email-address',
                    'mail',
                    'text'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q3',
                  text: 'React Native\'de form verilerini yönetmek için en yaygın yöntem nedir?',
                  options: [
                    'Form bileşeni kullanmak',
                    'State kullanmak veya form kütüphaneleri',
                    'Redux kullanmak',
                    'AsyncStorage kullanmak'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q4',
                  text: 'TextInput\'ta değer değişikliğini yakalamak için hangi prop kullanılır?',
                  options: [
                    'onChange',
                    'onChangeText',
                    'onTextChange',
                    'onValueChange'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q5',
                  text: 'React Native\'de yerleşik (built-in) Checkbox bileşeni var mıdır?',
                  options: [
                    'Evet',
                    'Hayır, özel olarak oluşturulması gerekir',
                    'Sadece iOS\'ta',
                    'Sadece Android\'de'
                  ],
                  correctOptionIndex: 1,
                },
              ],
            },
            completed: false,
            duration: '45 dakika',
          },
        ],
      },
      {
        id: 'styling',
        title: 'Stil ve Layout',
        description: 'React Native\'de stil ve layout yönetimi',
        lessons: [
          {
            id: 'stylesheet',
            title: 'StyleSheet API',
            content: `# StyleSheet API

React Native'de stil tanımlamak için StyleSheet API kullanılır. Bu API, performans optimizasyonları sağlar ve stil tanımlarını organize etmeye yardımcı olur.

## StyleSheet.create

StyleSheet.create metodu, stil nesnelerini oluşturur ve optimize eder:

- Stilleri bir kez tanımlayıp birden çok yerde kullanabilirsiniz
- JavaScript motorunda stilleri doğrular ve hataları bildirir
- Stilleri ID'lere dönüştürerek performansı artırır

## Stil Özellikleri

React Native'deki stil özellikleri, CSS'e benzer ancak camelCase yazım kuralını kullanır:

- **backgroundColor** yerine **background-color**
- **fontSize** yerine **font-size**
- **marginTop** yerine **margin-top**

## Stil Birleştirme

Birden fazla stil nesnesini birleştirerek kullanabilirsiniz:

- Dizi içinde stil nesneleri: [styles.container, styles.active]
- Koşullu stiller: [styles.button, isActive && styles.activeButton]`,
            codeExamples: [
              {
                id: 'stylesheet-example',
                title: 'StyleSheet Kullanımı',
                code: `import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StyleSheetExample() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet Örneği</Text>
      
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'home' && styles.activeTab]}
          onPress={() => setActiveTab('home')}
        >
          <Text style={[
            styles.tabText, 
            activeTab === 'home' && styles.activeTabText
          ]}>
            Ana Sayfa
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'profile' && styles.activeTab]}
          onPress={() => setActiveTab('profile')}
        >
          <Text style={[
            styles.tabText, 
            activeTab === 'profile' && styles.activeTabText
          ]}>
            Profil
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'settings' && styles.activeTab]}
          onPress={() => setActiveTab('settings')}
        >
          <Text style={[
            styles.tabText, 
            activeTab === 'settings' && styles.activeTabText
          ]}>
            Ayarlar
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.contentText}>
          {activeTab === 'home' && 'Ana Sayfa İçeriği'}
          {activeTab === 'profile' && 'Profil İçeriği'}
          {activeTab === 'settings' && 'Ayarlar İçeriği'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4361EE',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#4361EE',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
  },
});`,
                description: 'StyleSheet API kullanım örneği',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-stylesheet',
              questions: [
                {
                  id: 'q1',
                  text: 'StyleSheet.create metodunun avantajı nedir?',
                  options: [
                    'Daha az kod yazmanızı sağlar',
                    'Stilleri optimize eder ve performansı artırır',
                    'Otomatik olarak CSS dosyası oluşturur',
                    'Platform özel stiller tanımlar'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'React Native\'de CSS özelliklerini nasıl yazarız?',
                  options: [
                    'Tire ile ayrılmış kelimeler (kebab-case): background-color',
                    'Alt çizgi ile ayrılmış kelimeler (snake_case): background_color',
                    'Deve notasyonu (camelCase): backgroundColor',
                    'Büyük harfle başlayan kelimeler (PascalCase): BackgroundColor'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q3',
                  text: 'Birden fazla stili birleştirmek için hangi yöntem kullanılır?',
                  options: [
                    'styles.combine(style1, style2)',
                    'StyleSheet.merge(style1, style2)',
                    'Dizi içinde stil nesneleri: [style1, style2]',
                    'Object.assign(style1, style2)'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q4',
                  text: 'Koşullu stil uygulamak için en yaygın yöntem nedir?',
                  options: [
                    'if-else blokları kullanmak',
                    'switch-case ifadeleri kullanmak',
                    'Ternary operatör kullanmak: condition ? style1 : style2',
                    'AND operatörü kullanmak: [baseStyle, condition && conditionalStyle]'
                  ],
                  correctOptionIndex: 3,
                },
                {
                  id: 'q5',
                  text: 'React Native\'de inline stil tanımlamanın dezavantajı nedir?',
                  options: [
                    'Çalışmaz, sadece StyleSheet.create kullanılabilir',
                    'Performans optimizasyonlarından yararlanamaz',
                    'Sadece basit stiller için kullanılabilir',
                    'Platform özel stilleri desteklemez'
                  ],
                  correctOptionIndex: 1,
                },
              ],
            },
            completed: false,
            duration: '35 dakika',
          },
          {
            id: 'flexbox',
            title: 'Flexbox Layout',
            content: `# Flexbox Layout

React Native, bileşenleri düzenlemek için Flexbox layout sistemini kullanır. Flexbox, esnek ve duyarlı (responsive) arayüzler oluşturmayı kolaylaştırır.

## Temel Flexbox Özellikleri

### Flex Direction

Flex direction, öğelerin ana eksende nasıl yerleştirileceğini belirler:

- **row**: Öğeler soldan sağa yerleştirilir (varsayılan web'de)
- **column**: Öğeler yukarıdan aşağıya yerleştirilir (varsayılan React Native'de)
- **row-reverse**: Öğeler sağdan sola yerleştirilir
- **column-reverse**: Öğeler aşağıdan yukarıya yerleştirilir

### Justify Content

Justify content, öğelerin ana eksende nasıl hizalanacağını belirler:

- **flex-start**: Öğeler başlangıçta hizalanır (varsayılan)
- **flex-end**: Öğeler sonda hizalanır
- **center**: Öğeler ortada hizalanır
- **space-between**: Öğeler arasında eşit boşluk bırakılır
- **space-around**: Öğelerin etrafında eşit boşluk bırakılır
- **space-evenly**: Öğeler arasında ve kenarlarında eşit boşluk bırakılır

### Align Items

Align items, öğelerin çapraz eksende nasıl hizalanacağını belirler:

- **stretch**: Öğeler, çapraz ekseni dolduracak şekilde uzatılır (varsayılan)
- **flex-start**: Öğeler çapraz eksenin başında hizalanır
- **flex-end**: Öğeler çapraz eksenin sonunda hizalanır
- **center**: Öğeler çapraz eksenin ortasında hizalanır
- **baseline**: Öğeler, metin taban çizgisine göre hizalanır

### Flex

Flex özelliği, bir öğenin ne kadar büyüyebileceğini veya küçülebileceğini belirler:

- **flex: 1**: Öğe, mevcut alanı dolduracak şekilde büyür
- **flex: 2**: Öğe, flex: 1 olan bir öğeden iki kat daha fazla alan kaplar`,
            codeExamples: [
              {
                id: 'flexbox-example',
                title: 'Flexbox Layout Örneği',
                code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FlexboxExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flexbox Layout Örneği</Text>
      
      <Text style={styles.sectionTitle}>Row - Space Between</Text>
      <View style={styles.rowSpaceBetween}>
        <View style={[styles.box, styles.box1]}><Text style={styles.boxText}>1</Text></View>
        <View style={[styles.box, styles.box2]}><Text style={styles.boxText}>2</Text></View>
        <View style={[styles.box, styles.box3]}><Text style={styles.boxText}>3</Text></View>
      </View>
      
      <Text style={styles.sectionTitle}>Column - Center</Text>
      <View style={styles.columnCenter}>
        <View style={[styles.box, styles.box1]}><Text style={styles.boxText}>1</Text></View>
        <View style={[styles.box, styles.box2]}><Text style={styles.boxText}>2</Text></View>
        <View style={[styles.box, styles.box3]}><Text style={styles.boxText}>3</Text></View>
      </View>
      
      <Text style={styles.sectionTitle}>Flex Grow</Text>
      <View style={styles.flexGrow}>
        <View style={[styles.growBox, { flex: 1 }]}><Text style={styles.boxText}>flex: 1</Text></View>
        <View style={[styles.growBox, { flex: 2 }]}><Text style={styles.boxText}>flex: 2</Text></View>
        <View style={[styles.growBox, { flex: 3 }]}><Text style={styles.boxText}>flex: 3</Text></View>
      </View>
      
      <Text style={styles.sectionTitle}>Absolute Positioning</Text>
      <View style={styles.absoluteContainer}>
        <View style={[styles.absoluteBox, styles.topLeft]}><Text style={styles.boxText}>TL</Text></View>
        <View style={[styles.absoluteBox, styles.topRight]}><Text style={styles.boxText}>TR</Text></View>
        <View style={[styles.absoluteBox, styles.bottomLeft]}><Text style={styles.boxText}>BL</Text></View>
        <View style={[styles.absoluteBox, styles.bottomRight]}><Text style={styles.boxText}>BR</Text></View>
        <View style={[styles.absoluteBox, styles.center]}><Text style={styles.boxText}>C</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  columnCenter: {
    height: 150,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  flexGrow: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 20,
  },
  box: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#FF9999',
  },
  box2: {
    backgroundColor: '#99FF99',
  },
  box3: {
    backgroundColor: '#9999FF',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  growBox: {
    height: 50,
    backgroundColor: '#4361EE',
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteContainer: {
    height: 200,
    backgroundColor: '#f0f0f0',
    position: 'relative',
    marginBottom: 20,
  },
  absoluteBox: {
    position: 'absolute',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
  },
  center: {
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});`,
                description: 'Flexbox layout örnekleri',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-flexbox',
              questions: [
                {
                  id: 'q1',
                  text: 'React Native\'de varsayılan flex direction nedir?',
                  options: [
                    'row',
                    'column',
                    'row-reverse',
                    'column-reverse'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'Öğeleri ana eksende ortada hizalamak için hangi özellik kullanılır?',
                  options: [
                    'alignItems: "center"',
                    'justifyContent: "center"',
                    'alignContent: "center"',
                    'textAlign: "center"'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q3',
                  text: 'Öğeleri çapraz eksende ortada hizalamak için hangi özellik kullanılır?',
                  options: [
                    'alignItems: "center"',
                    'justifyContent: "center"',
                    'alignContent: "center"',
                    'textAlign: "center"'
                  ],
                  correctOptionIndex: 0,
                },
                {
                  id: 'q4',
                  text: 'flex: 1 özelliği ne işe yarar?',
                  options: [
                    'Öğeyi görünmez yapar',
                    'Öğeyi sabit bir boyuta getirir',
                    'Öğenin mevcut alanı doldurmasını sağlar',
                    'Öğeyi ekranın en üstüne taşır'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q5',
                  text: 'Öğeler arasında eşit boşluk bırakmak için hangi özellik kullanılır?',
                  options: [
                    'justifyContent: "space-between"',
                    'alignItems: "space-between"',
                    'flexDirection: "space-between"',
                    'flex: "space-between"'
                  ],
                  correctOptionIndex: 0,
                },
              ],
            },
            completed: false,
            duration: '50 dakika',
          },
        ],
      },
    ],
  },
  {
    id: 'react-native-state-props',
    title: 'State ve Props Yönetimi',
    description: 'React Native uygulamalarında veri yönetiminin temellerini öğrenin.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    totalLessons: 12,
    completedLessons: 0,
    level: 'Başlangıç',
    duration: '6 saat',
    topics: [
      {
        id: 'props-temelleri',
        title: 'Props Temelleri',
        description: 'Bileşenler arası veri aktarımı için props kullanımı',
        lessons: [
          {
            id: 'props-nedir',
            title: 'Props Nedir?',
            content: `# Props Nedir?

Props (Properties), React ve React Native'de bileşenler arası veri aktarımı için kullanılan bir mekanizmadır. Props, bir bileşenden diğerine aktarılan salt okunur (read-only) verilerdir.

## Props'un Temel Özellikleri

- **Salt Okunur**: Props değiştirilemez. Bir bileşen kendi props'unu değiştiremez.
- **Yukarıdan Aşağıya Akış**: Veriler üst bileşenden alt bileşene doğru akar.
- **Herhangi Bir Veri Tipi**: String, number, boolean, array, object, function gibi herhangi bir veri tipi olabilir.

## Props Kullanımı

Props, HTML öznitelikleri gibi bileşenlere aktarılır:`,
            codeExamples: [
              {
                id: 'basic-props',
                title: 'Temel Props Kullanımı',
                code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Alt bileşen
function Greeting(props) {
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingText}>Merhaba, {props.name}!</Text>
    </View>
  );
}

// Ana bileşen
export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="Ahmet" />
      <Greeting name="Ayşe" />
      <Greeting name="Mehmet" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  greetingContainer: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '100%',
  },
  greetingText: {
    fontSize: 18,
  },
});`,
                description: 'Basit bir props kullanım örneği',
                language: 'jsx',
              },
              {
                id: 'destructuring-props',
                title: 'Props Destructuring',
                code: `import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Destructuring ile props kullanımı
function UserCard({ name, age, avatar, isActive }) {
  return (
    <View style={[styles.card, isActive && styles.activeCard]}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age} yaşında</Text>
        <Text style={styles.status}>
          {isActive ? 'Aktif Kullanıcı' : 'Pasif Kullanıcı'}
        </Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <UserCard
        name="Ahmet Yılmaz"
        age={28}
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
        isActive={true}
      />
      <UserCard
        name="Ayşe Demir"
        age={34}
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
        isActive={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activeCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  status: {
    fontSize: 12,
    marginTop: 6,
    color: '#888',
  },
});`,
                description: 'Destructuring ile props kullanımı',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-props',
              questions: [
                {
                  id: 'q1',
                  text: 'Props ile ilgili aşağıdakilerden hangisi doğrudur?',
                  options: [
                    'Props, bileşen içinde değiştirilebilir',
                    'Props, alt bileşenden üst bileşene veri aktarır',
                    'Props, salt okunur (read-only) verilerdir',
                    'Props, sadece string değerler alabilir'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q2',
                  text: 'Aşağıdaki kod parçasında hata nerededir?',
                  options: [
                    'name prop\'u eksik',
                    'props.name yerine name kullanılmalı',
                    'props değiştirilmeye çalışılıyor',
                    'Greeting bileşeni yanlış tanımlanmış'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q3',
                  text: 'Props destructuring ne işe yarar?',
                  options: [
                    'Props\'u parçalara ayırarak silmek',
                    'Props\'u doğrudan değişkenlere atamak',
                    'Props\'u başka bileşenlere aktarmak',
                    'Props\'u state\'e dönüştürmek'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q4',
                  text: 'Bir bileşene fonksiyon nasıl props olarak geçirilir?',
                  options: [
                    'Fonksiyonu çağırarak: onClick={handleClick()}',
                    'Fonksiyon referansını geçerek: onClick={handleClick}',
                    'String olarak: onClick="handleClick"',
                    'Fonksiyonlar props olarak geçirilemez'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q5',
                  text: 'Props\'un veri akışı yönü nasıldır?',
                  options: [
                    'Üst bileşenden alt bileşene (yukarıdan aşağıya)',
                    'Alt bileşenden üst bileşene (aşağıdan yukarıya)',
                    'Her iki yönde de olabilir',
                    'Kardeş bileşenler arasında'
                  ],
                  correctOptionIndex: 0,
                },
              ],
            },
            completed: false,
            duration: '30 dakika',
          },
          {
            id: 'default-props',
            title: 'Default Props ve PropTypes',
            content: `# Default Props ve PropTypes

## Default Props

Default props, bir bileşene props geçilmediğinde kullanılacak varsayılan değerleri tanımlar. Bu, bileşenlerinizi daha sağlam ve kullanımı daha kolay hale getirir.

## PropTypes (TypeScript ile Tip Kontrolü)

PropTypes veya TypeScript, props'un tiplerini kontrol etmek için kullanılır. Bu, hataları erken yakalamaya ve kodunuzu daha güvenli hale getirmeye yardımcı olur.

React Native projelerinde genellikle TypeScript kullanılır, ancak JavaScript kullanıyorsanız prop-types kütüphanesini kullanabilirsiniz.`,
            codeExamples: [
              {
                id: 'default-props-example',
                title: 'Default Props Kullanımı',
                code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Fonksiyonel bileşen ile default props
function Button({ title, color, onPress }) {
  return (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
}

// Default props tanımlama
Button.defaultProps = {
  title: 'Tıkla',
  color: '#4361EE',
  onPress: () => console.log('Button pressed'),
};

// Alternatif olarak, destructuring ile default değerler
function AltButton({ 
  title = 'Tıkla', 
  color = '#4361EE', 
  onPress = () => console.log('Button pressed') 
}) {
  return (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Default Props Örneği</Text>
      
      <Button title="Gönder" onPress={() => console.log('Gönder tıklandı')} />
      <Button color="#FF6B6B" />
      <Button />
      
      <Text style={styles.subtitle}>Alternatif Yöntem</Text>
      
      <AltButton title="Kaydet" onPress={() => console.log('Kaydet tıklandı')} />
      <AltButton color="#4CAF50" />
      <AltButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    minWidth: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`,
                description: 'Default props kullanım örneği',
                language: 'jsx',
              },
              {
                id: 'typescript-props-example',
                title: 'TypeScript ile Props Tip Kontrolü',
                code: `import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Props için TypeScript interface tanımlama
interface ButtonProps {
  title: string;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
}

// TypeScript ile props tip kontrolü
function Button({ 
  title, 
  color = '#4361EE', 
  onPress = () => {}, 
  disabled = false 
}: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor: color },
        disabled && styles.disabledButton
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

// Kullanım örneği
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TypeScript Props Örneği</Text>
      
      <Button 
        title="Gönder" 
        onPress={() => console.log('Gönder tıklandı')} 
      />
      
      <Button 
        title="Sil" 
        color="#FF6B6B" 
        onPress={() => console.log('Sil tıklandı')} 
      />
      
      <Button 
        title="Devre Dışı" 
        disabled={true} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    minWidth: 150,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`,
                description: 'TypeScript ile props tip kontrolü',
                language: 'tsx',
              },
            ],
            quiz: {
              id: 'quiz-default-props',
              questions: [
                {
                  id: 'q1',
                  text: 'Default props ne işe yarar?',
                  options: [
                    'Props\'u zorunlu hale getirir',
                    'Props geçilmediğinde kullanılacak varsayılan değerleri tanımlar',
                    'Props\'un tipini kontrol eder',
                    'Props\'u state\'e dönüştürür'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'Fonksiyonel bir bileşende default props tanımlamanın iki yolu nedir?',
                  options: [
                    'Component.defaultProps ve destructuring ile default değerler',
                    'useState ve useEffect kullanarak',
                    'props.default ve default.props kullanarak',
                    'setDefaultProps fonksiyonu ve defaultValue prop\'u'
                  ],
                  correctOptionIndex: 0,
                },
                {
                  id: 'q3',
                  text: 'TypeScript\'te props için interface tanımlamanın avantajı nedir?',
                  options: [
                    'Daha hızlı çalışmasını sağlar',
                    'Daha az kod yazmanızı sağlar',
                    'Tip kontrolü yaparak hataları erken yakalamanızı sağlar',
                    'Otomatik olarak default props oluşturur'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q4',
                  text: 'TypeScript\'te opsiyonel bir prop nasıl tanımlanır?',
                  options: [
                    'prop: any',
                    'prop?: type',
                    'prop: type | undefined',
                    'prop: type = defaultValue'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q5',
                  text: 'Aşağıdaki kod parçasında hata nerededir?',
                  options: [
                    'Button.defaultProps yanlış tanımlanmış',
                    'Default props, bileşen tanımından önce olmalı',
                    'Default props, bileşen içinde tanımlanmalı',
                    'Hata yok, kod doğru'
                  ],
                  correctOptionIndex: 3,
                },
              ],
            },
            completed: false,
            duration: '35 dakika',
          },
          {
            id: 'children-prop',
            title: 'Children Prop',
            content: `# Children Prop

React ve React Native'de, children prop'u özel bir prop'tur. Bir bileşenin açılış ve kapanış etiketleri arasındaki içeriği temsil eder.

## Children Prop Nedir?

Children prop, bileşenleri iç içe kullanmanızı ve bileşen kompozisyonu oluşturmanızı sağlar. Bu, kodunuzu daha modüler ve yeniden kullanılabilir hale getirir.

## Children Prop Kullanımı

Children prop'u kullanarak, özel konteyner bileşenleri, layout bileşenleri veya stil sarmalayıcıları oluşturabilirsiniz.`,
            codeExamples: [
              {
                id: 'children-prop-example',
                title: 'Children Prop Kullanımı',
                code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Children prop kullanan bir Card bileşeni
function Card({ title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardContent}>
        {children}
      </View>
    </View>
  );
}

// Children prop kullanan bir Container bileşeni
function Container({ children, backgroundColor = '#ffffff' }) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {children}
    </View>
  );
}

export default function App() {
  return (
    <Container backgroundColor="#f5f5f5">
      <Text style={styles.title}>Children Prop Örneği</Text>
      
      <Card title="Profil Bilgileri">
        <Text style={styles.text}>Ad: Ahmet Yılmaz</Text>
        <Text style={styles.text}>E-posta: ahmet@example.com</Text>
        <Text style={styles.text}>Yaş: 28</Text>
      </Card>
      
      <Card title="Adres Bilgileri">
        <Text style={styles.text}>Şehir: İstanbul</Text>
        <Text style={styles.text}>İlçe: Kadıköy</Text>
        <Text style={styles.text}>Posta Kodu: 34000</Text>
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4361EE',
  },
  cardContent: {
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});`,
                description: 'Children prop kullanım örneği',
                language: 'jsx',
              },
              {
                id: 'advanced-children-example',
                title: 'Gelişmiş Children Kullanımı',
                code: `import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Children'ı manipüle eden bir bileşen
function ButtonGroup({ children, spacing = 10 }) {
  // React.Children API'si ile children'ı manipüle etme
  const childrenWithProps = React.Children.map(children, (child, index) => {
    // Her child'a ek prop'lar ekleme
    return React.cloneElement(child, {
      style: [
        child.props.style,
        { marginRight: index < children.length - 1 ? spacing : 0 }
      ],
    });
  });

  return (
    <View style={styles.buttonGroup}>
      {childrenWithProps}
    </View>
  );
}

// Özel bir buton bileşeni
function Button({ title, onPress, style, type = 'primary' }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'primary' && styles.primaryButton,
        type === 'secondary' && styles.secondaryButton,
        type === 'danger' && styles.dangerButton,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gelişmiş Children Kullanımı</Text>
      
      <Text style={styles.subtitle}>Buton Grubu:</Text>
      <ButtonGroup spacing={15}>
        <Button 
          title="Kaydet" 
          onPress={() => console.log('Kaydet')} 
        />
        <Button 
          title="Düzenle" 
          type="secondary" 
          onPress={() => console.log('Düzenle')} 
        />
        <Button 
          title="Sil" 
          type="danger" 
          onPress={() => console.log('Sil')} 
        />
      </ButtonGroup>
      
      <Text style={styles.subtitle}>Tek Buton:</Text>
      <Button 
        title="Gönder" 
        onPress={() => console.log('Gönder')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4361EE',
  },
  secondaryButton: {
    backgroundColor: '#3F8EFC',
  },
  dangerButton: {
    backgroundColor: '#FF6B6B',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`,
                description: 'React.Children API ile gelişmiş children kullanımı',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-children-prop',
              questions: [
                {
                  id: 'q1',
                  text: 'Children prop nedir?',
                  options: [
                    'Bir bileşenin alt bileşenlerini temsil eden özel bir prop',
                    'Sadece metin içeriği için kullanılan bir prop',
                    'Bileşenin state\'ini yöneten bir prop',
                    'Sadece görsel bileşenler için kullanılan bir prop'
                  ],
                  correctOptionIndex: 0,
                },
                {
                  id: 'q2',
                  text: 'Bir bileşende children prop\'a nasıl erişilir?',
                  options: [
                    'this.props.children',
                    'props.children',
                    'this.children',
                    'getChildren()'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q3',
                  text: 'React.Children.map() ne işe yarar?',
                  options: [
                    'Children\'ı bir diziye dönüştürür',
                    'Her child üzerinde bir fonksiyon çalıştırır ve yeni bir dizi döndürür',
                    'Children\'ı filtrelemek için kullanılır',
                    'Children\'ı sıralamak için kullanılır'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q4',
                  text: 'React.cloneElement() ne işe yarar?',
                  options: [
                    'Yeni bir React elementi oluşturur',
                    'Bir elementi kopyalar',
                    'Mevcut bir elementi klonlar ve yeni prop\'lar ekler',
                    'Bir elementi DOM\'a ekler'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q5',
                  text: 'Children prop kullanmanın avantajı nedir?',
                  options: [
                    'Daha hızlı render sağlar',
                    'Daha az bellek kullanır',
                    'Bileşen kompozisyonu ve yeniden kullanılabilirlik sağlar',
                    'Otomatik stil uygular'
                  ],
                  correctOptionIndex: 2,
                },
              ],
            },
            completed: false,
            duration: '40 dakika',
          },
        ],
      },
      {
        id: 'state-temelleri',
        title: 'State Temelleri',
        description: 'Bileşen içi durum yönetimi için state kullanımı',
        lessons: [
          {
            id: 'state-nedir',
            title: 'State Nedir?',
            content: `# State Nedir?

State (Durum), bir React Native bileşeninin kendi içinde tuttuğu ve zaman içinde değişebilen verilerdir. Bir bileşenin davranışını ve görünümünü kontrol etmek için kullanılır.

## State vs Props

- **Props**: Dışarıdan bileşene aktarılan, salt okunur veriler.
- **State**: Bileşenin kendi içinde tuttuğu ve değiştirebileceği veriler.

## useState Hook'u

React 16.8 ile birlikte gelen Hooks API'si sayesinde, fonksiyonel bileşenlerde de state kullanabiliyoruz. En temel hook olan useState, bir state değişkeni ve onu güncelleyecek bir fonksiyon döndürür.

## State Kullanımı

State, kullanıcı etkileşimleri, ağ istekleri veya zamanlayıcılar gibi olaylara yanıt olarak değişebilir:`,
            codeExamples: [
              {
                id: 'basic-state',
                title: 'Temel State Kullanımı',
                code: `import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
  // useState hook'u ile bir sayaç state'i oluşturuyoruz
  // 0: başlangıç değeri
  // count: state değişkeni
  // setCount: state'i güncelleyen fonksiyon
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Sayaç: {count}</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Artır" 
          onPress={() => setCount(count + 1)} 
        />
        
        <View style={styles.buttonSpacer} />
        
        <Button 
          title="Azalt" 
          onPress={() => setCount(count - 1)}
          color="#FF3B30" 
        />
      </View>
      
      <Button 
        title="Sıfırla" 
        onPress={() => setCount(0)}
        color="#8E8E93" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counterText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonSpacer: {
    width: 20,
  },
});`,
                description: 'useState hook ile basit bir sayaç uygulaması',
                language: 'jsx',
              },
              {
                id: 'multiple-state',
                title: 'Çoklu State Kullanımı',
                code: `import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet } from 'react-native';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcı Formu</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>İsim:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="İsminizi girin"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-posta:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-posta adresinizi girin"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Aktif Kullanıcı:</Text>
        <Switch
          value={isActive}
          onValueChange={setIsActive}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isActive ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Form Bilgileri:</Text>
        <Text>İsim: {name || 'Girilmedi'}</Text>
        <Text>E-posta: {email || 'Girilmedi'}</Text>
        <Text>Durum: {isActive ? 'Aktif' : 'Pasif'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summary: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});`,
                description: 'Birden fazla state kullanımı',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-state',
              questions: [
                {
                  id: 'q1',
                  text: 'useState hook\'u ne döndürür?',
                  options: [
                    'Sadece bir state değişkeni',
                    'Bir state değişkeni ve onu güncelleyen bir fonksiyon',
                    'Sadece bir güncelleme fonksiyonu',
                    'Bir obje'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'State\'i güncellemek için ne yapmalıyız?',
                  options: [
                    'Doğrudan state değişkenini değiştirmek',
                    'props üzerinden değiştirmek',
                    'setState veya useState ile dönen set fonksiyonunu kullanmak',
                    'componentDidUpdate metodunu çağırmak'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q3',
                  text: 'useState hook\'unun ilk parametresi neyi temsil eder?',
                  options: [
                    'Güncel state değerini',
                    'State\'in başlangıç değerini',
                    'State\'in adını',
                    'State\'in tipini'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q4',
                  text: 'Aşağıdakilerden hangisi state kullanımı için doğrudur?',
                  options: [
                    'State, bileşenin yeniden render edilmesine neden olmaz',
                    'State, sadece class bileşenlerinde kullanılabilir',
                    'State değiştiğinde, bileşen yeniden render edilir',
                    'State, props\'tan daha yavaş çalışır'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q5',
                  text: 'Fonksiyonel bir bileşende birden fazla state nasıl kullanılır?',
                  options: [
                    'Sadece bir state kullanılabilir',
                    'useState hook\'unu birden fazla kez çağırarak',
                    'useMultipleState hook\'u kullanarak',
                    'Bir obje içinde tüm state\'leri birleştirerek'
                  ],
                  correctOptionIndex: 1,
                },
              ],
            },
            completed: false,
            duration: '45 dakika',
          },
          {
            id: 'state-update',
            title: 'State Güncelleme Yöntemleri',
            content: `# State Güncelleme Yöntemleri

React Native'de state güncellemesi asenkron olarak gerçekleşir. Bu nedenle, state güncellemelerini doğru şekilde yönetmek önemlidir.

## Doğrudan Güncelleme

En basit state güncelleme yöntemi, set fonksiyonuna yeni değeri doğrudan geçmektir:

\`\`\`jsx
setCount(5);
\`\`\`

## Önceki State'e Dayalı Güncelleme

Önceki state değerine dayalı güncellemeler için, set fonksiyonuna bir fonksiyon geçmelisiniz:

\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`

Bu, özellikle birden fazla state güncellemesi yapıyorsanız önemlidir.

## Obje State Güncelleme

Obje tipindeki state'leri güncellerken, önceki değerleri korumak için spread operatörünü kullanmalısınız:

\`\`\`jsx
setUser(prevUser => ({ ...prevUser, name: 'Ahmet' }));
\`\`\``,
            codeExamples: [
              {
                id: 'state-update-example',
                title: 'State Güncelleme Yöntemleri',
                code: `import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StateUpdateExample() {
  const [count, setCount] = useState(0);
  
  // Doğrudan güncelleme
  const directUpdate = () => {
    setCount(5);
  };
  
  // Önceki state'e dayalı güncelleme
  const incrementByOne = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  // Birden fazla güncelleme (yanlış yöntem)
  const incrementThreeTimesWrong = () => {
    setCount(count + 1); // count değeri aynı kalır
    setCount(count + 1); // count değeri aynı kalır
    setCount(count + 1); // count değeri aynı kalır
    // Sonuç: count sadece 1 artar
  };
  
  // Birden fazla güncelleme (doğru yöntem)
  const incrementThreeTimesCorrect = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    // Sonuç: count 3 artar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>State Güncelleme Yöntemleri</Text>
      <Text style={styles.counterText}>Sayaç: {count}</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="5'e Ayarla" 
          onPress={directUpdate} 
        />
        
        <Button 
          title="1 Artır" 
          onPress={incrementByOne} 
          color="#4361EE"
        />
        
        <Button 
          title="3 Artır (Yanlış)" 
          onPress={incrementThreeTimesWrong} 
          color="#FF6B6B"
        />
        
        <Button 
          title="3 Artır (Doğru)" 
          onPress={incrementThreeTimesCorrect} 
          color="#4CAF50"
        />
        
        <Button 
          title="Sıfırla" 
          onPress={() => setCount(0)} 
          color="#8E8E93"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
});`,
                description: 'Farklı state güncelleme yöntemleri',
                language: 'jsx',
              },
              {
                id: 'object-state-update',
                title: 'Obje State Güncelleme',
                code: `import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function ObjectStateExample() {
  const [user, setUser] = useState({
    name: 'Ahmet',
    email: 'ahmet@example.com',
    preferences: {
      darkMode: false,
      notifications: true,
    },
  });
  
  // Tek bir alanı güncelleme
  const updateName = (name) => {
    setUser(prevUser => ({
      ...prevUser,
      name,
    }));
  };
  
  // İç içe obje güncelleme
  const toggleDarkMode = () => {
    setUser(prevUser => ({
      ...prevUser,
      preferences: {
        ...prevUser.preferences,
        darkMode: !prevUser.preferences.darkMode,
      },
    }));
  };
  
  // Birden fazla alanı güncelleme
  const resetUser = () => {
    setUser({
      name: '',
      email: '',
      preferences: {
        darkMode: false,
        notifications: false,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obje State Güncelleme</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>İsim:</Text>
        <TextInput
          style={styles.input}
          value={user.name}
          onChangeText={updateName}
          placeholder="İsminizi girin"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title={user.preferences.darkMode ? "Açık Mod" : "Karanlık Mod"} 
          onPress={toggleDarkMode} 
          color="#4361EE"
        />
        
        <Button 
          title="Kullanıcıyı Sıfırla" 
          onPress={resetUser} 
          color="#FF6B6B"
        />
      </View>
      
      <View style={styles.userInfo}>
        <Text style={styles.infoTitle}>Kullanıcı Bilgileri:</Text>
        <Text>İsim: {user.name}</Text>
        <Text>E-posta: {user.email}</Text>
        <Text>Karanlık Mod: {user.preferences.darkMode ? 'Açık' : 'Kapalı'}</Text>
        <Text>Bildirimler: {user.preferences.notifications ? 'Açık' : 'Kapalı'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userInfo: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});`,
                description: 'Obje tipindeki state güncellemeleri',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-state-update',
              questions: [
                {
                  id: 'q1',
                  text: 'React Native\'de state güncellemesi nasıl gerçekleşir?',
                  options: [
                    'Senkron olarak',
                    'Asenkron olarak',
                    'Bloke edici şekilde',
                    'Otomatik olarak'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'Önceki state değerine dayalı güncelleme yapmak için hangi yöntem kullanılır?',
                  options: [
                    'setState(newValue)',
                    'setState(prevState => newValue)',
                    'updateState(newValue)',
                    'this.state = newValue'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q3',
                  text: 'Obje tipindeki state\'i güncellerken neden spread operatörü (...) kullanılır?',
                  options: [
                    'Daha hızlı çalışması için',
                    'Önceki değerleri korumak için',
                    'State\'i sıfırlamak için',
                    'Objeyi kopyalamak gerekmez, doğrudan değiştirilebilir'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q4',
                  text: 'Aşağıdaki kodun sonucu ne olur?',
                  options: [
                    'count 3 artar',
                    'count 1 artar',
                    'count değişmez',
                    'Hata verir'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q5',
                  text: 'İç içe objeleri güncellerken doğru yaklaşım nedir?',
                  options: [
                    'Sadece değişen iç objeyi güncellemek yeterlidir',
                    'Tüm objeyi yeniden oluşturmak gerekir',
                    'Her seviyede spread operatörü (...) kullanarak kopyalamak',
                    'setState yerine forceUpdate kullanmak'
                  ],
                  correctOptionIndex: 2,
                },
              ],
            },
            completed: false,
            duration: '45 dakika',
          },
          {
            id: 'useeffect-hook',
            title: 'useEffect Hook',
            content: `# useEffect Hook

useEffect hook'u, React bileşenlerinde yan etkileri (side effects) yönetmek için kullanılır. Yan etkiler, veri çekme, abonelikler, DOM manipülasyonu gibi işlemleri içerir.

## useEffect Nedir?

useEffect, bileşen render edildikten sonra çalışan bir fonksiyondur. Bileşenin yaşam döngüsü olaylarını (lifecycle events) yönetmek için kullanılır.

## useEffect Kullanımı

useEffect hook'u iki parametre alır:
1. Yan etki fonksiyonu
2. Bağımlılık dizisi (dependency array)

\`\`\`jsx
useEffect(() => {
  // Yan etki kodu
  return () => {
    // Temizleme kodu (opsiyonel)
  };
}, [dependencies]);
\`\`\`

## Bağımlılık Dizisi

- **Boş dizi ([])**: Yan etki sadece bileşen monte edildiğinde (mount) çalışır
- **Değişkenler içeren dizi ([a, b])**: Yan etki, bağımlılıklar değiştiğinde çalışır
- **Bağımlılık dizisi yok**: Yan etki her render'da çalışır`,
            codeExamples: [
              {
                id: 'useeffect-example',
                title: 'useEffect Kullanımı',
                code: `import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Ahmet');
  
  // 1. Her render'da çalışır
  useEffect(() => {
    console.log('Her render\'da çalışır');
  });
  
  // 2. Sadece ilk render'da çalışır (componentDidMount)
  useEffect(() => {
    console.log('Sadece ilk render\'da çalışır');
  }, []);
  
  // 3. count değiştiğinde çalışır
  useEffect(() => {
    console.log('Count değişti:', count);
    
    // Temizleme fonksiyonu (componentWillUnmount)
    return () => {
      console.log('Count effect temizleniyor');
    };
  }, [count]);
  
  // 4. name değiştiğinde çalışır
  useEffect(() => {
    console.log('Name değişti:', name);
  }, [name]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useEffect Hook Örneği</Text>
      
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>Name: {name}</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Count Artır" 
          onPress={() => setCount(count + 1)} 
          color="#4361EE"
        />
        
        <Button 
          title="İsmi Değiştir" 
          onPress={() => setName(name === 'Ahmet' ? 'Mehmet' : 'Ahmet')} 
          color="#FF6B6B"
        />
      </View>
      
      <Text style={styles.note}>
        Console'da log'ları kontrol edin
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  note: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    fontStyle: 'italic',
  },
});`,
                description: 'useEffect hook kullanım örnekleri',
                language: 'jsx',
              },
              {
                id: 'useeffect-fetch-example',
                title: 'useEffect ile Veri Çekme',
                code: `import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

export default function FetchDataExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // API'den veri çekme
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError('Veri çekilirken bir hata oluştu');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
    
    // Temizleme fonksiyonu
    return () => {
      // Burada abonelikler iptal edilebilir
      console.log('Bileşen unmount edildi');
    };
  }, []);
  
  // Kullanıcı öğesini render etme
  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useEffect ile Veri Çekme</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#4361EE" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={renderUserItem}
          keyExtractor={item => item.id.toString()}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  userItem: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});`,
                description: 'useEffect ile API\'den veri çekme',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-useeffect',
              questions: [
                {
                  id: 'q1',
                  text: 'useEffect hook\'u ne işe yarar?',
                  options: [
                    'State yönetimi için kullanılır',
                    'Yan etkileri (side effects) yönetmek için kullanılır',
                    'Bileşenleri optimize etmek için kullanılır',
                    'Prop\'ları yönetmek için kullanılır'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'useEffect hook\'u ne zaman çalışır?',
                  options: [
                    'Sadece bileşen ilk render edildiğinde',
                    'Bileşen render edilmeden önce',
                    'Bileşen render edildikten sonra',
                    'Sadece bileşen unmount edildiğinde'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q3',
                  text: 'Boş bağımlılık dizisi ([]) ile useEffect kullanıldığında ne olur?',
                  options: [
                    'useEffect hiç çalışmaz',
                    'useEffect her render\'da çalışır',
                    'useEffect sadece ilk render\'da çalışır (componentDidMount)',
                    'useEffect sadece bileşen unmount edildiğinde çalışır'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q4',
                  text: 'useEffect içinde return edilen fonksiyon ne işe yarar?',
                  options: [
                    'Yan etkiyi iptal eder',
                    'Temizleme işlemi yapar (cleanup)',
                    'Yeni bir yan etki başlatır',
                    'Bileşeni yeniden render eder'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q5',
                  text: 'Aşağıdaki useEffect kullanımlarından hangisi her render\'da çalışır?',
                  options: [
                    'useEffect(() => {}, [])',
                    'useEffect(() => {}, [count])',
                    'useEffect(() => {})',
                    'useEffect(() => {}, [null])'
                  ],
                  correctOptionIndex: 2,
                },
              ],
            },
            completed: false,
            duration: '50 dakika',
          },
          {
            id: 'custom-hooks',
            title: 'Custom Hooks',
            content: `# Custom Hooks

Custom hooks (özel hook'lar), React bileşenlerinde tekrar kullanılabilir mantık oluşturmanın bir yoludur. Kendi hook'larınızı oluşturarak, bileşenler arasında kod paylaşımını kolaylaştırabilirsiniz.

## Custom Hook Nedir?

Custom hook, "use" ile başlayan ve React hook'larını içeren bir JavaScript fonksiyonudur. Bileşen mantığını yeniden kullanılabilir fonksiyonlara ayırmanızı sağlar.

## Custom Hook Oluşturma

Custom hook oluşturmak için, "use" ile başlayan bir fonksiyon tanımlayın ve içinde diğer hook'ları kullanın:

\`\`\`jsx
function useCustomHook() {
  const [state, setState] = useState(initialState);
  
  useEffect(() => {
    // Yan etki kodu
  }, [dependencies]);
  
  return { state, setState };
}
\`\`\`

## Custom Hook Kullanımı

Custom hook'ları normal hook'lar gibi bileşenlerinizde kullanabilirsiniz:

\`\`\`jsx
function MyComponent() {
  const { state, setState } = useCustomHook();
  
  return (
    // JSX
  );
}
\`\`\``,
            codeExamples: [
              {
                id: 'custom-hook-example',
                title: 'Custom Hook Örneği',
                code: `import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Custom hook: Form state yönetimi
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Input değerlerini güncelleme
  const handleChange = (name, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };
  
  // Form doğrulama
  const validate = () => {
    const newErrors = {};
    
    // Ad alanı kontrolü
    if (!values.name) {
      newErrors.name = 'Ad alanı zorunludur';
    }
    
    // E-posta alanı kontrolü
    if (!values.email) {
      newErrors.email = 'E-posta alanı zorunludur';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Form gönderme
  const handleSubmit = () => {
    const isValid = validate();
    
    if (isValid) {
      setIsSubmitting(true);
      // Burada API çağrısı yapılabilir
      setTimeout(() => {
        setIsSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 1000);
    }
  };
  
  // Form sıfırlama
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };
  
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

// Custom hook kullanımı
export default function FormExample() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm({
    name: '',
    email: '',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Hook Örneği</Text>
      
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Ad:</Text>
          <TextInput
            style={[styles.input, errors.name && styles.inputError]}
            value={values.name}
            onChangeText={(text) => handleChange('name', text)}
            placeholder="Adınızı girin"
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>E-posta:</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            value={values.email}
            onChangeText={(text) => handleChange('email', text)}
            placeholder="E-posta adresinizi girin"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title={isSubmitting ? "Gönderiliyor..." : "Gönder"}
            onPress={handleSubmit}
            disabled={isSubmitting}
            color="#4361EE"
          />
          
          <Button
            title="Sıfırla"
            onPress={resetForm}
            color="#FF6B6B"
          />
        </View>
      </View>
      
      <View style={styles.preview}>
        <Text style={styles.previewTitle}>Form Değerleri:</Text>
        <Text>Ad: {values.name}</Text>
        <Text>E-posta: {values.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#FF6B6B',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  preview: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});`,
                description: 'Form yönetimi için custom hook örneği',
                language: 'jsx',
              },
              {
                id: 'multiple-custom-hooks',
                title: 'Birden Fazla Custom Hook Kullanımı',
                code: `import React from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

// Custom hook: API'den veri çekme
function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError('Veri çekilirken bir hata oluştu');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Custom hook: Sayaç
function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);
  
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Custom hook: Yerel depolama (localStorage benzeri)
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(initialValue);
  
  React.useEffect(() => {
    // Gerçek uygulamada AsyncStorage kullanılabilir
    console.log(`${key} değeri güncellendi:`, storedValue);
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue];
}

// Birden fazla custom hook kullanımı
export default function MultipleHooksExample() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');
  const { count, increment, decrement, reset } = useCounter();
  const [favoriteUser, setFavoriteUser] = useLocalStorage('favoriteUser', null);
  
  const handleSetFavorite = () => {
    if (data) {
      setFavoriteUser(data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Birden Fazla Custom Hook</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>useFetch Hook</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#4361EE" />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : data ? (
          <View style={styles.userCard}>
            <Text style={styles.userName}>{data.name}</Text>
            <Text style={styles.userEmail}>{data.email}</Text>
            <Text style={styles.userPhone}>{data.phone}</Text>
          </View>
        ) : null}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>useCounter Hook</Text>
        <Text style={styles.counterText}>Sayaç: {count}</Text>
        <View style={styles.buttonRow}>
          <Button title="Artır" onPress={increment} color="#4361EE" />
          <Button title="Azalt" onPress={decrement} color="#FF6B6B" />
          <Button title="Sıfırla" onPress={reset} color="#8E8E93" />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>useLocalStorage Hook</Text>
        <Button
          title="Kullanıcıyı Favori Olarak Kaydet"
          onPress={handleSetFavorite}
          disabled={loading || !!error}
          color="#4CAF50"
        />
        {favoriteUser && (
          <Text style={styles.favoriteText}>
            Favori Kullanıcı: {favoriteUser.name}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userCard: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  userPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  errorText: {
    color: 'red',
  },
  counterText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favoriteText: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
});`,
                description: 'Birden fazla custom hook kullanımı',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-custom-hooks',
              questions: [
                {
                  id: 'q1',
                  text: 'Custom hook nedir?',
                  options: [
                    'React\'in sağladığı özel bir hook',
                    '"use" ile başlayan ve React hook\'larını içeren bir JavaScript fonksiyonu',
                    'Sadece class bileşenlerinde kullanılabilen bir hook',
                    'React Native\'e özgü bir hook'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q2',
                  text: 'Custom hook isimlendirme kuralı nedir?',
                  options: [
                    'hook ile başlamalıdır',
                    'use ile başlamalıdır',
                    'custom ile başlamalıdır',
                    'İsimlendirme kuralı yoktur'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q3',
                  text: 'Custom hook\'lar ne sağlar?',
                  options: [
                    'Daha hızlı render',
                    'Otomatik state yönetimi',
                    'Bileşenler arasında mantık paylaşımı',
                    'Native API\'lere erişim'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q4',
                  text: 'Custom hook\'lar içinde hangi hook\'lar kullanılabilir?',
                  options: [
                    'Sadece useState',
                    'Sadece useEffect',
                    'Herhangi bir React hook\'u',
                    'Sadece diğer custom hook\'lar'
                  ],
                  correctOptionIndex: 2,
                },
                {
                  id: 'q5',
                  text: 'Custom hook\'lar ne döndürebilir?',
                  options: [
                    'Sadece bir değer',
                    'Sadece bir fonksiyon',
                    'Herhangi bir JavaScript değeri (değer, fonksiyon, obje, dizi vb.)',
                    'Sadece JSX'
                  ],
                  correctOptionIndex: 2,
                },
              ],
            },
            completed: false,
            duration: '55 dakika',
          },
        ],
      },
      {
        id: 'global-state',
        title: 'Global State Yönetimi',
        description: 'Uygulama genelinde state yönetimi',
        lessons: [
          {
            id: 'context-api',
            title: 'Context API',
            content: `# Context API

Context API, React ve React Native'de prop drilling olmadan bileşenler arasında veri paylaşmanın bir yoludur. Global state yönetimi için kullanılabilir.

## Context Nedir?

Context, bileşen ağacı boyunca veri iletmenin bir yolunu sağlar. Normalde, prop'ları üst bileşenden alt bileşene aktarırsınız. Ancak bu, birçok bileşen için zahmetli olabilir. Context, prop'ları açıkça geçmeden birçok bileşen arasında değerleri paylaşmanızı sağlar.

## Context Oluşturma

Context oluşturmak için React.createContext() kullanılır:

\`\`\`jsx
const MyContext = React.createContext(defaultValue);
\`\`\`

## Context Provider

Context Provider, alt bileşenlere context değerini sağlar:

\`\`\`jsx
<MyContext.Provider value={/* değer */}>
  {/* alt bileşenler */}
</MyContext.Provider>
\`\`\`

## Context Kullanımı

Context değerine erişmek için useContext hook'u kullanılır:

\`\`\`jsx
const value = useContext(MyContext);
\`\`\``,
            codeExamples: [
              {
                id: 'context-example',
                title: 'Context API Kullanımı',
                code: `import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// 1. Context oluşturma
const ThemeContext = createContext();

// 2. Context Provider bileşeni
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // Context değeri
  const value = {
    theme,
    toggleTheme,
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook ile context kullanımı
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Alt bileşen
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
      title={`Tema Değiştir (Şu anki: ${theme})`}
      onPress={toggleTheme}
      color={theme === 'light' ? '#4361EE' : '#FF6B6B'}
    />
  );
}

// Başka bir alt bileşen
function ThemedText() {
  const { theme } = useTheme();
  
  return (
    <Text style={[
      styles.themedText,
      { color: theme === 'light' ? '#333' : '#fff' }
    ]}>
      Bu metin {theme} temaya göre renklenir
    </Text>
  );
}

// Ana bileşen
function ThemedBox() {
  const { theme } = useTheme();
  
  return (
    <View style={[
      styles.box,
      { backgroundColor: theme === 'light' ? '#f8f8f8' : '#333' }
    ]}>
      <ThemedText />
      <ThemedButton />
    </View>
  );
}

// Ana uygulama
export default function ContextExample() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Context API Örneği</Text>
        <ThemedBox />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    width: '100%',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  themedText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});`,
                description: 'Context API ile tema değiştirme örneği',
                language: 'jsx',
              },
              {
                id: 'multiple-contexts',
                title: 'Birden Fazla Context Kullanımı',
                code: `import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';

// Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Auth Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = () => {
    // Gerçek uygulamada API çağrısı yapılır
    setUser({ id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com' });
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Bileşenler
function Header() {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  
  return (
    <View style={[
      styles.header,
      { backgroundColor: theme === 'light' ? '#f0f0f0' : '#333' }
    ]}>
      <Text style={[
        styles.headerText,
        { color: theme === 'light' ? '#333' : '#fff' }
      ]}>
        {user ? `Hoş geldin, ${user.name}` : 'Giriş Yapın'}
      </Text>
      
      {user && (
        <Button
          title="Çıkış Yap"
          onPress={logout}
          color="#FF6B6B"
        />
      )}
    </View>
  );
}

function Content() {
  const { theme } = useTheme();
  const { user, login } = useAuth();
  
  return (
    <View style={[
      styles.content,
      { backgroundColor: theme === 'light' ? '#fff' : '#222' }
    ]}>
      {user ? (
        <Text style={[
          styles.contentText,
          { color: theme === 'light' ? '#333' : '#fff' }
        ]}>
          Kullanıcı Bilgileri:
          {'\n'}
          ID: {user.id}
          {'\n'}
          Ad: {user.name}
          {'\n'}
          E-posta: {user.email}
        </Text>
      ) : (
        <Button
          title="Giriş Yap"
          onPress={login}
          color="#4361EE"
        />
      )}
    </View>
  );
}

function Footer() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <View style={[
      styles.footer,
      { backgroundColor: theme === 'light' ? '#f0f0f0' : '#333' }
    ]}>
      <Text style={[
        styles.footerText,
        { color: theme === 'light' ? '#333' : '#fff' }
      ]}>
        Tema: {theme}
      </Text>
      
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme === 'dark' ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
  );
}

// Ana uygulama
export default function MultipleContextsExample() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <View style={styles.container}>
          <Text style={styles.title}>Birden Fazla Context</Text>
          <Header />
          <Content />
          <Footer />
        </View>
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  footer: {
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});`,
                description: 'Birden fazla context kullanımı',
                language: 'jsx',
              },
            ],
            quiz: {
              id: 'quiz-context-api',
              questions: [
                {
                  id: 'q1',
                  text: 'Context API ne işe yarar?',
                  options: [
                    'Bileşenler arasında prop drilling olmadan veri paylaşımı sağlar',
                    'Bileşenlerin performansını artırır',
                    'Native API\'lere erişim sağlar',
                    'Bileşenlerin stilini yönetir'
                  ],
                  correctOptionIndex: 0,
                },
                {
                  id: 'q2',
                  text: 'Context oluşturmak için hangi fonksiyon kullanılır?',
                  options: [
                    'React.makeContext()',
                    'React.createContext()',
                    'React.useContext()',
                    'React.newContext()'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q3',
                  text: 'Context değerine erişmek için hangi hook kullanılır?',
                  options: [
                    'useContext',
                    'useState',
                    'useEffect',
                    'useReducer'
                  ],
                  correctOptionIndex: 0,
                },
                {
                  id: 'q4',
                  text: 'Context Provider ne işe yarar?',
                  options: [
                    'Context\'i oluşturur',
                    'Context değerini alt bileşenlere sağlar',
                    'Context değerini okur',
                    'Context\'i siler'
                  ],
                  correctOptionIndex: 1,
                },
                {
                  id: 'q5',
                  text: 'Birden fazla context kullanırken dikkat edilmesi gereken nedir?',
                  options: [
                    'Sadece bir context kullanılabilir',
                    'Context\'ler aynı isimde olmalıdır',
                    'Context Provider\'ları iç içe yerleştirilmelidir',
                    'Context\'ler aynı değeri paylaşmalıdır'
                  ],
                  correctOptionIndex: 2,
                },
              ],
            },
            completed: false,
            duration: '45 dakika',
          },
          {
            id: 'zustand',
            title: 'Zustand ile State Yönetimi',
            content: `# Zustand ile State Yönetimi

Zustand, React ve React Native uygulamalarında global state yönetimi için kullanılan minimal bir state yönetim kütüphanesidir.

## Zustand Nedir?

Zustand, Redux'a benzer ancak daha basit ve daha az boilerplate kod gerektiren bir state yönetim kütüphanesidir. Hook tabanlı bir API sunar ve kullanımı oldukça kolaydır.

## Zustand'ın Avantajları

- Minimal API
- Boilerplate kod gerektirmez
- Hook tabanlı
- TypeScript desteği
- Redux DevTools entegrasyonu
- Middleware desteği (persist, immer vb.)

## Zustand Store Oluşturma

Zustand ile store oluşturmak için create fonksiyonu kullanılır:

\`\`\`jsx
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
\`\`\`

## Zustand Store Kullanımı

Store'a erişmek için oluşturduğunuz hook'u kullanırsınız:

\`\`\`jsx
function Counter() {
  const { count, increment, decrement } = useStore();
  
  return (
    // JSX
  );
}
\`\`\``,
            codeExamples: [
              {
                id: 'zustand-example',
                title: 'Zustand Kullanımı',
                code: `import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { create } from 'zustand';

// Zustand store oluşturma
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Counter bileşeni
function Counter() {
  // Store'dan state ve action'ları çekme
  const { count, increment, decrement, reset } = useCounterStore();
  
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>Sayaç: {count}</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Artır"
          onPress={increment}
          color="#4361EE"
        />
        
        <Button
          title="Azalt"
          onPress={decrement}
          color="#FF6B6B"
        />
        
        <Button
          title="Sıfırla"
          onPress={reset}
          color="#8E8E93"
        />
      </View>
    </View>
  );
}

// Display bileşeni (farklı bir bileşen)
function CounterDisplay() {
  // Sadece count'u çekme (seçici fonksiyon ile)
  const count = useCounterStore((state) => state.count);
  
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayTitle}>Farklı Bileşende Gösterim</Text>
      <Text style={styles.displayText}>Sayaç Değeri: {count}</Text>
    </View>
  );
}

// Ana uygulama
export default function ZustandExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zustand Örneği</Text>
      <Counter />
      <CounterDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  counterContainer: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 20,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  displayContainer: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  displayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  displayText: {
    fontSize: 16,
    textAlign: 'center',
  },
});`,
                description: 'Zustand ile basit bir sayaç uygulaması',
                language: 'jsx',
              },
              {
                id: 'zustand-advanced',
                title: 'Gelişmiş Zustand Kullanımı',
                code: `import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

// Todo tipi
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// Todo store tipi
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  clearCompleted: () => void;
}

// Persist middleware ile Zustand store oluşturma
const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      
      addTodo: (text) => set((state) => ({
        todos: [
          ...state.todos,
          {
            id: Date.now().toString(),
            text,
            completed: false,
          },
        ],
      })),
      
      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      })),
      
      removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
      
      clearCompleted: () => set((state) => ({
        todos: state.todos.filter((todo) => !todo.completed),
      })),
    }),
    {
      name: 'todo-storage', // AsyncStorage'da kullanılacak anahtar
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

// Todo Item bileşeni
function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, removeTodo } = useTodoStore();
  
  return (
    <View style={styles.todoItem}>
      <Text
        style={[
          styles.todoText,
          todo.completed && styles.completedTodoText,
        ]}
        onPress={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </Text>
      
      <Button
        title="Sil"
        onPress={() => removeTodo(todo.id)}
        color="#FF6B6B"
      />
    </View>
  );
}

// Todo List bileşeni
function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem todo={item} />}
      keyExtractor={(item) => item.id}
      style={styles.todoList}
    />
  );
}

// Todo Input bileşeni
function TodoInput() {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);
  
  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Yeni görev ekle..."
      />
      
      <Button
        title="Ekle"
        onPress={handleAddTodo}
        color="#4361EE"
      />
    </View>
  );
}

// Todo Stats bileşeni
function TodoStats() {
  const todos = useTodoStore((state) => state.todos);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;
  
  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statsText}>
        Toplam: {totalTodos} | Tamamlanan: {completedTodos} | Aktif: {activeTodos}
      </Text>
      
      <Button
        title="Tamamlananları Temizle"
        onPress={clearCompleted}
        disabled={completedTodos === 0}
        color="#8E8E93"
      />
    </View>
  );
}

// Ana uygulama
export default function ZustandAdvancedExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Uygulaması</Text>
      <TodoInput />
      <TodoStats />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },
  todoList: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
    flex: 1,
  },
  completedTodoText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  statsContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  statsText: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});`,
                description: 'Zustand ile persist middleware kullanarak Todo uygulaması',
                language: 'tsx',
              },
            ],
            quiz: {
              id: 'quiz-zustand',
              questions: [
                {
                  id: 'q1',
                  text: 'Zustand nedir?',
                  options: [
                    'Bir UI kütüphanesi',
                    'Bir state yönetim kütüphanesi',
                    'Bir navigasyon kütüphanesi',
                    'Bir animasyon