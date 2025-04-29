import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { courses } from '@/data/courses';
import LessonCard from '@/components/LessonCard';

export default function TopicDetailScreen() {
  const { courseId, topicId } = useLocalSearchParams<{ courseId: string; topicId: string }>();
  const theme = useAppTheme();
  
  const course = courses.find(c => c.id === courseId);
  const topic = course?.topics.find(t => t.id === topicId);
  
  if (!course || !topic) {
    return (
      <View style={[styles.container, { backgroundColor: colors[theme].background }]}>
        <Text style={[styles.errorText, { color: colors[theme].text }]}>
          Konu bulunamadı
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors[theme].background }]}>
      <FlatList
        data={topic.lessons}
        renderItem={({ item }) => (
          <LessonCard 
            lesson={item} 
            courseId={courseId} 
            topicId={topicId} 
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={[styles.topicTitle, { color: colors[theme].text }]}>
              {topic.title}
            </Text>
            
            <Text style={[styles.topicDescription, { color: colors[theme].muted }]}>
              {topic.description}
            </Text>
            
            <Text style={[styles.lessonsTitle, { color: colors[theme].text }]}>
              Dersler
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  topicTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  topicDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  lessonsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },
});